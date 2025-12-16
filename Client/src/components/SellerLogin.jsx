import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SellerLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const login = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/seller/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include", // <-- include cookie for authentication
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Save token to localStorage if needed
      localStorage.setItem("sellerToken", data.token);

      // Success alert
      alert("Seller Login Successful! 🎉");

      // Redirect to dashboard
      navigate("/seller-dashboard");
    } catch (err) {
      setError("Network error");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="backdrop-blur-xl bg-white/10 p-10 rounded-3xl border border-white/20 shadow-2xl w-full max-w-md">
        {error && (
          <p className="text-center mb-4 bg-red-600 text-white py-2 rounded-xl">
            {error}
          </p>
        )}

        <h2 className="text-4xl font-bold text-center text-[#5DE23C] mb-6 tracking-wide">
          Seller Login 🛍️
        </h2>

        <form onSubmit={login} className="space-y-5">
          <div>
            <label className="text-gray-300 mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="seller@example.com"
              value={form.email}
              onChange={onChange}
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 mb-1 block">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={form.password}
              onChange={onChange}
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#5DE23C] text-black font-semibold text-lg hover:bg-[#4CC52F]"
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>

        <p className="mt-5 text-center text-gray-300">
          New Seller?{" "}
          <Link
            to="/seller-register"
            className="text-[#5DE23C] hover:underline"
          >
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}
