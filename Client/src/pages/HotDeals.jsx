import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Flame, Clock, Zap, Gift, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const dealsProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    oldPrice: 159900,
    newPrice: 129999,
    discount: "18%",
    stockLeft: 4,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
  },
  {
    id: 2,
    name: "ROG Zephyrus G14",
    oldPrice: 145000,
    newPrice: 99999,
    discount: "31%",
    stockLeft: 12,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    oldPrice: 34999,
    newPrice: 24999,
    discount: "28%",
    stockLeft: 25,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
  },
];

const HotDeals = () => {
  const [time, setTime] = useState(7200);

  useEffect(() => {
    const timer = setInterval(
      () => setTime((prev) => (prev > 0 ? prev - 1 : 0)),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { h, m, s };
  };

  const { h, m, s } = formatTime(time);

  return (
    <div className="bg-[#0b1120] min-h-screen text-slate-200 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-10">
        {/* 🔥 NEW HERO BANNER */}
        <div className="relative overflow-hidden bg-gradient-to-br from-red-600 to-orange-600 rounded-[2.5rem] p-1 shadow-[0_0_50px_rgba(239,68,68,0.2)]">
          <div className="bg-slate-950/40 backdrop-blur-md rounded-[2.4rem] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-black animate-bounce">
                <Zap size={14} fill="white" /> FLASH SALE LIVE
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                THE{" "}
                <span className="text-red-500 underline decoration-white/20">
                  MEGA
                </span>{" "}
                DROP
              </h2>
              <p className="text-slate-300 text-lg md:text-xl font-medium">
                Extra 20% discount for first 100 customers.
              </p>
            </div>

            {/* Premium Countdown Timer */}
            <div className="flex gap-4">
              {[h, m, s].map((unit, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-white text-slate-950 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-black shadow-xl">
                    {unit.toString().padStart(2, "0")}
                  </div>
                  <span className="text-[10px] mt-2 font-bold uppercase tracking-widest text-slate-400">
                    {["Hours", "Mins", "Secs"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ⏳ FLASH DEALS GRID */}
        <div className="mt-16">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="text-3xl font-black text-white flex items-center gap-3">
                <Flame
                  className="text-orange-500 animate-pulse"
                  fill="#f97316"
                />{" "}
                Limited Deals
              </h3>
              <p className="text-slate-500 font-medium">
                Handpicked deals at bottom-low prices.
              </p>
            </div>
            <button className="text-red-500 font-bold hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {dealsProducts.map((item) => (
              <div
                key={item.id}
                className="group relative bg-slate-900/50 border border-slate-800 rounded-[2rem] p-5 hover:border-red-500/50 transition-all duration-500"
              >
                {/* Product Image & Badge */}
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl">
                    SAVE {item.discount}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.name}
                </h3>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-black text-white">
                    ₹{item.newPrice.toLocaleString()}
                  </span>
                  <span className="text-slate-500 line-through font-medium">
                    ₹{item.oldPrice.toLocaleString()}
                  </span>
                </div>

                {/* STOCK PROGRESS BAR (Unique Feature) */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-tighter">
                    <span className="text-red-400">Low Stock</span>
                    <span className="text-slate-500">
                      {item.stockLeft} items left
                    </span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.stockLeft / 30) * 100}%` }}
                      className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                    />
                  </div>
                </div>

                <button className="w-full py-4 bg-white text-black font-black rounded-2xl group-hover:bg-red-500 group-hover:text-white transition-all active:scale-95 shadow-lg">
                  GRAB DEAL NOW
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 🎁 FLOATING OFFERS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 border border-indigo-500/30 p-8 rounded-[2rem] flex items-center gap-6 group hover:scale-[1.02] transition-transform">
            <div className="bg-indigo-500 p-4 rounded-2xl shadow-lg">
              <ShieldCheck size={32} className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Card Protection</h4>
              <p className="text-slate-400 text-sm">
                Secure your gadgets with TechNex Shield.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-purple-500/30 p-8 rounded-[2rem] flex items-center gap-6 group hover:scale-[1.02] transition-transform">
            <div className="bg-purple-500 p-4 rounded-2xl shadow-lg">
              <Gift size={32} className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Bundle & Save</h4>
              <p className="text-slate-400 text-sm">
                Buy accessories and get 50% OFF.
              </p>
            </div>
          </div>
        </div>

        {/* 🧨 UNDER BUDGET TABS */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-black text-white mb-8 italic uppercase tracking-widest">
            Bargain Basement
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["999", "4,999", "9,999", "19,999"].map((price, i) => (
              <button
                key={i}
                className="px-8 py-3 bg-slate-900 border border-slate-800 rounded-2xl font-bold hover:border-red-500 transition-all text-sm group"
              >
                DEALS UNDER{" "}
                <span className="text-red-500 group-hover:text-white ml-1">
                  ₹{price}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
