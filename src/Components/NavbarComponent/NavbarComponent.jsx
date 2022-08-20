import React from "react";
import * as nav from "./NavbarComponent.style";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import Badge from "@mui/material/Badge";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { useContextState } from "../../Context/Context";
import CartSidebarComponent from "../cartSidebarComponent/cartSidebarComponent";

function NavbarComponent() {
    const { state, dispatch } = useContextState();

    const ShowCartHandler = function () {
        dispatch({ type: "SHOW_SIDE_BAR", payload: true });
    };

    return (
        <nav.div>
            <div>Logo</div>
            <div>
                <SearchBarComponent />
            </div>
            <div>
                <Badge
                    badgeContent={
                        state && state?.cart && state?.cart?.length ? state.cart.length : 0
                    }
                    color="primary"
                >
                    <FiShoppingCart onClick={ShowCartHandler} />
                    <CartSidebarComponent show={state.showCartSidebar} />
                </Badge>
            </div>
        </nav.div>
    );
}

export default NavbarComponent;
