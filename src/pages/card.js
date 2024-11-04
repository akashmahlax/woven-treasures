// src/components/ProductCard.js

// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ image, title, description, price}) => {
  return (
    <div className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-contain rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-blue-600">{price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition duration-200 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
