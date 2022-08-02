import React,{useContext} from 'react'
import {Storecontext} from "../../context/UserContextProvider";
import {Link} from 'react-router-dom';
import {JackInTheBox,Zoom,Slide,Bounce} from 'react-awesome-reveal';

function Carttemplate({id,title,images,price,onDelete}) {
    const { state } = useContext(Storecontext);
 
  return (
      <JackInTheBox triggerOnce={true}>

                <div className={`w-[350px] ${state.darkmode.cartTemplateColor} md:w-[750px] sm:w-[600px]   py-3 px-3 flex justify-around m-auto mb-5 transition-all duration-500 shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:translate-y-2 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  cursor-pointer rounded-2xl`}>
        <Link to={`/products/${id}`} className='flex-col'>
            <Zoom duration={3000} triggerOnce={true}>

                <div className="flex justify-center">
                    <img src={images} alt="pic" className="w-24 rounded-md"/>
                </div>
            </Zoom>
            <Slide  triggerOnce={true}>
                <div className="flex justify-center flex-col">
                    <span className={`justify-self-center text-${state.darkmode.text_color} font-semibold bg-amber-500 max-w-md`}>Title :: {title}</span></div></Slide>
                    <Slide direction='right' triggerOnce={true}>
                <div className="flex justify-center flex-col">
                    
                    <span className={`justify-self-center text-${state.darkmode.text_color} text-2xl font-semibold `}>Amount :: {price}$</span>
                </div>
                </Slide>
                <i className="fa-solid fa-circle-trash"></i>
        </Link>
                <div className="flex justify-center flex-col">
                <Bounce triggerOnce={true}>
                    <button onClick={onDelete} className="py-2 px-3 rounded-full hover:bg-white hover:text-red-500 transition-all duration-300 text-black"><i className="fa-solid fa-trash-can text-2xl"></i></button>
                </Bounce >
                </div>
                </div>
      </JackInTheBox>
  )
}

export default Carttemplate