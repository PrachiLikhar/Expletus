import React from "react";
import { ArrowRight, Zap, Monitor, Cpu, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="relative bg-[#0b1120] py-20 px-6 md:px-10 overflow-hidden min-h-[500px] flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full translate-y-1/2"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT - Advanced Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 px-4 py-1.5 rounded-full mb-6">
              <Trophy size={16} className="text-yellow-400" />
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">
                Top Rated Gaming Gear
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-6">
              UNLEASH THE <br />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                ULTIMATE BEAST
              </span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Experience zero-latency gaming with the new RTX 40-Series powered
              laptops. Efficiency meets raw power.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-3 py-2 rounded-xl">
                <Cpu size={18} className="text-cyan-400" />
                <span className="text-xs font-bold text-slate-300">
                  Core i9-14th Gen
                </span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-3 py-2 rounded-xl">
                <Monitor size={18} className="text-purple-400" />
                <span className="text-xs font-bold text-slate-300">
                  240Hz OLED
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl font-black text-white flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_30px_rgba(79,70,229,0.4)]"
              >
                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -translate-x-full"></div>
                CLAIM 40% OFF{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </motion.button>

              <button className="px-8 py-4 border border-slate-700 rounded-2xl font-bold text-slate-300 hover:bg-white/5 transition-colors">
                Compare Models
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE - 3D Perspective Look */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Glossy Backdrop Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-[3rem] blur-2xl transform scale-110"></div>

            <div className="relative bg-slate-800/40 p-4 rounded-[2.5rem] border border-white/10 backdrop-blur-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302"
                alt="High-end Gaming Laptop"
                className="rounded-[2rem] w-full shadow-inner group-hover:brightness-110 transition-all"
              />

              {/* Floating Performance Tag */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-slate-900/90 border border-cyan-500/50 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-cyan-500 p-2 rounded-lg">
                    <Zap size={20} className="text-white fill-current" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-cyan-400 uppercase tracking-tighter">
                      Instant Saving
                    </p>
                    <h4 className="text-xl font-black text-white">
                      Save ₹25,000
                    </h4>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Decorative Bar */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[2px]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
