import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

let colorpalate = ['bg-[#e2effc]', 'bg-[#bff3d2]', 'bg-[#edddf1]', 'bg-[#adb9f4]', 'bg-[#b8ff52]', 'bg-[#d4f7e3]', 'bg-[#f3d2ff]', 'bg-[#e8e6e5]']

function Individualproductcard() {
    const [color, setColor] = useState();
    useEffect(() => {
        function changeCOLOR() {
            /*********** Random colour generator **********/
            const rand = Math.ceil(Math.random() * 8);
            console.log(colorpalate[rand])
            setColor(colorpalate[rand])
        }
        changeCOLOR();
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4
            }}
            className={` relative top-[70px] w-[230px] h-[365px] shadow-md shadow-[#6f2068] cursor-pointer rounded-sm sm:mx-10 sm:my-3 mx-5 bg-[#fef5fe] mb-8`}>
            <div className={`flex justify-center h-[175px] ${color} rounded-tl-sm rounded-tr-sm p-2 sm:p-4`}>

                <div className='w-28 relative left-3 bottom-4'>
                    <img src='./images/camera.png' alt='__img__' className='relative top-10 ' />
                </div>
                <span className='relative left-10 mr-2'><i class="text-[#552281] text-xl fa-solid fa-cart-plus"></i></span>
            </div>

            <div className='px-2 sm:px-5 py-2 flex justify-between text-lg sm:text-xl'>
                <span className='font-medium'>prodcuct Name</span>
                <span className='text-[#6f2068] font-bold'>39$</span>
            </div>
            <div className='px-2 sm:px-5 pb-2 flex justify-between'>
                <span className='font-light'>Men's running shirt</span>
            </div>
            <div className='px-2 sm:px-5 pb-3 flex justify-between'>
                <span className='font-medium'>Sizes</span>
                <span className='font-light'>XS S M L XL XXL </span>
            </div>
            <div className='px-2 sm:px-5 flex justify-between'>
                <span className='font-medium'>COLORS</span>
                <span><i class="fa-solid fa-circle text-red-600"></i><i class="fa-solid fa-circle text-blue-700 mx-3"></i><i class="fa-solid fa-circle text-yellow-500"></i></span>
            </div>
            <div className='px-2 sm:px-5 flex  justify-center bg-[#198bde] text-white relative top-8'>
                <Link to='#'><span className='font-normal'>Check This Product</span></Link>
            </div>
        </motion.div>
    )
}

export default Individualproductcard