import React from 'react'
import {Link} from 'react-router-dom';
import {MdOutlineSell} from 'react-icons/md';
import {FaShoppingBag} from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import '../styles/components/allFavorBook.css'
const AllFavorBook = () => {
    return (
        <section className="wrapper-global all-favor-book">
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="favor-box">
                <Link to="/viewbook/122333">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="book" />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to="/viewbook/123" className="link-none font-title">How to Draw Cool Stuff: A Drawing Guide for</Link>
                    </h4>
                    <span className="author">Transi Ated</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>200 sold</span>
                        </div>
                        <div className="dis-price">$24.99</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={3.7}
                                isHalf={true}
                                edit={false}
                                />
                            <span>39,210</span>
                        </div>
                        <div className="price">$29.99</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllFavorBook
