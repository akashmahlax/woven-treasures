// src/components/Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, text: "Beautiful products! My home feels more vibrant.", author: "John Doe" },
  { id: 2, text: "Amazing craftsmanship and quality.", author: "Jane Smith" },
  { id: 3, text: "Love the unique designs!", author: "Emily Johnson" }
];

const Testimonials2 = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
              <h4 className="mt-4 font-bold text-gray-800">{testimonial.author}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
