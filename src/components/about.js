// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Woven Treasures, we create unique, handcrafted pieces to bring warmth and style to every home.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
