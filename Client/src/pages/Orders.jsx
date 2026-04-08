import React, { useEffect, useState } from "react";
import API from "../services/api";
import {
  Package,
  CheckCircle2,
  Clock,
  Truck,
  ChevronRight,
  ExternalLink,
  Loader2,
} from "lucide-react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/orders")
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Status-wise styling helper
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          icon: <CheckCircle2 size={16} />,
        };
      case "shipped":
        return {
          bg: "bg-blue-100",
          text: "text-blue-700",
          icon: <Truck size={16} />,
        };
      default:
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          icon: <Clock size={16} />,
        };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-indigo-600 h-10 w-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Order History</h1>
            <p className="text-gray-500 mt-1">
              Manage and track your recent purchases
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border shadow-sm text-sm font-medium text-gray-600">
            Total Orders:{" "}
            <span className="text-indigo-600 font-bold">{orders.length}</span>
          </div>
        </div>

        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((o) => {
              const statusStyle = getStatusStyle(o.status);
              return (
                <div
                  key={o._id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Order Header */}
                  <div className="bg-gray-50/50 px-6 py-4 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex gap-8">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                          Order Placed
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                          {new Date(o.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                          Total Amount
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          ₹{o.totalAmount}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                        Order ID
                      </p>
                      <p className="text-sm font-mono text-gray-600">
                        #{o._id.slice(-8).toUpperCase()}
                      </p>
                    </div>
                  </div>

                  {/* Order Body */}
                  <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                        <Package size={30} />
                      </div>
                      <div>
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${statusStyle.bg} ${statusStyle.text} mb-2`}
                        >
                          {statusStyle.icon}
                          {o.status || "Processing"}
                        </div>
                        <h4 className="font-semibold text-gray-800">
                          Standard Delivery
                        </h4>
                        <p className="text-sm text-gray-500">
                          Your package is{" "}
                          {o.status?.toLowerCase() === "delivered"
                            ? "at your doorstep"
                            : "on its way"}
                          .
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                      <button className="flex-1 md:flex-none px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-100">
                        View Details
                        <ChevronRight size={16} />
                      </button>
                      <button className="p-2.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl border border-gray-200 transition-all">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-dashed border-gray-200">
            <div className="bg-gray-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={40} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">No orders yet</h2>
            <p className="text-gray-500 mt-2">
              When you buy something, it will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
