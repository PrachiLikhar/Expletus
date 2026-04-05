// import React, { useEffect, useState } from "react";
// import API from "../services/api";
// // Recharts for the professional look
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   AreaChart,
//   Area,
// } from "recharts";
// import {
//   PlusCircle,
//   Image as ImageIcon,
//   Package,
//   Users,
//   ShoppingBag,
//   ShieldCheck,
//   LayoutDashboard,
//   Truck,
//   Settings,
//   ClipboardList,
//   Trash2,
//   Edit3,
//   ArrowLeft,
//   TrendingUp,
//   ArrowUpRight,
// } from "lucide-react";

// // Dummy data for the chart (Real world mein ye API se aayega)
// const chartData = [
//   { name: "Jan", sales: 4000, revenue: 2400 },
//   { name: "Feb", sales: 3000, revenue: 1398 },
//   { name: "Mar", sales: 2000, revenue: 9800 },
//   { name: "Apr", sales: 2780, revenue: 3908 },
//   { name: "May", sales: 1890, revenue: 4800 },
//   { name: "Jun", sales: 2390, revenue: 3800 },
// ];

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [products, setProducts] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [stats, setStats] = useState({ users: 0, orders: 0, products: 0 });
//   const [loading, setLoading] = useState(true);
//   const [formLoading, setFormLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     image: "",
//     category: "",
//     description: "",
//     stock: "",
//   });

//   useEffect(() => {
//     fetchStats();
//     fetchProducts();
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const res = await API.get("/admin/stats");
//       setStats(res.data);
//     } catch (err) {
//       console.error("Stats error");
//     }
//   };

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await API.get("/products");
//       setProducts(res.data);
//     } catch (err) {
//       console.error("Fetch error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormLoading(true);
//     try {
//       if (editingId) {
//         await API.put(`/products/${editingId}`, form);
//         alert("Updated!");
//       } else {
//         await API.post("/products", form);
//         alert("Added!");
//       }
//       resetForm();
//       fetchProducts();
//       fetchStats();
//     } catch (err) {
//       alert("Action failed");
//     } finally {
//       setFormLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure?")) {
//       try {
//         await API.delete(`/products/${id}`);
//         fetchProducts();
//         fetchStats();
//       } catch (err) {
//         alert("Delete failed");
//       }
//     }
//   };

//   const handleEdit = (product) => {
//     setForm(product);
//     setEditingId(product._id);
//     setShowForm(true);
//   };

//   const resetForm = () => {
//     setForm({
//       name: "",
//       price: "",
//       image: "",
//       category: "",
//       description: "",
//       stock: "",
//     });
//     setEditingId(null);
//     setShowForm(false);
//   };

//   const menuItems = [
//     { id: "overview", label: "Overview", icon: <LayoutDashboard size={20} /> },
//     { id: "products", label: "Products", icon: <Package size={20} /> },
//     { id: "orders", label: "Orders", icon: <ClipboardList size={20} /> },
//     { id: "delivery", label: "Delivery", icon: <Truck size={20} /> },
//     { id: "settings", label: "Settings", icon: <Settings size={20} /> },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f8fafc] flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-white border-r hidden md:flex flex-col sticky top-0 h-screen">
//         <div className="p-6 border-b text-indigo-600 font-bold flex items-center gap-2 text-xl">
//           <ShieldCheck /> Admin Pro
//         </div>
//         <nav className="p-4 space-y-1">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => {
//                 setActiveTab(item.id);
//                 setShowForm(false);
//               }}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
//                 activeTab === item.id
//                   ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
//                   : "text-gray-500 hover:bg-gray-50"
//               }`}
//             >
//               {item.icon} {item.label}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow p-6 md:p-10">
//         <header className="mb-8 flex justify-between items-center">
//           <div>
//             <h2 className="text-3xl font-bold capitalize text-gray-800">
//               {activeTab}
//             </h2>
//             <p className="text-gray-500 text-sm">Welcome back, Admin!</p>
//           </div>
//           <div className="text-sm bg-white px-4 py-2 rounded-lg border shadow-sm font-medium text-gray-600">
//             {new Date().toLocaleDateString("en-US", {
//               weekday: "long",
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </div>
//         </header>

