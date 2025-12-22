import React, { useEffect, useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function CartPage() {
  const { userToken } = useContext(StoreContext);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/cart", {
        method: "GET",
        credentials: "include", // ✅ cookie automatically jayegi
      });

      const data = await res.json();
      setCartItems(data.items || []);
    } catch (err) {
      console.log("Cart fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ ONLY ONE useEffect
  useEffect(() => {
    fetchCart(); // ✅ hamesha call hogi
  }, []);

  if (loading)
    return <p className="text-white py-20 text-center">Loading Cart...</p>;

  if (cartItems.length === 0)
    return <p className="text-white py-20 text-center">Your cart is empty</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-white">
      <h1 className="text-3xl font-bold mb-8 text-green-400">My Cart</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <div
            key={item.productId?._id || item._id}
            className="bg-gray-800 p-6 rounded-xl shadow"
          >
            <img
              src={item.productId?.image}
              alt={item.productId?.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="font-bold text-lg">
              {item.productId?.name || "Product not found"}
            </h3>
            <p className="text-green-400">₹{item.productId?.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
