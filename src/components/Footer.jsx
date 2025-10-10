import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-[#5DE23C] mb-4">Gizmora</h2>
          <p className="text-gray-400">
            Your one-stop shop for the latest electronics, gadgets, and
            accessories. Exclusive deals and premium quality products at your
            fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#5DE23C] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#5DE23C] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-[#5DE23C] transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/deals" className="hover:text-[#5DE23C] transition">
                Deals
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="hover:text-[#5DE23C] transition"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#5DE23C] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-[#5DE23C] mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/faq" className="hover:text-[#5DE23C] transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-[#5DE23C] transition">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-[#5DE23C] transition">
                Returns
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-[#5DE23C] transition">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-[#5DE23C] mb-4">
            Subscribe
          </h3>
          <p className="text-gray-400 mb-4">
            Get the latest deals and updates directly in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5DE23C]"
            />
            <button className="px-4 py-2 bg-[#5DE23C] text-black font-semibold rounded-r-lg hover:scale-105 transition transform">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Gizmora. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400">
          <a
            href="#"
            className="hover:text-[#5DE23C] transition transform hover:scale-110"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="hover:text-[#5DE23C] transition transform hover:scale-110"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="hover:text-[#5DE23C] transition transform hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
