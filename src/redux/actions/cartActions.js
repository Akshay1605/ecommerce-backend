export const addToCart = (product, quantity) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_TO_CART',
        payload: {
            product: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
        },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: id,
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.items));
};