//         {/* --- Tab: Overview (Improved Section) --- */}
//         {activeTab === "overview" && (
//           <div className="space-y-8">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               <StatCard
//                 title="Total Users"
//                 value={stats.users}
//                 icon={<Users />}
//                 color="text-blue-600"
//                 bg="bg-blue-50"
//                 trend="+12%"
//               />
//               <StatCard
//                 title="Orders"
//                 value={stats.orders}
//                 icon={<ShoppingBag />}
//                 color="text-orange-600"
//                 bg="bg-orange-50"
//                 trend="+5.4%"
//               />
//               <StatCard
//                 title="Products"
//                 value={stats.products}
//                 icon={<Package />}
//                 color="text-green-600"
//                 bg="bg-green-50"
//                 trend="Stable"
//               />
//             </div>

//             {/* Charts Section */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="bg-white p-6 rounded-2xl border shadow-sm">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="font-bold text-gray-700">Revenue Analytics</h3>
//                   <TrendingUp className="text-gray-400" size={20} />
//                 </div>
//                 <div className="h-80 w-full">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={chartData}>
//                       <defs>
//                         <linearGradient
//                           id="colorRev"
//                           x1="0"
//                           y1="0"
//                           x2="0"
//                           y2="1"
//                         >
//                           <stop
//                             offset="5%"
//                             stopColor="#4f46e5"
//                             stopOpacity={0.1}
//                           />
//                           <stop
//                             offset="95%"
//                             stopColor="#4f46e5"
//                             stopOpacity={0}
//                           />
//                         </linearGradient>
//                       </defs>
//                       <CartesianGrid
//                         strokeDasharray="3 3"
//                         vertical={false}
//                         stroke="#f1f5f9"
//                       />
//                       <XAxis
//                         dataKey="name"
//                         axisLine={false}
//                         tickLine={false}
//                         tick={{ fill: "#94a3b8", fontSize: 12 }}
//                         dy={10}
//                       />
//                       <YAxis
//                         axisLine={false}
//                         tickLine={false}
//                         tick={{ fill: "#94a3b8", fontSize: 12 }}
//                       />
//                       <Tooltip
//                         contentStyle={{
//                           borderRadius: "12px",
//                           border: "none",
//                           boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                         }}
//                       />
//                       <Area
//                         type="monotone"
//                         dataKey="revenue"
//                         stroke="#4f46e5"
//                         strokeWidth={3}
//                         fillOpacity={1}
//                         fill="url(#colorRev)"
//                       />
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-2xl border shadow-sm">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="font-bold text-gray-700">Sales Comparison</h3>
//                   <div className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
//                     Monthly
//                   </div>
//                 </div>
//                 <div className="h-80 w-full">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={chartData}>
//                       <CartesianGrid
//                         strokeDasharray="3 3"
//                         vertical={false}
//                         stroke="#f1f5f9"
//                       />
//                       <XAxis
//                         dataKey="name"
//                         axisLine={false}
//                         tickLine={false}
//                         tick={{ fill: "#94a3b8", fontSize: 12 }}
//                         dy={10}
//                       />
//                       <YAxis
//                         axisLine={false}
//                         tickLine={false}
//                         tick={{ fill: "#94a3b8", fontSize: 12 }}
//                       />
//                       <Tooltip
//                         cursor={{ fill: "#f8fafc" }}
//                         contentStyle={{
//                           borderRadius: "12px",
//                           border: "none",
//                           boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                         }}
//                       />
//                       <Bar
//                         dataKey="sales"
//                         fill="#6366f1"
//                         radius={[4, 4, 0, 0]}
//                         barSize={30}
//                       />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* --- Tab: Products (Unchanged as requested) --- */}
//         {activeTab === "products" && (
//           <div className="space-y-6">
//             {!showForm ? (
//               <>
//                 <div className="flex justify-between items-center bg-white p-4 rounded-2xl border">
//                   <h3 className="font-bold">Inventory ({products.length})</h3>
//                   <button
//                     onClick={() => setShowForm(true)}
//                     className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//                   >
//                     <PlusCircle size={18} /> Add New
//                   </button>
//                 </div>

