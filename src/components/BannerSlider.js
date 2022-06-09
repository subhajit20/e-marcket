import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BannerSlider = ({ slide1, slide2, slide3 }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>{slide1}</SwiperSlide>
            <SwiperSlide>{slide2}</SwiperSlide>
            <SwiperSlide>{slide3}</SwiperSlide>
        </Swiper>
    );
};

export default BannerSlider