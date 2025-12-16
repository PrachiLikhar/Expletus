import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    adminCode: "",
    role: "admin",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/register",
        form
      );

      if (res.data.success) {
        alert("Admin Successfully Registered!");
        navigate("/admin-login");
      } else {
        alert(res.data.message || "Registration failed");
      }
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-10">
        <h2 className="text-4xl font-bold text-[#5DE23C] mb-6 text-center tracking-wide">
          Admin Register 👑
        </h2>

        <form className="space-y-5" onSubmit={handleRegister}>
          <input
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <input
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400"
            placeholder="Admin Secret Code"
            value={form.adminCode}
            onChange={(e) => setForm({ ...form, adminCode: e.target.value })}
          />

          <button
            type="submit"
            className="w-full bg-[#5DE23C] text-black py-3 rounded-xl text-lg font-semibold hover:bg-[#4CC52F] transition-all"
          >
            Register →
          </button>
        </form>
      </div>
    </div>
  );
}
