import React from 'react'
import {useCategoryContext} from '../context/category_context';
import {
    Slider,
    CategoryTitle,
    AllFavorBook,
    PaginationReact,
    CategorySection
} from '../components'
import {Error} from '../pages';


function Category() {
    const {category_exist} = useCategoryContext();
    if(!category_exist){
        return <Error />
    }
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
