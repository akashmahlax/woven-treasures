// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to Woven Treasures</h1>
          <p className="mt-4 text-lg text-gray-600">Discover unique, handcrafted pieces to enhance your living space.</p>
          <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700">Shop Now</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Banner" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;