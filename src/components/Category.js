import React from 'react'
import '../styles/components/category.css'
import {CategorySlide} from '../components';

const Category = () => {
    return (
        <section className="wrapper-global category">
            <h2>Categories</h2>
            <div className="cate-slide">
                <CategorySlide />
            </div>
        </section>
    )
}

export default Category
