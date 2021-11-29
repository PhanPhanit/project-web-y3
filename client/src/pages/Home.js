import React from 'react'
import {
    Slider,
    Category,
    CategorySlide,
    NewArrivalBox,
    AllFavorBook,
    PaginationReact,
    EasyPay,
    MapSection
} from '../components'

function Home() {
    return (
        <>
            <Slider />
            <Category title="Categories"/>
            <CategorySlide />
            <NewArrivalBox />
            <Category title="All Favorite Books"/>
            <AllFavorBook />
            <PaginationReact />
            <Category title="Easy to Pay"/>
            <EasyPay />
            <Category title="Our Location"/>
            <MapSection />
        </>
    )
}

export default Home
