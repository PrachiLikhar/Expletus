import React, { useState, useEffect } from "react";
import API from "../services/api"; // Ensure this path is correct
import {
  Plus,
  Edit,
  Trash2,
  X,
  Package,
  Image as ImageIcon,
  Tag,
  Hash,
  Layers,
  AlignLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Mobile",
    brand: "",
    image: "",
    description: "",
    stock: 0, // ✅
  });

  const categories = ["Mobile", "Laptop", "Computer", "Audio Device", "Camera"];

  // 1. Fetch Products from Backend on Load
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpenAdd = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      price: "",
      category: "Mobile",
      brand: "",
      image: "",
      description: "",
      stock: 0,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (product) => {
    setEditingProduct(product);
    setFormData(product);
    setIsModalOpen(true);
  };

  // 2. Delete Product from Backend
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await API.delete(`/products/${id}`); // Assuming your API follows this pattern
        setProducts(products.filter((p) => p._id !== id));
        alert("Product removed successfully");
      } catch (err) {
        alert("Failed to delete product");
      }
    }
  };

  // 3. Submit Logic (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingProduct) {
        // UPDATE Logic
        const res = await API.put(`/products/${editingProduct._id}`, formData);
        setProducts(
          products.map((p) => (p._id === editingProduct._id ? res.data : p))
        );
        alert("Product updated!");
      } else {
        // ADD Logic
        const res = await API.post("/products", formData);
        setProducts([...products, res.data]);
        alert("Product added to Home Page!");
      }
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error saving product:", err);
      alert("Error saving product. Check if backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 md:p-12 bg-[#fcfcfd] min-h-screen font-sans text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-indigo-950">
              Admin Dashboard
            </h1>
            <p className="text-gray-500 font-medium">
              Real-time Inventory Control
            </p>
          </div>
          <button
            onClick={handleOpenAdd}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-xl shadow-indigo-100 transition-all active:scale-95 font-bold"
          >
            <Plus size={20} strokeWidth={3} /> <span>Add New Product</span>
          </button>
        </div>

        {/* INVENTORY TABLE */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="p-20 flex justify-center">
              <Loader2 className="animate-spin text-indigo-600" size={40} />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-50 bg-gray-50/50">
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Product Info
                    </th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Category
                    </th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Price
                    </th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Status
                    </th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {products.map((product) => (
                    <tr
                      key={product._id}
                      className="hover:bg-indigo-50/30 transition-colors group"
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={
                              product.image || "https://via.placeholder.com/50"
                            }
                            alt=""
                            className="w-12 h-12 rounded-xl object-cover shadow-sm bg-gray-100"
                          />
                          <div>
                            <p className="font-bold text-gray-900">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-400 font-medium">
                              {product.brand}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-600">
                          {product.category}
                        </span>
                      </td>
                      <td className="p-6 font-black text-gray-900">
                        ₹{Number(product.price).toLocaleString()}
                      </td>
                      <td className="p-6">
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                            product.stock === "In Stock"
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-rose-100 text-rose-600"
                          }`}
                        >
                          {product.stock === "In Stock" ? (
                            <CheckCircle2 size={12} />
                          ) : (
                            <AlertCircle size={12} />
                          )}
                          {product.stock}
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleOpenEdit(product)}
                            className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* MODAL FORM */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">
                    {editingProduct ? "Edit Product" : "Launch New Product"}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    Data will sync directly to the user storefront
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 hover:bg-white rounded-2xl shadow-sm text-gray-400"
                >
                  <X size={20} />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Product Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400">
                    <Package size={14} /> Product Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400">
                    <Layers size={14} /> Category
                  </label>
                  <select
                    className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-indigo-500 outline-none font-bold"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price (INR) */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400">
                    <Tag size={14} /> Price (INR)
                  </label>
                  <input
                    required
                    type="number"
                    className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>

                {/* Stock - NEW FIELD */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400">
                    <Hash size={14} /> Stock Quantity
                  </label>
                  <input
                    required
                    type="number"
                    className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
                    value={formData.stock}
                    onChange={(e) =>
                      setFormData({ ...formData, stock: e.target.value })
                    }
                  />
                </div>

                {/* Description - NEW FIELD (Full Width) */}
                <div className="md:col-span-2 space-y-2">
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400">
                    <AlignLeft size={14} /> Description
                  </label>
                  <textarea
                    required
                    rows="3"
                    className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-indigo-500 outline-none font-medium"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Write something about the product..."
                  />
                </div>

                {/* Image URL (Full Width) */}
                <div className="md:col-span-2 space-y-2">
                  <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400">
                    <ImageIcon size={14} /> Image URL
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-indigo-500 outline-none font-medium text-xs"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                  />
                </div>

                {/* Action Buttons */}
                <div className="md:col-span-2 flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-4 rounded-2xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-indigo-600 shadow-xl disabled:opacity-50 transition-all"
                  >
                    {isSubmitting
                      ? "Syncing..."
                      : editingProduct
                      ? "Update Now"
                      : "Publish to Home"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;
