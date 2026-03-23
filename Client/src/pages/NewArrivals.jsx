import React from "react";
import Navbar from "../components/Navbar";
import { Sparkles, ShoppingCart, Star, Zap, Eye } from "lucide-react";
import { motion } from "framer-motion";

const newProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: "₹1,59,900",
    rating: 4.9,
    reviews: 1240,
    tag: "Most Loved",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    name: "MacBook Pro M3 Max",
    brand: "Apple",
    price: "₹3,49,900",
    rating: 5.0,
    reviews: 850,
    tag: "Powerhouse",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: "₹29,990",
    rating: 4.8,
    reviews: 2100,
    tag: "Noise Cancelling",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 6",
    brand: "Samsung",
    price: "₹32,999",
    rating: 4.7,
    reviews: 560,
    tag: "Best Wearable",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=500",
  },
];

const NewArrivals = () => {
  return (
    <div className="bg-[#0b1120] min-h-screen text-slate-200 selection:bg-cyan-500/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Animated Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-widest uppercase">
            <Zap size={14} className="fill-cyan-400" /> Latest Tech 2026
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            New{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
              Arrivals
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Experience the future today. Discover our handpicked collection of
            the world's most advanced gadgets.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Outer Glow - Only visible on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></div>

              {/* Main Card */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-5 h-full flex flex-col hover:border-slate-700 transition duration-300">
                {/* Image Section */}
                <div className="relative h-56 w-full rounded-[2rem] overflow-hidden bg-slate-800 mb-6">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Floating Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <button className="p-3 bg-white text-black rounded-full hover:bg-cyan-500 hover:text-white transition-colors">
                      <Eye size={20} />
                    </button>
                    <button className="p-3 bg-white text-black rounded-full hover:bg-cyan-500 hover:text-white transition-colors">
                      <ShoppingCart size={20} />
                    </button>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 px-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[2px]">
                      {item.brand}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                      <Star size={12} className="fill-yellow-500" />{" "}
                      {item.rating}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4 line-clamp-1">
                    {item.name}
                  </h3>

                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <p className="text-slate-500 text-[10px] font-medium uppercase mb-0.5">
                        Price
                      </p>
                      <p className="text-2xl font-black text-white">
                        {item.price}
                      </p>
                    </div>

                    <button className="relative overflow-hidden group/btn bg-slate-800 p-4 rounded-2xl hover:bg-cyan-500 transition-all duration-300 active:scale-90">
                      <ShoppingCart
                        size={20}
                        className="text-white group-hover/btn:scale-110 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 border border-slate-700 rounded-full font-bold text-slate-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-2xl">
            Explore Full Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
