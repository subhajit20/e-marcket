import React, { useContext } from 'react';
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Storecontext } from '../context/UserContextProvider';
import Individualproductcard from './Individualproductcard';
import useProduct from '../hooks/useProduct';
import ScreenLoader from './ScreenLoader';
import useCarthook from '../hooks/useCarthook';



function Individualproduct() {
    const { state } = useContext(Storecontext);
    const [msg,flag] = useCarthook();
    const {pathname} = useLocation();
    const path = pathname.split("/")[2]
    const [prod,flag1] = useProduct(path);
    
    return (
        <div className={` ${state.darkmode.individuaTemplateBackground} sm:h-[130vh]`}><Link to='/' className='sm:relative top-24 left-10 text-3xl'><i className="fa-solid fa-circle-arrow-left "></i></Link><div className='flex justify-center flex-wrap'>{
            flag1 ? prod.map((x, y) => {
                return <Individualproductcard key={y} id={x.id} catname={x.category} title={x.title} price={x.price} image={x.image} />
            }) : <h1 className='relative top-44 '><ScreenLoader/></h1>
        }
        <h1 className='absolute top-[300px]'>{flag === true ? msg : ""}</h1>
        </div></div>
    )
}

export default Individualproduct