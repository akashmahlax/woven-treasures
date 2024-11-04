// src/components/Newsletter.js
import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stay Updated
        </motion.h2>
        <motion.p
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Sign up for our newsletter to receive exclusive offers and updates.
        </motion.p>
        <motion.form
          className="max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded mb-4 text-gray-800"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;
