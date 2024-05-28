'use client'
import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Image from 'next/image';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { fetchProducts } from '../lib/features/ProductSlice';
import Cart from './cart';
import Loader from './Loader';



const Products = () => {
    const [Alignment, setAlignment] = React.useState('All');
    const Dispatch = useAppDispatch()


    const allProducts = useAppSelector((state) => state.product.data)
    const Loading = useAppSelector((state) => state.product.isLoading)



    React.useEffect(() => {
        Dispatch(fetchProducts())
    }, [])



    const GetAllProducts = allProducts.data && allProducts.data.filter((item) => {
        return item.attributes.category === Alignment
    })

    let ValueProducts ;

    if (Alignment === 'All') {
        ValueProducts = allProducts.data && allProducts.data;
    } else {
        ValueProducts = GetAllProducts
    }

    const AllItems = Alignment === 'All' ?
        (allProducts.data && allProducts.data.slice(0 , 6).map((item) => {
            return <Cart key={item.id} item={item} />
        })) :GetAllProducts.slice(0 , 6).map((item) => {
            return <Cart key={item.id} item={item} />
        })

    // handel Change
    const handleChange = (newAlignment) => {
        setAlignment(newAlignment.target.value);
    };

    return (
        <>
            <section className='py-52'>
                <h2 className=' text-center text-4xl text[#2563eb]'>Our Menu</h2>
                <ToggleButtonGroup
                    className=''
                    color="primary"
                    value={Alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={{ margin: '50px auto', overflow: 'auto', padding: '0', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="All">All</ToggleButton>
                    <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="pizza">pizza</ToggleButton>
                    <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="burger">burger</ToggleButton>
                    <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="pasta">pasta</ToggleButton>
                    <ToggleButton sx={{ border: 'none', width: '115px', margin: '0', textAlign: 'center' }} value="potatoes">potatoes</ToggleButton>
                </ToggleButtonGroup>
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 w-[95%] sm:w-[80%] lg:w-[98%] xl:w-[80%] m-auto gap-10">
                    {Loading ? <Loader/> : AllItems }
                </div>
            </section>
        </>
    )
}

export default Products;
