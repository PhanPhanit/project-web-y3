import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {AllFavorBookBox} from './index';
import '../styles/allFavorBook.css'
import {useProductContext} from '../context/product_context';
import {useCategoryContext} from '../context/category_context';
const AllFavorBook = () => {
    const {id: categoryId} = useParams();
    const {setCategoryId} = useCategoryContext();
    const {all_favorit_book:{product_favorit, loading}} = useProductContext();



    useEffect(()=>{
        if(categoryId){
            setCategoryId(categoryId);
        }else{
            setCategoryId("");
        }
    }, [categoryId])



    if(loading){
        return (
            <section className="wrapper-global loading-all-favor-boox">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </section>
        )
    }
    if(product_favorit.length<1){
        return (
            <section className="wrapper-global loading-all-favor-boox">
                <h2>No product</h2>
            </section>
        );
    }
    return (
        <section className="wrapper-global all-favor-book">
            {
                product_favorit.map((item)=>{
                    return <AllFavorBookBox key={item._id} {...item} />
                })
            }
        </section>
    )
}

export default AllFavorBook
