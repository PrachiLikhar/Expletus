// // import React, { useEffect, useState } from "react";
// // import API from "../services/api";

// // const AdminDashboard = () => {
// //   const [stats, setStats] = useState({});

// //   useEffect(() => {
// //     API.get("/admin/stats")
// //       .then((res) => setStats(res.data))
// //       .catch(() => alert("Admin only"));
// //   }, []);

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h1>Admin Dashboard</h1>

// //       <div style={{ display: "flex", gap: "20px" }}>
// //         <div style={{ padding: "20px", background: "#eee" }}>
// //           <h3>Total Users</h3>
// //           <h2>{stats.users}</h2>
// //         </div>

// //         <div style={{ padding: "20px", background: "#eee" }}>
// //           <h3>Admins</h3>
// //           <h2>{stats.admins}</h2>
// //         </div>

// //         <div style={{ padding: "20px", background: "#eee" }}>
// //           <h3>Total Orders</h3>
// //           <h2>{stats.orders}</h2>
// //         </div>

// //         <div style={{ padding: "20px", background: "#eee" }}>
// //           <h3>Products</h3>
// //           <h2>{stats.products}</h2>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;
// import React, { useEffect, useState } from "react";
// import API from "../services/api";
// import {
//   PlusCircle,
//   Image as ImageIcon,
//   Tag,
//   IndianRupee,
//   Layers,
//   AlignLeft,
//   Package,
//   Loader2,
//   Eye,
//   Users,
//   ShoppingBag,
//   ShieldCheck,
//   LayoutDashboard,
//   TrendingUp,
// } from "lucide-react";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("overview"); // 'overview' or 'add-product'
//   const [stats, setStats] = useState({
//     users: 0,
//     admins: 0,
//     orders: 0,
//     products: 0,
//   });
//   const [loadingStats, setLoadingStats] = useState(true);
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
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const res = await API.get("/admin/stats");
//       setStats(res.data);
//     } catch (err) {
//       console.error("Admin only access");
//     } finally {
//       setLoadingStats(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormLoading(true);
//     try {
//       await API.post("/products", form);
//       alert("🚀 Product added successfully!");
//       setForm({
//         name: "",
//         price: "",
//         image: "",
//         category: "",
//         description: "",
//         stock: "",
//       });
//       fetchStats(); // Stats refresh karne ke liye
//     } catch (err) {
//       alert("Error adding product");
//     } finally {
//       setFormLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] flex">
//       {/* --- Sidebar --- */}
//       <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
//         <div className="p-6 border-b">
//           <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
//             <ShieldCheck /> Admin Panel
//           </h1>
//         </div>
//         <nav className="p-4 space-y-2 flex-grow">
//           <button
//             onClick={() => setActiveTab("overview")}
//             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
//               activeTab === "overview"
//                 ? "bg-indigo-50 text-indigo-600"
//                 : "text-gray-500 hover:bg-gray-50"
//             }`}
//           >
//             <LayoutDashboard size={20} /> Overview
//           </button>
//           <button
//             onClick={() => setActiveTab("add-product")}
//             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
//               activeTab === "add-product"
//                 ? "bg-indigo-50 text-indigo-600"
//                 : "text-gray-500 hover:bg-gray-50"
//             }`}
//           >
//             <PlusCircle size={20} /> Add Product
//           </button>
//         </nav>
//       </div>

//       {/* --- Main Content --- */}
//       <div className="flex-grow p-4 md:p-10 overflow-y-auto">
//         {/* Header */}
//         <div className="mb-8 flex justify-between items-center">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 capitalize">
//               {activeTab.replace("-", " ")}
//             </h2>
//             <p className="text-gray-500">
//               Welcome back, here's what's happening.
//             </p>
//           </div>
//           <div className="hidden sm:block text-sm font-medium bg-white px-4 py-2 rounded-lg border shadow-sm">
//             {new Date().toLocaleDateString("en-GB")}
//           </div>
//         </div>

