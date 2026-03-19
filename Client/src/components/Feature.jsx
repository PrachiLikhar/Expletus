import React from "react";
import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  Headphones,
  Zap,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Instant Delivery",
    desc: "Lightning fast shipping on all orders above ₹999. Track in real-time.",
    icon: <Truck size={32} />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Military Grade Security",
    desc: "100% encrypted and trusted payment ecosystem for your safety.",
    icon: <ShieldCheck size={32} />,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Stress-Free Returns",
    desc: "No questions asked 7-day hassle-free replacement policy.",
    icon: <RefreshCcw size={32} />,
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Expert Assistance",
    desc: "Our tech-wizards are available 24/7 for all your queries.",
    icon: <Headphones size={32} />,
    color: "from-indigo-500 to-purple-500",
  },
];

const Features = () => {
  return (
    <section className="relative bg-[#0f172a] py-24 px-6 md:px-10 overflow-hidden">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Centered Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-2xl mb-6 shadow-inner"
          >
            <Zap size={16} className="text-cyan-400 fill-current" />
            <span className="text-xs font-black text-slate-300 uppercase tracking-widest">
              Premium Standards
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 italic">
            EXPERIENCE THE{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              FUTURE
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
            We don't just sell tech; we provide a futuristic shopping ecosystem
            built on trust and speed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Animated Glow Border */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-[2rem] opacity-0 group-hover:opacity-40 blur transition duration-500`}
              ></div>

              {/* Main Card */}
              <div className="relative h-full bg-slate-900/60 border border-slate-800 backdrop-blur-2xl p-8 rounded-[2rem] flex flex-col items-center text-center transition-all duration-300 group-hover:bg-slate-900/40">
                {/* Floating Icon Container */}
                <div className="relative mb-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500`}
                  ></div>
                  <div
                    className={`relative z-10 p-5 rounded-2xl bg-slate-800 border border-slate-700 text-white group-hover:text-cyan-400 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:rotate-6 shadow-xl`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>

                {/* Bottom Decorative Line */}
                <div
                  className={`mt-8 w-12 h-1 rounded-full bg-gradient-to-r ${item.color} opacity-30 group-hover:w-24 group-hover:opacity-100 transition-all duration-500`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2 font-black text-xl text-white tracking-widest uppercase">
            <Globe size={24} /> Global Shipping
          </div>
          <div className="font-black text-xl text-white tracking-widest uppercase italic font-serif italic">
            Verified Partner
          </div>
          <div className="flex items-center gap-2 font-black text-xl text-white tracking-widest uppercase">
            <ShieldCheck size={24} /> PCI Secure
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
