import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const OrderSummary = () => {
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Order Summary</h1>
      <div>
        {cart.items.map((item) => (
          <div key={item.product}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <h3>Total Price: ${totalPrice}</h3>
      <button>Place Order</button>
    </div>
  );
};

export default OrderSummary;
