// import React, { useEffect, useState } from "react";
// import API from "../services/api";

// const AdminDashboard = () => {
//   const [stats, setStats] = useState({});

//   useEffect(() => {
//     API.get("/admin/stats")
//       .then((res) => setStats(res.data))
//       .catch(() => alert("Admin only"));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Admin Dashboard</h1>

//       <div style={{ display: "flex", gap: "20px" }}>
//         <div style={{ padding: "20px", background: "#eee" }}>
//           <h3>Total Users</h3>
//           <h2>{stats.users}</h2>
//         </div>

//         <div style={{ padding: "20px", background: "#eee" }}>
//           <h3>Admins</h3>
//           <h2>{stats.admins}</h2>
//         </div>

//         <div style={{ padding: "20px", background: "#eee" }}>
//           <h3>Total Orders</h3>
//           <h2>{stats.orders}</h2>
//         </div>

//         <div style={{ padding: "20px", background: "#eee" }}>
//           <h3>Products</h3>
//           <h2>{stats.products}</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState } from "react";
import API from "../services/api";
import {
  PlusCircle,
  Image as ImageIcon,
  Tag,
  IndianRupee,
  Layers,
  AlignLeft,
  Package,
  Loader2,
  Eye,
  Users,
  ShoppingBag,
  ShieldCheck,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' or 'add-product'
  const [stats, setStats] = useState({
    users: 0,
    admins: 0,
    orders: 0,
    products: 0,
  });
  const [loadingStats, setLoadingStats] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
    stock: "",
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get("/admin/stats");
      setStats(res.data);
    } catch (err) {
      console.error("Admin only access");
    } finally {
      setLoadingStats(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await API.post("/products", form);
      alert("🚀 Product added successfully!");
      setForm({
        name: "",
        price: "",
        image: "",
        category: "",
        description: "",
        stock: "",
      });
      fetchStats(); // Stats refresh karne ke liye
    } catch (err) {
      alert("Error adding product");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* --- Sidebar --- */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
            <ShieldCheck /> Admin Panel
          </h1>
        </div>
        <nav className="p-4 space-y-2 flex-grow">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
              activeTab === "overview"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <LayoutDashboard size={20} /> Overview
          </button>
          <button
            onClick={() => setActiveTab("add-product")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
              activeTab === "add-product"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            <PlusCircle size={20} /> Add Product
          </button>
        </nav>
      </div>

      {/* --- Main Content --- */}
      <div className="flex-grow p-4 md:p-10 overflow-y-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 capitalize">
              {activeTab.replace("-", " ")}
            </h2>
            <p className="text-gray-500">
              Welcome back, here's what's happening.
            </p>
          </div>
          <div className="hidden sm:block text-sm font-medium bg-white px-4 py-2 rounded-lg border shadow-sm">
            {new Date().toLocaleDateString("en-GB")}
          </div>
        </div>

        {/* --- Tab 1: Overview (Stats) --- */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Users"
                value={stats.users}
                icon={<Users className="text-blue-600" />}
                color="bg-blue-50"
              />
              <StatCard
                title="Admins"
                value={stats.admins}
                icon={<ShieldCheck className="text-purple-600" />}
                color="bg-purple-50"
              />
              <StatCard
                title="Total Orders"
                value={stats.orders}
                icon={<ShoppingBag className="text-orange-600" />}
                color="bg-orange-50"
              />
              <StatCard
                title="Products"
                value={stats.products}
                icon={<Package className="text-green-600" />}
                color="bg-green-50"
              />
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Ready to expand?
                </h3>
                <p className="text-gray-500 text-sm">
                  Add more items to your store to increase engagement.
                </p>
              </div>
              <button
                onClick={() => setActiveTab("add-product")}
                className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2"
              >
                <PlusCircle size={18} /> Add New
              </button>
            </div>
          </div>
        )}

        {/* --- Tab 2: Add Product Form --- */}
        {activeTab === "add-product" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in slide-in-from-bottom-4 duration-500">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputGroup
                    label="Product Name"
                    icon={<Package size={16} />}
                    placeholder="Headphones"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                      <Tag size={16} /> Category
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-all"
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                    >
                      <option value="">Select Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="home">Home Decor</option>
                    </select>
                  </div>
                  <InputGroup
                    label="Price (INR)"
                    icon={<IndianRupee size={16} />}
                    type="number"
                    placeholder="999"
                    value={form.price}
                    onChange={(v) => setForm({ ...form, price: v })}
                  />
                  <InputGroup
                    label="Stock"
                    icon={<Layers size={16} />}
                    type="number"
                    placeholder="50"
                    value={form.stock}
                    onChange={(v) => setForm({ ...form, stock: v })}
                  />
                </div>
                <InputGroup
                  label="Image URL"
                  icon={<ImageIcon size={16} />}
                  placeholder="https://..."
                  value={form.image}
                  onChange={(v) => setForm({ ...form, image: v })}
                />
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
                    <AlignLeft size={16} /> Description
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                  />
                </div>
                <button
                  disabled={formLoading}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50"
                >
                  {formLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <TrendingUp size={20} />
                  )}{" "}
                  Add Product
                </button>
              </form>
            </div>

            {/* Live Preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-10">
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Eye size={14} /> Live Preview
                </p>
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all">
                  <div className="h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                    {form.image ? (
                      <img
                        src={form.image}
                        className="w-full h-full object-cover"
                        alt="prev"
                      />
                    ) : (
                      <ImageIcon size={40} className="text-gray-200" />
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded font-bold uppercase">
                      {form.category || "Category"}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2 truncate">
                      {form.name || "Product Title"}
                    </h3>
                    <div className="mt-4 flex justify-between items-center border-t pt-4">
                      <span className="text-xl font-black text-gray-900">
                        ₹{form.price || "0"}
                      </span>
                      <span className="text-xs font-bold text-green-500">
                        {form.stock ? `In Stock: ${form.stock}` : "Ready"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Reusable Components for Clean Code ---

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div
      className={`h-12 w-12 ${color} rounded-2xl flex items-center justify-center mb-4`}
    >
      {icon}
    </div>
    <p className="text-sm font-medium text-gray-500">{title}</p>
    <h2 className="text-2xl font-bold text-gray-900 mt-1">{value}</h2>
  </div>
);

const InputGroup = ({
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
}) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
      {icon} {label}
    </label>
    <input
      type={type}
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
      placeholder={placeholder}
    />
  </div>
);

export default AdminDashboard;
