import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "Product",
    "Deals",
    "Categories",
    "About Us",
    "Contact",
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/20 backdrop-blur-md border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-[#5DE23C] tracking-wide"
          >
            Gizmora
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* 🔹 Navigation Links with custom color */}
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase().replace(" ", "")}`}
                className="text-white relative hover:text-[#5DE23C] font-medium transition before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-[#5DE23C] hover:before:w-full before:transition-all"
              >
                {link}
              </Link>
            ))}

            {/* 🔸 Icons with a different color */}
            <div className="flex items-center space-x-4 ml-4">
              <Link to="/wishlist" className="group relative">
                <HeartIcon className="h-6 w-6 text-[#5DE23C] group-hover:text-[#4CC52F] transition transform group-hover:scale-110" />
              </Link>
              <Link to="/cart" className="group relative">
                <ShoppingCartIcon className="h-6 w-6 text-[#5DE23C] group-hover:text-[#4CC52F] transition transform group-hover:scale-110" />
              </Link>
            </div>

            {/* Buttons */}
            <Link
              to="/signin"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-[#5DE23C] to-[#4CC52F] text-black font-semibold hover:scale-105 transition transform"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-md border-2 border-[#5DE23C] text-[#5DE23C] font-semibold hover:bg-[#5DE23C] hover:text-white transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)} className="text-black/90">
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-black shadow-lg p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-xl font-bold text-[#5DE23C]">
            Gizmora
          </Link>
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-700 rounded-md px-3 py-2 mb-4">
          <MagnifyingGlassIcon className="h-5 w-5 text-[#5DE23C]" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full outline-none text-white placeholder-gray-500 bg-transparent"
          />
        </div>

        {/* Nav Links */}
        <div className="space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase().replace(" ", "")}`}
              className="block text-gray-300 font-medium hover:text-[#5DE23C]"
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 mt-4">
          <HeartIcon className="h-6 w-6 text-[#5DE23C] hover:text-[#4CC52F] transition transform hover:scale-110" />
          <ShoppingCartIcon className="h-6 w-6 text-[#5DE23C] hover:text-[#4CC52F] transition transform hover:scale-110" />
        </div>

        {/* Buttons */}
        <Link
          to="/signin"
          className="block w-full text-center bg-[#5DE23C] text-black px-4 py-2 rounded-md mt-4 hover:scale-105 transition transform"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="block w-full text-center border border-[#5DE23C] text-[#5DE23C] px-4 py-2 rounded-md mt-2 hover:bg-[#5DE23C] hover:text-white transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
