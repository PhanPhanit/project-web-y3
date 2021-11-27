import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from '../action';
const cart_reducer = (state, action) => {
    if(action.type===OPEN_SIDEBAR){
        return {...state, isOpenSidebar: true};
    }
    if(action.type===CLOSE_SIDEBAR){
        return {...state, isOpenSidebar: false};
    }
    throw new Error(`No Matching "${action.type}" - action type`);
}
export default cart_reducer;