import React from "react";
import { Heart, ShoppingCart, Star, Eye, Zap } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    tag: "Flagship",
    price: 159900,
    oldPrice: 169900,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc",
  },
  {
    id: 2,
    name: "MacBook Pro M3",
    tag: "Workstation",
    price: 199900,
    oldPrice: 220000,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 3,
    name: "Sony XM5 Wireless",
    tag: "Audio",
    price: 29999,
    oldPrice: 34999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 4,
    name: "Galaxy Watch 6",
    tag: "Wearable",
    price: 34999,
    oldPrice: 39999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1544117518-30dd0f7358a2",
  },
];

const Products = () => {
  return (
    <section className="relative bg-[#0f172a] py-24 px-6 md:px-10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Modern Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-widest uppercase text-xs mb-3">
              <Zap size={14} className="fill-current" />
              <span>Trending Now</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Innovations
              </span>
            </h2>
          </motion.div>
          <button className="hidden md:block text-slate-400 hover:text-cyan-400 font-semibold border-b border-slate-700 hover:border-cyan-400 transition-all pb-1">
            Browse All Hardware
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const discount = Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            );

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-800/30 border border-slate-700/50 rounded-[2rem] p-4 backdrop-blur-sm hover:bg-slate-800/60 hover:border-cyan-500/40 transition-all duration-500"
              >
                {/* Badge & Actions */}
                <div className="relative h-64 w-full rounded-[1.5rem] overflow-hidden mb-6 bg-slate-900">
                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 z-20 bg-cyan-500 text-slate-950 font-black text-[10px] px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-lg">
                    {discount}% OFF
                  </div>

                  {/* Hidden Hover Menu */}
                  <div className="absolute inset-0 z-10 bg-slate-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white text-slate-950 rounded-full shadow-xl"
                    >
                      <ShoppingCart size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-slate-900 text-white rounded-full shadow-xl border border-slate-700"
                    >
                      <Eye size={20} />
                    </motion.button>
                  </div>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Wishlist Button */}
                  <button className="absolute bottom-3 right-3 z-20 p-2.5 bg-slate-900/80 backdrop-blur-md rounded-full text-slate-300 hover:text-red-500 transition-colors border border-white/10">
                    <Heart size={18} />
                  </button>
                </div>

                {/* Product Content */}
                <div className="px-2">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {product.tag}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-900/50 px-2 py-1 rounded-lg border border-slate-700">
                      <Star
                        size={12}
                        className="text-yellow-400 fill-current"
                      />
                      <span className="text-xs font-bold text-slate-300">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-3 mt-4">
                    <span className="text-2xl font-black text-white">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Add to Cart Button (Appears on Hover for Mobile/Desktop feel) */}
                  <motion.button className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-sm tracking-wide shadow-[0_10px_20px_rgba(79,70,229,0.2)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    ADD TO CART
                  </motion.button>
                </div>

                {/* Inner Glow Card Shadow */}
                <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-cyan-500/20 transition-all pointer-events-none shadow-[0_0_30px_rgba(34,211,238,0.05)]"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
