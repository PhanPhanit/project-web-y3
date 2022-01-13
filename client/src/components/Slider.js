import React from 'react'
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import '../styles/slider.css';

const Slider = () => {
    SwiperCore.use([Autoplay]);
    return (
        <section className="section-slide font-poppin">
            <Swiper
                className="slide-wrapper"
                spaceBetween={50}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                speed={1000}
            >
                <SwiperSlide className="slide">
                    <div className="left">
                        <h2>Discover your Unlimited Knowledge</h2>
                        <p>A new world contains in each every pages of the books.</p>
                        <Link className="btn link-btn" to="/products/:id">Shop Now</Link>
                    </div>
                    <div className="right">
                        <img src="https://covers.zlibcdn2.com/covers299/books/d6/c0/c9/d6c0c90690c750e1d17819b48c49ee0f.jpg" alt="Photo Book" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="left">
                        <h2>Discover your Unlimited Knowledge</h2>
                        <p>A new world contains in each every pages of the books.</p>
                        <Link className="btn link-btn" to="/products/:id">Shop Now</Link>
                    </div>
                    <div className="right">
                        <img src="https://covers.zlibcdn2.com/covers299/books/d6/c0/c9/d6c0c90690c750e1d17819b48c49ee0f.jpg" alt="Photo Book" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="left">
                        <h2>Discover your Unlimited Knowledge</h2>
                        <p>A new world contains in each every pages of the books.</p>
                        <Link className="btn link-btn" to="/products/:id">Shop Now</Link>
                    </div>
                    <div className="right">
                        <img src="https://covers.zlibcdn2.com/covers299/books/d6/c0/c9/d6c0c90690c750e1d17819b48c49ee0f.jpg" alt="Photo Book" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="left">
                        <h2>Discover your Unlimited Knowledge</h2>
                        <p>A new world contains in each every pages of the books.</p>
                        <Link className="btn link-btn" to="/products/:id">Shop Now</Link>
                    </div>
                    <div className="right">
                        <img src="https://covers.zlibcdn2.com/covers299/books/d6/c0/c9/d6c0c90690c750e1d17819b48c49ee0f.jpg" alt="Photo Book" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="left">
                        <h2>Discover your Unlimited Knowledge</h2>
                        <p>A new world contains in each every pages of the books.</p>
                        <Link className="btn link-btn" to="/products/:id">Shop Now</Link>
                    </div>
                    <div className="right">
                        <img src="https://covers.zlibcdn2.com/covers299/books/d6/c0/c9/d6c0c90690c750e1d17819b48c49ee0f.jpg" alt="Photo Book" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="left">
                        <h2>Discover your Unlimited Knowledge</h2>
                        <p>A new world contains in each every pages of the books.</p>
                        <Link className="btn link-btn" to="/products/:id">Shop Now</Link>
                    </div>
                    <div className="right">
                        <img src="https://covers.zlibcdn2.com/covers299/books/d6/c0/c9/d6c0c90690c750e1d17819b48c49ee0f.jpg" alt="Photo Book" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="left">
                        <h2>Discover your Unlimited Knowledge</h2>
                        <p>A new world contains in each every pages of the books.</p>
                        <Link className="btn link-btn" to="/products/:id">Shop Now</Link>
                    </div>
                    <div className="right">
                        <img src="https://covers.zlibcdn2.com/covers299/books/d6/c0/c9/d6c0c90690c750e1d17819b48c49ee0f.jpg" alt="Photo Book" />
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
        </section>
    )
}

export default Slider
