import React, { useState, useEffect, useContext } from 'react';
import { MyCartcontext } from '../context/Cartcontext'
import { motion } from 'framer-motion';
import {Bounce} from 'react-awesome-reveal';
import {Link} from 'react-router-dom';

let colorpalate = ['bg-[#e2effc]', 'bg-[#bff3d2]', 'bg-[#edddf1]', 'bg-[#adb9f4]', 'bg-[#b8ff52]', 'bg-[#d4f7e3]', 'bg-[#f3d2ff]', 'bg-[#e8e6e5]']

function Individualproductcard({ id,title, price, image,catname }) {
    const [color, setColor] = useState();
    const [cart, setCart] = useState(false);
    const {mycart} = useContext(MyCartcontext);
    
    const handleCart = (title,price,image) => {
        if (cart === false) {
            mycart({type:'ADD',items:{
                id:id,
                title:title,
                price:price,
                image:image
            }})
            setCart(true)
        } else if (cart === true) {
            setCart(false)
        }
    }
    useEffect(() => {
        function changeCOLOR() {
            /*********** Random colour generator **********/
            const rand = Math.ceil(Math.random() * 8);
            // console.log(colorpalate[rand])
            setColor(colorpalate[rand])
        }
        changeCOLOR();
    }, []);
    return (
        <Bounce>
            
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.4
            }}
            className={` relative top-[70px] w-[230px] h-[365px] shadow-md shadow-[#6f2068] cursor-pointer rounded-2xl hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] sm:mx-10 sm:my-3 mx-5 bg-[#fef5fe] mb-8 transition-all duration-300`}>
                    
                    <div className={`flex justify-center h-[175px] ${color} rounded-tl-2xl rounded-tr-2xl p-2 sm:p-4`}>
                        <div className='w-[120px] relative scale-x-150 left-3 bottom-3 overflow-y-hidden'>
                            <img src={image} alt='__img__' className='relative top-10 ' />
                        </div>
                        <span className='relative left-10 mr-2'>{cart === false ? <i className="text-[#552281] text-xl fa-solid fa-cart-plus transition-all duration-200 hover:text-3xl active:text-2xl"
                        onClick={ ()=> handleCart(title,price,image) }></i> : <i className="fa-solid fa-circle-minus text-[#552281] transition-all duration-200 hover:text-3xl active:text-2xl" 
                        onClick={ handleCart }></i>}</span>
                    </div>
                <Link to={`/products/${id}`}>
                    <div className='px-2 sm:px-5 py-2 flex justify-between'>
                        <span className='font-medium text-xs'>{title}</span>
                        <span className='text-[#6f2068] font-bold'>{price}$</span>
                    </div>
                    <div className='px-2 sm:px-5 pb-6 flex justify-between'>
                        <span className='font-light'>{catname}</span>
                    </div>
                    <div className='px-2 sm:px-5 pb-4 flex justify-between'>
                        <span className='font-medium'>Sizes</span>
                        <span className='font-light'>XS S M L XL XXL </span>
                    </div>
                    <div className='px-2 sm:px-5 flex justify-between'>
                        <span className='font-medium'>COLORS</span>
                        <span><i className="fa-solid fa-circle text-red-600"></i><i className="fa-solid fa-circle text-blue-700 mx-3"></i><i className="fa-solid fa-circle text-yellow-500"></i></span>
                    </div>
                    
                </Link>
        </motion.div>
        
            
        </Bounce>
    )
}

export default Individualproductcard