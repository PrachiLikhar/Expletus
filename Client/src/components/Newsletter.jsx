import React from "react";
import { Mail, Send, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="relative bg-[#0f172a] py-24 px-6 md:px-10 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Main Glass Card */}
        <div className="relative z-10 p-10 md:p-16 rounded-[3rem] bg-slate-900/40 border border-slate-800 backdrop-blur-2xl overflow-hidden shadow-2xl">
          {/* Decorative Corner Light */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl"></div>

          <div className="relative text-center max-w-3xl mx-auto">
            {/* Animated Mail Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="flex justify-center mb-10"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-ping"></div>
                <div className="relative z-10 bg-slate-800 p-6 rounded-[2rem] border border-slate-700 shadow-xl text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                  <Mail size={40} strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-6 uppercase italic">
                Join the{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                  Nexus
                </span>{" "}
                Elite
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium mb-12">
                Get first-access to future drops, exclusive tech-deals, and
                insider updates. No fluff, just the best tech.
              </p>
            </motion.div>

            {/* Subscription Form */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-stretch gap-4 bg-slate-950/50 p-2 rounded-[2.5rem] border border-slate-800 focus-within:border-cyan-500/50 transition-all shadow-inner"
            >
              <div className="flex-1 flex items-center px-6 gap-3">
                <Sparkles size={20} className="text-slate-600" />
                <input
                  type="email"
                  placeholder="Drop your email here..."
                  className="w-full py-4 bg-transparent text-white placeholder-slate-600 outline-none font-bold tracking-wide"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-cyan-500 px-10 py-4 rounded-[2rem] font-black text-white text-sm uppercase tracking-widest shadow-[0_10px_20px_rgba(79,70,229,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span>Connect</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-500">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <ShieldCheck size={14} className="text-cyan-500" />
                Safe & Secure
              </div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <Sparkles size={14} className="text-indigo-500" />
                Zero Spam
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
