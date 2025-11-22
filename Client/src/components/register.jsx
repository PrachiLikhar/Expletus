import { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(StoreContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await register(name, email, password);

    setLoading(false);

    if (result?.message === "User Registered Successfully") {
      alert("Registered Successfully 🎉");
      navigate("/signin"); // redirect to login page
    } else {
      alert(result?.message || "Registration Failed!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="backdrop-blur-xl bg-white/10 p-10 rounded-3xl border border-white/20 shadow-2xl w-full max-w-md animate-fade-in">
        <h2 className="text-4xl font-bold text-center text-[#5DE23C] mb-6 tracking-wide">
          Create Account ✨
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-300 mb-1 block">Full Name</label>
            <input
              type="text"
              placeholder="Prachi Likhar"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#5DE23C]"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 mb-1 block">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#5DE23C]"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 mb-1 block">Password</label>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#5DE23C]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#5DE23C] text-black font-semibold text-lg tracking-wide hover:bg-[#4CC52F] transition-all"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-5 text-center text-gray-300">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#5DE23C] hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
