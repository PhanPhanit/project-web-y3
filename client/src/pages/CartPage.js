import React from 'react'
import {Link} from 'react-router-dom';
import {FaTrashAlt} from 'react-icons/fa';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import '../styles/cartPage.css';
function CartPage() {
    return (
        <section className="cart-section">
            <div className="wrapper-global">
                <div className="cart-title font-cat">Your Cart</div>
                <div className="cart-container">
                    <div className="cart-des-title">
                        <span>Item</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Subtotal</span>
                        <span></span>
                    </div>
                    <hr />
                    <div className="item-container">
                        <div className="single-item">
                            <div className="p-item">
                                <div className="img-box">
                                    <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                                </div>
                                <div className="info">
                                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eos!</h4>
                                    <span className='author'>Transi Ated</span>
                                    <span className='price'>$29.99</span>
                                    <span className='discount'>$10</span>
                                </div>
                            </div>
                            <span className="price">$29.99</span>
                            <div className="quantity-change">
                                <button type="button">
                                    <AiOutlineMinus className="icon" />
                                </button>
                                <span>1</span>
                                <button type="button">
                                    <AiOutlinePlus className="icon" />
                                </button>
                            </div>
                            <span className="sub-total">$29.99</span>
                            <div className="remove-item">
                                <button type="button">
                                    <FaTrashAlt className="icon-remove" />
                                </button>
                            </div>
                        </div>
                        <div className="single-item">
                            <div className="p-item">
                                <div className="img-box">
                                    <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                                </div>
                                <div className="info">
                                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eos!</h4>
                                    <span className='author'>Transi Ated</span>
                                    <span className='price'>$29.99</span>
                                    <span className='discount'>$10</span>
                                </div>
                            </div>
                            <span className="price">$29.99</span>
                            <div className="quantity-change">
                                <button type="button">
                                    <AiOutlineMinus className="icon" />
                                </button>
                                <span>1</span>
                                <button type="button">
                                    <AiOutlinePlus className="icon" />
                                </button>
                            </div>
                            <span className="sub-total">$29.99</span>
                            <div className="remove-item">
                                <button type="button">
                                    <FaTrashAlt className="icon-remove" />
                                </button>
                            </div>
                        </div>
                        <div className="single-item">
                            <div className="p-item">
                                <div className="img-box">
                                    <img src="https://m.media-amazon.com/images/I/51G+WN7UghL.jpg" alt="Yuri Herrera" />
                                </div>
                                <div className="info">
                                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eos!</h4>
                                    <span className='author'>Transi Ated</span>
                                    <span className='price'>$29.99</span>
                                    <span className='discount'>$10</span>
                                </div>
                            </div>
                            <span className="price">$29.99</span>
                            <div className="quantity-change">
                                <button type="button">
                                    <AiOutlineMinus className="icon" />
                                </button>
                                <span>1</span>
                                <button type="button">
                                    <AiOutlinePlus className="icon" />
                                </button>
                            </div>
                            <span className="sub-total">$29.99</span>
                            <div className="remove-item">
                                <button type="button">
                                    <FaTrashAlt className="icon-remove" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="btn-container">
                        <Link to="/" className="btn-shopping">Continue Shopping</Link>
                        <button className="btn-clear" type="button">Clear all items</button>
                    </div>
                </div>
                <section className="summary-container">
                    <div className="summary-box">
                        <h2 className="title">Summary</h2>
                        <hr />
                        <div>
                            <span>Subtotal:</span>
                            <span>$209.93</span>
                        </div>
                        <div>
                            <span>Shipping Fee:</span>
                            <span>$2.00</span>
                        </div>
                        <hr />
                        <div>
                            <span>Order Total:</span>
                            <span>$220.08</span>
                        </div>
                        <Link to="/checkout" className="btn-checkout">Checkout</Link>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default CartPage
