import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import '../styles/components/categorySlide.css'
import Finance from '../images/finance.svg';


const CategorySlide = () => {
    SwiperCore.use([Autoplay]);
    return (
        <section className="wrapper-global category-slide">
            <Swiper
                className="slide-cat-wrapper"
                speed={1000}
                spaceBetween={30}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                breakpoints={{
                    992: {
                        slidesPerView: 5
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }}
            >
                <SwiperSlide className="slide-cat">
                    <img src={Finance} alt="finance" />
                    <h3 className="font-title">Romance</h3>
                </SwiperSlide>
                <SwiperSlide className="slide-cat">
                    <img src={Finance} alt="finance" />
                    <h3 className="font-title">Romance</h3>
                </SwiperSlide>
                <SwiperSlide className="slide-cat">
                    <img src={Finance} alt="finance" />
                    <h3 className="font-title">Romance</h3>
                </SwiperSlide>
                <SwiperSlide className="slide-cat">
                    <img src={Finance} alt="finance" />
                    <h3 className="font-title">Romance</h3>
                </SwiperSlide>
                <SwiperSlide className="slide-cat">
                    <img src={Finance} alt="finance" />
                    <h3 className="font-title">Romance</h3>
                </SwiperSlide>
                <SwiperSlide className="slide-cat">
                    <img src={Finance} alt="finance" />
                    <h3 className="font-title">Romance</h3>
                </SwiperSlide>
                <SwiperSlide className="slide-cat">
                    <img src={Finance} alt="finance" />
                    <h3 className="font-title">Romance</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default CategorySlide
