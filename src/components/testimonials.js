// src/components/Testimonials.js
import React from 'react';

const testimonials = [
  { id: 1, text: "Amazing quality and unique designs!", name: "Sarah" },
  { id: 2, text: "My home feels cozier with these additions.", name: "Mike" },
  { id: 3, text: "Absolutely love the craftsmanship.", name: "Laura" },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <p className="text-gray-600">"{testimonial.text}"</p>
              <p className="mt-4 font-bold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;