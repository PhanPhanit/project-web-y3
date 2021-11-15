import React from 'react'
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import ReactStars from "react-rating-stars-component";
import '../styles/components/newArrivalBox.css'

const NewArrivalBox = () => {
    SwiperCore.use([Autoplay]);
    return (
        <section className="wrapper-global wrapper-arrive">
            <Swiper
                className="swiper-arrive"
                speed={1000}
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                // loop={true}
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
                <SwiperSlide className="box-arrive">
                    <Link to="/viewbook/123">
                        <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                    </Link>
                    <div className="info">
                        <h4 className="title">Yuri Herrera</h4>
                        <span className="author">Transi Ated</span>
                        <div className="star-price">
                            <div>
                                <ReactStars
                                    classNames="stars"
                                />
                                <span className="star-rate">3,223</span>
                            </div>
                            <div>
                                <span className="price">$29.99</span>
                                <span className="dis-price">$24.99</span>
                            </div>
                        </div>
                        <div className="add-cart">
                            <Link to="/cart" className="btn btn-add-cart">
                                ADD TO CART
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-arrive">
                    <Link to="/viewbook/123">
                        <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                    </Link>
                    <div className="info">
                        <h4 className="title">Yuri Herrera</h4>
                        <span className="author">Transi Ated</span>
                        <div className="star-price">
                            <div>
                                <ReactStars
                                    classNames="stars"
                                />
                                <span className="star-rate">3,223</span>
                            </div>
                            <div>
                                <span className="price">$29.99</span>
                                <span className="dis-price">$24.99</span>
                            </div>
                        </div>
                        <div className="add-cart">
                            <Link to="/cart" className="btn btn-add-cart">
                                ADD TO CART
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-arrive">
                    <Link to="/viewbook/123">
                        <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                    </Link>
                    <div className="info">
                        <h4 className="title">Yuri Herrera</h4>
                        <span className="author">Transi Ated</span>
                        <div className="star-price">
                            <div>
                                <ReactStars
                                    classNames="stars"
                                />
                                <span className="star-rate">3,223</span>
                            </div>
                            <div>
                                <span className="price">$29.99</span>
                                <span className="dis-price">$24.99</span>
                            </div>
                        </div>
                        <div className="add-cart">
                            <Link to="/cart" className="btn btn-add-cart">
                                ADD TO CART
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-arrive">
                    <Link to="/viewbook/123">
                        <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                    </Link>
                    <div className="info">
                        <h4 className="title">Yuri Herrera</h4>
                        <span className="author">Transi Ated</span>
                        <div className="star-price">
                            <div>
                                <ReactStars
                                    classNames="stars"
                                />
                                <span className="star-rate">3,223</span>
                            </div>
                            <div>
                                <span className="price">$29.99</span>
                                <span className="dis-price">$24.99</span>
                            </div>
                        </div>
                        <div className="add-cart">
                            <Link to="/cart" className="btn btn-add-cart">
                                ADD TO CART
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-arrive">
                    <Link to="/viewbook/123">
                        <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                    </Link>
                    <div className="info">
                        <h4 className="title">Yuri Herrera</h4>
                        <span className="author">Transi Ated</span>
                        <div className="star-price">
                            <div>
                                <ReactStars
                                    classNames="stars"
                                />
                                <span className="star-rate">3,223</span>
                            </div>
                            <div>
                                <span className="price">$29.99</span>
                                <span className="dis-price">$24.99</span>
                            </div>
                        </div>
                        <div className="add-cart">
                            <Link to="/cart" className="btn btn-add-cart">
                                ADD TO CART
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-arrive">
                    <Link to="/viewbook/123">
                        <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                    </Link>
                    <div className="info">
                        <h4 className="title">Yuri Herrera</h4>
                        <span className="author">Transi Ated</span>
                        <div className="star-price">
                            <div>
                                <ReactStars
                                    classNames="stars"
                                />
                                <span className="star-rate">3,223</span>
                            </div>
                            <div>
                                <span className="price">$29.99</span>
                                <span className="dis-price">$24.99</span>
                            </div>
                        </div>
                        <div className="add-cart">
                            <Link to="/cart" className="btn btn-add-cart">
                                ADD TO CART
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-arrive">
                    <Link to="/viewbook/123">
                        <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                    </Link>
                    <div className="info">
                        <h4 className="title">Yuri Herrera</h4>
                        <span className="author">Transi Ated</span>
                        <div className="star-price">
                            <div>
                                <ReactStars
                                    classNames="stars"
                                />
                                <span className="star-rate">3,223</span>
                            </div>
                            <div>
                                <span className="price">$29.99</span>
                                <span className="dis-price">$24.99</span>
                            </div>
                        </div>
                        <div className="add-cart">
                            <Link to="/cart" className="btn btn-add-cart">
                                ADD TO CART
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="box-arrive">
                    <Link to="/viewbook/123">
                        <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                    </Link>
                    <div className="info">
                        <h4 className="title">Yuri Herrera</h4>
                        <span className="author">Transi Ated</span>
                        <div className="star-price">
                            <div>
                                <ReactStars
                                    classNames="stars"
                                />
                                <span className="star-rate">3,223</span>
                            </div>
                            <div>
                                <span className="price">$29.99</span>
                                <span className="dis-price">$24.99</span>
                            </div>
                        </div>
                        <div className="add-cart">
                            <Link to="/cart" className="btn btn-add-cart">
                                ADD TO CART
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default NewArrivalBox
