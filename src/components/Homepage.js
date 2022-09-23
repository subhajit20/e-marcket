import React,{useContext} from 'react';
import Bannerproductemplate from './Bannerproductemplate';
import ProductCardTemplate from './ProductCardTemplate'
import BannerSlider from './BannerSlider';
import {Storecontext} from '../context/UserContextProvider'

function Homepage() {
    window.document.title=`Buy Karo - Home`;
    const { state } = useContext(Storecontext);
    return (
        <div className={` h-auto ${state.darkmode.background}`}>
            <BannerSlider slide1={<Bannerproductemplate profImg={'model1.png'} />}
                slide2={<Bannerproductemplate profImg={'model3.png'} />}
                slide3={<Bannerproductemplate profImg={'headphone.png'} />} />
            <ProductCardTemplate />
        </div>
    )
}

export default Homepage