// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.form
          className="max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
            rows="4"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
