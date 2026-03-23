// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ShoppingCart,
//   Search,
//   Heart,
//   Menu,
//   X,
//   User,
//   Cpu,
//   Sparkles,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const navLinks = [
//     { name: "Explore", href: "#" },
//     { name: "Laptops", href: "#" },
//     { name: "Accessories", href: "#" },
//     { name: "Gaming Zone", href: "#", new: true },
//     { name: "Support", href: "#" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-700 shadow-xl">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
//         {/* Logo Section - Indigo to Cyan Gradient */}
//         <div className="flex items-center gap-2 group cursor-pointer">
//           <div className="bg-gradient-to-br from-indigo-500 to-cyan-400 p-2 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-cyan-400/60 transition-all">
//             <Cpu size={22} className="text-white" />
//           </div>
//           <h1 className="text-2xl font-black tracking-widest text-white uppercase">
//             Tech<span className="text-cyan-400">Nex</span>
//           </h1>
//         </div>

//         {/* Desktop Navigation - Glassy Hover */}
//         <ul className="hidden lg:flex gap-10 font-medium text-slate-300">
//           {navLinks.map((link) => (
//             <li key={link.name} className="relative group">
//               <a
//                 href={link.href}
//                 className="hover:text-cyan-300 transition-all flex items-center gap-1.5"
//               >
//                 {link.name}
//                 {link.new && (
//                   <Sparkles
//                     size={14}
//                     className="text-yellow-400 animate-pulse"
//                   />
//                 )}
//               </a>
//               {/* Animated Underline */}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
//             </li>
//           ))}
//         </ul>

//         {/* Right Actions */}
//         <div className="flex items-center gap-4">
//           {/* Neon Search Bar */}
//           <div className="hidden md:flex items-center bg-slate-800/50 border border-slate-600 focus-within:border-cyan-400 px-4 py-2 rounded-lg w-56 transition-all duration-300 shadow-inner">
//             <Search size={18} className="text-slate-400" />
//             <input
//               type="text"
//               placeholder="Search tech..."
//               className="bg-transparent outline-none ml-2 w-full text-sm text-white placeholder-slate-500"
//             />
//           </div>

//           <div className="flex items-center gap-4 text-slate-300">
//             {/* Wishlist */}
//             <motion.div
//               onClick={() => navigate("/wishlist")}
//               whileHover={{ scale: 1.2, color: "#22d3ee" }}
//               className="relative cursor-pointer"
//             >
//               <Heart size={20} />
//               <span className="absolute -top-2 -right-2 text-[9px] bg-indigo-600 text-white h-4 w-4 flex items-center justify-center rounded-full border border-slate-900 font-bold">
//                 5
//               </span>
//             </motion.div>

//             {/* Cart with Glow */}
//             <motion.div
//               onClick={() => navigate("/cart")}
//               whileHover={{ scale: 1.2, color: "#22d3ee" }}
//               className="relative cursor-pointer"
//             >
//               <ShoppingCart size={20} />
//               <span className="absolute -top-2 -right-2 text-[9px] bg-cyan-500 text-slate-900 h-4 w-4 flex items-center justify-center rounded-full border border-slate-900 font-bold">
//                 2
//               </span>
//             </motion.div>

//             {/* Profile Button */}
//             <button
//               onClick={() => navigate("/login")}
//               className="hidden sm:flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 px-3 py-1.5 rounded-lg transition-all"
//             >
//               <User size={18} className="text-cyan-400" />
//               <span className="text-sm font-semibold">Account</span>
//             </button>

