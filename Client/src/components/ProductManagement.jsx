import React, { useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";

const ProductManagement = () => {
  // 1. State for Products
  const [products, setProducts] = useState([
    { id: 1, name: "Electronic Gadget #1", price: "14,999", stock: "In Stock" },
    { id: 2, name: "Electronic Gadget #2", price: "12,499", stock: "In Stock" },
  ]);

  // 2. State for Modal/Form Visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // 3. Form Input State
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "In Stock",
  });

  // --- Functions ---

  const handleOpenAdd = () => {
    setEditingProduct(null);
    setFormData({ name: "", price: "", stock: "In Stock" });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (product) => {
    setEditingProduct(product);
    setFormData(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      // Update Logic
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...formData, id: p.id } : p
        )
      );
    } else {
      // Add Logic
      const newProduct = { ...formData, id: Date.now() };
      setProducts([...products, newProduct]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100">
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b border-gray-50">
          <h3 className="font-bold text-gray-700 uppercase tracking-wider text-sm">
            Inventory List
          </h3>
          <button
            onClick={handleOpenAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition"
          >
            <Plus size={18} /> <span>Add Product</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 text-xs uppercase">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium">{product.name}</td>
                  <td className="p-4 text-gray-600">₹{product.price}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        product.stock === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>
                  <td className="p-4 flex justify-center space-x-4 text-gray-400">
                    <Edit
                      size={18}
                      className="cursor-pointer hover:text-blue-500"
                      onClick={() => handleOpenEdit(product)}
                    />
                    <Trash2
                      size={18}
                      className="cursor-pointer hover:text-red-500"
                      onClick={() => handleDelete(product.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- MODAL FORM (Add/Edit) --- */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">
                  {editingProduct ? "Edit Product" : "Add New Product"}
                </h2>
                <X
                  className="cursor-pointer text-gray-400"
                  onClick={() => setIsModalOpen(false)}
                />
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price (₹)
                  </label>
                  <input
                    required
                    type="number"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.stock}
                    onChange={(e) =>
                      setFormData({ ...formData, stock: e.target.value })
                    }
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {editingProduct ? "Update" : "Save"}
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
