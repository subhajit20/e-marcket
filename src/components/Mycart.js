import React,{useContext,useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useCarthook from '../hooks/useCarthook';
import {MyCartcontext} from '../context/Cartcontext';
import Carttemplate from './CartLayout/Carttemplate';
import { Storecontext } from '../context/UserContextProvider';
import Searchbar from './search/Searchbar';
import {AuthContext} from '../context/AuthProvider';

function Mycart() {
    const { state } = useContext(Storecontext);
    const [text,setText] = useState();
    const {mycart} = useContext(MyCartcontext)
    const {authorize} = useContext(AuthContext)
    const [msg,flag,decreasePrice,prod,amount] = useCarthook();
    const navigate = useNavigate()
    const handleDelete = (elementDel,productPrice) =>{
        const remove = window.prompt("Do you want remove this product ? If yes then write Y or N");
        if(remove === 'Y' || remove === 'y'){
            mycart({type:"DELETE",element:elementDel});
            decreasePrice(productPrice);
        }else{

        }
    }
    function handleOnchange(e){
        setText(e.target.value)
        
    }

    const prods = prod.filter((x)=>{
            return x.title.toLowerCase().toString().startsWith(text)
            
    })

    const BuyNow = () =>{
        if(authorize){
            console.log("Okk let's go to byee")
        }else if(!authorize){
            navigate('/user/login')
        }
    }
    useEffect(()=>{
        if(authorize){
            BuyNow();
        }
    },[authorize])
    return (
        <div className={`flex flex-wrap justify-around h-[100vh] ${state.darkmode.individuaTemplateBackground}`}>
            <div className="relative">
                    <h1 className={`relative text-center text-3xl top-20 text-${state.darkmode.text_color}`}><Searchbar handleOnchange={handleOnchange}/></h1>
                    
                    <h1 className={`relative text-center text-3xl top-28 text-${state.darkmode.text_color} font-semibold`}>{flag === false ?  msg :msg}</h1>
                <div className="flex-col relative top-32 overflow-scroll h-[480px]  scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll">
                    {
                       prods.length === 0 ?  prod.map((x,y)=>{
                                                    return (<Carttemplate id={x.id} images={x.image} title={x.title} price={x.price} key={y} onDelete={()=> handleDelete(y,x.price)} />)
                                                }) :   prods.map((x,y)=>{
                                                    return (<Carttemplate id={x.id} images={x.image} title={x.title} price={x.price} key={y} onDelete={()=> handleDelete(y,x.price)} />)
                                                })
                    }
            </div>
            </div>
            <div className="fixed top-[640px]">
            
                <div className={` p-5 w-[400px] sm:w-[600px] sm:flex justify-around text-white`}>
                    <span className={`font-semibold text-${state.darkmode.text_color} text-2xl`}>Total Price </span>
                    <span className='text-xl text-center bg-[#FF8600] top-28  px-4 py-2 cursor-pointer  shadow-md shadow-gray-900 hover:bg-orange-700 transition-all duration-200' onClick={BuyNow}>{amount === 0 ? 0 
                    : amount}$ Buy Now</span>
                </div>
            </div>
        </div>
    )
}

export default Mycart