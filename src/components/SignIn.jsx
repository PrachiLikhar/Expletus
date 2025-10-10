import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-[#111111] rounded-3xl shadow-2xl p-10 border border-[#1F1F25]">
        <h2 className="text-3xl font-bold text-center text-[#5DE23C] mb-6">
          Sign In
        </h2>

        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-white font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-5 py-3 border border-[#5DE23C] bg-black text-white rounded-2xl focus:ring-2 focus:ring-[#5DE23C] outline-none placeholder-[#A0A0A0]"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-white font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-5 py-3 border border-[#5DE23C] bg-black text-white rounded-2xl focus:ring-2 focus:ring-[#5DE23C] outline-none placeholder-[#A0A0A0]"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-[#A0A0A0] text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-2xl text-black bg-[#5DE23C] hover:bg-[#4CC52F] transition duration-300 font-semibold"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Redirect */}
        <p className="text-center text-sm text-white mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#5DE23C] hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
