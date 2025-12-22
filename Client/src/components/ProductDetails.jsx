import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);

        if (!res.ok) {
          throw new Error("Product not found");
        }

        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Fetch product error:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-white text-center py-20">Loading...</p>;
  }

  if (!product) {
    return <p className="text-white text-center py-20">Product not found</p>;
  }

  return (
    <section className="bg-gray-900 min-h-screen text-white py-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl shadow-lg"
        />

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-extrabold mb-3">{product.name}</h1>

          <p className="text-green-400 mb-2">{product.category}</p>

          <p className="text-xl font-semibold mb-3">
            ₹{product.price}
            {product.oldPrice && (
              <span className="line-through text-gray-400 text-sm ml-3">
                ₹{product.oldPrice}
              </span>
            )}
          </p>

          <p className="text-gray-300 mb-6">{product.desc}</p>

          <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
