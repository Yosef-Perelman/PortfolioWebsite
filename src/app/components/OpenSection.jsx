import React from 'react'
import Image from 'next/image'

const OpenSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold'>
                        Yosef Perelman
                    </h1>
                    <h3 className='mb-4 text-2xl lg:text-3xl sm:text-1xl font-extrabold'>Software Developer</h3>
                    <p className='text-base sm:text-lg lg:text-xl mb-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-black border border-black'>Download CV</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] relative'>
                        <Image
                            src={'/assets/images/profile_pic.png'}
                            alt='face image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={250}
                            height={250}
                         />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OpenSection