'use client'
import { showCheckTost } from '../lib/features/AlertTost';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import React, { useEffect } from 'react';
import CheckCard from './CheckCard';
import Link from 'next/link';


// import matryal ui
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';

const MenuCartCheck = () => {
    const dispatch = useAppDispatch()
    const Show = useAppSelector((state) => state.Show.show)
    const Carts = useAppSelector((state) => state.cart.cart)


    // Handle Cart Check 

    const CartsCheck = Carts?.map((item) => {
        return <CheckCard kay={item.id} item={item} />
    })


    // HandleCheckCards
    const HandleCheckCards = () => {

    }


    // Handle Cancel Alert Cart
    const handleCancelAlert = () => {
        dispatch(showCheckTost())
    }

    return (
        <>
            <div className={`ease-in duration-200 MenuCartCheck w-[500px] h-[100vh] overflow-hidden bg-opacity-60 backdrop-blur-sm p-6 fixed ${Show === true ? 'right-0 opacity-100' : '-right-[1000px] opacity-0'}  top-[0px]`} >
                <div className=" relative">
                    <div className="icons">
                        <CancelIcon onClick={()=>{
                            dispatch(showCheckTost())
                        }} sx={{ fontSize:'50px' , color:'#eee' , cursor:'pointer' , marginBottom:'20px' }} />
                    </div>
                    {Carts?.length === 0 ? <div className=' flex flex-col items-center justify-center'>
                        <h3 className=' text-[50px] text-white font-medium mt-24'>shoping Now</h3>
                        <Link onClick={()=>{
                            dispatch(showCheckTost())
                        }}  className='text-white bg-[#2563eb] px-10 py-4 mt-2' href={'/products'}>Shop <ArrowForwardIcon /></Link>
                    </div> : <>
                        <div className="carts">
                            {CartsCheck}
                        </div>
                        <div className="bottons m-auto bg-white fixed bottom-0 p-5 flex justify-around justify-center items-center w-full">
                            <button onClick={() => {
                                handleCancelAlert();
                            }} className='bg-[#2563eb] h-12 w-32 text-white font-medium hover:bg-[#385492] flex items-center justify-center'>Cancel</button>
                            <Link onClick={() => {
                                dispatch(showCheckTost())
                            }} href='/cart' className='bg-[#2563eb] h-12 w-32 text-white font-medium hover:bg-[#385492] flex items-center justify-center'>Check Cart</Link>
                        </div>
                    </>}
                </div>
            </div>
        </>
    );
}

export default MenuCartCheck;
