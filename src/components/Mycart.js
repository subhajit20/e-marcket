import React,{useContext} from 'react';
import useCarthook from '../hooks/useCarthook';
import {MyCartcontext} from '../context/Cartcontext';
import Carttemplate from './CartLayout/Carttemplate';

function Mycart() {
    const {mycart} = useContext(MyCartcontext)
    const [msg,flag,decreasePrice,prod,amount] = useCarthook();
    const handleDelete = (elementDel,productPrice) =>{
        mycart({type:"DELETE",element:elementDel});
        decreasePrice(productPrice)
    }
    return (
        <div className="flex flex-wrap justify-center">
            <div>
                    <h1 className='relative top-28'>Cartsss</h1>
                    <h1 className='relative top-28 text-center text-3xl'>{flag === true ? msg : msg}</h1>
                <div className="flex-col relative top-32">
                    {
                        prod.map((x,y)=>{
                            return (<Carttemplate images={x.image} price={x.price} key={y} onDelete={()=> handleDelete(y,x.price)}/>)
                        })
                    }
            </div>
            </div>
            <div className='fixed w-full'>
                <h1 className=' top-[600px] left-24 text-3xl '>{amount === 0 ? 0 
                : amount}$</h1>
            </div>
        </div>
    )
}

export default Mycart