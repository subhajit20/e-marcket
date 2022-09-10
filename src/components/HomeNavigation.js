import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion';

function HomeNavigation() {
    return (
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            duration: 0.4
                }}>  
                <Navbar />
                <Outlet />
        </motion.div>
    )
}
export default HomeNavigation