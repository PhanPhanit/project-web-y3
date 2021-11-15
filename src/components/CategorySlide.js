import React from 'react'
import {Link} from 'react-router-dom';
import Finance from '../images/finance.svg';
import '../styles/components/categorySlide.css';

const CategorySlide = () => {
    return (
        <section className="wrapper-global section-cate-wrap">
            <Link to="/categories/romance">
                <div className="cate-box">
                    <img src={Finance} alt="finance" />
                    <h3>Romance</h3>
                </div>
            </Link>
            <Link to="/categories/romance">
                <div className="cate-box">
                    <img src={Finance} alt="finance" />
                    <h3>Romance</h3>
                </div>
            </Link>
            <Link to="/categories/romance">
                <div className="cate-box">
                    <img src={Finance} alt="finance" />
                    <h3>Romance</h3>
                </div>
            </Link>
            <Link to="/categories/romance">
                <div className="cate-box">
                    <img src={Finance} alt="finance" />
                    <h3>Romance</h3>
                </div>
            </Link>
            <Link to="/categories/romance">
                <div className="cate-box">
                    <img src={Finance} alt="finance" />
                    <h3>Romance</h3>
                </div>
            </Link>
            <Link to="/categories/romance">
                <div className="cate-box">
                    <img src={Finance} alt="finance" />
                    <h3>Romance</h3>
                </div>
            </Link>
            <Link to="/categories/romance">
                <div className="cate-box">
                    <img src={Finance} alt="finance" />
                    <h3>Romance</h3>
                </div>
            </Link>
            <Link to="/categories/romance">
                <div className="cate-box">
                    <img src={Finance} alt="finance" />
                    <h3>Romance</h3>
                </div>
            </Link>
        </section>
    )
}

export default CategorySlide
