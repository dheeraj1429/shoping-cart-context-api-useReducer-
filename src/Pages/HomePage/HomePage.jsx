import React from "react";
import * as home from "./HomePage.style";
import ProductsCart from "../../Components/ProductsCart/ProductsCart";

function HomePage() {
    return (
        <home.div>
            <ProductsCart />
        </home.div>
    );
}

export default HomePage;
