import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import {
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [sellerDropdown, setSellerDropdown] = useState(false);

  const { isLoggedIn, isSeller, logout, cartCount } = useContext(StoreContext);

  const navLinks = ["Home", "Product", "Categories", "About Us", "Contact"];

  return (
    <nav className="fixed w-full z-50 bg-white/50 backdrop-blur-md border-b border-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-extrabold text-[#5DE23C]">
            Electro
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase().replace(" ", "")}`}
                className="text-gray-700 hover:text-[#5DE23C] font-medium"
              >
                {link}
              </Link>
            ))}

            {/* ❤️ Wishlist + 🛒 Cart ALWAYS VISIBLE */}
            <div className="flex items-center space-x-4 ml-6">
              <HeartIcon className="h-6 w-6 text-[#5DE23C]" />

              <Link to="/cart" className="relative">
                <ShoppingCartIcon className="h-6 w-6 text-[#5DE23C]" />

                {/* 🔥 Cart count ONLY when logged in */}
                {isLoggedIn && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* ================= LOGIN DROPDOWN ================= */}
            <div className="relative">
              <button
                onClick={() => setLoginDropdown(!loginDropdown)}
                className="px-4 py-2 bg-[#5DE23C] text-black rounded-md font-semibold flex items-center"
              >
                Login
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </button>

              {loginDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setLoginDropdown(false)}
                  >
                    Login
                  </Link>

                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setLoginDropdown(false)}
                  >
                    My Profile
                  </Link>

                  <button
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-b-md"
                    onClick={() => {
                      logout(); // ✅ call your logout function here
                      setLoginDropdown(false); // close the dropdown
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* ================= SELLER DROPDOWN ================= */}

            <div className="relative">
              <button
                onClick={() => setSellerDropdown(!sellerDropdown)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center"
              >
                Seller
                <ChevronDownIcon className="ml-2 h-4 w-4" />
              </button>

              {sellerDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <Link
                    to="/seller-login"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setSellerDropdown(false)}
                  >
                    Seller Login
                  </Link>

                  <Link
                    to="/seller-dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setSellerDropdown(false)}
                  >
                    Seller Dashboard
                  </Link>

                  <button
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                    onClick={() => {
                      handleLogout();
                      setSellerDropdown(false); // close the dropdown
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
