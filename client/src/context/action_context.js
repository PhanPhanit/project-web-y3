import React, { useContext, useReducer } from "react";
import reducer from '../reducers/action_reducer';
import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from '../action';

const initialState = {
    isOpenSidebar: false
};
const ActionContext = React.createContext();
export const ActionProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const openSidebar = () => {
        dispatch({type: OPEN_SIDEBAR})
    }
    const closSidebar = () => {
        dispatch({type: CLOSE_SIDEBAR});
    }
    return (
        <ActionContext.Provider value={{
            ...state,
            openSidebar,
            closSidebar
        }}>{children}</ActionContext.Provider>
    );
}
export const useActionContext = () => {
    return useContext(ActionContext);
}