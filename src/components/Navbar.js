import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { AttentionSeeker } from 'react-awesome-reveal'

function Navbar() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.4
                }}
                className="flex justify-between justify-items-center sm:justify-around p-3 sm:p-0 fixed w-full text-[#153131]  sm:text-[#160227] sm:bg-[#FFAD05] z-30 top-0 sm:shadow-2xl" >
                <div className="sm:mr-10 sm:p-3">
                    <ul className='flex justify-between'>
                        <AttentionSeeker effect={'bounce'}>
                            <li className="font-semibold px-2 py-2 sm:px-5 text-xl font-mono  transition-all duration-500 rounded-3xl sm:text-2xl "><Link to="/" >Buy Karo</Link></li>
                        </AttentionSeeker>
                    </ul>
                </div>
                <div className="absolute top-[92vh] w-full bg-blue-600 text-white left-0 p-3 sm:p-5 sm:top-0 sm:w-64 sm:bg-transparent sm:relative sm:text-slate-900  ">
                    <ul className="flex justify-around justify-items-center">
                        <li className="font-medium transition-all duration-500  text-base sm:text-xl sm:px-3 sm:py-1 sm:mr-3 sm:text-[#000000] text-[#ffffff]"><Link to="/" ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg></Link></li>
                        <li className="cursor-pointer sm:p-1  sm:mr-2 text-[#ffffff] sm:text-[#000000]"><Link to="/m"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg><i className="fa-solid fa-circle sm:absolute sm:bottom-8 sm:left-[100px] sm:text-2xl relative bottom-7 left-4 "><p className="sm:absolute sm:bottom-[6px] sm:left-2 bottom-[18px] left-1 sm:text-[#ffffff] text-[#000000] text-sm relative ">1</p></i></Link></li>
                        <li className="sm:py-1 font-medium transition-all rounded-3xl  duration-500  sm:text-xl sm:px-3 text-[#F7EDE2] sm:text-[#000000]"><Link to="/d" ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></Link></li>
                        <li className="sm:py-1 font-medium transition-all rounded-3xl duration-500 sm:text-xl sm:px-3 sm:text-[#000000]"><Link to="/d" ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg></Link></li>
                    </ul>
                </div>
            </motion.div>
        </>
    )
}

export default Navbar


