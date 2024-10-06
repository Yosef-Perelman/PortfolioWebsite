"use client";
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { motion } from 'framer-motion';

const OpenSection = () => {
    return (
        <section className='lg:py-16'>
            <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} className='grid grid-cols-1 sm:grid-cols-12'>
                <div
                    className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Yosef Perelman
                        </span>
                    </h1>
                    <h3 className='mb-4 text-2xl lg:text-3xl sm:text-1xl font-extrabold'>
                        Software Developer
                    </h3>
                    <p className='text-base sm:text-lg mb-6 lg:text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-black border border-black'>
                            Download CV
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative'>
                        <Image
                            src={'/assets/images/openpic.jpg'}
                            alt='face image'
                            className='rounded-full object-cover w-full h-full'
                            width={250}
                            height={250}
                        />
                    </div>
                </div> 
            </motion.div>
        </section>
    )
}

export default OpenSection