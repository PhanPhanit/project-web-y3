import React from 'react'
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import {FaShoppingBag} from 'react-icons/fa';
import '../styles/viewBookDetail.css';
const ViewBookDetail = () => {
    return (
        <section id="view-book-header">
            <div className="left">
                <div className="img-box">
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="1" />
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="2" />
                    <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="3" />
                </div>
                <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="harry potter" className="big-img" />
            </div>
            <div className="right">
                <div className="title">
                    <h2>Yuri Herrera dsfwefwef  wefwe fwe wef wef fwef wf ewfewe wfwewe wefew wefew wef  wefwefwefew</h2>
                </div>
                <span>Date: August 14, 2021</span>
                <span className="subtitle">Author: Transi Ated</span>
                <span className="subtitle">Publisher: Jim Dale (Narrator), Pottermore Publishing</span>
                <div className="stars-rating">
                    <ReactStars
                        classNames="star-icon"
                        value={3.7}
                        isHalf={true}
                        edit={false}
                    />
                    <span>1,211 ratings</span>
                </div>
                <div className="price">
                    <h3>Price: $24.99</h3>
                    <span className="discount">$29.99</span>
                </div>
                <div className="info-book">
                    <div>
                        <span>Genre: </span> <h5>Fansty</h5>
                    </div>
                    <div>
                        <span>Country: </span> <h5>Unitex Kingdom</h5>
                    </div>
                    <div>
                        <span>Language: </span> <h5>Fansty</h5>
                    </div>
                    <div>
                        <span>Genre: </span> <h5>Fansty</h5>
                    </div>
                </div>
                <Link to="/cart" className="btn-add-cart">
                    <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                </Link>
            </div>
            <div className="description">
                <h3>Description</h3>
                <span>Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum lacus mauris, mollis aptent parturient faucibus libero mi ligula sociosqu tristique scelerisque, pretium vel leo vitae at consequat lacinia convallis senectus. Id conubia erat lectus dictum torquent aliquam urna, quam fermentum netus risus venenatis iaculis, sociosqu tellus a sociis placerat et. Urna neque sociis faucibus fusce inceptos massa commodo, libero vivamus justo velit convallis magnis.</span>
            </div>
        </section>
    )
}

export default ViewBookDetail
