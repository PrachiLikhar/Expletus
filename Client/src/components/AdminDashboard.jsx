import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaClipboardList,
  FaUsers,
  FaUserTie,
  FaCog,
  FaChartLine,
  FaSignOutAlt,
  FaSearch,
  FaBoxOpen,
  FaWallet,
  FaCheck,
  FaEye,
  FaBan,
  FaUnlock,
} from "react-icons/fa";

export default function AdminDashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("dashboard");

  /* ================= STATES ================= */
  const [users, setUsers] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ================= SEARCH STATES ================= */
  const [userSearch, setUserSearch] = useState("");
  const [sellerSearch, setSellerSearch] = useState("");

  /* ================= FETCH FUNCTIONS ================= */
  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/all", {
        credentials: "include",
      });
      const data = await res.json();
      setUsers(data || []);
    } catch (err) {
      console.error("Error fetching users");
    }
  }, []);

  const fetchSellers = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/seller/all", {
        credentials: "include",
      });
      const data = await res.json();
      setSellers(data.sellers || []);
    } catch (err) {
      console.error("Error fetching sellers");
    }
  }, []);

  const fetchOrders = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders/all", {
        credentials: "include",
      });
      const data = await res.json();
      setOrders(data || []);
    } catch (err) {
      console.error("Error fetching orders");
    }
  }, []);

  /* ================= MASTER FETCH LOGIC ================= */
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      await Promise.all([fetchUsers(), fetchSellers(), fetchOrders()]);
      setLoading(false);
    };
    loadInitialData();
  }, [fetchUsers, fetchSellers, fetchOrders]);

  useEffect(() => {
    if (active === "users") fetchUsers();
    if (active === "sellers") fetchSellers();
    if (active === "orders") fetchOrders();
  }, [active, fetchUsers, fetchSellers, fetchOrders]);

  /* ================= ACTIONS ================= */
  const handleApprove = async (id) => {
    if (!window.confirm("Are you sure you want to approve this seller?"))
      return;
    try {
      const res = await fetch(
        `http://localhost:5000/api/seller/approve/${id}`,
        {
          method: "PUT",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success) {
        setSellers((prev) =>
          prev.map((s) => (s._id === id ? { ...s, isApproved: true } : s))
        );
        alert("Seller has been approved!");
      }
    } catch (err) {
      alert("Error approving seller");
    }
  };

  const handleBanToggle = async (id, currentStatus) => {
    const action = currentStatus ? "Unban" : "Ban";
    if (!window.confirm(`Are you sure you want to ${action} this seller?`))
      return;
    try {
      const res = await fetch(`http://localhost:5000/api/seller/ban/${id}`, {
        method: "PUT",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        setSellers((prev) =>
          prev.map((s) =>
            s._id === id ? { ...s, isBlocked: data.seller.isBlocked } : s
          )
        );
      }
    } catch (err) {
      alert("Error processing request");
    }
  };

  const viewProducts = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/seller/products/${id}`
      );
      const data = await res.json();
      setProducts(data.products || []);
      setShowProducts(true);
    } catch (err) {
      alert("Error fetching products");
    }
  };

  if (loading) {
    return (
      <div className="h-screen bg-[#0a0a0a] flex items-center justify-center text-[#5DE23C]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#5DE23C]"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white font-sans">
      {/* SIDEBAR */}
      <motion.div
        animate={{ width: collapsed ? 80 : 260 }}
        className="bg-black border-r border-white/10 flex flex-col z-20"
      >
        <div className="p-5 flex justify-between items-center">
          {!collapsed && (
            <h2 className="text-[#5DE23C] font-extrabold text-xl tracking-tighter italic">
              Electro
            </h2>
          )}
          <FaBars
            onClick={() => setCollapsed(!collapsed)}
            className="cursor-pointer text-[#5DE23C] text-xl"
          />
        </div>

        <nav className="flex-1 mt-4">
          <SidebarItem
            icon={<FaChartLine />}
            label="Dashboard"
            active={active}
            setActive={setActive}
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<FaUsers />}
            label="Users"
            active={active}
            setActive={setActive}
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<FaUserTie />}
            label="Sellers"
            active={active}
            setActive={setActive}
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<FaClipboardList />}
            label="Orders"
            active={active}
            setActive={setActive}
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<FaBoxOpen />}
            label="Products"
            active={active}
            setActive={setActive}
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<FaCog />}
            label="Settings"
            active={active}
            setActive={setActive}
            collapsed={collapsed}
          />
        </nav>

        <div className="p-4 border-t border-white/10">
          <SidebarItem
            icon={<FaSignOutAlt />}
            label="Logout"
            danger
            setActive={() => alert("Logging out...")}
            collapsed={collapsed}
          />
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 overflow-auto">
        {active === "dashboard" && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#5DE23C]">
              Business Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <StatsCard
                label="Total Users"
                value={users.length}
                icon={<FaUsers />}
                color="text-blue-500"
              />
              <StatsCard
                label="Total Sellers"
                value={sellers.length}
                icon={<FaUserTie />}
                color="text-purple-500"
              />
              <StatsCard
                label="Active Orders"
                value={orders.length}
                icon={<FaClipboardList />}
                color="text-green-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-2">
                  Seller Status
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Approved</span>
                    <span className="text-green-500 font-bold">
                      {
                        sellers.filter((s) => s.isApproved && !s.isBlocked)
                          .length
                      }
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Pending Approval</span>
                    <span className="text-yellow-500 font-bold">
                      {sellers.filter((s) => !s.isApproved).length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Banned/Blocked</span>
                    <span className="text-red-500 font-bold">
                      {sellers.filter((s) => s.isBlocked).length}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center justify-center">
                <p className="text-gray-500 italic">
                  Sales Analytics Graph (Coming Soon)
                </p>
              </div>
            </div>
          </section>
        )}

        {active === "users" && (
          <Section title="User Directory">
            <Search value={userSearch} onChange={setUserSearch} />
            <Table
              headers={["Name", "Email", "Role", "Joined Date"]}
              rows={users
                .filter((u) =>
                  u.name.toLowerCase().includes(userSearch.toLowerCase())
                )
                .map((u) => [
                  u.name,
                  u.email,
                  <span
                    key={u._id}
                    className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs"
                  >
                    {u.role}
                  </span>,
                  new Date(u.createdAt || Date.now()).toLocaleDateString(),
                ])}
            />
          </Section>
        )}

        {active === "sellers" && (
          <Section title="Seller Partners">
            <Search value={sellerSearch} onChange={setSellerSearch} />
            <div className="overflow-x-auto bg-[#111] rounded-2xl border border-white/10 shadow-2xl">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-[#5DE23C] uppercase text-xs tracking-widest">
                  <tr>
                    <th className="p-5">Shop Details</th>
                    <th>Contact Info</th>
                    <th>Status</th>
                    <th className="text-center">Control Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {sellers
                    .filter((s) =>
                      s.name.toLowerCase().includes(sellerSearch.toLowerCase())
                    )
                    .map((s) => (
                      <tr
                        key={s._id}
                        className="hover:bg-white/[0.02] transition-colors group"
                      >
                        <td className="p-5">
                          <div className="font-bold text-lg group-hover:text-[#5DE23C] transition">
                            {s.name}
                          </div>
                          <div className="text-xs text-gray-500 italic">
                            ID: {s._id.slice(-6)}
                          </div>
                        </td>
                        <td>
                          <div className="text-sm font-medium">{s.email}</div>
                          <div className="text-xs text-gray-400">
                            Verified Partner
                          </div>
                        </td>
                        <td>
                          <StatusBadge
                            type={
                              s.isBlocked
                                ? "banned"
                                : s.isApproved
                                ? "approved"
                                : "pending"
                            }
                          />
                        </td>
                        <td className="p-5">
                          <div className="flex justify-center gap-3">
                            {!s.isApproved && (
                              <button
                                onClick={() => handleApprove(s._id)}
                                className="flex items-center gap-2 bg-emerald-600/10 text-emerald-500 border border-emerald-600/20 hover:bg-emerald-600 hover:text-white px-4 py-2 rounded-xl transition-all text-sm font-bold"
                              >
                                <FaCheck /> Approve
                              </button>
                            )}
                            <button
                              onClick={() => viewProducts(s._id)}
                              className="flex items-center gap-2 bg-blue-600/10 text-blue-400 border border-blue-600/20 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl transition-all text-sm font-bold"
                            >
                              <FaEye /> Products
                            </button>
                            <button
                              onClick={() =>
                                handleBanToggle(s._id, s.isBlocked)
                              }
                              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all text-sm font-bold border ${
                                s.isBlocked
                                  ? "bg-orange-600/10 text-orange-500 border-orange-600/20"
                                  : "bg-red-600/10 text-red-500 border-red-600/20"
                              } hover:opacity-80`}
                            >
                              {s.isBlocked ? (
                                <>
                                  <FaUnlock /> Unban
                                </>
                              ) : (
                                <>
                                  <FaBan /> Ban
                                </>
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* MODAL FOR PRODUCTS */}
        {showProducts && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-[#111] border border-white/10 p-6 rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#5DE23C]">
                  Seller Products
                </h2>
                <button
                  onClick={() => setShowProducts(false)}
                  className="text-red-500 hover:text-red-400 font-bold"
                >
                  Close
                </button>
              </div>
              <Table
                headers={["Product Name", "Price", "Stock"]}
                rows={products.map((p) => [
                  p.name,
                  `₹${p.price}`,
                  p.stock > 0 ? (
                    p.stock
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  ),
                ])}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= HELPER COMPONENTS ================= */

function SidebarItem({ icon, label, active, setActive, danger, collapsed }) {
  const isSelected = active === (label ? label.toLowerCase() : "");
  return (
    <div
      onClick={() => setActive && setActive(label.toLowerCase())}
      className={`flex items-center gap-4 px-6 py-4 cursor-pointer transition-all ${
        danger
          ? "text-red-500 hover:bg-red-500/10"
          : isSelected
          ? "text-[#5DE23C] bg-[#5DE23C]/10 border-r-4 border-[#5DE23C]"
          : "text-gray-400 hover:bg-white/5"
      }`}
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span className="font-medium">{label}</span>}
    </div>
  );
}

function Section({ title, children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-2">
        {title}
      </h2>
      {children}
    </motion.div>
  );
}

// Fixed: Only one StatusBadge declaration allowed
function StatusBadge({ type }) {
  const config = {
    approved: "bg-green-500/10 text-green-500 border-green-500/20",
    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    banned: "bg-red-500/10 text-red-500 border-red-500/20",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border ${
        config[type] || config.pending
      }`}
    >
      {type}
    </span>
  );
}

function StatsCard({ label, value, icon, color }) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#5DE23C]/50 transition group">
      <div
        className={`text-3xl mb-4 ${color} group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="text-gray-400 text-sm font-medium">{label}</h3>
      <p className="text-3xl font-bold mt-1 text-white">{value}</p>
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto bg-white/5 rounded-2xl border border-white/10">
      <table className="w-full text-left">
        <thead className="bg-white/5 text-[#5DE23C] uppercase text-[10px] tracking-widest">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="p-4">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {rows.length > 0 ? (
            rows.map((r, i) => (
              <tr key={i} className="hover:bg-white/5 transition">
                {r.map((c, j) => (
                  <td key={j} className="p-4 text-sm text-gray-300">
                    {c}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length}
                className="p-10 text-center text-gray-500"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Search({ value, onChange }) {
  return (
    <div className="flex items-center gap-3 mb-6 bg-white/5 px-4 py-3 rounded-xl border border-white/10 focus-within:border-[#5DE23C] transition">
      <FaSearch className="text-gray-500" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search everything..."
        className="bg-transparent outline-none flex-1 text-sm text-white"
      />
    </div>
  );
}
