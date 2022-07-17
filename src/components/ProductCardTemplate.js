import React from 'react';
import ProductCard from './ProductCard';
import Categoryheading from './Categoryheading';
import useCategory from '../hooks/useCategory'

function ProductCardTemplate() {
    const [data,flag,loading] = useCategory();
    return (
        <>
            <Categoryheading />
            <div className='flex justify-center m-10 sm:m-20 flex-wrap '>
                {
                    loading === false ? data.map((x,index)=>{

                        return <ProductCard key={index} catname={x}/>
                    }) : <h1>Loading...</h1>
                }
                {
                    flag ? '' : <h1>Loading...</h1>
                }
            </div >
        </>
    )
}

export default ProductCardTemplate