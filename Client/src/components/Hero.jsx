import React from "react";
import { ArrowRight, Zap, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const slidesData = [
  {
    title:
      "Upgrade to the <span class='text-cyan-400'>Next Generation</span> Macbook",
    desc: "Discover unrivaled speed with the all-new M3 Pro chip. Your workflow, re-imagined.",
    price: "$1,499",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    hot_badge: "🔥 M3 CHIP",
  },
  {
    title:
      "Experience <span class='text-cyan-400'>Total Immersion</span> Gaming",
    desc: "NVIDIA RTX 4090. Ultra-high refresh rates. Dominate every arena.",
    price: "$2,199",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
    hot_badge: "🎮 ULTRA MAX",
  },
  {
    title:
      "Unleash <span class='text-cyan-400'>Studio-Quality</span> Sound Anywhere",
    desc: "Smart active noise cancellation. 40 hours of battery life. Deep bass.",
    price: "$349",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    hot_badge: "🎧 PRO AUDIO",
  },
];

const Hero = () => {
  return (
    <section className="relative bg-[#0f172a] text-white overflow-hidden">
      {/* Background Neon Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/40 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-900/30 rounded-full blur-[150px] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT (Common to all slides or specific) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          {/* Tagline */}
          <div className="flex items-center gap-2 border border-slate-700 bg-slate-800/60 px-4 py-1.5 rounded-full inline-flex mb-6 shadow-md">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm font-semibold text-slate-300">
              New arrivals have landed.
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter mb-8">
            The Future of{" "}
            <span className="text-gradient bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Tech
            </span>{" "}
            is Here.
          </h1>

          <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-lg">
            Discover cutting-edge gadgets, powerful electronics, and
            professional accessories at unbeatable prices.
          </p>

          {/* New Buttons with New Color */}
          <div className="flex flex-col sm:flex-row gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold transition shadow-[0_4px_20px_rgba(34,211,238,0.3)] hover:shadow-cyan-400/50"
            >
              Shop the Collection{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1.5 transition-transform"
              />
            </motion.button>

            <button className="flex items-center justify-center gap-2 border border-slate-600 bg-slate-800/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition">
              Explore Deals <Target size={20} />
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-slate-800/40 p-3 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden"
        >
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="rounded-2xl"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden">
                  {/* Image */}
                  <img
                    src={`${slide.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`}
                    alt={slide.title}
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />

                  {/* Gradient Overlay for better text read */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1.5 rounded-full font-bold text-xs tracking-wider shadow-lg flex items-center gap-1.5">
                    <Zap size={14} className="animate-pulse" />
                    {slide.hot_badge}
                  </div>

                  {/* Slide-specific content at the bottom */}
                  <div className="absolute bottom-10 left-6 right-6 p-5 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl">
                    <h3
                      className="text-xl font-bold mb-2 text-white"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <p className="text-slate-300 text-sm mb-3">{slide.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-white">
                        {slide.price}
                      </span>
                      <button className="text-cyan-400 font-bold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        Buy Now <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
