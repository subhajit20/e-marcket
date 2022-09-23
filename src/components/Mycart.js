import React,{useContext,useState} from 'react';
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
    window.document.title=`Buy Karo - Cart`;
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
        if(!authorize){
            navigate('/user/login')
        }else if(authorize){
            if(amount <= 0){
                console.log("Your cart is empty...")
            }else if(amount > 0){
                navigate(`/payment/${amount}`)
            }
        }
    }

    return (
        <div className={`flex-col flex-wrap h-[120vh] ${state.darkmode.individuaTemplateBackground}`}>
            <h1 className={`relative text-center text-3xl top-20 text-${state.darkmode.text_color}`}><Searchbar handleOnchange={handleOnchange}/></h1>
            <div className="relative">
                    <h1 className={`relative text-center text-sm sm:text-3xl top-28 text-${state.darkmode.text_color} font-semibold`}>{flag === false ?  msg :msg}</h1>
                <div className="flex-col relative top-32 h-[480px]  scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll overflow-scroll">
                    {
                       prods.length === 0 ?  prod.map((x,y)=>{
                                                    return (<Carttemplate id={x.id} images={x.image} title={x.title} price={x.price} key={y} onDelete={()=> handleDelete(y,x.price)} />)
                                                }) :   prods.map((x,y)=>{
                                                    return (<Carttemplate id={x.id} images={x.image} title={x.title} price={x.price} key={y} onDelete={()=> handleDelete(y,x.price)} />)
                                                })
                    }
                </div>
            </div>
            <div className="relative flex top-[120px] sm:top-[140px] ">
                <div className={` p-5 w-[400px] sm:w-[600px] flex justify-around text-white m-auto`}>
                    <span className={`font-semibold text-${state.darkmode.text_color} text-base sm:text-2xl`}>Total Price </span>
                    <span className='text-sm sm:text-xl text-center bg-[#FF8600] top-28 px-2 sm:px-4 py-1 sm:py-2 cursor-pointer  shadow-md shadow-gray-900 hover:bg-orange-700 transition-all duration-200' onClick={BuyNow}>{amount === 0 ? 0 
                    : amount}$ Buy Now</span>
                </div>
            </div>
        </div>
    )
}

export default Mycart