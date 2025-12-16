import { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(StoreContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);

    if (result?.user) {
      setSuccess(true);
      localStorage.setItem("isLoggedIn", "true");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setErrorMsg(result?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="backdrop-blur-xl bg-white/10 p-10 rounded-3xl border border-white/20 shadow-2xl w-full max-w-md">
        {/* Error Message */}
        {errorMsg && (
          <p className="text-center mb-4 bg-red-600 text-white py-2 rounded-xl">
            {errorMsg}
          </p>
        )}

        {/* SUCCESS POPUP */}
        {success && (
          <div className="mb-4 p-4 rounded-xl bg-green-600/20 border border-green-400 text-green-300 text-center animate-pulse">
            ✅ Login Successful!
          </div>
        )}

        <h2 className="text-4xl font-bold text-center text-[#5DE23C] mb-6 tracking-wide">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
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
            className="w-full py-3 rounded-xl bg-[#5DE23C] text-black font-semibold text-lg hover:bg-[#4CC52F]"
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>

        <p className="mt-5 text-center text-gray-300">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#5DE23C] hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
