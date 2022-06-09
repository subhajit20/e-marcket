import React from 'react';
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom'

function Bannerproduct({ profImg }) {
    return (
        <div className='flex justify-between sm:justify-evenly relative top-20 px-4 sm:px-10 bg-[#F3E9DC] sm:bg-red-300 md:bg-[#DE1A1A] lg:bg-teal-200 h-auto'>
            <div >
                <ul className='absolute sm:relative top-20  lg:top-20 flex-col  sm:justify-between'>
                    <Slide direction='down' duration={2000} triggerOnce={true}>
                        <li className='font-medium  mb-4 sm:mb-8 md:text-white sm:text-slate-700  lg:text-slate-700 font-sans text-base sm:text-xl  md:text-3xl lg:text-4xl'>Women Collections 2022</li>
                    </Slide>
                    <Slide direction='left' duration={2000} triggerOnce={true}>
                        <li className='font-normal mb-4 text-3xl sm:mb-8 md:text-white sm:text-slate-700  lg:text-slate-700  font-serif sm:text-5xl md:text-6xl lg:text-8xl'>New Season</li>
                    </Slide>
                    <Slide direction='up' duration={4000} triggerOnce={true}>
                        <li><Link to='/yu' className='rounded-[1.3rem] cursor-pointer hover:bg-zinc-900 hover:text-slate-50 py-2 px-2 text-sm sm:px-4 sm:py-2 md:bg-[#FFD9DA] md:text-[#1B2021] md:px-4 md:py-3  lg:px-4 lg:py-3 bg-slate-700 font-medium font-sans text-white lg:text-xl p-3 lg:bg-[#1B2021] lg:text-[#FFD9DA]'>Shop Now</Link></li>
                    </Slide>
                </ul>
            </div>
            <div>
                <Slide direction='right'>
                    <div className='lg:w-80 md:w-80 sm:w-72 w-56'>
                        <img src={`./images/${profImg}`} alt='product_img' />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Bannerproduct