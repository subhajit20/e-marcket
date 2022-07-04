import React,{useContext} from 'react';
import useCarthook from '../hooks/useCarthook';
import {MyCartcontext} from '../context/Cartcontext';
function Mycart() {
    const {mycart} = useContext(MyCartcontext)
    const [msg,flag,prod,total,decreasePrice] = useCarthook();
    const handleDelete = (elementDel,productPrice) =>{
        mycart({type:"DELETE",element:elementDel});
        decreasePrice(productPrice)
    }
    return (
        <div>
            <h1 className='relative top-28'>Cartsss</h1>
            <h1 className='relative top-28 text-center text-3xl'>{flag === true ? msg : msg}</h1>
           {
                prod.map((x,y)=>{
                    return (<div className='relative top-28 mb-5' key={y}>
                        <h1>{y}</h1>
                        <h1>{x.title}</h1>
                        <h1>{x.price}</h1>
                        <img className="w-28" src={x.image} alt="product_img"/>
                        <button onClick={()=> handleDelete(y,x.price)} className="bg-slate-500 text-white">Delete</button>
                    </div>)
                })
           }
           <h1 className='relative top-40 text-3xl'>{total}</h1>
        </div>
    )
}

export default Mycart