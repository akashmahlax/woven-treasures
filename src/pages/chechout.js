// src/pages/Checkout.js
import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping Address</h3>
          <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md mb-4" />
          <input type="text" placeholder="Address" className="w-full px-4 py-2 border rounded-md mb-4" />
          <input type="text" placeholder="City" className="w-full px-4 py-2 border rounded-md mb-4" />
          <input type="text" placeholder="Postal Code" className="w-full px-4 py-2 border rounded-md mb-4" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Details</h3>
          <input type="text" placeholder="Card Number" className="w-full px-4 py-2 border rounded-md mb-4" />
          <input type="text" placeholder="Card Holder Name" className="w-full px-4 py-2 border rounded-md mb-4" />
          <input type="text" placeholder="Expiry Date (MM/YY)" className="w-full px-4 py-2 border rounded-md mb-4" />
          <input type="text" placeholder="CVV" className="w-full px-4 py-2 border rounded-md mb-4" />
        </div>
      </form>
      <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-full shadow hover:bg-blue-700 transition duration-300">
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
