import React from 'react'
import {Link} from 'react-router-dom';
import {MdOutlineSell} from 'react-icons/md';
import {FaShoppingBag} from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import {sortName, formatMoney, numberWithCommas} from '../utils/Tools';

const AllFavorBookBox = (props) => {
    const {
        _id: productId,
        name,
        author,
        averageRating,
        numOfReviews,
        sold,
        price,
        discount,
        image
    } = props;
    return (
        <div className="favor-box">
                <Link to={`/viewbook/${productId}`}>
                    <img src={image[0]} alt={name} />
                </Link>
                <div className="info">
                    <h4 className="title">
                        <Link to={`/viewbook/${productId}`} className="link-none font-title">{sortName(name, 40)}</Link>
                    </h4>
                    <span className="author">{author}</span>
                    <div className="sold-dis">
                        <div className="sold">
                            <MdOutlineSell /><span>{numberWithCommas(sold)} sold</span>
                        </div>
                        <div className="dis-price">{discount===0?"":formatMoney(discount)}</div>
                    </div>
                    <div className="star-price">
                        <div className="star">
                            <ReactStars
                                classNames="star-icon"
                                value={averageRating}
                                isHalf={true}
                                edit={false}
                            />
                            <span>{numberWithCommas(numOfReviews)}</span>
                        </div>
                        <div className="price">{formatMoney(price)}</div>
                    </div>
                    <div className="add-cart">
                        <Link to="/cart" className="btn-add-cart">
                            <FaShoppingBag className="icon" /> <span>ADD TO CART</span>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default AllFavorBookBox
