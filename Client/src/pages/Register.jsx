// import React, { useState } from "react";
// import API from "../services/api";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await API.post("/auth/register", form);
//     alert("Registered Successfully");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})}/>
//       <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
//       <input placeholder="Password" type="password" onChange={e => setForm({...form, password: e.target.value})}/>
//       <button>Register</button>
//     </form>
//   );
// };

// export default Register;
import React, { useState } from "react";
import API from "../services/api";
import { User, Mail, Lock, UserPlus, Loader2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/auth/register", form);
      alert("Account created successfully!");
      navigate("/"); // Registration ke baad login page par bhejne ke liye
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        {/* Header Section */}
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-indigo-100 flex items-center justify-center rounded-full">
            <UserPlus className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us today and get started
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <label className="text-xs font-semibold text-gray-500 uppercase ml-1">
                Full Name
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-xl relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm"
                  placeholder="John Doe"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label className="text-xs font-semibold text-gray-500 uppercase ml-1">
                Email Address
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  className="appearance-none rounded-xl relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm"
                  placeholder="name@company.com"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <label className="text-xs font-semibold text-gray-500 uppercase ml-1">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  minLength="6"
                  className="appearance-none rounded-xl relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm"
                  placeholder="••••••••"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="animate-spin h-5 w-5" />
              ) : (
                "Create Free Account"
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