//         {/* --- Tab 1: Overview (Stats) --- */}
//         {activeTab === "overview" && (
//           <div className="space-y-8 animate-in fade-in duration-500">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               <StatCard
//                 title="Total Users"
//                 value={stats.users}
//                 icon={<Users className="text-blue-600" />}
//                 color="bg-blue-50"
//               />
//               <StatCard
//                 title="Admins"
//                 value={stats.admins}
//                 icon={<ShieldCheck className="text-purple-600" />}
//                 color="bg-purple-50"
//               />
//               <StatCard
//                 title="Total Orders"
//                 value={stats.orders}
//                 icon={<ShoppingBag className="text-orange-600" />}
//                 color="bg-orange-50"
//               />
//               <StatCard
//                 title="Products"
//                 value={stats.products}
//                 icon={<Package className="text-green-600" />}
//                 color="bg-green-50"
//               />
//             </div>

//             <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-bold text-gray-800">
//                   Ready to expand?
//                 </h3>
//                 <p className="text-gray-500 text-sm">
//                   Add more items to your store to increase engagement.
//                 </p>
//               </div>
//               <button
//                 onClick={() => setActiveTab("add-product")}
//                 className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2"
//               >
//                 <PlusCircle size={18} /> Add New
//               </button>
//             </div>
//           </div>
//         )}

//         {/* --- Tab 2: Add Product Form --- */}
//         {activeTab === "add-product" && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in slide-in-from-bottom-4 duration-500">
//             {/* Form */}
//             <div className="lg:col-span-2">
//               <form
//                 onSubmit={handleSubmit}
//                 className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6"
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <InputGroup
//                     label="Product Name"
//                     icon={<Package size={16} />}
//                     placeholder="Headphones"
//                     value={form.name}
//                     onChange={(v) => setForm({ ...form, name: v })}
//                   />
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
//                       <Tag size={16} /> Category
//                     </label>
//                     <select
//                       className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 bg-white transition-all"
//                       value={form.category}
//                       onChange={(e) =>
//                         setForm({ ...form, category: e.target.value })
//                       }
//                     >
//                       <option value="">Select Category</option>
//                       <option value="electronics">Electronics</option>
//                       <option value="fashion">Fashion</option>
//                       <option value="home">Home Decor</option>
//                     </select>
//                   </div>
//                   <InputGroup
//                     label="Price (INR)"
//                     icon={<IndianRupee size={16} />}
//                     type="number"
//                     placeholder="999"
//                     value={form.price}
//                     onChange={(v) => setForm({ ...form, price: v })}
//                   />
//                   <InputGroup
//                     label="Stock"
//                     icon={<Layers size={16} />}
//                     type="number"
//                     placeholder="50"
//                     value={form.stock}
//                     onChange={(v) => setForm({ ...form, stock: v })}
//                   />
//                 </div>
//                 <InputGroup
//                   label="Image URL"
//                   icon={<ImageIcon size={16} />}
//                   placeholder="https://..."
//                   value={form.image}
//                   onChange={(v) => setForm({ ...form, image: v })}
//                 />
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
//                     <AlignLeft size={16} /> Description
//                   </label>
//                   <textarea
//                     rows="4"
//                     className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
//                     value={form.description}
//                     onChange={(e) =>
//                       setForm({ ...form, description: e.target.value })
//                     }
//                   />
//                 </div>
//                 <button
//                   disabled={formLoading}
//                   className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50"
//                 >
//                   {formLoading ? (
//                     <Loader2 className="animate-spin" />
//                   ) : (
//                     <TrendingUp size={20} />
//                   )}{" "}
//                   Add Product
//                 </button>
//               </form>
//             </div>

//             {/* Live Preview */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-10">
//                 <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
//                   <Eye size={14} /> Live Preview
//                 </p>
//                 <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all">
//                   <div className="h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
//                     {form.image ? (
//                       <img
//                         src={form.image}
//                         className="w-full h-full object-cover"
//                         alt="prev"
//                       />
//                     ) : (
//                       <ImageIcon size={40} className="text-gray-200" />
//                     )}
//                   </div>
//                   <div className="p-6">
//                     <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded font-bold uppercase">
//                       {form.category || "Category"}
//                     </span>
//                     <h3 className="text-lg font-bold text-gray-900 mt-2 truncate">
//                       {form.name || "Product Title"}
//                     </h3>
//                     <div className="mt-4 flex justify-between items-center border-t pt-4">
//                       <span className="text-xl font-black text-gray-900">
//                         ₹{form.price || "0"}
//                       </span>
//                       <span className="text-xs font-bold text-green-500">
//                         {form.stock ? `In Stock: ${form.stock}` : "Ready"}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // --- Reusable Components for Clean Code ---

