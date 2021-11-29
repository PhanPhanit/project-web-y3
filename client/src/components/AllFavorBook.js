import React from 'react'
import {AllFavorBookBox} from './index';
import {Pagination} from './index';
import '../styles/components/allFavorBook.css'
const AllFavorBook = () => {
    return (
        <section className="wrapper-global all-favor-book">
            {
                Array.from({length: 15}).map((item)=>{
                    return <AllFavorBookBox />
                })
            }
        </section>
    )
}

export default AllFavorBook
