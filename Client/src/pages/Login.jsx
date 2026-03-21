import React, { useState } from "react";
import { Mail, Lock, ArrowRight, Fingerprint, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Access Granted:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1120] relative overflow-hidden px-4">
      {/* Background Animated Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"></div>

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-[2.5rem] blur opacity-20"></div>

        <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex p-4 bg-slate-800 rounded-2xl border border-slate-700 mb-4 text-cyan-400">
              <Fingerprint size={32} />
            </div>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">
              Access <span className="text-cyan-400">Portal</span>
            </h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">
              Identify yourself to proceed
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                Terminal ID
              </label>
              <div className="flex items-center bg-slate-950/50 border border-slate-800 focus-within:border-cyan-500/50 px-5 py-4 rounded-2xl transition-all group">
                <Mail
                  className="text-slate-600 group-focus-within:text-cyan-400 transition-colors"
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
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  Access Key
                </label>
                <Link
                  to="#"
                  className="text-[10px] font-bold text-cyan-500 hover:text-cyan-400 uppercase tracking-tighter"
                >
                  Lost Key?
                </Link>
              </div>
              <div className="flex items-center bg-slate-950/50 border border-slate-800 focus-within:border-cyan-500/50 px-5 py-4 rounded-2xl transition-all group">
                <Lock
                  className="text-slate-600 group-focus-within:text-cyan-400 transition-colors"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className="bg-transparent outline-none ml-4 w-full text-white placeholder-slate-700 font-medium"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-600 hover:text-slate-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative group/btn overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 opacity-100 group-hover/btn:opacity-90 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-3 py-4 font-black text-white text-sm uppercase tracking-[0.2em]">
                Initialize Login{" "}
                <ArrowRight
                  size={18}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </div>
            </motion.button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest text-slate-600">
              <span className="bg-[#0b1120] px-4">Or Secure Connect</span>
            </div>
          </div>

          <p className="text-center text-slate-500 text-xs font-bold">
            NEW TO THE NEXUS?{" "}
            <Link
              to="/signup"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 decoration-cyan-500/30"
            >
              CREATE ACCOUNT
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
