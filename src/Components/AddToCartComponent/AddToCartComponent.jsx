import React from "react";
import * as items from "./AddToCartComponent.style";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { useContextState } from "../../Context/Context";

function AddToCartComponent({ data }) {
    const { dispatch } = useContextState();

    return (
        <items.div>
            <AiOutlineClose
                onClick={() => dispatch({ type: "REMOVE_CARD_ITEM", payload: data.id })}
            />
            <div>
                <img src={data.posterUrl} alt="" />
            </div>
            <div>
                <h5>{data.shortTitle.slice(0, 20)}</h5>
                <p>{data.Discription.slice(0, 30)}...</p>
                <span>
                    Rs. {data.totalPrice} x {data.qty}
                </span>
            </div>
        </items.div>
    );
}

export default AddToCartComponent;
