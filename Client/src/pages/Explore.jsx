import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Laptop, Smartphone, LayoutGrid, ArrowRight } from "lucide-react"; // Icons for style

const allProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    category: "Mobiles",
    price: 79999,
    image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=400",
  },
  {
    id: 2,
    name: "Samsung S23 Ultra",
    category: "Mobiles",
    price: 69999,
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400",
  },
  {
    id: 3,
    name: "ROG Zephyrus G14",
    category: "Laptops",
    price: 99999,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400",
  },
  {
    id: 4,
    name: "MacBook Air M2",
    category: "Laptops",
    price: 119999,
    image: "https://images.unsplash.com/photo-1517336714460-d1508390520a?w=400",
  },
];

const categories = [
  { name: "All", icon: <LayoutGrid size={18} />, slug: null },
  { name: "Mobiles", icon: <Smartphone size={18} />, slug: "Mobiles" },
  { name: "Laptops", icon: <Laptop size={18} />, slug: "Laptops" },
];

const Explore = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // URL se current category nikalna
  const query = new URLSearchParams(location.search);
  const selectedCategory = query.get("category");

  // Filtering Logic
  const filteredProducts = selectedCategory
    ? allProducts.filter((p) => p.category === selectedCategory)
    : allProducts;

  return (
    <div className="bg-[#0b1120] min-h-screen text-slate-200">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* --- Sidebar Filters --- */}
          <aside className="w-full md:w-64 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() =>
                      navigate(
                        cat.slug ? `/explore?category=${cat.slug}` : "/explore"
                      )
                    }
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                      selectedCategory === cat.slug ||
                      (!selectedCategory && cat.name === "All")
                        ? "bg-cyan-500 text-[#0b1120] font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                        : "bg-slate-900/50 border border-slate-800 hover:border-slate-600"
                    }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Placeholder (Unique Look) */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-800">
              <p className="text-sm font-semibold text-cyan-400 mb-2">
                Deal of the Day
              </p>
              <h4 className="text-lg font-bold text-white leading-tight">
                Up to 40% off on Laptops
              </h4>
              <button className="mt-4 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                View Deals <ArrowRight size={14} />
              </button>
            </div>
          </aside>

          {/* --- Products Grid --- */}
          <main className="flex-1">
            <header className="mb-10 flex justify-between items-end">
              <div>
                <h2 className="text-4xl font-black text-white">
                  {selectedCategory || "All"}{" "}
                  <span className="text-cyan-400">Collection</span>
                </h2>
                <p className="text-slate-500 mt-1">
                  Showing {filteredProducts.length} high-quality products
                </p>
              </div>

              <div className="hidden sm:block">
                <select className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-cyan-500">
                  <option>Sort by: Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </header>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-4 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  >
                    {/* Image Area */}
                    <div className="relative h-56 rounded-[2rem] overflow-hidden mb-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-2 pb-2">
                      <h3 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-2xl font-black text-white">
                          ₹{item.price.toLocaleString()}
                        </span>
                        <button className="p-3 bg-white text-black rounded-2xl hover:bg-cyan-500 hover:text-white transition-all shadow-lg active:scale-90">
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-slate-800 rounded-[3rem]">
                <p className="text-slate-500 italic">
                  No products found in this category.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Explore;
