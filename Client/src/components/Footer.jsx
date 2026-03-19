import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Github,
  Mail,
  Phone,
  MapPin,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1120] pt-24 pb-12 px-6 md:px-10 overflow-hidden border-t border-slate-800">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 shadow-[0_0_20px_rgba(34,211,238,0.8)]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl shadow-lg shadow-indigo-500/20">
                <Cpu size={28} className="text-white" />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">
                TECH<span className="text-cyan-400">NEX</span>
              </h2>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Next-generation electronic hub. We bring the future of technology
              to your doorstep with unmatched quality and futuristic design.
            </p>

            {/* Premium Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube, Github].map(
                (Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-pointer group"
                  >
                    <Icon size={18} />
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* Quick Links with Animated Underline */}
          <div>
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {["Home", "Flash Sale", "New Arrivals", "Premium Collection"].map(
                (link, i) => (
                  <li
                    key={i}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all cursor-pointer w-fit"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-cyan-400 transition-all"></span>
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {link}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-cyan-400"
                    />
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">
              Categories
            </h3>
            <ul className="space-y-4">
              {["Workstations", "Gaming Gear", "Audio Pro", "Smart Living"].map(
                (cat, i) => (
                  <li
                    key={i}
                    className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all cursor-pointer w-fit"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-indigo-500 transition-all"></span>
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {cat}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Information with Glassy Effect */}
          <div className="bg-slate-800/20 p-6 rounded-3xl border border-slate-800 backdrop-blur-sm">
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-6">
              Contact Hub
            </h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-cyan-500 transition-all text-slate-500 group-hover:text-white">
                  <MapPin size={18} />
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200">
                  Mumbai, Tech Park, IN
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-indigo-500 transition-all text-slate-500 group-hover:text-white">
                  <Phone size={18} />
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200">
                  +91 999 000 1111
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-slate-900 rounded-xl group-hover:bg-purple-500 transition-all text-slate-500 group-hover:text-white">
                  <Mail size={18} />
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200">
                  hello@technex.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Icons */}
        <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
            © 2026 Technex. Engineered for Excellence.
          </p>

          <div className="flex items-center gap-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-4"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="Paypal"
              className="h-4"
            />
          </div>

          <div className="flex gap-8">
            <span className="text-[10px] font-bold text-slate-600 hover:text-cyan-400 cursor-pointer uppercase tracking-widest">
              Privacy
            </span>
            <span className="text-[10px] font-bold text-slate-600 hover:text-cyan-400 cursor-pointer uppercase tracking-widest">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
