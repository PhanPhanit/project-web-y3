import React, {useContext, useReducer, useEffect} from 'react';
import axios from 'axios';
import reducer from '../reducers/product_reducer';

import {
    NEW_ARRIVAL_SET_LOADING,
    NEW_ARRIVAL_SET_ERROR,
    NEW_ARRIVAL_SET_PRODUCT,
    SET_LOADING_ALL_FAVOR_BOOK,
    SET_ERROR_ALL_FAVOR_BOOK,
    SET_PRODUCT_ALL_FAVOR_BOOK,
    SET_NEW_ARRIVAL_PAGE
} from '../action';

const initailState = {
    new_arrival: {
        product_new_arrival: [],
        loading: false,
        error: false
    },
    all_favorit_book: {
        product_favorit: [],
        loading: false,
        error: false,
        total_page: 0,
        current_page: 1
    }
}


const ProductContext = React.createContext();
const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initailState);


    const fetchProductNewArrive = async () => {
        dispatch({type: NEW_ARRIVAL_SET_LOADING, payload: true})
        try {
            const {data:{product: new_arrival}} = await axios.get('/api/v1/product?limit=10&sort=-createdAt');
            dispatch({type: NEW_ARRIVAL_SET_ERROR, payload: false});
            dispatch({type: NEW_ARRIVAL_SET_PRODUCT, payload: new_arrival});
        } catch (error) {
            dispatch({type: NEW_ARRIVAL_SET_ERROR, payload: true})
        }
        dispatch({type: NEW_ARRIVAL_SET_LOADING, payload: false})
    }

    const fetchProductAllFavorBook = async (page) => {
        dispatch({type: SET_LOADING_ALL_FAVOR_BOOK, payload: true})
        try {
            const {data} = await axios.get(`/api/v1/product?limit=15&page=${page}`);
            dispatch({type: SET_ERROR_ALL_FAVOR_BOOK, payload: false})
            dispatch({type: SET_PRODUCT_ALL_FAVOR_BOOK, payload: data});
        } catch (error) {
            dispatch({type: SET_ERROR_ALL_FAVOR_BOOK, payload: true})
        }
        dispatch({type: SET_LOADING_ALL_FAVOR_BOOK, payload: false})
    }

    const setNewArrivalPage = (page) => {
        dispatch({type: SET_NEW_ARRIVAL_PAGE, payload: page});
    }

    useEffect(()=>{
        fetchProductAllFavorBook(state.all_favorit_book.current_page);
    }, [state.all_favorit_book.current_page]);

    useEffect(()=>{
        fetchProductNewArrive();
    }, []);

    return <ProductContext.Provider value={{
        ...state,
        setNewArrivalPage
    }}>{children}</ProductContext.Provider>
}

const useProductContext = () => {
    return useContext(ProductContext);
}

export {
    ProductProvider,
    useProductContext
}