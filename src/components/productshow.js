// src/components/ProductShowcase.js
import React from 'react';

const products = [
  { id: 1, image: 'path-to-image1.jpg', title: 'Product 1', price: '$50' },
  { id: 2, image: 'path-to-image2.jpg', title: 'Product 2', price: '$60' },
  { id: 3, image: 'path-to-image3.jpg', title: 'Product 3', price: '$70' },
];

const ProductShowcase = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-8">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary">{product.title}</h3>
                <p className="text-xl text-secondary">{product.price}</p>
                <button className="mt-4 w-full bg-accent text-white py-2 rounded-lg hover:bg-opacity-90">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;