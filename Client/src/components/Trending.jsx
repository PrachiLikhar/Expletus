import React from "react";
import { TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const trendingItems = [
  {
    id: "01",
    name: "Wireless Earbuds Pro",
    tag: "Audio",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  },
  {
    id: "02",
    name: "Precision Mouse",
    tag: "Gaming",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
  },
  {
    id: "03",
    name: "Cyber Speaker",
    tag: "Audio",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
  },
  {
    id: "04",
    name: "Bezel-less 4K Monitor",
    tag: "Display",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
];

const Trending = () => {
  return (
    <section className="relative bg-[#0f172a] py-24 px-6 md:px-10 overflow-hidden">
      {/* Background Neon Spotlights */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="p-3 bg-slate-800 border border-slate-700 rounded-2xl shadow-lg">
              <TrendingUp className="text-cyan-400" size={30} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                TRENDING{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 underline decoration-cyan-400/30">
                  NOW
                </span>
              </h2>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-[0.2em] mt-1">
                What the world is buying
              </p>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-2xl transition-all"
          >
            <span className="text-white font-bold">See All Trends</span>
            <ArrowRight
              size={18}
              className="text-cyan-400 group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </div>

        {/* Trending Grid with 3D Interaction */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl bg-slate-900 border border-slate-800"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />

              {/* Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Ranking & Tag */}
                <div className="flex justify-between items-start">
                  <span className="text-5xl font-black text-white/10 group-hover:text-cyan-400/20 transition-colors">
                    {item.id}
                  </span>
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Sparkles size={12} className="text-cyan-400" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Bottom Info */}
                <div>
                  <h3 className="text-2xl font-black text-white leading-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-500"></div>
                  <p className="mt-3 text-slate-400 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore Details & Pricing
                  </p>
                </div>
              </div>

              {/* Neon Border Light Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-cyan-500/30 rounded-[2.5rem] transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Big CTA Center Button */}
        <div className="text-center mt-20">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(34,211,238,0.3)",
            }}
            className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-12 py-5 rounded-2xl font-black text-lg tracking-wider shadow-xl transition-all"
          >
            EXPLORE FULL COLLECTION
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Trending;
