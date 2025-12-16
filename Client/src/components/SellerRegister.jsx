import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SellerRegister() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    altMobile: "",
    dob: "",
    gender: "",
    pan: "",
    aadhaar: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    accountName: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
    password: "",
    confirmPassword: "",
  });

  const [aadhaarFront, setAadhaarFront] = useState(null);
  const [aadhaarBack, setAadhaarBack] = useState(null);
  const [panImage, setPanImage] = useState(null);
  const [passbookImage, setPassbookImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const next = () => setStep((s) => Math.min(5, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const handleFile = (e, setter) => {
    const f = e.target.files?.[0];
    if (f) setter(f);
  };

  const submit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.name || !form.email || !form.mobile) {
      setErrorMsg("Please fill all required personal fields.");
      return;
    }
    if (form.password.length < 6 || form.password !== form.confirmPassword) {
      setErrorMsg("Password should be at least 6 chars & match.");
      return;
    }

    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));

      // Append files
      if (aadhaarFront) fd.append("aadhaarFront", aadhaarFront);
      if (aadhaarBack) fd.append("aadhaarBack", aadhaarBack);
      if (panImage) fd.append("panImage", panImage);
      if (passbookImage) fd.append("passbookImage", passbookImage);
      if (profileImage) fd.append("profileImage", profileImage);

      const res = await fetch("http://localhost:5000/api/seller/register", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (res.ok) {
        alert("Seller Registered Successfully! 🎉");
        navigate("/seller-login");
      } else {
        setErrorMsg(data.message || "Registration failed");
      }
    } catch (err) {
      setErrorMsg("Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex justify-center items-start py-12 px-6">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10">
        <h1 className="text-4xl font-bold text-[#5DE23C] mb-4 text-center tracking-wide">
          Seller Registration 🛍️
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Complete your KYC to activate your seller account.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                step === n
                  ? "bg-[#5DE23C] text-black"
                  : "bg-black/40 border border-gray-700 text-gray-400"
              }`}
            >
              Step {n}
            </div>
          ))}
        </div>

        {errorMsg && (
          <div className="mb-4 bg-red-600 text-white p-3 rounded-xl text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={submit} className="text-white">
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name *"
                name="name"
                value={form.name}
                onChange={onChange}
              />
              <Input
                label="Email *"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
              />
              <Input
                label="Mobile *"
                name="mobile"
                value={form.mobile}
                onChange={onChange}
              />
              <Input
                label="Alternate Mobile"
                name="altMobile"
                value={form.altMobile}
                onChange={onChange}
              />
              <Input
                label="Date of Birth"
                type="date"
                name="dob"
                value={form.dob}
                onChange={onChange}
              />

              <div>
                <label className="text-gray-300 mb-1 block">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={onChange}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-600 text-white"
                >
                  <option value="">Select</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 gap-6">
              <Input
                label="Address Line 1 *"
                name="address1"
                value={form.address1}
                onChange={onChange}
              />
              <Input
                label="Address Line 2"
                name="address2"
                value={form.address2}
                onChange={onChange}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  name="city"
                  label="City"
                  value={form.city}
                  onChange={onChange}
                />
                <Input
                  name="state"
                  label="State"
                  value={form.state}
                  onChange={onChange}
                />
                <Input
                  name="pincode"
                  label="Pincode"
                  value={form.pincode}
                  onChange={onChange}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Account Holder Name *"
                name="accountName"
                value={form.accountName}
                onChange={onChange}
              />
              <Input
                label="Account Number *"
                name="accountNumber"
                value={form.accountNumber}
                onChange={onChange}
              />
              <Input
                label="IFSC Code *"
                name="ifsc"
                value={form.ifsc}
                onChange={onChange}
              />
              <Input
                label="Bank Name"
                name="bankName"
                value={form.bankName}
                onChange={onChange}
              />
            </div>
          )}

          {step === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FileInput label="Aadhaar Front *" setter={setAadhaarFront} />
              <FileInput label="Aadhaar Back" setter={setAadhaarBack} />
              <FileInput label="PAN Card *" setter={setPanImage} />
              <FileInput
                label="Passbook / Cancelled Cheque"
                setter={setPassbookImage}
              />
              <FileInput
                label="Profile Photo"
                setter={setProfileImage}
                className="md:col-span-2"
              />
            </div>
          )}

          {step === 5 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Password *"
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
              />
              <Input
                label="Confirm Password *"
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={onChange}
              />
            </div>
          )}

          <div className="flex justify-between items-center mt-10">
            {step > 1 && (
              <button
                type="button"
                onClick={prev}
                className="px-5 py-2 rounded-xl bg-black/40 border border-gray-600 text-white hover:bg-black/60"
              >
                ← Back
              </button>
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={next}
                className="px-6 py-2 rounded-xl bg-[#5DE23C] text-black font-semibold hover:bg-[#4CC52F]"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-[#5DE23C] text-black font-semibold hover:bg-[#4CC52F]"
              >
                {loading ? "Submitting..." : "Submit Registration"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-gray-300 mb-1 block">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-600 text-white placeholder-gray-400"
    />
  </div>
);

const FileInput = ({ label, setter, className }) => (
  <div className={className}>
    <label className="text-gray-300 mb-1 block">{label}</label>
    <input
      type="file"
      onChange={(e) => setter(e.target.files[0])}
      className="text-gray-300"
    />
  </div>
);
