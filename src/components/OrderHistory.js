import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get('/api/orders');  // Replace with your backend API URL
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };
    fetchOrderHistory();
  }, []);

  return (
    <div>
      <h1>Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id}>
              <h3>Order ID: {order._id}</h3>
              <p>Total Price: ${order.totalPrice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
