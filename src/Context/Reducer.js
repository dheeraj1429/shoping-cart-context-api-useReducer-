const checkProductIsExiste = function (state, payload) {
    const exists = state.cart.find((el) => el.id === payload.id);
    if (exists) {
        return state.cart.map((el) =>
            el.id === payload.id
                ? { ...el, qty: el.qty + 1, totalPrice: el.totalPrice + el.Deal_of_the_Day }
                : el
        );
    }
    return [...state.cart, { ...payload, qty: 1, totalPrice: payload.Deal_of_the_Day }];
};

const Reducer = function (state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: checkProductIsExiste(state, action.payload),
            };

        case "SHOW_SIDE_BAR":
            return {
                ...state,
                showCartSidebar: action.payload,
            };

        case "REMOVE_CARD_ITEM":
            const removeSelectedProducts = state.cart.filter((el) => el.id !== action.payload);
            return {
                ...state,
                cart: removeSelectedProducts,
            };

        default:
            return {
                state,
            };
    }
};

export default Reducer;
