import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration Initialized:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1120] relative overflow-hidden px-4 py-10">
      {/* Background Animated Blobs (Matching Login) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-[2.5rem] blur opacity-20"></div>

        <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex p-4 bg-slate-800 rounded-2xl border border-slate-700 mb-4 text-cyan-400">
              <Zap size={32} />
            </div>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">
              Create <span className="text-cyan-400">Account</span>
            </h2>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
              Join the next-gen tech community
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                Full Identity
              </label>
              <div className="flex items-center bg-slate-950/50 border border-slate-800 focus-within:border-cyan-500/50 px-5 py-4 rounded-2xl group transition-all">
                <User
                  className="text-slate-600 group-focus-within:text-cyan-400"
                  size={20}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-transparent outline-none ml-4 w-full text-white placeholder-slate-700 font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                System Email
              </label>
              <div className="flex items-center bg-slate-950/50 border border-slate-800 focus-within:border-cyan-500/50 px-5 py-4 rounded-2xl group transition-all">
                <Mail
                  className="text-slate-600 group-focus-within:text-cyan-400"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="name@nexus.com"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-transparent outline-none ml-4 w-full text-white placeholder-slate-700 font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                Access Key
              </label>
              <div className="flex items-center bg-slate-950/50 border border-slate-800 focus-within:border-cyan-500/50 px-5 py-4 rounded-2xl group transition-all">
                <Lock
                  className="text-slate-600 group-focus-within:text-cyan-400"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className="bg-transparent outline-none ml-3 w-full text-white placeholder-slate-700 text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                Verify Key
              </label>
              <div className="flex items-center bg-slate-950/50 border border-slate-800 focus-within:border-cyan-500/50 px-5 py-4 rounded-2xl group transition-all">
                <ShieldCheck
                  className="text-slate-600 group-focus-within:text-cyan-400"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="bg-transparent outline-none ml-3 w-full text-white placeholder-slate-700 text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 mt-4 relative group/btn overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 opacity-100 group-hover/btn:opacity-90 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-3 py-4 font-black text-white text-sm uppercase tracking-[0.2em]">
                Register Account <ArrowRight size={18} />
              </div>
            </motion.button>
          </form>

          <p className="text-center text-slate-500 text-[10px] font-black uppercase tracking-widest mt-10">
            ALREADY PART OF THE NEXUS?{" "}
            <Link
              to="/login"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 decoration-cyan-500/30"
            >
              INITIALIZE LOGIN
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
