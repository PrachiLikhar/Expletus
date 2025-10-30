import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="bg-[#111111] shadow-2xl rounded-2xl w-full max-w-md p-8 border border-[#5DE23C]/30">
        <h2 className="text-3xl font-bold text-center text-[#5DE23C] mb-6">
          Create an Account
        </h2>

        <form className="space-y-5">
          {/* Name Input */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-600 bg-black text-white rounded-xl focus:ring-2 focus:ring-[#5DE23C] outline-none placeholder-gray-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-600 bg-black text-white rounded-xl focus:ring-2 focus:ring-[#5DE23C] outline-none placeholder-gray-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-600 bg-black text-white rounded-xl focus:ring-2 focus:ring-[#5DE23C] outline-none placeholder-gray-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-xl text-black bg-[#5DE23C] hover:bg-[#4CC52F] transition duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Redirect */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#5DE23C] font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