//             {/* Mobile Menu Icon */}
//             <div
//               className="lg:hidden text-white cursor-pointer"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//             className="fixed top-0 right-0 h-screen w-3/4 bg-slate-900 z-[60] shadow-2xl lg:hidden p-8 border-l border-slate-700"
//           >
//             <div className="flex justify-between items-center mb-10">
//               <h2 className="text-xl font-bold text-white">Menu</h2>
//               <X onClick={() => setIsOpen(false)} className="text-slate-400" />
//             </div>
//             <div className="flex flex-col gap-8 text-lg text-slate-300">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="hover:text-cyan-400 transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <hr className="border-slate-700" />
//               <button className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/20">
//                 Join Community
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  Heart,
  Menu,
  X,
  User,
  Cpu,
  Sparkles,
  ChevronDown,
  Package,
  LogOut,
  Settings,
  Truck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Shop By Category Data
  const categories = [
    {
      title: "Mobiles & Tablets",
      items: ["iPhones", "Android", "iPads", "Tablets"],
    },
    {
      title: "Laptops & PCs",
      items: ["Gaming Laptops", "MacBooks", "Workstations", "Monitors"],
    },
    {
      title: "Audio & Entertainment",
      items: ["Smart TVs", "Soundbars", "Bluetooth Speakers", "Headphones"],
    },
    {
      title: "Smart Tech",
      items: ["Smartwatches", "Smart Home", "VR Headsets", "Security Cams"],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl">
      {/* Top Thin Bar (Utility Menu) */}
      <div className="bg-slate-900/50 border-b border-slate-800/50 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-8 flex justify-between text-[11px] font-medium text-slate-400 uppercase tracking-widest">
          <div className="flex gap-6">
            <Link
              to="/track-order"
              className="hover:text-cyan-400 flex items-center gap-1"
            >
              <Truck size={12} /> Track Order
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/support" className="hover:text-cyan-400">
              Help Center
            </Link>
          </div>
          <div className="text-cyan-500/80 animate-pulse">
            Free shipping on orders above ₹49,999 🚀
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* 1. Logo Section */}
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="bg-gradient-to-br from-indigo-500 to-cyan-400 p-2 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <Cpu size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white uppercase">
            Tech<span className="text-cyan-400">Nex</span>
          </h1>
        </div>

        {/* 2. Main Navigation (Desktop) */}
        <ul className="hidden lg:flex items-center gap-8 font-semibold text-slate-300">
          {/* Mega Menu Trigger */}
          <li
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors py-2">
              Categories{" "}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isMegaMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-full -left-20 w-[600px] bg-slate-900 border border-slate-700 mt-2 p-8 rounded-3xl shadow-2xl grid grid-cols-2 gap-8"
                >
                  {categories.map((cat) => (
                    <div key={cat.title}>
                      <h3 className="text-cyan-400 text-xs font-black uppercase tracking-wider mb-3">
                        {cat.title}
                      </h3>
                      <ul className="space-y-2">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-slate-400 hover:text-white cursor-pointer transition-colors"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link to="/new" className="hover:text-cyan-400 transition-colors">
              New Arrivals
            </Link>
          </li>
          <li className="flex items-center gap-1.5 text-yellow-400">
            <Link to="/deals" className="hover:text-yellow-300">
              Hot Deals
            </Link>
            <Sparkles size={14} className="animate-pulse" />
          </li>
        </ul>

        {/* 3. Search Bar (Center-ish) */}
        <div className="hidden xl:flex items-center bg-slate-800/40 border border-slate-700 focus-within:border-cyan-500/50 px-4 py-2 rounded-2xl w-72 transition-all">
          <Search size={18} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search for gadgets..."
            className="bg-transparent outline-none ml-2 w-full text-sm text-white"
          />
        </div>

        {/* 4. Action Icons (Right) */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Wishlist */}
          <button
            onClick={() => navigate("/wishlist")}
            className="relative p-2 text-slate-300 hover:text-pink-500 transition-colors"
          >
            <Heart size={22} />
            <span className="absolute top-1 right-1 bg-pink-600 text-[10px] text-white h-4 w-4 rounded-full flex items-center justify-center font-bold border-2 border-[#0f172a]">
              5
            </span>
          </button>

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="group relative p-2 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <ShoppingCart size={22} />
            <span className="absolute top-1 right-1 bg-cyan-500 text-[10px] text-slate-900 h-4 w-4 rounded-full flex items-center justify-center font-bold border-2 border-[#0f172a]">
              2
            </span>
          </button>

          {/* User Account Dropdown */}
          <div className="hidden sm:block group relative">
            <button className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 p-1.5 pr-3 rounded-full transition-all">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center">
                <User size={18} className="text-white" />
              </div>
              <span className="text-xs font-bold text-slate-200">Rahul V.</span>
            </button>

            {/* Simple Account Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-slate-800 rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 rounded-xl">
                <Package size={16} /> My Orders
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 rounded-xl">
                <Settings size={16} /> Settings
              </button>
              <hr className="border-slate-800 my-1" />
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-xl">
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar (Slide-in) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[59]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 h-screen w-[300px] bg-slate-950 z-[60] p-8 border-l border-slate-800"
            >
              {/* Mobile Menu Content Here */}
              <h2 className="text-2xl font-black text-cyan-400 mb-10 uppercase">
                Menu
              </h2>
              <div className="flex flex-col gap-6 font-bold text-slate-300">
                <Link to="/explore" onClick={() => setIsOpen(false)}>
                  All Products
                </Link>
                <Link to="/categories" onClick={() => setIsOpen(false)}>
                  Categories
                </Link>
                <Link
                  to="/deals"
                  onClick={() => setIsOpen(false)}
                  className="text-yellow-400"
                >
                  Flash Sales
                </Link>
                <hr className="border-slate-800" />
                <Link to="/track-order" className="flex items-center gap-2">
                  <Truck size={18} /> Track Order
                </Link>
                <Link to="/account" className="flex items-center gap-2">
                  <User size={18} /> My Profile
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
