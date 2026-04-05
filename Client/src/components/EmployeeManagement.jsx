import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Filter,
  Edit2,
  Trash2,
  Users,
  Briefcase,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";

// 1. Employee Dummy Data
const DUMMY_EMPLOYEES = [
  {
    id: 1,
    name: "Arjun Sharma",
    email: "arjun@company.com",
    phone: "9812345678",
    role: "Frontend Developer",
    dept: "IT",
    status: "Active",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    email: "sneha@company.com",
    phone: "8822334455",
    role: "HR Manager",
    dept: "Operations",
    status: "Active",
  },
  {
    id: 3,
    name: "Vikram Singh",
    email: "vikram@company.com",
    phone: "7766554433",
    role: "UI/UX Designer",
    dept: "Design",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Ananya Iyer",
    email: "ananya@company.com",
    phone: "9900112233",
    role: "Backend Developer",
    dept: "IT",
    status: "Active",
  },
];

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    dept: "",
    status: "Active",
  });

  useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      setEmployees(DUMMY_EMPLOYEES);
      setIsLoading(false);
    }, 500);
  }, []);

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const avatarColors = [
    "from-blue-500 to-indigo-600",
    "from-rose-400 to-red-600",
    "from-amber-400 to-yellow-600",
    "from-teal-400 to-emerald-600",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.name || !formData.email) return;

    if (editId) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editId ? { ...formData, id: editId } : emp
        )
      );
    } else {
      setEmployees([...employees, { ...formData, id: Date.now() }]);
    }
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditId(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      dept: "",
      status: "Active",
    });
  };

  const handleEdit = (emp) => {
    setFormData(emp);
    setEditId(emp.id);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this employee record?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full p-8 bg-slate-50 min-h-screen font-sans">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Employees</h1>
          <p className="text-sm text-slate-500">
            Manage your workforce and departments
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#0F3A53] hover:bg-[#1a4a66] text-white px-5 py-2.5 rounded-lg shadow-sm text-sm font-semibold transition-all"
        >
          <Plus size={18} />
          Add Employee
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
              Total Staff
            </p>
            <p className="text-2xl font-bold text-slate-800">
              {employees.length}
            </p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
            <Briefcase size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
              Active Projects
            </p>
            <p className="text-2xl font-bold text-slate-800">12</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
              On Leave
            </p>
            <p className="text-2xl font-bold text-slate-800">2</p>
          </div>
        </div>
      </div>

      {/* SEARCH & TABLE SECTION */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name, role or email..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
            <Filter size={16} /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-500 uppercase text-[11px] font-bold tracking-widest border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Designation</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="text-center py-20 text-slate-400">
                    Loading records...
                  </td>
                </tr>
              ) : (
                filteredEmployees.map((emp, idx) => (
                  <tr
                    key={emp.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                            avatarColors[idx % avatarColors.length]
                          } text-white flex items-center justify-center font-bold shadow-sm`}
                        >
                          {emp.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-700 text-sm">
                            {emp.name}
                          </p>
                          <p className="text-xs text-slate-400">
                            Emp ID: #{emp.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                      {emp.role}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {emp.dept}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <Mail size={12} /> {emp.email}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <Phone size={12} /> {emp.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit ${
                          emp.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            emp.status === "Active"
                              ? "bg-green-600"
                              : "bg-slate-400"
                          }`}
                        ></span>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleEdit(emp)}
                          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(emp.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
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

      {/* ADD/EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm z-50 p-4">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800">
                {editId ? "Update Employee Details" : "Register New Employee"}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Please ensure all details match official documents.
              </p>
            </div>

            <div className="p-8 grid grid-cols-2 gap-5">
              <div className="col-span-2">
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Kumar"
                  className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">
                  Official Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">
                  Designation
                </label>
                <input
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer"
                  className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1.5 ml-1">
                  Department
                </label>
                <select
                  name="dept"
                  value={formData.dept}
                  onChange={handleChange}
                  className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                >
                  <option value="">Select Dept</option>
                  <option value="IT">IT & Tech</option>
                  <option value="HR">Human Resources</option>
                  <option value="Design">Design</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
            </div>

            <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-700 transition-colors"
              >
                Discard
              </button>
              <button
                onClick={handleSave}
                className="px-8 py-2.5 bg-[#0F3A53] text-white rounded-xl text-sm font-bold hover:shadow-lg transition-all active:scale-95"
              >
                {editId ? "Save Changes" : "Confirm Addition"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;