// const StatCard = ({ title, value, icon, color }) => (
//   <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
//     <div
//       className={`h-12 w-12 ${color} rounded-2xl flex items-center justify-center mb-4`}
//     >
//       {icon}
//     </div>
//     <p className="text-sm font-medium text-gray-500">{title}</p>
//     <h2 className="text-2xl font-bold text-gray-900 mt-1">{value}</h2>
//   </div>
// );

// const InputGroup = ({
//   label,
//   icon,
//   type = "text",
//   placeholder,
//   value,
//   onChange,
// }) => (
//   <div className="space-y-2">
//     <label className="text-sm font-bold text-gray-600 flex items-center gap-2">
//       {icon} {label}
//     </label>
//     <input
//       type={type}
//       required
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
//       placeholder={placeholder}
//     />
//   </div>
// );

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
  Truck,
  UserCheck,
  Settings,
  ClipboardList,
} from "lucide-react";

const AdminDashboard = () => {
  // Sidebar Tabs State
  const [activeTab, setActiveTab] = useState("overview");

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
      fetchStats();
    } catch (err) {
      alert("Error adding product");
    } finally {
      setFormLoading(false);
    }
  };

  // Sidebar Menu Items Configuration
  const menuItems = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={20} /> },
    { id: "products", label: "Products", icon: <Package size={20} /> },
    { id: "orders", label: "Orders", icon: <ClipboardList size={20} /> },
    { id: "employees", label: "Employees", icon: <UserCheck size={20} /> },
    { id: "delivery", label: "Delivery Boy", icon: <Truck size={20} /> },
    { id: "customers", label: "Customers", icon: <Users size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* --- Sidebar --- */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
            <ShieldCheck /> Admin Pro
          </h1>
        </div>
        <nav className="p-4 space-y-1 flex-grow overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                activeTab === item.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              {item.id === "overview" ? (
                <LayoutDashboard size={20} />
              ) : (
                item.icon
              )}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* --- Main Content Area --- */}
      <div className="flex-grow p-4 md:p-10">
        {/* Top Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 capitalize">
              {activeTab.replace("-", " ")}
            </h2>
            <p className="text-gray-500">Managing your business ecosystem.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl border shadow-sm font-medium">
            {new Date().toLocaleDateString("en-GB")}
          </div>
        </div>

        {/* --- Dynamic Page Rendering --- */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {/* 1. OVERVIEW PAGE */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Users"
                value={stats.users}
                icon={<Users />}
                color="text-blue-600"
                bg="bg-blue-50"
              />
              <StatCard
                title="Total Orders"
                value={stats.orders}
                icon={<ShoppingBag />}
                color="text-orange-600"
                bg="bg-orange-50"
              />
              <StatCard
                title="Total Products"
                value={stats.products}
                icon={<Package />}
                color="text-green-600"
                bg="bg-green-50"
              />
              <StatCard
                title="Revenue"
                value="₹1.2M"
                icon={<TrendingUp />}
                color="text-indigo-600"
                bg="bg-indigo-50"
              />
            </div>
          )}

          {/* 2. PRODUCTS PAGE (Add Form Included) */}
          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-white p-6 rounded-3xl border">
                <h3 className="font-bold text-lg">Product Inventory</h3>
                <button
                  onClick={() => setActiveTab("add-product")}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <PlusCircle size={18} /> New Product
                </button>
              </div>
              {/* Aap yahan product list table bhi bana sakte hain */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ProductForm
                  form={form}
                  setForm={setForm}
                  handleSubmit={handleSubmit}
                  loading={formLoading}
                />
                <LivePreview form={form} />
              </div>
            </div>
          )}

          {/* 3. ORDERS PAGE (Placeholder) */}
          {activeTab === "orders" && (
            <div className="bg-white p-10 rounded-3xl border border-dashed border-gray-300 text-center">
              <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold">No Recent Orders</h3>
              <p className="text-gray-500">Customer orders will appear here.</p>
            </div>
          )}

          {/* 4. EMPLOYEES PAGE */}
          {activeTab === "employees" && (
            <div className="bg-white p-8 rounded-3xl border">
              <h3 className="text-xl font-bold mb-4">Staff Management</h3>
              <p className="text-gray-500">
                Manage your internal team and roles.
              </p>
              {/* Add Table Here */}
            </div>
          )}

          {/* 5. DELIVERY BOY PAGE */}
          {activeTab === "delivery" && (
            <div className="bg-white p-8 rounded-3xl border">
              <h3 className="text-xl font-bold mb-4 text-orange-600 flex items-center gap-2">
                <Truck /> Delivery Partners
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-xl">Active: 12</div>
                <div className="p-4 border rounded-xl">On Leave: 2</div>
                <div className="p-4 border rounded-xl">New Applications: 5</div>
              </div>
            </div>
          )}

          {/* 6. CUSTOMERS PAGE */}
          {activeTab === "customers" && (
            <div className="bg-white p-8 rounded-3xl border">
              <h3 className="text-xl font-bold mb-4">Customer Directory</h3>
              <p className="text-gray-500">View and manage user profiles.</p>
            </div>
          )}

          {/* 7. SETTINGS PAGE */}
          {activeTab === "settings" && (
            <div className="bg-white p-8 rounded-3xl border max-w-2xl">
              <h3 className="text-xl font-bold mb-6">Store Settings</h3>
              <div className="space-y-4">
                <InputGroup label="Store Name" value="ElectroHub Pro" />
                <InputGroup label="Admin Email" value="admin@electrohub.com" />
                <button className="bg-black text-white px-6 py-2 rounded-lg">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Sub-Components (Clean Code) ---

const StatCard = ({ title, value, icon, color, bg }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
    <div
      className={`h-12 w-12 ${bg} ${color} rounded-2xl flex items-center justify-center mb-4`}
    >
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <p className="text-sm font-medium text-gray-500">{title}</p>
    <h2 className="text-2xl font-bold text-gray-900 mt-1">{value}</h2>
  </div>
);

const ProductForm = ({ form, setForm, handleSubmit, loading }) => (
  <form
    onSubmit={handleSubmit}
    className="bg-white p-8 rounded-3xl border border-gray-100 space-y-6 shadow-sm"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputGroup
        label="Product Name"
        placeholder="iPhone 15"
        value={form.name}
        onChange={(v) => setForm({ ...form, name: v })}
      />
      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-600">Category</label>
        <select
          className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="">Select</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>
      <InputGroup
        label="Price"
        type="number"
        value={form.price}
        onChange={(v) => setForm({ ...form, price: v })}
      />
      <InputGroup
        label="Stock"
        type="number"
        value={form.stock}
        onChange={(v) => setForm({ ...form, stock: v })}
      />
    </div>
    <InputGroup
      label="Image URL"
      value={form.image}
      onChange={(v) => setForm({ ...form, image: v })}
    />
    <button
      disabled={loading}
      className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <PlusCircle size={20} />
      )}{" "}
      Add Product
    </button>
  </form>
);

const LivePreview = ({ form }) => (
  <div className="bg-white p-6 rounded-3xl border h-fit sticky top-10">
    <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
      Live Preview
    </p>
    <div className="border rounded-2xl overflow-hidden">
      <div className="h-40 bg-gray-50 flex items-center justify-center">
        {form.image ? (
          <img src={form.image} className="w-full h-full object-cover" />
        ) : (
          <ImageIcon className="text-gray-200" size={40} />
        )}
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg">{form.name || "Product Name"}</h4>
        <p className="text-indigo-600 font-bold">₹{form.price || "0"}</p>
      </div>
    </div>
  </div>
);

const InputGroup = ({ label, type = "text", placeholder, value, onChange }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-gray-600">{label}</label>
    <input
      type={type}
      required
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
      placeholder={placeholder}
    />
  </div>
);

export default AdminDashboard;
