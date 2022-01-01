import React from 'react'
import '../styles/checkout.css'
import StripeFormContainer from './StripeFormContainer';

const Checkout = () => {
    return (
        <section className="section-checkout">
            <div className="checkout-wrapper">
                <div className="header">
                    <h2>Payment</h2>
                </div>
                <div className="body">
                    <div className="body-title">
                        <h3>Billing Details</h3>
                    </div>
                    <form className="frm-address">
                        <div className="frm-control">
                            <label htmlFor="phone-number">Phone number</label>
                            <input type="tel" id="phone-number" className="input-control" placeholder="+855" />
                        </div>
                        <div className="frm-control">
                            <label htmlFor="city">City</label>
                            <select name="city" id="city" className="select-control">
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Banteay Meanchey">Banteay Meanchey</option>
                                <option value="Battambang">Battambang</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                                <option value="Phnom Penh">Phnom Penh</option>
                            </select>
                        </div>
                        <div className="frm-control">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" className="input-control" placeholder="Your Address" />
                        </div>
                    </form>

                    <div className="body-title">
                        <h3>Payment Option</h3>
                    </div>

                    <div className="payment-option">
                        {/* <label htmlFor="visa-master">
                            <input type="radio" id="visa-master" name="payment-option" />
                            <div className="img-box">
                                <img src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Pic.png" alt="Visa" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" alt="master" />
                            </div>
                        </label>
                        <label htmlFor="paypal">
                            <input type="radio" id="paypal" name="payment-option" />
                            <div className="img-box">
                                <img src="https://lavigneduroy.com/wp-content/uploads/2016/10/paypal-784404_960_720.png" alt="" />
                            </div>
                        </label> */}
                    </div>
                    <div className="pay-container">
                        {/* <StripeFormContainer /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
