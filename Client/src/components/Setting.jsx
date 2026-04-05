// import React, { useState } from "react";
// import {
//   User,
//   Lock,
//   Bell,
//   Globe,
//   Save,
//   Camera,
//   ShieldCheck,
//   CreditCard,
//   Mail,
//   Building,
// } from "lucide-react";

// const SettingsPage = () => {
//   const [activeTab, setActiveTab] = useState("profile");

//   const [profileData, setProfileData] = useState({
//     businessName: "QuickLog Logistics",
//     email: "admin@quicklog.com",
//     phone: "+91 98765 43210",
//     address: "123, Business Park, Sector 62, Noida",
//     currency: "INR (₹)",
//     timezone: "(GMT+05:30) India Standard Time",
//   });

//   const handleInputChange = (e) => {
//     setProfileData({ ...profileData, [e.target.name]: e.target.value });
//   };

//   const tabs = [
//     { id: "profile", label: "Business Profile", icon: <User size={18} /> },
//     { id: "security", label: "Security", icon: <Lock size={18} /> },
//     { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
//     { id: "billing", label: "Billing", icon: <CreditCard size={18} /> },
//   ];

//   return (
//     <div className="flex flex-col gap-6 w-full p-8 bg-slate-50 min-h-screen font-sans">
//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold text-slate-800">Settings</h1>
//         <p className="text-sm text-slate-500">
//           Manage your account preferences and system configurations
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8 mt-4">
//         {/* SIDEBAR TABS */}
//         <div className="w-full md:w-64 flex flex-col gap-2">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
//                 activeTab === tab.id
//                   ? "bg-[#0F3A53] text-white shadow-md"
//                   : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
//               }`}
//             >
//               {tab.icon}
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* CONTENT AREA */}
//         <div className="flex-1 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
//           {activeTab === "profile" && (
//             <div className="p-8 animate-in fade-in duration-300">
//               <div className="flex items-center gap-6 mb-8 border-b border-slate-100 pb-8">
//                 <div className="relative group">
//                   <div className="w-24 h-24 rounded-2xl bg-slate-100 flex items-center justify-center text-[#0F3A53] border-2 border-dashed border-slate-300 overflow-hidden">
//                     <Building size={40} />
//                   </div>
//                   <button className="absolute -bottom-2 -right-2 p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-600 hover:text-blue-600">
//                     <Camera size={16} />
//                   </button>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-slate-800">
//                     Company Logo
//                   </h3>
//                   <p className="text-xs text-slate-400 mt-1">
//                     PNG, JPG or SVG. Max 2MB.
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-1.5">
//                   <label className="text-[11px] font-bold text-slate-500 uppercase ml-1">
//                     Business Name
//                   </label>
//                   <input
//                     name="businessName"
//                     value={profileData.businessName}
//                     onChange={handleInputChange}
//                     className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                   />
//                 </div>
//                 <div className="space-y-1.5">
//                   <label className="text-[11px] font-bold text-slate-500 uppercase ml-1">
//                     Support Email
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//                       size={16}
//                     />
//                     <input
//                       name="email"
//                       value={profileData.email}
//                       onChange={handleInputChange}
//                       className="w-full border border-slate-200 pl-10 pr-4 py-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-1.5">
//                   <label className="text-[11px] font-bold text-slate-500 uppercase ml-1">
//                     Phone Number
//                   </label>
//                   <input
//                     name="phone"
//                     value={profileData.phone}
//                     onChange={handleInputChange}
//                     className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                   />
//                 </div>
//                 <div className="space-y-1.5">
//                   <label className="text-[11px] font-bold text-slate-500 uppercase ml-1">
//                     Currency
//                   </label>
//                   <select
//                     name="currency"
//                     value={profileData.currency}
//                     onChange={handleInputChange}
//                     className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
//                   >
//                     <option>INR (₹)</option>
//                     <option>USD ($)</option>
//                     <option>EUR (€)</option>
//                   </select>
//                 </div>
//                 <div className="col-span-2 space-y-1.5">
//                   <label className="text-[11px] font-bold text-slate-500 uppercase ml-1">
//                     Office Address
//                   </label>
//                   <textarea
//                     name="address"
//                     rows="3"
//                     value={profileData.address}
//                     onChange={handleInputChange}
//                     className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//                   ></textarea>
//                 </div>
//               </div>

