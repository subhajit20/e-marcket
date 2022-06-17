import React from 'react';
import { Link } from 'react-router-dom';
import Individualproductcard from './Individualproductcard';

function Individualproduct() {
    return (
        <div ><Link to='/' className='sm:relative top-24 left-10 text-3xl'><i className="fa-solid fa-circle-arrow-left"></i></Link><div className='flex justify-center'><Individualproductcard /></div></div>
    )
}

export default Individualproduct