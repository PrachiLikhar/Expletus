import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-20 text-center">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#5DE23C] drop-shadow-[0_0_10px_#5DE23C] mb-4"
      >
        Subscribe to Our Newsletter
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 max-w-2xl mx-auto mb-10"
      >
        Get the latest updates, exclusive deals, and special offers straight to
        your inbox. Stay connected with us!
      </motion.p>

      {/* Input & Button */}
      <motion.form
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 px-4 py-3 rounded-xl border border-[#5DE23C]/40 bg-black text-white placeholder-gray-500 focus:ring-2 focus:ring-[#5DE23C] outline-none"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-[#5DE23C] text-black font-semibold rounded-xl hover:bg-[#4CC52F] transition-all duration-300 shadow-[0_0_15px_#5DE23C80]"
        >
          Subscribe
        </button>
      </motion.form>

      {/* Small note */}
      <p className="text-gray-500 text-sm mt-6">
        We respect your privacy. No spam ever! 💚
      </p>
    </div>
  );
};

export default Newsletter;
