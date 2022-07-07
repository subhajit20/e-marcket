import React from 'react'

function Carttemplate({images,price,onDelete}) {
  return (
    
        <div className="w-[400px] sm:w-[600px] bg-[#EEEEEE]  py-3 px-3 flex justify-around m-auto mb-5 transition-all duration-500 shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:translate-y-2 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  cursor-pointer">
            <div>
                <img src={images} alt="pic" className="w-24"/>
            </div>
            <div className="flex justify-center flex-col">
                <span className='justify-self-center text-[#295BA7] text-2xl font-semibold'>{price}$</span>
            </div><i className="fa-solid fa-circle-trash"></i>
            <div className="flex justify-center flex-col">
                <button onClick={onDelete} className="py-2 px-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 text-black"><i className="fa-solid fa-trash-can text-2xl"></i></button>
            </div>
        </div>
  )
}

export default Carttemplate