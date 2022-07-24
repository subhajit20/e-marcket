import React,{useContext} from 'react'
import {Storecontext} from "../../context/UserContextProvider";

function Carttemplate({title,images,price,onDelete}) {
    const { state } = useContext(Storecontext);
 
  return (
        <div className={`w-[350px] ${state.darkmode.cartTemplateColor} sm:w-[600px]  py-6 px-3 flex justify-around m-auto mb-5 transition-all duration-500 shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:translate-y-2 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  cursor-pointer rounded-2xl`}>
            <div>
                <img src={images} alt="pic" className="w-24"/>
            </div>
            <div className="flex justify-center flex-col">
                <span className={`justify-self-center text-${state.darkmode.text_color} font-semibold `}>{title}</span></div>
            <div className="flex justify-center flex-col">
                <span className={`justify-self-center text-${state.darkmode.text_color} text-2xl font-semibold `}>{price}$</span>
            </div><i className="fa-solid fa-circle-trash"></i>
            <div className="flex justify-center flex-col">
                <button onClick={onDelete} className="py-2 px-3 rounded-full hover:bg-white hover:text-red-500 transition-all duration-300 text-black"><i className="fa-solid fa-trash-can text-2xl"></i></button>
            </div>
        </div>
  )
}

export default Carttemplate