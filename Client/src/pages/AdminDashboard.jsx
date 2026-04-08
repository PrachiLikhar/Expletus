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
import { useState } from "react";

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
