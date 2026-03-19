import React, { useEffect, useState } from "react";
import { ShoppingCart, Zap, Flame, Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 129999,
    stock: 85,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    price: 24999,
    stock: 40,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 3,
    name: "Rog Ally Z1 Extreme",
    price: 59999,
    stock: 15,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
  },
  {
    id: 4,
    name: "Apple Watch Ultra",
    price: 79999,
    stock: 60,
    image: "https://images.unsplash.com/photo-1544117518-30dd0f7358a2",
  },
];

const FlashSale = () => {
  const [time, setTime] = useState(7200);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (unit) => {
    if (unit === "hrs")
      return Math.floor(time / 3600)
        .toString()
        .padStart(2, "0");
    if (unit === "mins")
      return Math.floor((time % 3600) / 60)
        .toString()
        .padStart(2, "0");
    if (unit === "secs") return (time % 60).toString().padStart(2, "0");
  };

  return (
    <section className="relative bg-[#0f172a] py-24 px-6 md:px-10 overflow-hidden">
      {/* Animated Background Pulse */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8 bg-slate-800/40 p-8 rounded-[2.5rem] border border-slate-700/50 backdrop-blur-xl">
          <div className="flex items-center gap-5">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-600 p-4 rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.4)] animate-bounce">
              <Zap size={32} className="text-white fill-current" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase">
                Flash Sale
              </h2>
              <div className="flex items-center gap-2 text-orange-400 font-bold">
                <Flame size={18} />
                <span className="animate-pulse">DEALS ENDING SOON!</span>
              </div>
            </div>
          </div>

          {/* Digital Timer UI */}
          <div className="flex gap-4">
            {["hrs", "mins", "secs"].map((unit, i) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="bg-slate-900 border-2 border-slate-700 w-20 h-20 flex items-center justify-center rounded-2xl shadow-inner relative overflow-hidden">
                  <span className="text-3xl font-black text-cyan-400 font-mono tracking-widest">
                    {formatTime(unit)}
                  </span>
                  <div className="absolute top-1/2 w-full h-[1px] bg-slate-800"></div>
                </div>
                <span className="text-[10px] mt-2 font-black uppercase text-slate-500 tracking-[0.2em]">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="relative group bg-slate-900/50 rounded-[2rem] border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
            >
              {/* Product Image */}
              <div className="h-56 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                {/* Hot Badge */}
                <div className="absolute top-4 right-4 bg-red-600 text-[10px] font-black px-3 py-1 rounded-full text-white shadow-lg">
                  LTD EDITION
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-2xl font-black text-white">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-500 line-through">
                    ₹{(product.price + 5000).toLocaleString()}
                  </span>
                </div>

                {/* Stock Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
                    <span>Stock Left</span>
                    <span
                      className={
                        product.stock < 20 ? "text-red-500" : "text-cyan-400"
                      }
                    >
                      {product.stock}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${product.stock}%` }}
                      className={`h-full rounded-full bg-gradient-to-r ${
                        product.stock < 20
                          ? "from-red-500 to-orange-500"
                          : "from-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      }`}
                    ></motion.div>
                  </div>
                </div>

                {/* Cyber Button */}
                <button className="mt-8 w-full relative group/btn">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl blur opacity-30 group-hover/btn:opacity-100 transition duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2 bg-slate-900 py-3.5 rounded-xl font-bold text-white text-sm hover:bg-transparent transition duration-300">
                    <ShoppingCart
                      size={18}
                      className="group-hover/btn:rotate-12"
                    />
                    SECURE DEAL
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
