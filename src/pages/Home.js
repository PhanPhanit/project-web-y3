import React from 'react'
import {
    Slider,
    Category,
    CategorySlide,
    NewArrivalBox,
    AllFavorBook,
    PaginationReact,
    EasyPay
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
        </>
    )
}

export default Home