//                 <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
//                   <table className="w-full text-left border-collapse">
//                     <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
//                       <tr>
//                         <th className="p-4">Product</th>
//                         <th className="p-4">Category</th>
//                         <th className="p-4">Price</th>
//                         <th className="p-4">Stock</th>
//                         <th className="p-4 text-center">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y">
//                       {products.map((p) => (
//                         <tr key={p._id} className="hover:bg-gray-50">
//                           <td className="p-4 flex items-center gap-3">
//                             <img
//                               src={p.image}
//                               className="w-10 h-10 rounded object-cover"
//                               alt=""
//                             />
//                             <span className="font-medium text-gray-800">
//                               {p.name}
//                             </span>
//                           </td>
//                           <td className="p-4 text-gray-500 capitalize">
//                             {p.category}
//                           </td>
//                           <td className="p-4 font-bold text-indigo-600">
//                             ₹{p.price}
//                           </td>
//                           <td className="p-4">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs font-bold ${
//                                 p.stock > 0
//                                   ? "bg-green-100 text-green-600"
//                                   : "bg-red-100 text-red-600"
//                               }`}
//                             >
//                               {p.stock} in stock
//                             </span>
//                           </td>
//                           <td className="p-4">
//                             <div className="flex justify-center gap-2">
//                               <button
//                                 onClick={() => handleEdit(p)}
//                                 className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
//                               >
//                                 <Edit3 size={18} />
//                               </button>
//                               <button
//                                 onClick={() => handleDelete(p._id)}
//                                 className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
//                               >
//                                 <Trash2 size={18} />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   {products.length === 0 && (
//                     <div className="p-10 text-center text-gray-400">
//                       No products found.
//                     </div>
//                   )}
//                 </div>
//               </>
//             ) : (
//               <div className="space-y-6">
//                 <button
//                   onClick={resetForm}
//                   className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 font-semibold"
//                 >
//                   <ArrowLeft size={20} /> Back to List
//                 </button>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   <ProductForm
//                     form={form}
//                     setForm={setForm}
//                     handleSubmit={handleSubmit}
//                     loading={formLoading}
//                     isEditing={!!editingId}
//                   />
//                   <LivePreview form={form} />
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Reusable Components
// const StatCard = ({ title, value, icon, color, bg, trend }) => (
//   <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
//     <div className="flex items-center gap-4 relative z-10">
//       <div
//         className={`h-14 w-14 ${bg} ${color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}
//       >
//         {React.cloneElement(icon, { size: 28 })}
//       </div>
//       <div>
//         <p className="text-sm font-medium text-gray-500">{title}</p>
//         <div className="flex items-baseline gap-2">
//           <h2 className="text-2xl font-black text-gray-800">{value}</h2>
//           {trend && (
//             <span className="text-[10px] font-bold text-green-500 flex items-center bg-green-50 px-1 rounded">
//               <ArrowUpRight size={10} /> {trend}
//             </span>
//           )}
//         </div>
//       </div>
//     </div>
//     <div className="absolute -right-2 -bottom-2 opacity-5 text-gray-900 group-hover:scale-125 transition-transform">
//       {React.cloneElement(icon, { size: 80 })}
//     </div>
//   </div>
// );

