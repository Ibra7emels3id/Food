'use client'
import { showCheckTost } from '@/lib/features/AlertTost';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useEffect } from 'react';
import CheckCard from './CheckCard';
import Link from 'next/link';

const MenuCartCheck = () => {
    const dispatch = useAppDispatch()
    const Show = useAppSelector((state)=> state.Show.show)
    const Carts = useAppSelector((state) => state.cart.cart)


    // Handle Cart Check 

    const CartsCheck = Carts.map((item)=>{
        return <CheckCard kay={item.id} item={item} />
    })


    // HandleCheckCards
    const HandleCheckCards = () =>{

    }


    // Handle Cancel Alert Cart
    const handleCancelAlert = () => {
        dispatch(showCheckTost())
    }

    return (
        <>
            <div className={`ease-in duration-200 MenuCartCheck w-[500px] h-[100vh] bg-opacity-60 backdrop-blur-sm p-6 fixed ${Show === true ? 'right-0 opacity-100' : '-right-[1000px] opacity-0' }  top-[0px]`} >
                <div className=" relative">
                    <div className="carts ">
                        {CartsCheck}
                    </div>
                    <div className="bottons m-auto bg-white fixed bottom-0 p-5 flex justify-around justify-center items-center w-full">
                        <button onClick={()=>{
                            handleCancelAlert();
                        }} className='bg-[#2563eb] h-12 w-32 text-white font-medium hover:bg-[#385492] flex items-center justify-center'>Cancel</button>
                        <Link onClick={()=>{
                            dispatch(showCheckTost())
                        }} href='/CheckOut' className='bg-[#2563eb] h-12 w-32 text-white font-medium hover:bg-[#385492] flex items-center justify-center'>Check Cart</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuCartCheck;
