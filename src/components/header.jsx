import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-gray-800">Woven Treasures</h1>
        <nav>
          <ul className="flex space-x-4 text-gray-600">
            <li><a href="#home" className="hover:text-gray-900">Home</a></li>
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
            <li><a href="#products" className="hover:text-gray-900">Products</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;