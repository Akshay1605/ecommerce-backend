import axios from 'axios';

export const placeOrder = (order) => async (dispatch) => {
    const { data } = await axios.post('/api/orders', order);
    dispatch({ type: 'PLACE_ORDER', payload: data });
};

export const fetchOrders = () => async (dispatch) => {
    const { data } = await axios.get('/api/orders');
    dispatch({ type: 'FETCH_ORDERS', payload: data });
};
