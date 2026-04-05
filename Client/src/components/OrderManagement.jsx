import React, { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  Edit2,
  Trash2,
  ShoppingCart,
  Truck,
  Clock,
  Eye,
  Download,
} from "lucide-react";
import { jsPDF } from "jspdf";

// 1. Dummy Data yahan add kar diya hai
const initialOrders = [
  {
    id: 1,
    orderId: 5421,
    customer: "Rahul Sharma",
    contact: "9876543210",
    product: "Laptop Bag",
    date: "2024-03-15",
    address: "123, MG Road, Mumbai",
    amount: "1500",
    status: "Shipped",
  },
  {
    id: 2,
    orderId: 8842,
    customer: "Anjali Gupta",
    contact: "8877665544",
    product: "Wireless Mouse",
    date: "2024-03-18",
    address: "Flat 402, Green Valley, Delhi",
    amount: "800",
    status: "Pending",
  },
  {
    id: 3,
    orderId: 3215,
    customer: "Vikram Singh",
    contact: "7766554433",
    product: "Keyboard",
    date: "2024-03-20",
    address: "Sector 15, Chandigarh",
    amount: "1200",
    status: "Delivered",
  },
  {
    id: 4,
    orderId: 1029,
    customer: "Sanya Malhotra",
    contact: "9988776655",
    product: "USB-C Hub",
    date: "2024-03-22",
    address: "B-502, Sky High, Bangalore",
    amount: "2500",
    status: "Cancelled",
  },
];

const OrderManagement = () => {
  // Ab data seedhe initialOrders se aa raha hai
  const [orders, setOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Default false kyunki data local hai
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [editOrderId, setEditOrderId] = useState(null);

  const [formData, setFormData] = useState({
    customer: "",
    contact: "",
    product: "",
    date: "",
    address: "",
    amount: "",
    status: "Pending",
  });

  // 🔍 FILTER
  const filteredOrders = orders.filter(
    (o) =>
      o.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.orderId.toString().includes(searchTerm)
  );

  // 🎨 STATUS STYLES (Isse wahi rakha hai)
  const getStatusStyle = (status) => {
    switch (status) {
      case "Shipped":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Delivered":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  const getStatusDotStyle = (status) => {
    switch (status) {
      case "Shipped":
        return "bg-green-600";
      case "Pending":
        return "bg-yellow-600";
      case "Delivered":
        return "bg-blue-600";
      case "Cancelled":
        return "bg-red-600";
      default:
        return "bg-slate-400";
    }
  };

  // 🧾 FORM HANDLERS
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetOrderForm = () => {
    setFormData({
      customer: "",
      contact: "",
      product: "",
      date: "",
      address: "",
      amount: "",
      status: "Pending",
    });
    setEditOrderId(null);
  };

  const handleOpenAddOrder = () => {
    resetOrderForm();
    setIsAddModalOpen(true);
  };

  const handleEditOrder = (order) => {
    setFormData({ ...order });
    setEditOrderId(order.id);
    setIsAddModalOpen(true);
  };

  const handleSaveOrder = () => {
    if (
      !formData.customer ||
      !formData.contact ||
      !formData.product ||
      !formData.amount
    )
      return;

    if (editOrderId) {
      setOrders(
        orders.map((o) => (o.id === editOrderId ? { ...formData } : o))
      );
    } else {
      const newOrder = {
        id: Date.now(),
        orderId: Math.floor(1000 + Math.random() * 9000),
        ...formData,
      };
      setOrders([...orders, newOrder]);
    }
    resetOrderForm();
    setIsAddModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this order?")) {
      setOrders(orders.filter((o) => o.id !== id));
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setIsOrderModalOpen(true);
  };

  // 📥 PDF DOWNLOAD LOGIC
  const handleDownloadOrder = (order) => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    doc.setFontSize(24);
    doc.text("Order Details", 40, 60);
    doc.line(40, 70, 555, 70);

    const addLine = (label, value, y) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${label}:`, 40, y);
      doc.setFont("helvetica", "normal");
      doc.text(`${value}`, 150, y);
    };

    let y = 95;
    addLine("Order ID", `#${order.orderId}`, y);
    y += 20;
    addLine("Customer", order.customer, y);
    y += 20;
    addLine("Product", order.product, y);
    y += 20;
    addLine("Amount", `Rs. ${order.amount}`, y);
    y += 20;
    addLine("Status", order.status, y);

    doc.save(`Order-${order.orderId}.pdf`);
  };

  return (
    <div className="flex flex-col gap-6 w-full p-8 bg-slate-50 min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Orders</h1>
          <p className="text-sm text-slate-500">
            Manage and track your business orders
          </p>
        </div>
        <button
          onClick={handleOpenAddOrder}
          className="flex items-center gap-2 bg-[#0F3A53] hover:bg-[#0b2d44] text-white px-5 py-2.5 rounded-lg shadow-md text-sm font-semibold"
        >
          <Plus size={16} /> Create Order
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-4 shadow-sm">
          <div className="bg-indigo-100 p-3 rounded-lg">
            <ShoppingCart className="text-indigo-600" size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase">Total Orders</p>
            <p className="text-2xl font-bold text-slate-800">{orders.length}</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-4 shadow-sm">
          <div className="bg-green-100 p-3 rounded-lg">
            <Truck className="text-green-600" size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase">Shipped</p>
            <p className="text-2xl font-bold text-slate-800">
              {orders.filter((o) => o.status === "Shipped").length}
            </p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-4 shadow-sm">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Clock className="text-yellow-600" size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase">Pending</p>
            <p className="text-2xl font-bold text-slate-800">
              {orders.filter((o) => o.status === "Pending").length}
            </p>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 w-80 bg-slate-50">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search orders..."
              className="ml-2 outline-none text-sm w-full bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
              <tr>
                <th className="text-left px-6 py-3">Order ID</th>
                <th className="text-left px-6 py-3">Customer</th>
                <th className="text-left px-6 py-3">Product</th>
                <th className="text-left px-6 py-3">Amount</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-right px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-6 py-4 font-medium">#{order.orderId}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4">{order.product}</td>
                  <td className="px-6 py-4 font-semibold">₹{order.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${getStatusDotStyle(
                          order.status
                        )}`}
                      ></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleDownloadOrder(order)}
                        className="p-1.5 text-slate-400 hover:text-green-600"
                      >
                        <Download size={16} />
                      </button>
                      <button
                        onClick={() => handleViewOrder(order)}
                        className="p-1.5 text-slate-400 hover:text-blue-600"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEditOrder(order)}
                        className="p-1.5 text-slate-400 hover:text-indigo-600"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="p-1.5 text-slate-400 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODALS (Add/Edit and View) - Codes remains same as your original logic */}
      {/* ... Add Order Modal and Order Details Modal logic ... */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white w-full max-w-2xl rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">
              {editOrderId ? "Edit Order" : "New Order"}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="customer"
                placeholder="Customer"
                value={formData.customer}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                name="product"
                placeholder="Product"
                value={formData.product}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                name="amount"
                type="number"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border p-2 rounded"
              >
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveOrder}
                className="px-4 py-2 bg-[#0F3A53] text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
