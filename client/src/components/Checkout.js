import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import {BsPlusLg} from 'react-icons/bs';
import {FaTrashAlt, FaEdit} from 'react-icons/fa'
import '../styles/checkout.css'

const Checkout = () => {
    return (
        <section className="section-checkout show">
            <div className="checkout-wrapper">
                <div className="header">
                    <h2>Payment</h2>
                    <AiOutlineClose className="icon" />
                </div>
                <div className="body">
                    <div className="body-header">
                        <h3>Address</h3>
                        <button type="button"><span>Add</span><BsPlusLg className="icon" /></button>
                    </div>
                    <div className="address-wrapper">
                        <div className="single-adress">
                            <div className="left">
                                <input type="radio" name="address-choice" />
                            </div>
                            <div className="right">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, in numquam nobis fuga quasi ipsum ipsa sequi explicabo hic id.</p>
                                <span className="edit"><FaEdit className="icon" /></span>
                                <span className="delete"><FaTrashAlt className="icon" /></span>
                            </div>
                        </div>
                        <div className="single-adress">
                            <div className="left">
                                <input type="radio" name="address-choice" />
                            </div>
                            <div className="right">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, in numquam nobis fuga quasi ipsum ipsa sequi explicabo hic id.</p>
                                <span className="edit"><FaEdit className="icon" /></span>
                                <span className="delete"><FaTrashAlt className="icon" /></span>
                            </div>
                        </div>
                        <div className="single-adress">
                            <div className="left">
                                <input type="radio" name="address-choice" />
                            </div>
                            <div className="right">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, in numquam nobis fuga quasi ipsum ipsa sequi explicabo hic id.</p>
                                <span className="edit"><FaEdit className="icon" /></span>
                                <span className="delete"><FaTrashAlt className="icon" /></span>
                            </div>
                        </div>
                        <div className="single-adress">
                            <div className="left">
                                <input type="radio" name="address-choice" />
                            </div>
                            <div className="right">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, in numquam nobis fuga quasi ipsum ipsa sequi explicabo hic id.</p>
                                <span className="edit"><FaEdit className="icon" /></span>
                                <span className="delete"><FaTrashAlt className="icon" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="payment-option">
                        <h3>Payment Option</h3>
                        <div className="img-box">
                            <span>
                                <img src="" alt="" />
                            </span>
                            <span>
                                <img src="" alt="" />
                            </span>
                            <span>
                                <img src="" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
