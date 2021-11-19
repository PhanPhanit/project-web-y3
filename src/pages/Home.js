import React from 'react'
import { Slider, Category, CategorySlide, NewArrivalBox, AllFavorBook } from '../components'

function Home() {
    return (
        <>
            <Slider />
            <Category title="Categories"/>
            <CategorySlide />
            <NewArrivalBox />
            <Category title="All Favorite Books"/>
            <AllFavorBook />
        </>
    )
}

export default Home
