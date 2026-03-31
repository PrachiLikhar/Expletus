// import React, { useEffect, useState } from "react";
// import API from "../services/api";

// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     API.get("/cart")
//       .then((res) => setCart(res.data.items))
//       .catch(() => alert("Login required"));
//   }, []);

//   return (
//     <div>
//       <h1>Your Cart</h1>

//       {cart.map((item) => (
//         <div key={item.product._id}>
//           <h3>{item.product.name}</h3>
//           <p>₹{item.product.price}</p>
//           <p>Qty: {item.quantity}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
import React, { useEffect, useState } from "react";
import API from "../services/api";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  CreditCard,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/cart")
      .then((res) => {
        setCart(res.data.items || []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  // Calculate Subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const deliveryCharge = subtotal > 500 ? 0 : 50;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-indigo-600 h-10 w-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="text-indigo-600" size={28} />
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="text-gray-500 font-medium">
            ({cart.length} items)
          </span>
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. Items List (Left Side) */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product._id}
                  className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center"
                >
                  <div className="h-24 w-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={
                        item.product.image || "https://via.placeholder.com/150"
                      }
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-800 text-lg">
                      {item.product.name}
                    </h3>
                    <p className="text-indigo-600 font-bold text-xl mt-1">
                      ₹{item.product.price}
                    </p>

                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button className="p-1 px-2 hover:bg-gray-100">
                          <Minus size={16} />
                        </button>
                        <span className="px-4 font-semibold text-gray-700">
                          {item.quantity}
                        </span>
                        <button className="p-1 px-2 hover:bg-gray-100">
                          <Plus size={16} />
                        </button>
                      </div>
                      <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 2. Order Summary (Right Side) */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 border-b pb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">
                      ₹{subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Charges</span>
                    <span className="text-green-600 font-semibold">
                      {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between py-6">
                  <span className="text-lg font-bold text-gray-900">
                    Total Amount
                  </span>
                  <span className="text-2xl font-black text-indigo-600">
                    ₹{subtotal + deliveryCharge}
                  </span>
                </div>

                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-200 active:scale-95">
                  <CreditCard size={20} />
                  Proceed to Checkout
                  <ChevronRight size={18} />
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  Secure SSL Encryption & 7-day return policy
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart State */
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-dashed border-gray-200">
            <div className="bg-indigo-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={40} className="text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-2 mb-8">
              Looks like you haven't added anything yet.
            </p>
            <Link
              to="/"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
