import React, { useReducer } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion';
import Storecontext from '../context/Storecontext';

let initialState = {
    darkmode: "",
    lightmode: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "DARK":
            return { darkmode: action.mode }
        case 'LIGHT':
            return { darkmode: action.mode }
        default:
            return state
    }
}

function HomeNavigation() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Storecontext.Provider value={{ state: state, myFunc: dispatch }}>
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