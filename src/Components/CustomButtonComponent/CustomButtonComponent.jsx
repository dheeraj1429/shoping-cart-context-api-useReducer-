import React from "react";
import * as btn from "./CustomButtonComponent.style";

function CustomButtonComponent({ InnerText, btnCl, onClick }) {
    return (
        <btn.div>
            <btn.button className={btnCl} onClick={onClick}>
                {InnerText}
            </btn.button>
        </btn.div>
    );
}

export default CustomButtonComponent;
