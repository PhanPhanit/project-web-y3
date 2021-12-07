import React from 'react'
import {
    Slider,
    CategoryTitle,
    CategorySection,
    AllFavorBook,
    PaginationReact,
} from '../components'


function Category() {
    return (
        <>
            <Slider />
            <CategoryTitle title="Categories"/>
            <CategorySection />
            <CategoryTitle title="All Favorite Books"/>
            <AllFavorBook />
            <PaginationReact />
        </>
    )
}

export default Category
