import React from "react";
import * as card from "./ProductsCart.style";
import ProductsCardComponent from "../ProductsCardComponent/ProductsCardComponent";
import { useContextState } from "../../Context/Context";

function ProductsCart() {
    const { state } = useContextState();

    return (
        <card.div>
            {state.Products && !!state.Products.length
                ? state.Products.map((el) => <ProductsCardComponent key={el.id} data={el} />)
                : null}
        </card.div>
    );
}

export default ProductsCart;
