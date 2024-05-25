'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative flex items-center justify-center h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <Image
                                alt="IMG"
                                src={'/about-img.png'}
                                className='   object-cover'
                                width={300}
                                height={100}
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-2xl text-[#4f46e5]">About Us</h2>
                            <h3 className="text-3xl font-bold sm:text-4xl mt-3">Grow your audience</h3>
                            <p className="mt-4 text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                                quidem quam repellat.
                            </p>
                            <Link
                                href="#"
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
