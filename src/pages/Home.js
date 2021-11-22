import React from 'react'
import { Slider, Category, CategorySlide, NewArrivalBox, AllFavorBook, Pagination } from '../components'

function Home() {
    return (
        <>
            <Slider />
            <Category title="Categories"/>
            <CategorySlide />
            <NewArrivalBox />
            <Category title="All Favorite Books"/>
            <AllFavorBook />
            <Pagination />
        </>
    )
}

export default Home
