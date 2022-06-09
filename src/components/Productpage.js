import React from 'react';
import Bannerproductemplate from './Bannerproductemplate';
import BannerSlider from './BannerSlider';

function Productpage() {
    return (
        <div>
            <BannerSlider slide1={<Bannerproductemplate profImg={'model1.png'} />}
                slide2={<Bannerproductemplate profImg={'model3.png'} />}
                slide3={<Bannerproductemplate profImg={'headphone.png'} />} />
        </div>
    )
}

export default Productpage