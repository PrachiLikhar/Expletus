import React, { useEffect, useState } from "react";
import API from "../services/api";
import {
  ShoppingCart,
  Star,
  Tag,
  Loader2,
  ArrowRight,
  Truck,
  ShieldCheck,
  Headphones,
  Zap,
  ChevronRight,
  Sparkles,
  Heart,
  TrendingUp,
  Percent,
  Facebook, // Missing icons added
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

// --- Trust Card Component ---
const TrustCard = ({ icon, title, desc }) => (
  <div className="bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col items-start gap-4 hover:-translate-y-2 transition-all duration-300 group">
    <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div>
      <h4 className="font-black text-gray-900 text-lg">{title}</h4>
      <p className="text-sm text-gray-400 font-medium leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Products");

  const addToCart = async (id) => {
    try {
      await API.post("/cart", { productId: id });
      alert("🚀 Added to your collection!");
    } catch {
      alert("⚠️ Please login to shop");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const SkeletonCard = () => (
    <div className="bg-white rounded-[2rem] p-4 border border-gray-100 animate-pulse">
      <div className="bg-gray-200 aspect-square rounded-2xl mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
    </div>
  );

  return (
    <div className="bg-[#fcfcfd] min-h-screen pb-20 text-gray-900 font-sans">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-indigo-600 text-white py-2 px-4 text-center text-sm font-medium">
        <span className="flex items-center justify-center gap-2">
          <Percent size={14} /> Use code{" "}
          <span className="font-bold ml-1">ELECTRO20</span> for 20% off on your
          first order!
        </span>
      </div>

      {/* 2. PREMIUM HERO SECTION */}
      <div className="relative bg-white border-b border-gray-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-widest uppercase shadow-sm">
              <Sparkles size={14} className="animate-pulse" /> 2026 Next-Gen
              Collection
            </div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.05]">
              Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                Premium Tech
              </span>
            </h1>
            <p className="text-gray-500 text-xl max-w-lg leading-relaxed font-medium">
              Experience sound and performance like never before with our
              artisan-crafted electronics.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="px-10 py-5 bg-gray-900 hover:bg-indigo-600 text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-indigo-200 flex items-center gap-3 group">
                Explore Now{" "}
                <ArrowRight
                  className="group-hover:translate-x-2 transition-transform"
                  size={20}
                />
              </button>
              <div className="flex -space-x-3 items-center">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-4 border-white shadow-sm"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                  />
                ))}
                <p className="pl-6 text-sm font-bold text-gray-500">
                  +12k Happy Users
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transform hover:rotate-2 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1546435770-a3e426ca472b?auto=format&fit=crop&w=1000&q=80"
                alt="Headphones"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white z-20 hidden lg:block">
              <TrendingUp className="text-green-500 mb-2" />
              <p className="text-2xl font-black text-gray-900">98%</p>
              <p className="text-[10px] uppercase font-bold text-gray-400">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. TRUST BADGES */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TrustCard
            icon={<Truck />}
            title="Insured Shipping"
            desc="Global Tracked Delivery"
          />
          <TrustCard
            icon={<ShieldCheck />}
            title="2-Year Warranty"
            desc="Genuine Brand Cover"
          />
          <TrustCard
            icon={<Zap />}
            title="Instant Setup"
            desc="Ready to use out-of-box"
          />
          <TrustCard
            icon={<Headphones />}
            title="Expert Help"
            desc="Talk to a Tech Human"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        {/* 4. CATEGORIES */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              Curated Gear
            </h2>
            <p className="text-gray-400 font-medium">
              Handpicked technology for modern lifestyle
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["All Products", "Audio", "Smartwatch", "Laptops"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all border ${
                  activeCategory === cat
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100"
                    : "bg-white border-gray-100 text-gray-500 hover:border-indigo-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 5. PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => <SkeletonCard key={i} />)
            : filteredProducts.map((p) => (
                <div
                  key={p._id}
                  className="group bg-white rounded-[2.5rem] border border-gray-100 hover:border-white hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.15)] transition-all duration-500 overflow-hidden flex flex-col relative"
                >
                  {p.price < 5000 && (
                    <div className="absolute top-5 left-5 z-20 bg-rose-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                      Hot Deal
                    </div>
                  )}
                  <div className="aspect-[4/5] relative bg-[#f8f9fa] overflow-hidden">
                    <img
                      src={p.image || `https://via.placeholder.com/300`}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button className="p-4 bg-white rounded-2xl text-gray-900 hover:bg-gray-900 hover:text-white transition-all shadow-xl">
                        <Heart size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-grow bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">
                        {p.category || "Premium Tech"}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs font-bold text-gray-900">
                          4.8
                        </span>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl mb-6 line-clamp-1">
                      {p.name}
                    </h4>
                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">
                          Price
                        </p>
                        <span className="text-2xl font-black text-gray-900">
                          ₹{p.price.toLocaleString()}
                        </span>
                      </div>
                      <button
                        onClick={() => addToCart(p._id)}
                        className="h-14 w-14 bg-gray-900 text-white rounded-2xl hover:bg-indigo-600 shadow-xl active:scale-90 transition-all flex items-center justify-center group/btn"
                      >
                        <ShoppingCart
                          size={22}
                          className="group-hover/btn:rotate-12 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* 6. NEWSLETTER */}
        <div className="mt-32 relative rounded-[4rem] bg-indigo-600 p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Ready to join <br /> the elite?
              </h2>
              <p className="text-indigo-100 text-lg">
                Get early access to drops and members-only pricing.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-8 py-5 rounded-3xl bg-white/20 border border-white/30 text-white placeholder:text-indigo-200 focus:outline-none focus:bg-white/30 backdrop-blur-md transition-all"
              />
              <button className="bg-white text-indigo-600 px-10 py-5 rounded-3xl font-black hover:scale-105 shadow-2xl transition-all">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 pt-24 pb-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-black italic tracking-tighter">
              ELECTRO<span className="text-indigo-600">HUB.</span>
            </h3>
            <p className="text-gray-500 font-medium">
              Elevating your tech lifestyle since 2024. Quality you can trust,
              design you will love.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <div
                  key={i}
                  className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer transition-all"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-xl">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="hover:text-indigo-600 cursor-pointer">Shop All</li>
              <li className="hover:text-indigo-600 cursor-pointer">
                Special Offers
              </li>
              <li className="hover:text-indigo-600 cursor-pointer">
                Track Order
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-xl">Support</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="hover:text-indigo-600 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-indigo-600 cursor-pointer">
                Refund Policy
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-xl">Download App</h4>
            <div className="space-y-3">
              <div className="h-14 bg-black rounded-xl flex items-center justify-center text-white gap-3 cursor-pointer hover:bg-gray-800 transition-all">
                <p className="font-bold text-sm">App Store</p>
              </div>
              <div className="h-14 bg-black rounded-xl flex items-center justify-center text-white gap-3 cursor-pointer hover:bg-gray-800 transition-all">
                <p className="font-bold text-sm">Google Play</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-gray-50 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 font-bold text-sm">
            © 2026 ElectroHub. All rights reserved.
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            className="h-6 opacity-30 grayscale hover:grayscale-0 transition-all"
            alt="Payments"
          />
        </div>
      </footer>
    </div>
  );
};

export default Home;
