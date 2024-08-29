'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../lib/hooks'
import { fetchProducts } from '../../lib/features/ProductSlice'
import Loader from '../../components/Loader'
import CartItems from './_components/CartItems'

// import icons ui 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function shop() {
    const dispatch = useAppDispatch()
    const data = useAppSelector((state) => state)

    const products = data?.product?.data?.data
    const Loading = data.product.isLoading
    // console.log(data.product.isLoading);

    React.useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const AllProducts = products?.map((item) => {
        return <CartItems key={item.id} item={item} />
    })

    return (
        <>
            <div className='flex flex-col items-cente justify-center pt-36 gap-10 w-[95%] sm:w-[80%] lg:w-[98%] xl:w-[80%] m-auto'>
                <h1 className='text-4xl text-start text-gray-800'>Shop <ArrowForwardIcon sx={{fontSize:'40px'}}/></h1>
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2   gap-10">
                    {Loading ? <Loader /> : AllProducts}
                </div>
            </div>
        </>
    )
}

export default shop 