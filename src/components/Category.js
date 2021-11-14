import React from 'react'
import '../styles/components/category.css'

const Category = ({title}) => {
    return (
        <section className="wrapper-global category font-cat">
            <h2>{title}</h2>
        </section>
    )
}

export default Category
