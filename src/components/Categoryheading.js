import React,{useContext} from 'react'
import {Storecontext} from '../context/UserContextProvider'

function Categoryheading() {
    const { state } = useContext(Storecontext);

    return (
        <div className={`mt-10 text-center sm:text-left sm:ml-28 text-xl sm:text-5xl font-serif text-${state.darkmode.text_color}`}><h4>Newly Launched Categories</h4></div>
    )
}

export default React.memo(Categoryheading)