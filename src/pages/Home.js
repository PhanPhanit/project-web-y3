import React from 'react'
import { Slider, Category, CategorySlide, NewArrivalBox } from '../components'

function Home() {
    return (
        <>
            <Slider />
            <Category title="Categories"/>
            <CategorySlide />
            <NewArrivalBox />
        </>
    )
}

export default Home
