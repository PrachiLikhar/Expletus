import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  HelpCircle,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  Send,
} from "lucide-react";

const faqs = [
  {
    q: "How can I track my order?",
    a: "Go to your orders section and click on 'Track Order'. You'll receive real-time updates via SMS too.",
  },
  {
    q: "What is the return policy?",
    a: "You can return products within 7 days of delivery. Ensure the tags are intact and the product is unused.",
  },
  {
    q: "How do I contact support?",
    a: "You can use live chat, email us anytime, or reach out via our social media handles for quick queries.",
  },
];

const Support = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="bg-[#020617] min-h-screen text-white relative overflow-hidden font-sans">
      <Navbar />

      {/* --- BACKGROUND BLOBS (Unique Touch) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* 🔥 HERO SECTION */}
        <div className="text-center mb-20">
          <div className="inline-block p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <HelpCircle size={40} className="text-cyan-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            How can we{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              help?
            </span>
          </h1>
          <p className="text-slate-400 mt-5 text-lg max-w-2xl mx-auto">
            Search our knowledge base or reach out to our team. We're online
            24/7 to ensure your experience is seamless.
          </p>
        </div>

        {/* 💬 INTERACTIVE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <MessageSquare />,
              title: "Live Chat",
              desc: "Average response: 2 mins",
              btn: "Start Chat",
            },
            {
              icon: <Mail />,
              title: "Email Us",
              desc: "support@technex.com",
              btn: "Write Email",
            },
            {
              icon: <Phone />,
              title: "Phone",
              desc: "+91 98765 43210",
              btn: "Call Now",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-slate-900/40 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{item.desc}</p>
              <button className="w-full py-3 rounded-xl bg-slate-800 group-hover:bg-cyan-500 group-hover:text-black font-bold transition-all">
                {item.btn}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ❓ ACCORDION FAQ */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-cyan-500 rounded-full" /> Popular
              Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="p-5 flex justify-between items-center">
                    <h4 className="font-medium text-slate-200">{item.q}</h4>
                    <ChevronDown
                      className={`transition-transform ${
                        activeFaq === i ? "rotate-180" : ""
                      }`}
                      size={20}
                    />
                  </div>
                  <div
                    className={`px-5 transition-all duration-300 ease-in-out ${
                      activeFaq === i
                        ? "max-h-40 pb-5 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 📩 PREMIUM CONTACT FORM */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">Drop us a message</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl bg-slate-950/50 border border-slate-700 focus:border-cyan-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-4 rounded-xl bg-slate-950/50 border border-slate-700 focus:border-cyan-500 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase ml-1">
                  Message
                </label>
                <textarea
                  className="w-full p-4 rounded-xl bg-slate-950/50 border border-slate-700 focus:border-cyan-500 outline-none transition"
                  rows="4"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:translate-y-[-2px]">
                <Send size={18} /> Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
