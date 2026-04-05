import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Filter,
  Edit2,
  Trash2,
  Truck,
  MapPin,
  Bike,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

// 1. Delivery Boy Dummy Data
const DUMMY_DELIVERY_BOYS = [
  {
    id: 1,
    name: "Ravi Kumar",
    email: "ravi.d@quicklog.com",
    phone: "9822110033",
    vehicle: "Bike",
    vehicleNo: "DL 3S AB 1234",
    status: "On Duty",
  },
  {
    id: 2,
    name: "Sandeep Singh",
    email: "sandeep.s@quicklog.com",
    phone: "8844556677",
    vehicle: "Scooter",
    vehicleNo: "HR 26 BC 5678",
    status: "Off Duty",
  },
  {
    id: 3,
    name: "Mohit Verma",
    email: "mohit.v@quicklog.com",
    phone: "7766112233",
    vehicle: "Electric Bike",
    vehicleNo: "UP 16 AZ 9900",
    status: "On Delivery",
  },
  {
    id: 4,
    name: "Sunny Yadav",
    email: "sunny.y@quicklog.com",
    phone: "9100223344",
    vehicle: "Cycle",
    vehicleNo: "N/A",
    status: "On Duty",
  },
];

const DeliveryManagement = () => {
  const [deliveryBoys, setDeliveryBoys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "Bike",
    vehicleNo: "",
    status: "On Duty",
  });

  useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      setDeliveryBoys(DUMMY_DELIVERY_BOYS);
      setIsLoading(false);
    }, 500);
  }, []);

  const filteredBoys = deliveryBoys.filter(
    (boy) =>
      boy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      boy.vehicleNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      boy.phone.includes(searchTerm)
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.name || !formData.phone) return;

    if (editId) {
      setDeliveryBoys(
        deliveryBoys.map((b) =>
          b.id === editId ? { ...formData, id: editId } : b
        )
      );
    } else {
      setDeliveryBoys([...deliveryBoys, { ...formData, id: Date.now() }]);
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
      vehicle: "Bike",
      vehicleNo: "",
      status: "On Duty",
    });
  };

  const handleEdit = (boy) => {
    setFormData(boy);
    setEditId(boy.id);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Remove this delivery partner?")) {
      setDeliveryBoys(deliveryBoys.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full p-8 bg-slate-50 min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Delivery Partners
          </h1>
          <p className="text-sm text-slate-500">
            Monitor and manage your delivery fleet
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#0F3A53] hover:bg-[#1a4a66] text-white px-5 py-2.5 rounded-xl shadow-sm text-sm font-semibold transition-all"
        >
          <Plus size={18} />
          Register Rider
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
            <Bike size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
              Active Riders
            </p>
            <p className="text-2xl font-bold text-slate-800">
              {deliveryBoys.filter((b) => b.status !== "Off Duty").length}
            </p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
            <Truck size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
              Deliveries Today
            </p>
            <p className="text-2xl font-bold text-slate-800">142</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
              Avg Delivery Time
            </p>
            <p className="text-2xl font-bold text-slate-800">24 Min</p>
          </div>
        </div>
      </div>

      {/* SEARCH & TABLE */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="relative w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name, phone or vehicle no..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[11px] font-bold tracking-widest border-b">
              <tr>
                <th className="px-6 py-4">Rider Detail</th>
                <th className="px-6 py-4">Vehicle Info</th>
                <th className="px-6 py-4">Live Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredBoys.map((boy) => (
                <tr
                  key={boy.id}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                        {boy.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-700 text-sm">
                          {boy.name}
                        </p>
                        <p className="text-xs text-slate-400 flex items-center gap-1">
                          <Smartphone size={10} /> {boy.phone}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-600">
                      {boy.vehicle}
                    </p>
                    <p className="text-xs text-slate-400 uppercase">
                      {boy.vehicleNo || "No Plate"}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1.5 w-fit ${
                        boy.status === "On Delivery"
                          ? "bg-blue-100 text-blue-700"
                          : boy.status === "On Duty"
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          boy.status === "On Delivery"
                            ? "bg-blue-600"
                            : boy.status === "On Duty"
                            ? "bg-green-600"
                            : "bg-slate-400"
                        }`}
                      ></span>
                      {boy.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEdit(boy)}
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(boy.id)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
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

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden">
            <div className="px-8 py-6 border-b bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800">
                {editId ? "Update Rider" : "Add New Rider"}
              </h2>
            </div>

            <div className="p-8 space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1 ml-1">
                  Rider Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="w-full border p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1 ml-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full border p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1 ml-1">
                    Vehicle Type
                  </label>
                  <select
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl text-sm outline-none bg-white"
                  >
                    <option value="Bike">Bike</option>
                    <option value="Scooter">Scooter</option>
                    <option value="Cycle">Cycle</option>
                    <option value="Electric Bike">Electric Bike</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1 ml-1">
                  Vehicle Plate Number
                </label>
                <input
                  name="vehicleNo"
                  value={formData.vehicleNo}
                  onChange={handleChange}
                  placeholder="e.g. DL 1S AB 0001"
                  className="w-full border p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1 ml-1">
                  Current Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl text-sm outline-none bg-white"
                >
                  <option value="On Duty">On Duty (Available)</option>
                  <option value="On Delivery">On Delivery (Busy)</option>
                  <option value="Off Duty">Off Duty</option>
                </select>
              </div>
            </div>

            <div className="px-8 py-6 bg-slate-50 border-t flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-6 py-2 text-sm font-semibold text-slate-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-8 py-2 bg-[#0F3A53] text-white rounded-xl text-sm font-bold shadow-md"
              >
                {editId ? "Update Rider" : "Add Rider"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryManagement;
