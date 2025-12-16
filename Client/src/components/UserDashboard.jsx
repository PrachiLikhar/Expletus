import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  const { user } = useContext(StoreContext);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-[#5DE23C] mb-8">Dashboard</h2>

        <ul className="space-y-4">
          <li>
            <Link
              className="text-gray-700 font-semibold hover:text-[#5DE23C] transition"
              to="/profile"
            >
              My Profile
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-700 font-semibold hover:text-[#5DE23C] transition"
              to="/myorders"
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-700 font-semibold hover:text-[#5DE23C] transition"
              to="/wishlist"
            >
              Wishlist
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* User Details Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome, {user?.name} 👋</h2>
          <p className="text-gray-700 text-lg">Email: {user?.email}</p>

          <div className="mt-4">
            <Link
              to="/edit-profile"
              className="px-4 py-2 bg-[#5DE23C] text-black rounded-md font-semibold shadow hover:bg-green-400 transition"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Your Recent Orders</h2>

          <div className="text-center py-10 text-gray-500">
            <p>No orders found.</p>
            <Link
              to="/product"
              className="mt-4 inline-block px-6 py-2 bg-[#5DE23C] text-black rounded-md font-semibold shadow hover:bg-green-400 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
