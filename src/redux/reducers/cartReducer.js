const cartReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = action.payload;
            const existingItem = state.items.find((i) => i.product === item.product);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map((i) =>
                        i.product === existingItem.product ? item : i
                    ),
                };
            } else {
                return { ...state, items: [...state.items, item] };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter((i) => i.product !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
