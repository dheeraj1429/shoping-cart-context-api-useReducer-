import React from "react";
import * as card from "./ProductsCardComponent.style";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import { useContextState } from "../../Context/Context";

function ProductsCardComponent({ data }) {
    const { state, dispatch } = useContextState();

    const AddToCartHandler = function () {
        dispatch({ type: "ADD_TO_CART", payload: data });
    };

    const cartProduct = state.cart.find((el) => el.id == data.id);

    return (
        <card.div>
            <img src={data.posterUrl} alt="" />

            <card.content>
                <h1>{data.shortTitle.slice(0, 20)}...</h1>
                <p>{data.Discription.slice(0, 50)}...</p>
                <h5>
                    Rs. {data.Deal_of_the_Day} <span>{data.ragulerPrice}</span>
                </h5>
            </card.content>

            <CustomButtonComponent
                btnCl={`add-to-card-btn ${
                    cartProduct && !!cartProduct && !!cartProduct.qty
                        ? "product-in-cart"
                        : "not-selected"
                }`}
                InnerText={`Add To Cart ${
                    cartProduct && !!cartProduct && !!cartProduct.qty ? cartProduct.qty : ""
                }`}
                onClick={AddToCartHandler}
            />
        </card.div>
    );
}

export default ProductsCardComponent;
