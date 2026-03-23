import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  Search,
  PackageCheck,
  Box,
  Bike,
  MapPin,
  SearchCheck,
  Navigation,
  Clock,
} from "lucide-react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Current step (0 to 3)
  const currentStatusIndex = 2;

  const steps = [
    { title: "Order Confirmed", desc: "Mon, 12 Sep", icon: <PackageCheck /> },
    { title: "Processing", desc: "Tue, 13 Sep", icon: <Box /> },
    { title: "Out for Delivery", desc: "On the way to you", icon: <Bike /> },
    { title: "Delivered", desc: "Expected Today", icon: <MapPin /> },
  ];

  const handleTrack = () => {
    if (orderId.trim() !== "") {
      setShowResult(false); // Reset animation
      setTimeout(() => setShowResult(true), 100);
    }
  };

  return (
    <div className="bg-[#030712] min-h-screen text-white font-sans relative overflow-hidden">
      <Navbar />

      {/* --- RADIAL GLOW BACKGROUND --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        {/* 🔍 SEARCH HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="bg-slate-800/50 border border-slate-700 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 mb-6">
            <SearchCheck size={14} /> Global Logistics Network
          </span>
          <h1 className="text-6xl font-black tracking-tight mb-6 italic">
            WHERE IS YOUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              PACK?
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 max-w-2xl mx-auto shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)]">
            <input
              type="text"
              placeholder="Paste Tracking ID (e.g. TNX-9921-X)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="bg-transparent outline-none px-6 py-4 w-full text-xl font-light tracking-wide"
            />
            <button
              onClick={handleTrack}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase italic px-10 py-4 rounded-xl w-full md:w-auto transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Navigation size={20} className="fill-current" /> Track
            </button>
          </div>
        </motion.div>

        {/* 📦 TRACKING CARD */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex flex-wrap justify-between items-end gap-6 mb-16 relative z-20">
                <div>
                  <h3 className="text-slate-500 font-bold text-xs uppercase tracking-[0.3em] mb-2">
                    Package ID
                  </h3>
                  <p className="text-3xl font-mono font-bold text-white">
                    {orderId}
                  </p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-4 flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">
                      Est. Delivery
                    </span>
                    <span className="text-cyan-400 font-bold italic">
                      Today, 6:00 PM
                    </span>
                  </div>
                  <div className="w-[1px] bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">
                      Current Hub
                    </span>
                    <span className="text-white font-bold italic">
                      Indore, MP
                    </span>
                  </div>
                </div>
              </div>

              {/* --- DYNAMIC TRACKING LINE --- */}
              <div className="relative py-20 px-4">
                {/* Background Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-800 -translate-y-1/2" />

                {/* Progress Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${
                      (currentStatusIndex / (steps.length - 1)) * 100
                    }%`,
                  }}
                  transition={{ duration: 2, ease: "circOut" }}
                  className="absolute top-1/2 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-300 -translate-y-1/2 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                />

                {/* BIKE & PATH ANIMATION */}
                <div className="flex justify-between items-center relative z-10">
                  {steps.map((step, index) => {
                    const isCompleted = index <= currentStatusIndex;
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.2 }}
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
                            isCompleted
                              ? "bg-cyan-500 border-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] rotate-3"
                              : "bg-slate-900 border-slate-800 text-slate-600"
                          }`}
                        >
                          {step.icon}
                        </motion.div>

                        <div className="absolute top-20 text-center w-32">
                          <p
                            className={`font-black text-xs uppercase italic tracking-wider ${
                              isCompleted ? "text-white" : "text-slate-700"
                            }`}
                          >
                            {step.title}
                          </p>
                          <p className="text-[10px] text-slate-500 font-bold mt-1">
                            {step.desc}
                          </p>
                        </div>

                        {/* Animated Bike Moving */}
                        {index === currentStatusIndex && (
                          <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "backOut" }}
                            className="absolute -top-12 flex flex-col items-center"
                          >
                            <div className="bg-white text-black text-[10px] font-black px-2 py-1 rounded mb-2 relative">
                              ON THE WAY
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                            </div>
                            <Bike
                              className="text-cyan-400 animate-bounce"
                              size={32}
                            />
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* BOTTOM DETAILS BOX */}
              <div className="mt-24 grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-3xl p-6 border border-white/5 flex items-start gap-4 hover:bg-white/10 transition cursor-default group">
                  <div className="p-3 bg-cyan-500/20 rounded-2xl text-cyan-400 group-hover:scale-110 transition-transform">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                      Last Update
                    </p>
                    <p className="text-sm text-slate-200 mt-1">
                      Package scanned at{" "}
                      <span className="text-white font-bold">
                        Vijay Nagar Delivery Center
                      </span>
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1">
                      24 minutes ago
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-3xl p-6 border border-white/5 flex items-start gap-4 hover:bg-white/10 transition cursor-default group">
                  <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                      Courier Info
                    </p>
                    <p className="text-sm text-slate-200 mt-1">
                      Agent:{" "}
                      <span className="text-white font-bold">Suresh Raina</span>
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1">
                      Vehicle: MH-12-BK-2024 (Electric Bike)
                    </p>
                  </div>
                </div>
              </div>

              {/* Fake Map Texture Background */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale invert"
                style={{
                  backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TrackOrder;
