import React from 'react';
import ProductCard from './ProductCard';
import Categoryheading from './Categoryheading';

function ProductCardTemplate() {
    return (
        <>
            <Categoryheading />
            <div className='flex justify-center m-10 sm:m-20 flex-wrap '>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div >
        </>
    )
}

export default ProductCardTemplate