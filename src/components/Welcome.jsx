import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
      <div className="text-center p-10 bg-white shadow-2xl rounded-3xl border border-indigo-100">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">
          Welcome to My App 👋
        </h1>
        <p className="text-gray-600 mb-8">
          Please sign in to continue or create a new account.
        </p>

        <div className="flex gap-6">
          <button
            onClick={() => navigate("/signin")}
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-300"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
