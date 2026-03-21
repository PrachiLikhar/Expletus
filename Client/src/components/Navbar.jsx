import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  Heart,
  Menu,
  X,
  User,
  Cpu,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Explore", href: "#" },
    { name: "Laptops", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Gaming Zone", href: "#", new: true },
    { name: "Support", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-700 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo Section - Indigo to Cyan Gradient */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-gradient-to-br from-indigo-500 to-cyan-400 p-2 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-cyan-400/60 transition-all">
            <Cpu size={22} className="text-white" />
          </div>
          <h1 className="text-2xl font-black tracking-widest text-white uppercase">
            Tech<span className="text-cyan-400">Nex</span>
          </h1>
        </div>

        {/* Desktop Navigation - Glassy Hover */}
        <ul className="hidden lg:flex gap-10 font-medium text-slate-300">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="hover:text-cyan-300 transition-all flex items-center gap-1.5"
              >
                {link.name}
                {link.new && (
                  <Sparkles
                    size={14}
                    className="text-yellow-400 animate-pulse"
                  />
                )}
              </a>
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Neon Search Bar */}
          <div className="hidden md:flex items-center bg-slate-800/50 border border-slate-600 focus-within:border-cyan-400 px-4 py-2 rounded-lg w-56 transition-all duration-300 shadow-inner">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search tech..."
              className="bg-transparent outline-none ml-2 w-full text-sm text-white placeholder-slate-500"
            />
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            {/* Wishlist */}
            <motion.div
              whileHover={{ scale: 1.2, color: "#22d3ee" }}
              className="relative cursor-pointer"
            >
              <Heart size={20} />
              <span className="absolute -top-2 -right-2 text-[9px] bg-indigo-600 text-white h-4 w-4 flex items-center justify-center rounded-full border border-slate-900 font-bold">
                5
              </span>
            </motion.div>

            {/* Cart with Glow */}
            <motion.div
              whileHover={{ scale: 1.2, color: "#22d3ee" }}
              className="relative cursor-pointer"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 text-[9px] bg-cyan-500 text-slate-900 h-4 w-4 flex items-center justify-center rounded-full border border-slate-900 font-bold">
                2
              </span>
            </motion.div>

            {/* Profile Button */}
            <button
              onClick={() => navigate("/login")}
              className="hidden sm:flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 px-3 py-1.5 rounded-lg transition-all"
            >
              <User size={18} className="text-cyan-400" />
              <span className="text-sm font-semibold">Account</span>
            </button>

            {/* Mobile Menu Icon */}
            <div
              className="lg:hidden text-white cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-slate-900 z-[60] shadow-2xl lg:hidden p-8 border-l border-slate-700"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <X onClick={() => setIsOpen(false)} className="text-slate-400" />
            </div>
            <div className="flex flex-col gap-8 text-lg text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-700" />
              <button className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/20">
                Join Community
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