//               <div className="flex justify-end gap-3 mt-10 pt-6 border-t border-slate-100">
//                 <button className="px-6 py-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-50 rounded-xl">
//                   Discard Changes
//                 </button>
//                 <button className="flex items-center gap-2 px-8 py-2.5 bg-[#0F3A53] text-white rounded-xl text-sm font-bold shadow-md hover:bg-[#1a4a66] transition-all">
//                   <Save size={18} /> Save Settings
//                 </button>
//               </div>
//             </div>
//           )}

//           {activeTab === "security" && (
//             <div className="p-8 animate-in fade-in duration-300 space-y-8">
//               <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex gap-4 items-start">
//                 <ShieldCheck className="text-blue-600 mt-1" size={24} />
//                 <div>
//                   <h4 className="text-sm font-bold text-blue-900">
//                     Two-Factor Authentication
//                   </h4>
//                   <p className="text-xs text-blue-700 mt-1">
//                     Secure your account by adding an extra layer of security.
//                     Recommended for admins.
//                   </p>
//                   <button className="mt-3 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg">
//                     Enable 2FA
//                   </button>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <h3 className="font-bold text-slate-800">Change Password</h3>
//                 <div className="max-w-md space-y-4">
//                   <input
//                     type="password"
//                     placeholder="Current Password"
//                     className="w-full border border-slate-200 p-3 rounded-xl text-sm outline-none"
//                   />
//                   <input
//                     type="password"
//                     placeholder="New Password"
//                     className="w-full border border-slate-200 p-3 rounded-xl text-sm outline-none"
//                   />
//                   <input
//                     type="password"
//                     placeholder="Confirm New Password"
//                     className="w-full border border-slate-200 p-3 rounded-xl text-sm outline-none"
//                   />
//                   <button className="px-6 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-bold">
//                     Update Password
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;
import React, { useState } from "react";
import {
  Save,
  Camera,
  Mail,
  Phone,
  MapPin,
  Building,
  Lock,
} from "lucide-react";

const SettingsPage = () => {
  const [profileData, setProfileData] = useState({
    businessName: "QuickLog Logistics",
    email: "admin@quicklog.com",
    phone: "+91 98765 43210",
    address: "123, Business Park, Noida",
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="mb-8 border-b pb-4">
        <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
        <p className="text-slate-500 text-sm">
          Apni profile aur account manage karein
        </p>
      </div>

      <div className="space-y-10">
        {/* 1. Profile Section */}
        <section>
          <h2 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <Building size={20} className="text-blue-600" /> Business Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-600 font-medium">
                Business Name
              </label>
              <input
                className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                value={profileData.businessName}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    businessName: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-600 font-medium">
                Email Address
              </label>
              <input
                className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                value={profileData.email}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-600 font-medium">
                Phone Number
              </label>
              <input
                className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                value={profileData.phone}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-slate-600 font-medium">
                Address
              </label>
              <input
                className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                value={profileData.address}
              />
            </div>
          </div>
        </section>

        {/* 2. Password Section */}
        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <Lock size={20} className="text-red-500" /> Change Password
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="password"
              placeholder="Old Password"
              className="border rounded-lg px-3 py-2 bg-white"
            />
            <input
              type="password"
              placeholder="New Password"
              className="border rounded-lg px-3 py-2 bg-white"
            />
            <button className="bg-slate-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition-all">
              Update
            </button>
          </div>
        </section>

        {/* Bottom Action Bar */}
        <div className="flex items-center justify-end gap-4 pt-6 border-t">
          <button className="text-slate-500 font-medium hover:underline">
            Cancel
          </button>
          <button className="bg-[#0F3A53] text-white px-10 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg">
            <Save size={20} /> Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
