import React, {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom';
import Finance from '../images/finance.svg';
import '../styles/categorySection.css';
import {useCategoryContext} from '../context/category_context';


const CategorySection = () => {
    const param = useParams();
    const {category, category_loading, setCategoryExist, setCategoryId} = useCategoryContext();
    useEffect(()=>{
        if(!category_loading){
            const categoryExist = category.find(item=>param.id===item._id);
            if(!categoryExist){
                setCategoryExist(false)
                setCategoryId("");
            }else{
                setCategoryExist(true);
                setCategoryId(param.id)
            }
        }
    }, [param, category_loading]);
    return (
        <section className="wrapper-global section-cate-wrap">
            {
                category.map((item)=>{
                    const {_id: categoryId, name, image} = item;
                    return (
                        <Link to={`/categories/${categoryId}`} key={categoryId}>
                            <div className={param.id===item._id? "cate-box active":"cate-box"}>
                                <img src={image} alt={name} />
                                <h3>{name}</h3>
                            </div>
                        </Link>
                    );
                })
            }
        </section>
    )
}

export default CategorySection
