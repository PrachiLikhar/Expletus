import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✔️ Take cartCount from context (not import!)
  const { isLoggedIn, logout, cartCount } = useContext(StoreContext);

  const navLinks = [
    "Home",
    "Product",
    "Deals",
    "Categories",
    "About Us",
    "Contact",
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/30 backdrop-blur-md border-b border-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-extrabold text-[#5DE23C]">
            Gizmora
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase().replace(" ", "")}`}
                className="text-white hover:text-[#5DE23C] font-medium transition-colors"
              >
                {link}
              </Link>
            ))}

            <div className="flex items-center space-x-4 ml-6">
              <HeartIcon className="h-6 w-6 text-[#5DE23C]" />

              {/* 🛒 Cart Icon with Counter */}
              <div className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-[#5DE23C]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>

            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="px-4 py-2 bg-white text-black rounded-md font-semibold shadow hover:bg-gray-100 transition"
                >
                  My Profile
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold shadow hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-[#5DE23C] text-black rounded-md font-semibold shadow hover:bg-green-400 transition"
                >
                  Login
                </Link>
                <Link to="/seller-login">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold shadow hover:bg-blue-700 transition">
                    Become a Seller
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
