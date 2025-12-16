import React, { useEffect, useState } from "react";
import {
  LayoutGrid,
  PackageSearch,
  BarChart3,
  Settings,
  Plus,
  User,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const API_BASE = "http://localhost:5000/api/seller";

const categories = [
  "Smartphones",
  "Laptops",
  "Headphones",
  "Tablets",
  "Smart TVs",
  "Cameras",
];

const SellerDashboard = () => {
  const navigate = useNavigate();

  const [seller, setSeller] = useState(null);
  const [activeMenu, setActiveMenu] = useState("products");
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    oldPrice: "",
    stock: "",
    rating: "",
    reviews: "",
    category: "",
    desc: "",
  });

  // ================= FETCH PROFILE =================
  const fetchProfile = async () => {
    try {
      const res = await fetch(`${API_BASE}/me`, {
        credentials: "include",
      });
      const data = await res.json();
      setSeller(data);
    } catch (err) {
      console.log("Profile error:", err);
    }
  };

  // ================= FETCH PRODUCTS =================
  const fetchProducts = async () => {
    try {
      setLoadingProducts(true);
      const res = await fetch(`${API_BASE}/my-products`, {
        credentials: "include",
      });
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.log("Product fetch error:", err);
      setProducts([]);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchProducts();
  }, []);

  // ================= INPUT CHANGE =================
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setImageFile(e.target.files[0]);
  };

  // ================= ADD PRODUCT =================
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });
    formData.append("image", imageFile);

    try {
      const res = await fetch(`${API_BASE}/add-product`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Product add failed");
        return;
      }

      setProducts((prev) => [...prev, data]);
      setShowModal(false);
      setSuccessMsg("Product Added Successfully! 🎉");

      // reset form
      setProduct({
        name: "",
        price: "",
        oldPrice: "",
        stock: "",
        rating: "",
        reviews: "",
        category: "",
        desc: "",
      });
      setImageFile(null);
    } catch (error) {
      console.log("Add product error:", error);
    }
  };

  // ================= DELETE PRODUCT =================
  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      const res = await fetch(`${API_BASE}/delete-product/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Delete failed");
        return;
      }

      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  // ================= LOGOUT =================
  const handleLogout = async () => {
    await fetch(`${API_BASE}/logout`, {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/seller-login";
  };

  // ================= JSX =================
  return (
    <div className="w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black flex text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black/40 p-5 border-r border-white/10 flex flex-col">
        <h1 className="text-3xl font-bold text-[#5DE23C] mb-10">
          Seller Panel
        </h1>

        <nav className="space-y-3">
          {["dashboard", "products", "analytics", "settings"].map((menu) => (
            <button
              key={menu}
              onClick={() => setActiveMenu(menu)}
              className={`flex items-center gap-3 w-full p-3 rounded-xl ${
                activeMenu === menu
                  ? "bg-[#5DE23C] text-black"
                  : "hover:bg-white/10"
              }`}
            >
              {menu === "dashboard" && <LayoutGrid />}
              {menu === "products" && <PackageSearch />}
              {menu === "analytics" && <BarChart3 />}
              {menu === "settings" && <Settings />}
              {menu.toUpperCase()}
            </button>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 hover:bg-red-700 p-3 rounded-xl flex items-center gap-3"
        >
          <LogOut /> Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-y-auto">
        {successMsg && (
          <div className="mb-4 p-4 bg-green-600 text-black rounded-xl text-center font-semibold">
            {successMsg}
          </div>
        )}

        <div className="flex justify-between items-center mb-8 bg-white/10 p-4 rounded-2xl">
          <h2 className="text-3xl font-bold">Products</h2>
          <div className="flex items-center gap-3">
            <User className="text-[#5DE23C]" />
            <div>
              <p className="font-semibold">{seller?.name}</p>
              <p className="text-sm text-gray-400">{seller?.email}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-3 bg-[#5DE23C] text-black rounded-xl font-semibold flex items-center gap-2 mb-5"
        >
          <Plus /> Add Product
        </button>

        {loadingProducts ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p._id}
                className="bg-white p-4 rounded-2xl text-black shadow"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <h3 className="font-bold mt-2">{p.name}</h3>
                <p className="text-sm">{p.category}</p>
                <p>
                  ⭐ {p.rating} ({p.reviews})
                </p>
                <p className="text-green-600 font-bold">₹{p.price}</p>

                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() =>
                      navigate(`/edit-product/${p._id}`, { state: p })
                    }
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(p._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* ================= ADD PRODUCT MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl w-[480px] border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-bold text-[#5DE23C] mb-5 text-center">
              Add New Product
            </h2>

            <form onSubmit={handleAddProduct} className="space-y-4">
              {/* Image Upload */}
              <div>
                <label className="text-sm text-gray-300 mb-1 block">
                  Product Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
                       file:rounded-xl file:border-0
                       file:bg-[#5DE23C] file:text-black
                       hover:file:bg-green-400 cursor-pointer"
                  required
                />
              </div>

              {/* Product Name */}
              <div>
                <label className="text-sm text-gray-300">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  placeholder="iPhone 15 Pro"
                  className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-gray-600 focus:border-[#5DE23C] outline-none"
                  required
                />
              </div>

              {/* Price Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-300">Price (₹)</label>
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-gray-600"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">Old Price (₹)</label>
                  <input
                    type="number"
                    name="oldPrice"
                    value={product.oldPrice}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-gray-600"
                  />
                </div>
              </div>

              {/* Stock */}
              <div>
                <label className="text-sm text-gray-300">Stock Quantity</label>
                <input
                  type="number"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-gray-600"
                  required
                />
              </div>

              {/* Rating & Reviews */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-300">
                    ⭐ Rating (1–5)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    name="rating"
                    value={product.rating}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-gray-600"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">
                    💬 Total Reviews
                  </label>
                  <input
                    type="number"
                    min="0"
                    name="reviews"
                    value={product.reviews}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-gray-600"
                    required
                  />
                </div>
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="text-sm text-gray-300">Category</label>
                <select
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-gray-600 text-white"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="text-black">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="text-sm text-gray-300">Description</label>
                <textarea
                  name="desc"
                  value={product.desc}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Short product description..."
                  className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-gray-600 resize-none"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-gray-700 hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#5DE23C] text-black font-semibold hover:bg-green-400"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerDashboard;
