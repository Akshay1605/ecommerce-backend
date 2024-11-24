import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Thunk middleware for async actions
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';

// Combine reducers
const reducer = combineReducers({
    cart: cartReducer,
    orders: orderReducer,
});

// Initial state
const initialState = {
    cart: { items: [] },
    orders: [],
};

// Middleware
const middleware = [thunk];

// Integrate Redux DevTools (if available) or fallback to default compose
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
