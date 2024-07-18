'use client'
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import CartCheckOut from '../../components/cartCheckOut'
import Link from 'next/link';
import { fetchProducts } from '../../lib/features/ProductSlice';
import CartSlice, { CleareCart, gettotal } from '../../lib/features/CartSlice';
import { useRouter } from 'next/navigation';


const Page = () => {
    const dispatch = useAppDispatch()
    const dataCart = useAppSelector((state) => state.cart)


    const router = useRouter()


    const Cart = dataCart?.cart?.map((it) => {
        return <CartCheckOut key={it.id} item={it} />
    })



    return (
        <>
            <div className="checkOut pt-16 px-5">
                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <header className="text-center">
                                {/* comment */}
                                {!Cart ? <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Please login Now</h1> :
                                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>}
                            </header>
                            {!Cart ? <div className='flex items-center justify-center'>
                                <button className='mt-10 bg-[#2563eb] px-16 py-3 text-white font-medium' >
                                    <Link href="/login">login</Link>
                                </button>
                            </div> : <div className="mt-8">
                                <ul className="space-y-4">
                                    {Cart}
                                </ul>
                                {dataCart.cart.length === 0 ? <div className='flex items-center justify-center'>
                                    <div className='mt-10 bg-[#2563eb] px-16 py-3 text-white font-medium' >
                                        <Link href="/products">shoping Now</Link>
                                    </div>
                                </div> : <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                    <div className="w-screen max-w-lg space-y-4">
                                        <dl className="space-y-0.5 text-sm text-gray-700">
                                            <div className="flex justify-between">
                                                <dt>Subtotal</dt>
                                                <dd>${Math.round(dataCart?.CartTotal)}</dd>
                                            </div>

                                            <div className="flex justify-between">
                                                <dt>D C F</dt>
                                                <dd>$10</dd>
                                            </div>

                                            <div className="flex justify-between">
                                                <dt>Discount</dt>
                                                <dd>-$20</dd>
                                            </div>

                                            <div className="flex justify-between !text-base font-medium">
                                                <dt>Total</dt>
                                                <dd>${Math.round(dataCart?.CartTotal) + 10 - 20}</dd>
                                            </div>
                                        </dl>

                                        <div className="flex justify-end">
                                            <span
                                                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="-ms-1 me-1.5 h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                                    />
                                                </svg>
                                                <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
                                            </span>
                                        </div>
                                        <div className="flex justify-end">
                                            <button onClick={()=>{
                                                router.push(`/checkout?amount=${Math.round(dataCart?.CartTotal) + 10 - 20}`)
                                            }} className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>}
                            </div>}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Page;
