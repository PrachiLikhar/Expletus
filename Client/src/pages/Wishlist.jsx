import React from "react";
import Navbar from "../components/Navbar";
import { Trash2, ShoppingCart, Heart } from "lucide-react"; // Icons ke liye lucide-react install karein

const wishlistItems = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    category: "Mobile • Apple",
    price: "₹79,999",
    image:
      "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    name: "ROG Zephyrus G14",
    category: "Laptop • ASUS",
    price: "₹99,999",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=500",
  },
];

const Wishlist = () => {
  return (
    <div className="bg-[#0b1120] min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white flex items-center gap-3">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Wishlist
              </span>
              <Heart
                className="text-pink-500 fill-pink-500 animate-pulse"
                size={32}
              />
            </h2>
            <p className="text-slate-400 mt-2 text-lg">
              You have {wishlistItems.length} premium items saved.
            </p>
          </div>
          <button className="text-sm font-medium text-slate-400 hover:text-white transition-colors border-b border-slate-700 pb-1">
            Clear All Items
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-60"></div>

                {/* Remove Button (Top Right) */}
                <button className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full text-white/70 hover:text-red-500 hover:bg-white transition-all">
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Content Box */}
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-[2px] text-cyan-500 font-bold mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-bold text-xl text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-black text-white">
                    {item.price}
                  </span>
                </div>

                {/* Action Button */}
                <button className="mt-6 w-full group/btn relative flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-2xl overflow-hidden hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  <ShoppingCart size={20} />
                  <span>Move to Bag</span>
                </button>
              </div>
            </div>
          ))}

          {/* Empty State Suggestion (Optional Card) */}
          <div className="border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center p-8 text-center hover:bg-slate-900/30 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">+</span>
            </div>
            <p className="text-slate-500 font-medium">
              Add more items to your collection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
