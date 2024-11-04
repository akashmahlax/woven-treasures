// src/pages/OrderConfirmation.js
import React from 'react';

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Your Order!</h2>
      <p className="text-gray-600 mb-8">
        Your order has been successfully placed. We’ll send you an email with the order details shortly.
      </p>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300">
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderConfirmation;
