import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphonesAlt,
  FaTabletAlt,
  FaTv,
  FaCamera,
} from "react-icons/fa";

const categories = [
  { name: "Smartphones", icon: <FaMobileAlt size={38} /> },
  { name: "Laptops", icon: <FaLaptop size={38} /> },
  { name: "Headphones", icon: <FaHeadphonesAlt size={38} /> },
  { name: "Tablets", icon: <FaTabletAlt size={38} /> },
  { name: "Smart TVs", icon: <FaTv size={38} /> },
  { name: "Cameras", icon: <FaCamera size={38} /> },
];

export default function TopCategoriesDark() {
  return (
    <section className="bg-black py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#5DE23C] mb-12 tracking-wide">
          ⚡ Top Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-br from-[#5DE23C]/20 to-transparent p-[2px] rounded-2xl shadow-[0_0_20px_#5DE23C40] hover:shadow-[0_0_25px_#5DE23C90] transition-all duration-500"
            >
              <div className="bg-[#111111] rounded-2xl flex flex-col items-center justify-center py-10 hover:bg-[#0f0f0f] transition-all duration-500">
                <div className="text-[#5DE23C] group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <p className="mt-4 font-semibold text-gray-200 text-sm sm:text-base group-hover:text-[#5DE23C] transition-colors duration-300">
                  {cat.name}
                </p>
              </div>

              {/* Neon Border Glow Effect */}
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-40 bg-[#5DE23C]/30 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
