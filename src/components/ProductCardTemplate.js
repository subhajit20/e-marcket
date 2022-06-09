import React from 'react'

function ProductCardTemplate() {
    return (
        <div className='flex justify-center m-20'>
            <div className='bg-=[#F9F7F3] p-5 shadow-lg shadow-slate-500/100  sm:w-[250px] sm:h-[300px] rounded-md'>
                <div className='flex justify-end'><button type='button'><i class="fa-solid fa-cart-plus text-2xl"></i></button>
                </div>
                <div className='flex justify-center'>
                    <div className='sm:w-[120px] '>
                        <img src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' alt='product_img' />
                    </div>
                </div>
                <div>
                    <span>Men's Clothing</span>
                </div>
            </div>
        </div >
    )
}

export default ProductCardTemplate