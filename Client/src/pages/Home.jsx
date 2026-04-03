// // import React, { useEffect, useState } from "react";
// // import API from "../services/api";

// // const Home = () => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     API.get("/products").then((res) => setProducts(res.data));
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Products</h1>

// //       {products.map((p) => (
// //         <div key={p._id}>
// //           <h3>{p.name}</h3>
// //           <p>₹{p.price}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useEffect, useState } from "react";
// import API from "../services/api";
// import { ShoppingCart, Star, Tag, Loader2, ArrowRight } from "lucide-react";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const addToCart = async (id) => {
//     try {
//       await API.post("/cart", { productId: id });
//       alert("Added to cart");
//     } catch {
//       alert("Login required");
//     }
//   };

//   useEffect(() => {
//     API.get("/products")
//       .then((res) => {
//         setProducts(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-[80vh] flex flex-col items-center justify-center">
//         <Loader2 className="h-10 w-10 animate-spin text-indigo-600 mb-4" />
//         <p className="text-gray-500 font-medium">Loading amazing products...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen pb-12">
//       {/* Hero Section */}
//       <div className="bg-white border-b mb-10">
//         <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col items-center text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
//             Latest <span className="text-indigo-600">Collections</span>
//           </h1>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl">
//             Explore our curated list of high-quality products designed just for
//             you. Quality meets affordability.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-2xl font-bold text-gray-800">
//             Featured Products
//           </h2>
//           <span className="text-sm text-indigo-600 font-semibold flex items-center gap-1 cursor-pointer hover:underline">
//             View All <ArrowRight size={16} />
//           </span>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.map((p) => (
//             <div
//               key={p._id}
//               className="bg-white group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
//             >
//               {/* Product Image Placeholder */}
//               <div className="aspect-square bg-gray-200 relative overflow-hidden">
//                 <img
//                   src={
//                     p.image || `https://via.placeholder.com/300?text=${p.name}`
//                   }
//                   alt={p.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute top-3 right-3">
//                   <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors shadow-md">
//                     <Star
//                       size={18}
//                       fill="currentColor"
//                       className="text-yellow-400"
//                     />
//                   </button>
//                 </div>
//               </div>

//               {/* Product Details */}
//               <div className="p-5 flex-grow flex flex-col">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="font-bold text-gray-800 text-lg group-hover:text-indigo-600 transition-colors">
//                     {p.name}
//                   </h3>
//                 </div>

//                 <div className="flex items-center gap-2 mb-4">
//                   <Tag size={14} className="text-indigo-500" />
//                   <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
//                     Electronics
//                   </span>
//                 </div>

//                 <div className="mt-auto flex items-center justify-between">
//                   <div className="flex flex-col">
//                     <span className="text-2xl font-black text-gray-900">
//                       ₹{p.price}
//                     </span>
//                     <span className="text-xs text-green-600 font-bold">
//                       Free Delivery
//                     </span>
//                   </div>

//                   <button
//                     onClick={() => addToCart(p._id)}
//                     className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-md active:scale-95"
//                   >
//                     <ShoppingCart size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {products.length === 0 && (
//           <div className="text-center py-20 bg-white rounded-3xl shadow-inner border-2 border-dashed border-gray-200">
//             <h3 className="text-xl font-medium text-gray-400">
//               No products found.
//             </h3>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
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
} from "lucide-react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const addToCart = async (id) => {
    try {
      await API.post("/cart", { productId: id });
      alert("Added to cart");
    } catch {
      alert("Login required");
    }
  };

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-indigo-600 mb-4" />
        <p className="text-gray-500 font-medium">
          Loading amazing electronics...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* 1. HERO SECTION (BANNER) */}
      <div className="relative bg-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200"
            alt="bg"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <span className="bg-indigo-500 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Limited Time Offer
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Upgrade Your <span className="text-indigo-400">Digital Life</span>
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl mb-8">
            Get up to 40% off on latest Smartwatches, Headphones, and Laptops.
            Experience the future of technology today.
          </p>
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all flex items-center gap-2">
            Shop Now <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* 2. TRUST BADGES SECTION */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <TrustCard
            icon={<Truck className="text-indigo-600" />}
            title="Fast Delivery"
            desc="Free on orders over ₹999"
          />
          <TrustCard
            icon={<ShieldCheck className="text-indigo-600" />}
            title="1 Year Warranty"
            desc="Brand original products"
          />
          <TrustCard
            icon={<Zap className="text-indigo-600" />}
            title="Secure Payment"
            desc="100% safe transactions"
          />
          <TrustCard
            icon={<Headphones className="text-indigo-600" />}
            title="24/7 Support"
            desc="Dedicated tech help"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* 3. CATEGORIES SECTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Shop by Category
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {["Laptops", "Mobiles", "Audio", "Cameras", "Tablets"].map(
              (cat) => (
                <button
                  key={cat}
                  className="flex-shrink-0 px-6 py-3 bg-white rounded-2xl border border-gray-200 font-bold text-gray-600 hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm"
                >
                  {cat}
                </button>
              )
            )}
          </div>
        </div>

        {/* 4. PRODUCT GRID SECTION */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Featured Products
          </h2>
          <span className="text-sm text-indigo-600 font-semibold flex items-center gap-1 cursor-pointer hover:underline">
            View All <ArrowRight size={16} />
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={
                    p.image || `https://via.placeholder.com/300?text=${p.name}`
                  }
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-md">
                    <Star
                      size={18}
                      fill="currentColor"
                      className="text-yellow-400 border-none"
                    />
                  </button>
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col">
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-indigo-600 transition-colors truncate">
                  {p.name}
                </h3>

                <div className="flex items-center gap-2 mt-1 mb-4">
                  <Tag size={14} className="text-indigo-500" />
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {p.category || "Electronics"}
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-gray-900">
                      ₹{p.price}
                    </span>
                    <span className="text-[10px] text-green-600 font-bold uppercase">
                      Stock Available
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(p._id)}
                    className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-md active:scale-95"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. NEWSLETTER SECTION */}
        <div className="mt-24 bg-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Tech Update</h2>
          <p className="text-indigo-100 mb-8 max-w-md mx-auto">
            Subscribe to get notified about new arrivals and exclusive
            electronics deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-5 py-3 rounded-xl text-gray-900 focus:outline-none"
            />
            <button className="bg-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-black transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Trust Card Component
const TrustCard = ({ icon, title, desc }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
    <div className="p-3 bg-indigo-50 rounded-xl">{icon}</div>
    <div>
      <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  </div>
);

export default Home;
