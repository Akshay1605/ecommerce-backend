const orderReducer = (state = [], action) => {
    switch (action.type) {
        case 'PLACE_ORDER':
            return [...state, action.payload];
        case 'FETCH_ORDERS':
            return action.payload;
        default:
            return state;
    }
};

export default orderReducer;