// const ProductForm = ({ form, setForm, handleSubmit, loading, isEditing }) => (
//   <form
//     onSubmit={handleSubmit}
//     className="bg-white p-8 rounded-2xl border space-y-4 shadow-sm"
//   >
//     <h3 className="text-lg font-bold mb-4">
//       {isEditing ? "Edit Product" : "Add New Product"}
//     </h3>
//     <div className="grid grid-cols-2 gap-4">
//       <InputGroup
//         label="Name"
//         value={form.name}
//         onChange={(v) => setForm({ ...form, name: v })}
//       />
//       <div className="space-y-1">
//         <label className="text-xs font-bold text-gray-500 uppercase">
//           Category
//         </label>
//         <select
//           className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500"
//           value={form.category}
//           onChange={(e) => setForm({ ...form, category: e.target.value })}
//         >
//           <option value="">Select</option>
//           <option value="electronics">Electronics</option>
//           <option value="fashion">Fashion</option>
//         </select>
//       </div>
//       <InputGroup
//         label="Price"
//         type="number"
//         value={form.price}
//         onChange={(v) => setForm({ ...form, price: v })}
//       />
//       <InputGroup
//         label="Stock"
//         type="number"
//         value={form.stock}
//         onChange={(v) => setForm({ ...form, stock: v })}
//       />
//     </div>
//     <InputGroup
//       label="Image URL"
//       value={form.image}
//       onChange={(v) => setForm({ ...form, image: v })}
//     />
//     <button
//       disabled={loading}
//       className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all"
//     >
//       {loading
//         ? "Processing..."
//         : isEditing
//         ? "Update Product"
//         : "Save Product"}
//     </button>
//   </form>
// );

// const LivePreview = ({ form }) => (
//   <div className="bg-white p-6 rounded-2xl border h-fit sticky top-10 text-center">
//     <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest text-left">
//       Live Preview
//     </p>
//     <div className="border rounded-xl overflow-hidden max-w-xs mx-auto shadow-sm">
//       <div className="h-48 bg-gray-50 flex items-center justify-center">
//         {form.image ? (
//           <img
//             src={form.image}
//             className="w-full h-full object-cover"
//             alt="prev"
//           />
//         ) : (
//           <ImageIcon className="text-gray-200" size={40} />
//         )}
//       </div>
//       <div className="p-4">
//         <h4 className="font-bold text-gray-800 truncate">
//           {form.name || "Product Title"}
//         </h4>
//         <p className="text-indigo-600 font-black mt-1">₹{form.price || "0"}</p>
//       </div>
//     </div>
//   </div>
// );

