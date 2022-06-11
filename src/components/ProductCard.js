import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Slide } from 'react-awesome-reveal'

function ProductCard() {
    const [love, setLove] = useState(true)

    function handleClick() {
        if (love === true) {
            setLove(false)
        } else if (love === false) {
            setLove(true)
        }
    }
    return (
        <Slide direction='left'>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.3
                }}
                className='bg-[#F9F7F3] p-5 shadow-md shadow-slate-500/100
        w-[250px] h-[350px] sm:w-[300px] sm:h-[350px] rounded-3xl hover:bg-[#FF6700] hover:scale-110 transition-all duration-300 hover:text-white cursor-pointer m-4'>
                <div className='flex justify-between '>
                    <span>
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                    </span>
                    <button type='button' className='cursor-pointer transition-all active:duration-300' onDoubleClick={handleClick}>{love ? <i className="fa-regular fa-heart text-3xl"></i> : <i className="fa-solid fa-heart text-3xl text-red-600"></i>}</button>
                </div>
                <div className='flex justify-center mt-4 rounded-lg'>
                    <div className='w-[160px] sm:w-[170px] hover:scale-110 transition-all duration-300'>
                        <img src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' alt='product_img' className='rounded-3xl' />
                    </div>
                </div>
                <div className='mt-5 flex justify-between'>
                    <span className='font-bold font-sans text-base sm:text-xl'>Men's Clothing</span>
                    <span className='bg-slate-800 text-gray-50 font-medium px-5  sm:px-6 rounded-3xl'><Link to='#'>Go</Link></span>
                </div>
            </motion.div>
        </Slide >
    )
}

export default ProductCard