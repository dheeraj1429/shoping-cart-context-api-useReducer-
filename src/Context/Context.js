import React, { useContext, useReducer } from "react";
import { AllProducts } from "./Products";
import Reducer from "./Reducer";
const Cart = React.createContext();

function Context({ children }) {
    const INITAL_STATE = {
        Products: AllProducts,
        cart: [],
        showCartSidebar: false,
    };

    const [state, dispatch] = useReducer(Reducer, INITAL_STATE);

    return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export const useContextState = () => {
    return useContext(Cart);
};

export default Context;
