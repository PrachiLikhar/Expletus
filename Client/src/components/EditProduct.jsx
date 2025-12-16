import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const API_BASE = "http://localhost:5000/api/seller";

const categories = [
  "Smartphones",
  "Laptops",
  "Headphones",
  "Tablets",
  "Smart TVs",
  "Cameras",
];

const EditProduct = () => {
  const { state } = useLocation(); // product data
  const { id } = useParams();
  const navigate = useNavigate();

  const [imageFile, setImageFile] = useState(null);

  const [product, setProduct] = useState({
    name: state?.name || "",
    price: state?.price || "",
    oldPrice: state?.oldPrice || "",
    stock: state?.stock || "",
    rating: state?.rating || "",
    reviews: state?.reviews || "",
    category: state?.category || "",
    desc: state?.desc || "",
    image: state?.image || "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setImageFile(e.target.files[0]);
  };

  // ================= UPDATE PRODUCT =================
  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(product).forEach((key) => {
      formData.append(key, product[key]);
    });

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await fetch(`${API_BASE}/edit-product/${id}`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Update failed");
        return;
      }

      alert("Product Updated Successfully ✅");
      navigate("/seller-dashboard");
    } catch (error) {
      console.log("Update error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex justify-center items-center text-white">
      <div className="bg-black/60 p-6 rounded-2xl w-[480px] border border-white/10">
        <h2 className="text-2xl font-bold text-[#5DE23C] mb-5 text-center">
          Edit Product
        </h2>

        <form onSubmit={handleUpdateProduct} className="space-y-4">
          {/* Image Preview */}
          <img
            src={imageFile ? URL.createObjectURL(imageFile) : product.image}
            alt="preview"
            className="w-full h-40 object-cover rounded-xl"
          />

          <input type="file" onChange={handleImageUpload} />

          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600"
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Price"
              className="p-3 rounded-xl bg-black/40 border border-gray-600"
              required
            />
            <input
              type="number"
              name="oldPrice"
              value={product.oldPrice}
              onChange={handleChange}
              placeholder="Old Price"
              className="p-3 rounded-xl bg-black/40 border border-gray-600"
            />
          </div>

          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600"
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              value={product.rating}
              onChange={handleChange}
              placeholder="Rating"
              className="p-3 rounded-xl bg-black/40 border border-gray-600"
              required
            />
            <input
              type="number"
              name="reviews"
              value={product.reviews}
              onChange={handleChange}
              placeholder="Reviews"
              className="p-3 rounded-xl bg-black/40 border border-gray-600"
              required
            />
          </div>

          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600"
            required
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c} value={c} className="text-black">
                {c}
              </option>
            ))}
          </select>

          <textarea
            name="desc"
            value={product.desc}
            onChange={handleChange}
            rows="3"
            placeholder="Description"
            className="w-full p-3 rounded-xl bg-black/40 border border-gray-600 resize-none"
            required
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-700 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#5DE23C] text-black rounded-xl font-semibold"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
