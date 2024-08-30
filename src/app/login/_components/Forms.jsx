'use client'
import React, { useEffect, useState } from 'react';
// import ButtonsIcons from './ButtonsIcons'
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { toast } from 'react-toastify';



const Forms = () => {
    const [DataUser, setDataser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const HandleSubmit = async (e) => {
        e.preventDefault()
        // alert('submit')

        try {
            const res = await signIn("credentials", {
                email: DataUser.email,
                password: DataUser.password,
                redirect: false,
            });
            if (res.error) {
                console.log('Error during signIn:', res.error);
                toast.error('Please check your email or password')
            } else {
                console.log('SignIn successful:', res);
                toast.success("Login success")
            }
        }

        catch (error) {
            console.log('Error message', error);
        }
    }




    return (
        <>
            <div className="icons grid  grid-cols-1 w-full gap-4">
                {/* <ButtonsIcons /> */}
            </div>
            <form onSubmit={HandleSubmit} className="mt-8 grid grid-cols-3 gap-6">
                <div className="col-span-12 sm:col-span-12">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>
                    <input
                        onChange={(e) => {
                            setDataser({ ...DataUser, email: e.target.value })
                        }}
                        value={DataUser.email}
                        type="email"
                        id="Email"
                        name="email"
                        className="mt-1 h-12 outline-none border px-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>
                <div className="col-span-12 sm:col-span-12">
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>
                    <input
                        onChange={(e) => {
                            setDataser({ ...DataUser, password: e.target.value })
                        }}
                        value={DataUser.password}
                        type="password"
                        id="Password"
                        name="password"
                        className="mt-1 h-12 outline-none border px-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className=" col-span-12 flex flex-col items-center justify-center gap-4 ">
                    <button
                        className="inline-block w-full shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Create an account
                    </button>
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        Already have an account?
                        <Link href="/login" className="text-gray-700 underline"> Log in</Link>.
                    </p>
                </div>
            </form>
        </>
    );
}

export default Forms;