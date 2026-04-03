// // import React, { useState } from "react";
// // import API from "../services/api";

// // const Admin = () => {
// //   const [form, setForm] = useState({
// //     name: "",
// //     price: "",
// //     image: "",
// //     category: "",
// //     description: "",
// //     stock: "",
// //   });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     await API.post("/products", form);
// //     alert("Product added");
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         placeholder="Name"
// //         onChange={(e) => setForm({ ...form, name: e.target.value })}
// //       />
// //       <input
// //         placeholder="Price"
// //         onChange={(e) => setForm({ ...form, price: e.target.value })}
// //       />
// //       <input
// //         placeholder="Image URL"
// //         onChange={(e) => setForm({ ...form, image: e.target.value })}
// //       />
// //       <input
// //         placeholder="Category"
// //         onChange={(e) => setForm({ ...form, category: e.target.value })}
// //       />
// //       <input
// //         placeholder="Description"
// //         onChange={(e) => setForm({ ...form, description: e.target.value })}
// //       />
// //       <input
// //         placeholder="Stock"
// //         onChange={(e) => setForm({ ...form, stock: e.target.value })}
// //       />
// //       <button>Add Product</button>
// //     </form>
// //   );
// // };

// // export default Admin;
import React, { useState } from "react";
import API from "../services/api";
import {
  PlusCircle,
  Image as ImageIcon,
  Tag,
  IndianRupee,
  Layers,
  AlignLeft,
  Package,
  Loader2,
  Eye,
} from "lucide-react";

const Admin = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
    stock: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/products", form);
      alert("🚀 Product added successfully!");
      // Form reset karne ke liye
      setForm({
        name: "",
        price: "",
        image: "",
        category: "",
        description: "",
        stock: "",
      });
    } catch (err) {
      alert("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-indigo-600 p-3 rounded-2xl shadow-lg shadow-indigo-200">
            <PlusCircle className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">
              Inventory Management
            </h1>
            <p className="text-gray-500">
              Add new products to your store catalog
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form Section (Left Side - 2 Columns) */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-4">
                Product Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                    <Package size={16} /> Product Name
                  </label>
                  <input
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="e.g. Wireless Headphones"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                    <Tag size={16} /> Category
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                  >
                    <option value="">Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home Decor</option>
                  </select>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                    <IndianRupee size={16} /> Price
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="0.00"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                </div>

                {/* Stock */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                    <Layers size={16} /> Stock Quantity
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="e.g. 50"
                    value={form.stock}
                    onChange={(e) =>
                      setForm({ ...form, stock: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                  <ImageIcon size={16} /> Image URL
                </label>
                <input
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                  placeholder="https://images.unsplash.com/photo..."
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                  <AlignLeft size={16} /> Description
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                  placeholder="Tell us about the product..."
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>

              <button
                disabled={loading}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <PlusCircle size={20} />
                )}
                Add Product to Catalog
              </button>
            </form>
          </div>

          {/* Preview Section (Right Side - 1 Column) */}
          <div className="lg:col-span-1">
            <div className="sticky top-10">
              <div className="flex items-center gap-2 mb-4 text-gray-500 font-bold uppercase text-xs tracking-widest">
                <Eye size={14} /> Live Preview
              </div>

              {/* Preview Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all transform hover:scale-[1.02]">
                <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                  {form.image ? (
                    <img
                      src={form.image}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon size={48} className="text-gray-300" />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md font-bold uppercase tracking-wider">
                    {form.category || "Category"}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 truncate">
                    {form.name || "Product Title"}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2 h-10 italic">
                    {form.description || "No description provided yet."}
                  </p>
                  <div className="mt-6 flex justify-between items-center border-t pt-4">
                    <span className="text-2xl font-black text-gray-900">
                      ₹{form.price || "0"}
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        Number(form.stock) > 0
                          ? "text-green-500"
                          : "text-red-400"
                      }`}
                    >
                      {form.stock ? `In Stock: ${form.stock}` : "Stock Status"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-2xl flex gap-3 text-sm text-yellow-700">
                <div className="font-bold">Note:</div>
                <p>
                  Ensure all images are high resolution for better customer
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
