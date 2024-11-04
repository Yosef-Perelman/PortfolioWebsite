"use client";
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion, px } from 'framer-motion';

const OpenSection = () => {
    return (
        <section id="home" className="mt-16">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                            Yosef Perelman.
                        </span>
                    </h1>
                    <h3 className='mb-4 text-2xl lg:text-3xl sm:text-1xl font-extrabold text-accent'>
                        Software Developer
                    </h3>
                    <p className='text-base sm:text-lg mb-6 lg:text-xl text-gray-600'>
                    Fullstack Developer. Passionate about Servers, Cloud Computing, SAAS Application Development and more.               </p>
                    <div>
    <a 
        href='/assets/Yosef Perelman - Software Developer.pdf '
        target="_blank" 
        rel="noopener noreferrer"
        className='inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 font-bold bg-accent text-primary hover:bg-secondary transition-colors duration-300'
    >
        Download CV
    </a>
</div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative rounded-full bg-accent flex items-center justify-center">
                        <TypeAnimation
                            sequence={[
                                'Coding...',
                                1000,
                                'Eating...',
                                1000,
                                'Sleeping...',
                                1000,
                            ]}
                            cursor={true}
                            repeat={Infinity}
                            speed={50}
                            className="text-4xl lg:text-6xl sm:text-2xl font-semibold text-secondary" // Optional: add size and styling to the text
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default OpenSection

{/* <Image
                            src="/assets/images/profile_image.jpg"
                            alt="face image"
                            className="rounded-full object-contain w-full h-full"
                            width={400}
                            height={400}
                            quality={100}
                        /> */}