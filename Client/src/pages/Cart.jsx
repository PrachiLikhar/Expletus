import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

const initialCart = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    category: "Apple • Deep Purple",
    price: 79999,
    image:
      "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=500",
    qty: 1,
  },
  {
    id: 2,
    name: "ROG Zephyrus G14",
    category: "Asus • Gaming Laptop",
    price: 99999,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=500",
    qty: 1,
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = subtotal > 50000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="bg-[#0b1120] min-h-screen text-slate-200 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-12">
        {/* Header with Progress Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-4xl font-extrabold text-white flex items-center gap-3">
            <ShoppingBag className="text-cyan-400" /> My{" "}
            <span className="text-cyan-400">Cart</span>
          </h2>

          {/* Checkout Steps (Unique Touch) */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="text-cyan-400 border-b-2 border-cyan-400 pb-1">
              01 Cart
            </span>
            <span className="text-slate-600">❯</span>
            <span className="text-slate-500">02 Checkout</span>
            <span className="text-slate-600">❯</span>
            <span className="text-slate-500">03 Payment</span>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-dashed border-slate-700">
            <p className="text-slate-400 text-xl">
              Your cart feels a bit light...
            </p>
            <button className="mt-6 px-8 py-3 bg-cyan-500 rounded-full font-bold hover:bg-cyan-400 transition-all">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col sm:flex-row items-center gap-6 bg-slate-900/50 backdrop-blur-md border border-slate-800 p-5 rounded-3xl hover:border-cyan-500/30 transition-all"
                >
                  <div className="relative overflow-hidden rounded-2xl w-full sm:w-32 h-32">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <span className="text-[10px] tracking-widest text-slate-500 uppercase font-bold">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {item.name}
                    </h3>
                    <p className="text-cyan-400 font-bold text-lg">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity Controller */}
                  <div className="flex items-center bg-slate-950/50 border border-slate-700 rounded-2xl p-1">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="p-2 hover:bg-slate-800 rounded-xl transition-colors"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-10 text-center font-bold text-white">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="p-2 hover:bg-slate-800 rounded-xl transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-3 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-2xl transition-all"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              ))}
            </div>

            {/* Sticky Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-b from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-slate-700 p-8 rounded-[2rem] shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-white font-medium">
                      ₹{subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Shipping</span>
                    <span
                      className={
                        shipping === 0 ? "text-green-400" : "text-white"
                      }
                    >
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="h-[1px] bg-slate-700 my-4"></div>
                  <div className="flex justify-between items-end">
                    <span className="text-lg">Total Amount</span>
                    <span className="text-3xl font-black text-cyan-400">
                      ₹{total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-500 text-sm"
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-4 bg-slate-800 rounded-lg text-xs font-bold hover:text-cyan-400 transition-colors">
                    Apply
                  </button>
                </div>

                <button className="w-full group flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-[#0b1120] py-4 rounded-2xl font-black text-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all active:scale-95">
                  Checkout Now{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <p className="text-center text-slate-500 text-xs mt-6">
                  Secure checkout powered by Stripe.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
