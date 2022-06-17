import React, { useState, useEffect } from 'react';

function Individualproductcard() {
    const [color, setColor] = useState();
    useEffect(() => {
        function changeCOLOR() {
            setColor(`bg-[#F9${Math.floor(Math.random(10) * 700)}E]`)
        }
        changeCOLOR();
    }, []);
    console.log(color)
    return (
        <div className={`flex justify-between relative top-[70px] w-[500px] h-[225px] sm:w-[600px] sm:h-[225px] shadow-md shadow-gray-900 cursor-pointer rounded-lg sm:mx-10 sm:my-3 mx-5 ${color}`}>
            <div className='w-[200px] sm:w-[250px] sm:h-[225px] bg-slate-500 rounded-md'></div>
            <span className='sm:text-2xl my-2 mx-4'><i className="fa-solid fa-cart-arrow-down"></i></span>
        </div>
    )
}

export default Individualproductcard