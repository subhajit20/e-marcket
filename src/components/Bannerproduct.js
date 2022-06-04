import React from 'react';

function Bannerproduct() {
    return (
        <div className='flex justify-between sm:justify-evenly relative top-20 px-4 sm:px-10 bg-[#F3E9DC] sm:bg-red-300 md:bg-[#DE1A1A] lg:bg-teal-200 h-auto'>
            <div >
                <ul className='absolute sm:relative top-36  lg:top-36 flex-col  sm:justify-between'>
                    <li className='font-medium  mb-4 sm:mb-8 md:text-white sm:text-slate-700  lg:text-slate-700 font-sans text-base sm:text-xl  md:text-3xl lg:text-5xl'>Women Collections 2022</li>
                    <li className='font-normal mb-4 text-3xl sm:mb-8 md:text-white sm:text-slate-700  lg:text-slate-700  font-serif sm:text-5xl md:text-6xl lg:text-8xl'>New Season</li>
                    <li><a href='/yu' className='rounded-[1.3rem] cursor-pointer hover:bg-zinc-900 hover:text-slate-50 py-2 px-2 text-sm sm:px-4 sm:py-2 md:bg-[#FFD9DA] md:text-[#1B2021] md:px-4 md:py-3  lg:px-4 lg:py-3 bg-slate-700 font-medium font-sans text-white lg:text-xl p-3 lg:bg-[#1B2021] lg:text-[#FFD9DA]'>Shop Now</a></li>
                </ul>
            </div>
            <div>
                <div className='lg:w-80 md:w-80 sm:w-72 w-56'>
                    <img src='./images/model1.png' alt='product_img' />
                </div>
            </div>
        </div>
    )
}

export default Bannerproduct