import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Star,
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 159900,
    oldPrice: 169900,
    rating: 4.9,
    reviews: "2,450",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc",
    desc: "Experience the next generation of iPhone with a stunning Titanium design, A17 Pro chip for gaming performance, and a pro-level camera system that captures every detail with precision.",
    specs: [
      "A17 Pro Chip",
      "6.7-inch Super Retina XDR",
      "48MP Main Camera",
      "Titanium Build",
    ],
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    price: 199900,
    oldPrice: 220000,
    rating: 5.0,
    reviews: "1,120",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    desc: "The most advanced chips ever built for a personal computer. MacBook Pro leaps forward with the M3, M3 Pro, and M3 Max chips—the first personal computer chips built using 3‑nanometer technology.",
    specs: [
      "Apple M3 Chip",
      "Up to 22h Battery Life",
      "Liquid Retina XDR",
      "Extreme Dynamic Range",
    ],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("256GB");
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#020617]">
        <h1 className="text-white text-2xl font-bold tracking-widest">
          PRODUCT NOT FOUND
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans selection:bg-cyan-500/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* --- LEFT: IMAGE SECTION --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-24 h-fit"
          >
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/50 p-4 shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-[2rem] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <button className="absolute top-6 right-6 p-4 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:text-red-500 transition-colors">
                <Heart size={24} />
              </button>
            </div>

            {/* Small Gallery / Features */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {product.specs.map((spec, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 border border-slate-800 p-3 rounded-2xl text-center"
                >
                  <p className="text-[10px] text-cyan-400 font-bold uppercase">
                    {spec}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT: INFO SECTION --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-cyan-400 font-black tracking-[0.2em] text-sm mb-2 uppercase">
              Official Technex Store
            </span>
            <h1 className="text-5xl font-black mb-4 tracking-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20 items-center gap-1.5">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="text-yellow-400 font-bold">
                  {product.rating}
                </span>
              </div>
              <span className="text-slate-500 font-medium">
                {product.reviews} verified reviews
              </span>
            </div>

            <div className="p-8 bg-slate-900/50 rounded-[2rem] border border-slate-800 mb-8">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-5xl font-black text-white italic">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xl text-slate-500 line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-green-400 font-bold text-sm">
                Save ₹
                {(product.oldPrice - product.price).toLocaleString("en-IN")}{" "}
                today!
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed text-lg mb-8">
              {product.desc}
            </p>

            {/* Variation Selection */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                Select Storage
              </h3>
              <div className="flex gap-4">
                {["128GB", "256GB", "512GB"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-xl border-2 transition-all font-bold ${
                      selectedSize === size
                        ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                        : "border-slate-800 hover:border-slate-600 text-slate-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-10">
              <button className="flex-1 flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black py-5 rounded-[1.5rem] transition-all transform active:scale-95 shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)]">
                <ShoppingCart size={22} /> ADD TO CART
              </button>
              <button className="flex-1 flex items-center justify-center gap-3 bg-white hover:bg-slate-200 text-black font-black py-5 rounded-[1.5rem] transition-all transform active:scale-95">
                <Zap size={22} fill="currentColor" /> BUY NOW
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 py-8 border-t border-slate-800">
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="text-cyan-400" size={24} />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  1 Year Warranty
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="text-cyan-400" size={24} />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Fast Delivery
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="text-cyan-400" size={24} />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  7 Days Return
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
