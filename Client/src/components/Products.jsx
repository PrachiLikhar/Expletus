import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch(
      `http://localhost:5000/api/products?category=${category || ""}`
    );
    const data = await res.json();
    setProducts(data.products);
    setLoading(false);
  };

  return (
    <div className="p-10 bg-black min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6 text-[#5DE23C]">
        {category ? category : "All Products"}
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p._id} className="bg-white text-black p-4 rounded-xl">
              <img
                src={p.image}
                alt={p.name}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="font-bold mt-2">{p.name}</h3>
              <p className="text-sm">{p.category}</p>
              <p className="text-green-600 font-bold">₹{p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
