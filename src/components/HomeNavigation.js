import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion';
import Storecontext from '../context/Storecontext';

function HomeNavigation() {
    const obj = {
        name: "Subhajit"
    }
    return (
        <Storecontext.Provider value={obj}>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.4
                }}>
                <Navbar />
                <Outlet />
            </motion.div>
        </Storecontext.Provider>
    )
}

export default HomeNavigation