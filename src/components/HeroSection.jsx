import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center w-full">
        {/* Left: Text & Buttons */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#5DE23C]">
            Upgrade Your Tech Life
          </h1>
          <p className="text-gray-300 text-lg">
            Explore the latest electronics, gadgets, and accessories at
            unbeatable prices. Discover exclusive deals and top-rated products
            today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#5DE23C] text-black font-semibold rounded-lg hover:scale-105 transition transform">
              <ShoppingCartIcon className="h-5 w-5" /> Shop Now
            </button>
            <button className="px-6 py-3 border border-[#5DE23C] text-[#5DE23C] rounded-lg hover:bg-[#5DE23C] hover:text-black transition">
              Explore Deals
            </button>
          </div>

          {/* Search bar */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <input
              type="text"
              placeholder="Search for gadgets, accessories..."
              className="w-full lg:w-3/4 px-4 py-3 rounded-full bg-gray-900 placeholder-gray-400 text-white focus:ring-2 focus:ring-[#5DE23C] outline-none"
            />
          </div>
        </div>

        {/* Right: Product Image / Floating Cards */}
        <div className="lg:w-1/2 relative flex justify-center mt-10 lg:mt-0">
          <img
            src="/images/hero-laptop.png" // Replace with your hero image
            alt="Hero Product"
            className="w-full max-w-lg z-10"
          />

          {/* Floating product cards */}
          <div className="absolute top-0 right-10 w-32 h-40 bg-gray-900 rounded-xl shadow-xl p-3 flex flex-col justify-between hover:scale-105 transition transform">
            <img
              src="/images/headphones.png"
              alt="Headphones"
              className="w-12 h-12 mx-auto mt-2"
            />
            <p className="text-white font-semibold text-center mt-2">$99</p>
          </div>
          <div className="absolute bottom-10 left-10 w-32 h-40 bg-gray-900 rounded-xl shadow-xl p-3 flex flex-col justify-between hover:scale-105 transition transform">
            <img
              src="/images/smartwatch.png"
              alt="Smartwatch"
              className="w-12 h-12 mx-auto mt-2"
            />
            <p className="text-white font-semibold text-center mt-2">$149</p>
          </div>
        </div>
      </div>
    </section>
  );
}
