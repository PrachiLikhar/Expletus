import { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(StoreContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await login(email, password);
    console.log(result);

    if (result?.message === "Login Successful") {
      alert("Login Successful 🎉");
    } else {
      alert(result?.message || "Login Failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="backdrop-blur-xl bg-white/10 p-10 rounded-3xl border border-white/20 shadow-2xl w-full max-w-md animate-fade-in">
        <h2 className="text-4xl font-bold text-center text-[#5DE23C] mb-6 tracking-wide">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-gray-300 mb-1 block">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#5DE23C]"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-300 mb-1 block">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#5DE23C]"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#5DE23C] text-black font-semibold text-lg tracking-wide hover:bg-[#4CC52F] transition-all"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-5 text-center text-gray-300">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#5DE23C] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