// const InputGroup = ({ label, type = "text", value, onChange }) => (
//   <div className="space-y-1">
//     <label className="text-xs font-bold text-gray-500 uppercase">{label}</label>
//     <input
//       type={type}
//       required
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500"
//     />
//   </div>
// );
// {
//   activeTab === "orders" && (
//     <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
//       <div className="p-6 border-b flex justify-between items-center">
//         <h3 className="font-bold text-gray-700 text-xl">Recent Orders</h3>
//         <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold">
//           Total: {orders.length}
//         </span>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="w-full text-left">
//           <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
//             <tr>
//               <th className="p-4">Order ID</th>
//               <th className="p-4">Customer</th>
//               <th className="p-4">Total</th>
//               <th className="p-4">Status</th>
//               <th className="p-4">Date</th>
//               <th className="p-4 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y text-sm">
//             {orders.map((order) => (
//               <tr
//                 key={order._id}
//                 className="hover:bg-gray-50 transition-colors"
//               >
//                 <td className="p-4 font-mono text-xs text-gray-400">
//                   #{order._id.slice(-6)}
//                 </td>
//                 <td className="p-4">
//                   <div className="font-bold text-gray-800">
//                     {order.user?.name || "Guest"}
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     {order.user?.email}
//                   </div>
//                 </td>
//                 <td className="p-4 font-bold text-gray-800">
//                   ₹{order.totalAmount}
//                 </td>
//                 <td className="p-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center w-fit gap-1 uppercase ${
//                       order.status === "delivered"
//                         ? "bg-green-100 text-green-600"
//                         : "bg-yellow-100 text-yellow-600"
//                     }`}
//                   >
//                     {order.status === "delivered" ? (
//                       <CheckCircle2 size={12} />
//                     ) : (
//                       <Clock size={12} />
//                     )}
//                     {order.status}
//                   </span>
//                 </td>
//                 <td className="p-4 text-gray-500">
//                   {new Date(order.createdAt).toLocaleDateString()}
//                 </td>
//                 <td className="p-4">
//                   <div className="flex justify-center gap-2">
//                     <select
//                       onChange={(e) =>
//                         updateOrderStatus(order._id, e.target.value)
//                       }
//                       className="text-xs border rounded p-1 outline-none"
//                       value={order.status}
//                     >
//                       <option value="pending">Pending</option>
//                       <option value="processing">Processing</option>
//                       <option value="delivered">Delivered</option>
//                     </select>
//                     <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
//                       <Eye size={16} />
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {orders.length === 0 && (
//           <div className="p-20 text-center text-gray-400">
//             No orders placed yet.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;
import React, { useState } from "react";
import {
  LayoutDashboard,
  Box,
  Layers,
  ShoppingCart,
  Users,
  UserCog,
  Truck,
  BarChart3,
  TicketPercent,
  RotateCcw,
  Search,
  Plus,
  Trash2,
  Edit,
  Settings,
} from "lucide-react";
import ProductManagement from "../components/ProductManagement";
import OrderManagement from "../components/OrderManagement";
import Employees from "../components/EmployeeManagement";
import CustomersManagement from "../components/CustomerManagement";
import EmployeeManagement from "../components/EmployeeManagement";
import DeliveryManagement from "../components/DeliveryManagement";
import SettingsPage from "../components/Setting";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Sidebar Links Configuration
  const menuItems = [
    { id: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "Products", icon: <Box size={20} /> },
    { id: "Orders", icon: <ShoppingCart size={20} /> },
    { id: "Customers", icon: <Users size={20} /> },
    { id: "Employees", icon: <UserCog size={20} /> },
    { id: "Delivery", icon: <Truck size={20} /> },
    { id: "Setting", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col sticky top-0 h-screen">
        <div className="p-6 text-xl font-bold border-b border-slate-800 tracking-wider">
          ELECTRO <span className="text-blue-400">PRO</span>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800"
              }`}
            >
              {item.icon}
              <span className="font-medium text-sm">{item.id}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold text-gray-800">
            {activeTab} Management
          </h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Quick search..."
                className="pl-10 pr-4 py-2 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
              A
            </div>
          </div>
        </header>

        {/* Dynamic Content Rendering */}
        <div className="p-8">
          {activeTab === "Dashboard" && <DashboardOverview />}
          {activeTab === "Products" && <ProductManagement />}
          {activeTab === "Orders" && <OrderManagement />}
          {activeTab === "Employees" && <EmployeeManagement />}
          {activeTab === "Customers" && <CustomersManagement />}
          {activeTab === "Delivery" && <DeliveryManagement />}
          {activeTab === "Setting" && <SettingsPage />}
          {/* Baaki features bhi isi tarah conditional render honge */}
        </div>
      </main>
    </div>
  );
};

// --- SUB-COMPONENTS (UI FOR FEATURES) ---

const DashboardOverview = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {["Total Sales", "Orders", "Users", "Revenue"].map((stat, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
        >
          <p className="text-gray-500 text-sm font-medium">{stat}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            ₹ {Math.floor(Math.random() * 100000)}
          </p>
          <span className="text-xs text-green-500 font-bold">
            ↑ 12% from last week
          </span>
        </div>
      ))}
    </div>
    <div className="h-64 bg-white rounded-2xl border-dashed border-2 border-gray-200 flex items-center justify-center text-gray-400 italic">
      Sales Graph (Monthly/Weekly/Yearly) will be rendered here.
    </div>
  </div>
);

const RefundRequests = () => (
  <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
    <h3 className="text-red-800 font-bold mb-4">
      Refund Requests (Awaiting Approval)
    </h3>
    <div className="bg-white p-4 rounded-xl flex items-center justify-between border border-red-200 shadow-sm">
      <span>Order #9021 (Damaged Item)</span>
      <div className="space-x-2">
        <button className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm">
          Approve
        </button>
        <button className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm">
          Reject
        </button>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
