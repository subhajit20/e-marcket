import React, { useContext } from 'react';
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Storecontext } from '../context/UserContextProvider';
import Individualproductcard from './Individualproductcard';
import useProduct from '../hooks/useProduct';

function Individualproduct() {
    const { state } = useContext(Storecontext);
    const {pathname} = useLocation();
    const path = pathname.split("/")[2]
    const [prod,flag1,loading] = useProduct(path);
    return (
        <div className={` ${state.darkmode.individuaTemplateBackground} sm:h-[130vh]`}><Link to='/' className='sm:relative top-24 left-10 text-3xl'><i className="fa-solid fa-circle-arrow-left "></i></Link><div className='flex justify-center flex-wrap'>{
            flag1 ? prod.map((x, y) => {
                return <Individualproductcard key={y} catname={x.category} title={x.title} price={x.price} image={x.image} />
            }) : <h1 className='relative top-44 '>Loading...</h1>
        }
        {
            loading ? '' : <h1>Loading...</h1>
        }
        </div></div>
    )
}

export default Individualproduct