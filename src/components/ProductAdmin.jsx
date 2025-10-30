import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaBoxOpen,
  FaPlus,
  FaClipboardList,
  FaCog,
  FaTrashAlt,
  FaEdit,
} from "react-icons/fa";

export default function ProductAdmin() {
  const [collapsed, setCollapsed] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      image: "https://via.placeholder.com/150",
      price: 120000,
      oldPrice: 130000,
      stock: 10,
      rating: 4.5,
      reviews: 120,
      category: "Mobile",
      desc: "Latest Apple iPhone with powerful A17 chip.",
    },
    {
      id: 2,
      name: "Samsung S24 Ultra",
      image: "https://via.placeholder.com/150",
      price: 95000,
      oldPrice: 105000,
      stock: 8,
      rating: 4.6,
      reviews: 80,
      category: "Mobile",
      desc: "Flagship Samsung phone with cutting-edge camera.",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      image: "https://via.placeholder.com/150",
      price: 20000,
      oldPrice: 22000,
      stock: 15,
      rating: 4.7,
      reviews: 50,
      category: "Accessories",
      desc: "Industry-leading noise cancelling headphones for immersive sound.",
    },
  ]);

  const [showAdd, setShowAdd] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    price: "",
    oldPrice: "",
    stock: "",
    rating: "",
    reviews: "",
    category: "",
    desc: "",
  });
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // Dynamic categories from current products
  const categories = [...new Set(products.map((p) => p.category))];

  // Add new product
  function handleAddProduct(e) {
    e.preventDefault();
    if (!newProduct.name || !newProduct.category) return;
    const id = products.length + 1;
    setProducts([...products, { id, ...newProduct }]);
    setNewProduct({
      name: "",
      image: "",
      price: "",
      oldPrice: "",
      stock: "",
      rating: "",
      reviews: "",
      category: "",
      desc: "",
    });
    setShowAdd(false);
  }

  // Edit product
  function handleEditProduct(p) {
    setEditingProduct(p);
  }

  function handleUpdateProduct(e) {
    e.preventDefault();
    setProducts(
      products.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
  }

  // Delete product
  function handleDelete(id) {
    setProducts(products.filter((p) => p.id !== id));
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? "80px" : "250px" }}
        className="bg-[#121212] text-white p-4 flex flex-col shadow-lg transition-all duration-300"
      >
        <div className="flex items-center justify-between mb-6">
          {!collapsed && (
            <h2 className="text-[#5DE23C] font-bold text-lg">Admin</h2>
          )}
          <button onClick={() => setCollapsed(!collapsed)}>
            <FaBars className="text-[#5DE23C] text-xl" />
          </button>
        </div>

        <div className="flex flex-col items-center mb-4">
          <img
            src="https://via.placeholder.com/70"
            alt="Admin"
            className="rounded-full border-2 border-[#5DE23C]"
          />
          {!collapsed && (
            <h3 className="mt-2 text-sm font-semibold text-[#5DE23C]">
              Prachi Likhar
            </h3>
          )}
        </div>

        <nav className="flex-1 space-y-3">
          {[
            { icon: <FaBoxOpen />, label: "Products" },
            {
              icon: <FaPlus />,
              label: "Add Product",
              onClick: () => setShowAdd(true),
            },
            { icon: <FaClipboardList />, label: "Orders" },
            { icon: <FaCog />, label: "Settings" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: "#5DE23C20" }}
              className="flex items-center gap-3 p-2 rounded-md cursor-pointer transition"
              onClick={item.onClick}
            >
              <span className="text-[#5DE23C] text-lg">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </motion.div>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar with Search */}
        <header className="flex justify-between items-center bg-white border-b p-4 shadow-sm sticky top-0 z-20">
          <h1 className="text-xl font-semibold text-gray-800">
            Product Management
          </h1>

          <div className="relative w-64">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="border border-[#5DE23C] rounded px-3 py-2 text-sm w-full outline-none focus:ring-2 focus:ring-[#5DE23C]"
            />
            {query && filtered.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded shadow mt-1 z-10 max-h-48 overflow-y-auto">
                {filtered.map((p) => (
                  <li
                    key={p.id}
                    onClick={() => setQuery(p.name)}
                    className="px-3 py-2 hover:bg-[#5DE23C20] cursor-pointer"
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
          {[
            { label: "Total Products", value: products.length },
            {
              label: "Low Stock",
              value: products.filter((p) => p.stock < 10).length,
            },
            {
              label: "Revenue",
              value:
                "₹" + products.reduce((acc, p) => acc + Number(p.price), 0),
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow rounded-lg p-5 border-t-4 border-[#5DE23C]"
            >
              <p className="text-gray-500 text-sm">{card.label}</p>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">
                {card.value}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Product Table */}
        <main className="p-6 overflow-x-auto">
          <motion.table
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-full bg-white rounded shadow"
          >
            <thead className="border-b bg-[#5DE23C]/10">
              <tr className="text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Image</th>
                <th className="p-3">Price</th>
                <th className="p-3">Old Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Reviews</th>
                <th className="p-3">Category</th>
                <th className="p-3">Description</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <motion.tr
                  key={p.id}
                  whileHover={{ backgroundColor: "#5DE23C10" }}
                  className="border-b"
                >
                  <td className="p-3">{p.id}</td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-3">₹{p.price}</td>
                  <td className="p-3">₹{p.oldPrice}</td>
                  <td className="p-3">{p.stock}</td>
                  <td className="p-3">{p.rating}</td>
                  <td className="p-3">{p.reviews}</td>
                  <td className="p-3">{p.category}</td>
                  <td className="p-3">{p.desc}</td>
                  <td className="p-3 flex items-center gap-3">
                    <FaEdit
                      className="text-[#5DE23C] cursor-pointer hover:scale-110 transition"
                      onClick={() => handleEditProduct(p)}
                    />
                    <FaTrashAlt
                      onClick={() => handleDelete(p.id)}
                      className="text-red-500 cursor-pointer hover:scale-110 transition"
                    />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </main>
      </div>

      {/* Add Product Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded shadow w-full max-w-sm overflow-y-auto max-h-[90vh]"
          >
            <h2 className="text-lg font-semibold mb-4 text-[#5DE23C]">
              Add New Product
            </h2>
            <form onSubmit={handleAddProduct} className="space-y-3">
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                className="border px-3 py-2 w-full rounded outline-none"
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <input
                type="number"
                placeholder="Old Price"
                value={newProduct.oldPrice}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, oldPrice: e.target.value })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <input
                type="number"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, stock: e.target.value })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <input
                type="number"
                placeholder="Rating"
                value={newProduct.rating}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, rating: e.target.value })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <input
                type="number"
                placeholder="Reviews"
                value={newProduct.reviews}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, reviews: e.target.value })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <select
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                className="border px-3 py-2 w-full rounded outline-none"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Description"
                value={newProduct.desc}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, desc: e.target.value })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#5DE23C] text-white px-4 py-2 rounded w-full"
              >
                Add Product
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded shadow w-full max-w-sm overflow-y-auto max-h-[90vh]"
          >
            <h2 className="text-lg font-semibold mb-4 text-[#5DE23C]">
              Edit Product
            </h2>
            <form onSubmit={handleUpdateProduct} className="space-y-3">
              <input
                type="text"
                placeholder="Product Name"
                value={editingProduct.name}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    name: e.target.value,
                  })
                }
                className="border px-3 py-2 w-full rounded outline-none"
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={editingProduct.image}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    image: e.target.value,
                  })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <input
                type="number"
                placeholder="Price"
                value={editingProduct.price}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    price: e.target.value,
                  })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <input
                type="number"
                placeholder="Old Price"
                value={editingProduct.oldPrice}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    oldPrice: e.target.value,
                  })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <input
                type="number"
                placeholder="Stock"
                value={editingProduct.stock}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    stock: e.target.value,
                  })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <input
                type="number"
                placeholder="Rating"
                value={editingProduct.rating}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    rating: e.target.value,
                  })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <input
                type="number"
                placeholder="Reviews"
                value={editingProduct.reviews}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    reviews: e.target.value,
                  })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              />
              <select
                value={editingProduct.category}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    category: e.target.value,
                  })
                }
                className="border px-3 py-2 w-full rounded outline-none"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Description"
                value={editingProduct.desc}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    desc: e.target.value,
                  })
                }
                className="border px-3 py-2 w-full rounded outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#5DE23C] text-white px-4 py-2 rounded w-full"
              >
                Update Product
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
