import React from "react";
import { Star, Quote, CheckCircle2, MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Verified Buyer",
    review:
      "The iPhone 15 Pro Max I ordered arrived in just 24 hours! The packaging was premium and the product is 100% genuine. TechNex is now my go-to store.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Tech Enthusiast",
    review:
      "I was skeptical about buying a MacBook online, but their support team helped me through the entire process. Best price in India and amazing service!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Professional Gamer",
    review:
      "Got my RTX 4090 laptop from here. The performance is beastly! No other store could match the deal they offered. Highly recommended for gamers.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-[#0f172a] py-24 px-6 md:px-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-2xl mb-6"
          >
            <MessageSquareQuote size={18} className="text-cyan-400" />
            <span className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">
              Community Voice
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl text-lg font-medium">
            Don't just take our word for it. Here is what our global community
            has to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card Glow Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Main Card */}
              <div className="relative h-full p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 group-hover:bg-slate-900/60 group-hover:border-slate-700">
                {/* Quote Icon & Stars */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-slate-800 rounded-2xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <Quote size={24} fill="currentColor" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-lg leading-relaxed italic mb-8">
                  "{item.review}"
                </p>

                {/* User Info Footer */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full border-2 border-slate-700 object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-cyan-500 text-white rounded-full p-0.5 border-2 border-slate-900">
                      <CheckCircle2 size={12} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats Footer (Optional but looks cool) */}
        <div className="mt-24 flex flex-wrap justify-center gap-10 md:gap-20">
          <div className="text-center">
            <h5 className="text-3xl font-black text-white">4.9/5</h5>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
              Average Rating
            </p>
          </div>
          <div className="text-center">
            <h5 className="text-3xl font-black text-white">50k+</h5>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
              Happy Users
            </p>
          </div>
          <div className="text-center">
            <h5 className="text-3xl font-black text-white">99%</h5>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">
              Positive Feedback
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
