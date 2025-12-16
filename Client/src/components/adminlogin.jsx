import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        form
      );
      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token);
        alert("Login Successful! 🎉");
        navigate("/dashboard");
      } else {
        setErrorMsg(res.data.message);
      }
    } catch (err) {
      setErrorMsg("Network Error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-10">
        <h2 className="text-4xl font-bold text-[#5DE23C] mb-6 text-center tracking-wide">
          Admin Login 🔑
        </h2>

        {errorMsg && (
          <div className="mb-4 bg-red-600 text-white p-3 rounded-xl text-center">
            {errorMsg}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#5DE23C] text-black py-3 rounded-xl text-lg font-semibold hover:bg-[#4CC52F] transition-all"
          >
            {loading ? "Logging in..." : "Login →"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Forgot password?{" "}
          <span className="text-[#5DE23C] cursor-pointer">Reset here</span>
        </p>
      </div>
    </div>
  );
}
