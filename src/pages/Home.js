import React from 'react'
import { Slider, Category, CategorySlide, NewArrivalBox } from '../components'

function Home() {
    return (
        <>
            <Slider />
            <Category title="Categories"/>
            <CategorySlide />
            <Category title="New Arrival"/>
            <NewArrivalBox />
        </>
    )
}

export default Home
