import React from "react";
import ReactDOM from "react-dom";
import * as bar from "./cartSidebarComponent.style";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { useContextState } from "../../Context/Context";
import AddToCartComponent from "../AddToCartComponent/AddToCartComponent";

function CartSidebarComponent({ show }) {
    const { state, dispatch } = useContextState();

    console.log();

    return ReactDOM.createPortal(
        <bar.div show={show}>
            <bar.sidebar show={show}>
                <AiOutlineClose
                    onClick={() => dispatch({ type: "SHOW_SIDE_BAR", payload: false })}
                />

                <h1>{`Price : ${
                    state && state.cart && !!state.cart.length
                        ? state.cart.map((el) => el.totalPrice).reduce((acc, crv) => acc + crv)
                        : 0
                }`}</h1>

                {state.cart && !!state.cart.length
                    ? state.cart.map((el) => <AddToCartComponent key={el.id} data={el} />)
                    : null}
            </bar.sidebar>
        </bar.div>,
        document.getElementById("sidebar-portal")
    );
}

export default CartSidebarComponent;
