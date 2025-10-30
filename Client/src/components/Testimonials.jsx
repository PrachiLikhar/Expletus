import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Verified Buyer",
    feedback:
      "Amazing quality and super-fast delivery! Totally loved the experience. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Happy Customer",
    feedback:
      "Beautiful design and great service! The website is so easy to use. Will definitely shop again.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
  },
  {
    name: "Rohan Mehta",
    role: "Loyal User",
    feedback:
      "Best electronics collection with unbeatable prices. Customer support is also very helpful!",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 text-[#5DE23C] drop-shadow-[0_0_10px_#5DE23C]">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Real feedback from our valued users who trusted our service.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#5DE23C]/30 backdrop-blur-md hover:border-[#5DE23C] hover:shadow-[0_0_25px_#5DE23C55] transition-all duration-300"
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full border-2 border-[#5DE23C]"
              />
              <div>
                <h3 className="font-semibold text-lg text-[#5DE23C]">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-gray-300 mb-4 italic">"{t.feedback}"</p>

            {/* Rating Stars */}
            <div className="flex gap-1 text-yellow-500">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
