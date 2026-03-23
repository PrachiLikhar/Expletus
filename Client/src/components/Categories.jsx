import React from "react";
import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Mobiles",
    count: "120+ Items",
    icon: <Smartphone size={32} />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Laptops",
    count: "85+ Items",
    icon: <Laptop size={32} />,
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "Audio",
    count: "210+ Items",
    icon: <Headphones size={32} />,
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Wearables",
    count: "95+ Items",
    icon: <Watch size={32} />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Cameras",
    count: "40+ Items",
    icon: <Camera size={32} />,
    color: "from-cyan-500 to-teal-400",
  },
  {
    name: "Hardware",
    count: "300+ Items",
    icon: <Cpu size={32} />,
    color: "from-blue-600 to-indigo-400",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-[#0f172a] py-24 px-6 md:px-10 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Browse{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Universe
              </span>
            </h2>
            <p className="text-slate-400 mt-3 text-lg font-medium">
              Find the perfect gear tailored for your digital lifestyle.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ x: 5 }}
            className="text-cyan-400 font-bold flex items-center gap-2 group transition-all"
          >
            View All Categories{" "}
            <ArrowUpRight
              size={20}
              className="group-hover:rotate-45 transition-transform"
            />
          </motion.button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              onClick={() => navigate(`/explore?category=${cat.name}`)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
            >
              {/* Main Card */}
              <div className="relative z-10 h-full p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl overflow-hidden flex flex-col items-center text-center transition-all group-hover:border-cyan-500/50 group-hover:bg-slate-800/80">
                {/* Floating Icon Background Circle */}
                <div
                  className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${cat.color} opacity-10 group-hover:opacity-20 blur-2xl transition-all`}
                ></div>

                {/* Icon with Neon Effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                  <div className="relative z-10 p-4 rounded-2xl bg-slate-900 border border-slate-700 text-cyan-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-indigo-500 group-hover:border-transparent transition-all duration-300">
                    {cat.icon}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-white font-bold text-lg mb-1 tracking-wide group-hover:text-cyan-300 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-widest group-hover:text-slate-300 transition-colors">
                  {cat.count}
                </span>
              </div>

              {/* Hover Bottom Shadow Glow */}
              <div
                className={`absolute -bottom-2 inset-x-6 h-6 bg-gradient-to-r ${cat.color} blur-xl opacity-0 group-hover:opacity-40 transition-all duration-300`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
