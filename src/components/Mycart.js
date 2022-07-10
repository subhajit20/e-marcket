import React,{useContext} from 'react';
import useCarthook from '../hooks/useCarthook';
import {MyCartcontext} from '../context/Cartcontext';
import Carttemplate from './CartLayout/Carttemplate';
import { Storecontext } from '../context/UserContextProvider';

function Mycart() {
    const { state } = useContext(Storecontext);
    const {mycart} = useContext(MyCartcontext)
    const [msg,flag,decreasePrice,prod,amount] = useCarthook();
    const handleDelete = (elementDel,productPrice) =>{
        mycart({type:"DELETE",element:elementDel});
        decreasePrice(productPrice)
    }
    return (
        <div className={`flex flex-wrap justify-around h-[100vh] ${state.darkmode.individuaTemplateBackground}`}>
            <div className="relative">
                    <h1 className='relative text-center text-3xl'>{flag === true ? msg : msg}</h1>
                <div className="flex-col relative top-32">
                    {
                        prod.map((x,y)=>{
                            return (<Carttemplate images={x.image} price={x.price} key={y} onDelete={()=> handleDelete(y,x.price)}/>)
                        })
                    }
            </div>
            </div>
            <div className="fixed top-[650px]">
                <div className={` p-5 w-[400px] sm:w-[600px] sm:flex justify-around text-white`}>
                    <span className={`font-semibold text-${state.darkmode.text_color} text-2xl`}>Total Price </span>
                    <span className='text-xl text-center bg-[#FF8600] top-28  px-4 py-2 cursor-pointer'>{amount === 0 ? 0 
                    : amount}$ Buy Now</span>
                </div>
            </div>
        </div>
    )
}

export default Mycart