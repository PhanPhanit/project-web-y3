import React from 'react'
import {AllFavorBookBox} from './index';
import '../styles/allFavorBook.css'
import {useProductContext} from '../context/product_context';
const AllFavorBook = () => {
    const {all_favorit_book:{product_favorit, loading}} = useProductContext();
    if(loading){
        return (
            <secton className="wrapper-global loading-all-favor-boox">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </secton>
        )
    }
    return (
        <section className="wrapper-global all-favor-book">
            {
                product_favorit.map((item)=>{
                    return <AllFavorBookBox {...item} />
                })
            }
        </section>
    )
}

export default AllFavorBook
