import {
    NEW_ARRIVAL_SET_LOADING,
    NEW_ARRIVAL_SET_ERROR,
    NEW_ARRIVAL_SET_PRODUCT,
    SET_LOADING_ALL_FAVOR_BOOK,
    SET_ERROR_ALL_FAVOR_BOOK,
    SET_PRODUCT_ALL_FAVOR_BOOK,
    SET_NEW_ARRIVAL_PAGE,
    SET_SINGLE_PRODUCT_LOADING,
    SET_SINGLE_PRODUCT_ERROR,
    SET_SINGLE_PRODUCT
} from '../action';
const product_reducer = (state, action) => {
    if(action.type===NEW_ARRIVAL_SET_ERROR){
        return {...state, new_arrival: {...state.new_arrival, error: action.payload}}
    }
    if(action.type===NEW_ARRIVAL_SET_LOADING){
        return {...state, new_arrival: {...state.new_arrival, loading: action.payload}};
    }
    if(action.type===NEW_ARRIVAL_SET_PRODUCT){
        return {...state, new_arrival: {...state.new_arrival, product_new_arrival: action.payload}};
    }
    if(action.type===SET_ERROR_ALL_FAVOR_BOOK){
        return {...state, all_favorit_book: {...state.all_favorit_book, error: action.payload}};
    }
    if(action.type===SET_LOADING_ALL_FAVOR_BOOK){
        return {...state, all_favorit_book: {...state.all_favorit_book, loading: action.payload}};
    }
    if(action.type===SET_PRODUCT_ALL_FAVOR_BOOK){
        const {totalPage, product} = action.payload;
        return {
            ...state,
            all_favorit_book: {
                ...state.all_favorit_book,
                product_favorit: product,
                total_page: totalPage
            }
        };
    }
    if(action.type===SET_NEW_ARRIVAL_PAGE){
        return {
            ...state,
            all_favorit_book: {
                ...state.all_favorit_book,
                current_page: action.payload
            }
        }
    }
    if(action.type===SET_SINGLE_PRODUCT_LOADING){
        return {
            ...state,
            single_product: {
                ...state.single_product,
                loading: action.payload
            }
        }
    }
    if(action.type===SET_SINGLE_PRODUCT_ERROR){
        return {
            ...state,
            single_product: {
                ...state.single_product,
                error: action.payload
            }
        }
    }
    if(action.type===SET_SINGLE_PRODUCT){
        return {
            ...state,
            single_product: {
                ...state.single_product,
                product: action.payload
            }
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`);
}

export default product_reducer;