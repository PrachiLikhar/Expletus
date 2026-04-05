import React, { useState } from "react";
import {
  Clock,
  CheckCircle,
  Calendar,
  AlertCircle,
  ArrowUpRight,
  LogOut,
  User,
  LayoutDashboard,
  ClipboardList,
} from "lucide-react";

const EmployeeDashboard = () => {
  // Employee ka personal data
  const [employeeInfo] = useState({
    name: "Rahul Sharma",
    role: "Senior Delivery Partner",
    id: "EMP-2024-08",
    avatar: "R",
  });

  const myTasks = [
    {
      id: 1,
      title: "Delivery to Sector 62",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      id: 2,
      title: "Pick up from Warehouse B",
      time: "01:00 PM",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Document Verification",
      time: "04:30 PM",
      status: "Completed",
    },
  ];

  return (
    <div className="flex bg-slate-50 min-h-screen font-sans">
      {/* SIDEBAR - Simple and Narrow */}
      <div className="w-64 bg-[#0F3A53] text-white p-6 hidden md:flex flex-col">
        <div className="mb-10">
          <h2 className="text-xl font-bold tracking-tight">Employee Portal</h2>
        </div>

        <nav className="flex-1 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 bg-white/10 p-3 rounded-lg"
          >
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg text-slate-300"
          >
            <ClipboardList size={20} /> My Tasks
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg text-slate-300"
          >
            <Calendar size={20} /> Attendance
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg text-slate-300"
          >
            <User size={20} /> My Profile
          </a>
        </nav>

        <button className="flex items-center gap-3 p-3 text-rose-300 hover:bg-rose-500/10 rounded-lg mt-auto">
          <LogOut size={20} /> Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">
        {/* TOP WELCOME BAR */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Hi, {employeeInfo.name} 👋
            </h1>
            <p className="text-slate-500 text-sm">
              Have a productive day at work!
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full border shadow-sm">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              {employeeInfo.avatar}
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-700">
                {employeeInfo.id}
              </p>
              <p className="text-[10px] text-green-600 font-bold uppercase">
                Online
              </p>
            </div>
          </div>
        </div>

        {/* QUICK STATS - Employee Specific */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">
              Tasks Today
            </p>
            <p className="text-2xl font-bold text-slate-800 mt-1">08</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">
              Completed
            </p>
            <p className="text-2xl font-bold text-green-600 mt-1">05</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">
              Working Hours
            </p>
            <p className="text-2xl font-bold text-blue-600 mt-1">6.5h</p>
          </div>
          <div className="bg-[#0F3A53] p-6 rounded-2xl shadow-lg text-white">
            <p className="text-xs font-medium opacity-80 uppercase">
              Duty Status
            </p>
            <button className="mt-2 w-full bg-white text-[#0F3A53] py-2 rounded-lg font-bold text-sm">
              Punch Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MY TASKS LIST */}
          <div className="lg:col-span-2 bg-white rounded-3xl border shadow-sm overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Active Tasks</h3>
              <button className="text-blue-600 text-xs font-bold">
                View Schedule
              </button>
            </div>
            <div className="divide-y">
              {myTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex gap-4 items-center">
                    <div
                      className={`p-2 rounded-lg ${
                        task.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {task.status === "Completed" ? (
                        <CheckCircle size={20} />
                      ) : (
                        <Clock size={20} />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-700">
                        {task.title}
                      </p>
                      <p className="text-xs text-slate-400">{task.time}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${
                      task.status === "Completed"
                        ? "bg-green-50 text-green-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* NOTICES / UPDATES */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <AlertCircle size={18} className="text-amber-500" /> Admin
                Notice
              </h3>
              <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  "Tomorrow's shift will start 1 hour early due to heavy
                  delivery load. Please check your schedule."
                </p>
                <p className="text-[10px] text-amber-600 mt-2 font-bold">
                  - Manager
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-3xl text-white shadow-xl">
              <p className="text-xs opacity-80 uppercase font-bold tracking-wider">
                Performance Score
              </p>
              <p className="text-3xl font-bold mt-2">4.8/5.0</p>
              <div className="mt-4 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[92%]"></div>
              </div>
              <p className="text-[10px] mt-3 opacity-80">
                You are in the top 5% of riders this month! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
