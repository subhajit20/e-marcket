import React, { useState, useEffect,useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Storecontext } from '../context/UserContextProvider';
import Individualproductcard from './Individualproductcard';

function Individualproduct() {
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)
    const { state } = useContext(Storecontext);

    console.log('Helow')
    const getproduct = useCallback(() => {
        const getallproduct = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing`);
            const mydata = await res.json();
            if (res.status === 200) {
                setData([...mydata])
                setFlag(true)
            } else {
                setFlag(false)
            }
        }
        getallproduct()
    }, [])
    useEffect(() => {
        getproduct()
    }, [getproduct])
    return (
        <div className={` ${state.darkmode.background} sm:h-screen h-screen`}><Link to='/' className='sm:relative top-24 left-10 text-3xl'><i className="fa-solid fa-circle-arrow-left "></i></Link><div className='flex justify-center flex-wrap'>{
            flag ? data.map((x, y) => {
                return <Individualproductcard key={y} title={x.title} price={x.price} image={x.image} />
            }) : <h1 className='relative top-44 '>Loading...</h1>
        }</div></div>
    )
}

export default Individualproduct