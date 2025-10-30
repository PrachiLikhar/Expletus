import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    alert(`Logged in as ${email}`);
    navigate("/"); // ya "/admin" agar admin page chahiye
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4">
      <div className="bg-[#111111] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-[#5DE23C]/30">
        <h2 className="text-3xl font-bold text-center text-[#5DE23C] mb-6">
          Sign In
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl bg-[#1A1A1A] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#5DE23C]"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 rounded-xl bg-[#1A1A1A] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#5DE23C]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-[#5DE23C] text-black font-semibold hover:bg-[#4CC52F] transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#5DE23C] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
