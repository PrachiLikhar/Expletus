import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Filter,
  Edit2,
  Trash2,
  Users,
  Mail,
  Building2,
} from "lucide-react";

// 1. Dummy Data Array yahan define kiya hai
const DUMMY_CUSTOMERS = [
  {
    id: 1,
    name: "Rahul Traders",
    email: "rahul@traders.com",
    phone: "9876543210",
    gst: "22AAAAA0000A1Z5",
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Enterprises",
    email: "contact@priya.in",
    phone: "8822334455",
    gst: "27BBBBB1111B2Z6",
    status: "Active",
  },
  {
    id: 3,
    name: "Amit Logistics",
    email: "info@amitlogistics.com",
    phone: "7766554433",
    gst: "",
    status: "Active",
  },
  {
    id: 4,
    name: "Mehta & Sons",
    email: "mehta@outlook.com",
    phone: "9900112233",
    gst: "19CCCCC2222C3Z7",
    status: "Active",
  },
];

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editCustomerId, setEditCustomerId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gst: "",
  });

  // 2. useEffect mein ab koi file call nahi ho rahi, direct dummy data use ho raha hai
  useEffect(() => {
    const fetchCustomers = () => {
      setIsLoading(true);
      try {
        // Direct dummy data set kar rahe hain
        setCustomers(DUMMY_CUSTOMERS);
      } catch (error) {
        console.error("Failed to load customers:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm)
  );

  const avatarColors = [
    "from-indigo-500 to-purple-600",
    "from-emerald-400 to-teal-600",
    "from-rose-400 to-pink-600",
    "from-amber-400 to-orange-500",
    "from-sky-400 to-blue-600",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetCustomerForm = () => {
    setFormData({ name: "", email: "", phone: "", gst: "" });
    setEditCustomerId(null);
  };

  const handleOpenAddCustomer = () => {
    resetCustomerForm();
    setIsAddModalOpen(true);
  };

  const handleEditCustomer = (customer) => {
    setFormData({
      name: customer.name || "",
      email: customer.email || "",
      phone: customer.phone || "",
      gst: customer.gst || "",
    });
    setEditCustomerId(customer.id);
    setIsAddModalOpen(true);
  };

  const handleSaveCustomer = () => {
    if (!formData.name || !formData.email || !formData.phone) return;

    if (editCustomerId) {
      const updated = customers.map((c) =>
        c.id === editCustomerId
          ? { ...c, ...formData, status: c.status || "Active" }
          : c
      );
      setCustomers(updated);
    } else {
      const newCustomer = {
        id: Date.now(),
        ...formData,
        status: "Active",
      };
      setCustomers([...customers, newCustomer]);
    }

    resetCustomerForm();
    setIsAddModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full p-8 bg-slate-50 min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Customers</h1>
          <p className="text-sm text-slate-500">Manage your client directory</p>
        </div>
        <button
          onClick={handleOpenAddCustomer}
          className="flex items-center gap-2 bg-[#0F3A53] hover:bg-[#1a4a66] text-white px-5 py-2.5 rounded-lg shadow text-sm font-semibold transition-colors"
        >
          <Plus size={16} />
          Add Customer
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-4">
          <div className="bg-indigo-100 p-3 rounded-lg">
            <Users className="text-indigo-600" size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-medium">
              Total Customers
            </p>
            <p className="text-2xl font-bold text-slate-800">
              {customers.length}
            </p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <Building2 className="text-green-600" size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-medium">
              Active
            </p>
            <p className="text-2xl font-bold text-slate-800">
              {customers.length}
            </p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Mail className="text-yellow-600" size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-medium">
              With GST
            </p>
            <p className="text-2xl font-bold text-slate-800">
              {customers.filter((c) => c.gst).length}
            </p>
          </div>
        </div>
      </div>

      {/* SEARCH & TABLE */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center border border-slate-200 rounded-lg px-3 py-2 w-80 bg-slate-50">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search customers..."
              className="ml-2 outline-none text-sm w-full bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-3">Customer</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">GST Number</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="text-center py-10">
                    Loading...
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer, index) => (
                  <tr
                    key={customer.id}
                    className="border-b hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                          avatarColors[index % avatarColors.length]
                        } text-white flex items-center justify-center font-bold`}
                      >
                        {customer.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-slate-700">
                        {customer.name}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {customer.email}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {customer.phone}
                    </td>
                    <td className="px-6 py-4">
                      {customer.gst ? (
                        <span className="bg-slate-100 px-2 py-1 rounded text-xs">
                          {customer.gst}
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 flex items-center gap-1 w-fit">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>{" "}
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleEditCustomer(customer)}
                          className="p-2 text-slate-400 hover:text-indigo-600"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(customer.id)}
                          className="p-2 text-slate-400 hover:text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL (Same as before but simplified for readability) */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-bold mb-4">
              {editCustomerId ? "Edit" : "Add"} Customer
            </h2>
            <div className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Business Name"
                className="w-full border p-3 rounded-lg"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border p-3 rounded-lg"
              />
              <input
                name="gst"
                value={formData.gst}
                onChange={handleChange}
                placeholder="GST (Optional)"
                className="w-full border p-3 rounded-lg"
              />
              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 text-slate-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveCustomer}
                  className="px-6 py-2 bg-[#0F3A53] text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagement;
