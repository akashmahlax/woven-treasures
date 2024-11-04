// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold">Woven Treasures</h3>
        <p className="mt-2">Bringing elegance to your home with our unique creations.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#facebook" className="hover:text-gray-400">Facebook</a>
          <a href="#instagram" className="hover:text-gray-400">Instagram</a>
          <a href="#twitter" className="hover:text-gray-400">Twitter</a>
        </div>
        <p className="mt-4 text-gray-500">&copy; 2024 Woven Treasures. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;