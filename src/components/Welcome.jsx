import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-50">
      <div className="text-center p-10 bg-white shadow-2xl rounded-3xl border border-yellow-100">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">
          Welcome to My App 👋
        </h1>
        <p className="text-gray-600 mb-8">
          Please sign in to continue or create a new account.
        </p>

        <div className="flex gap-6">
          <button className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition duration-300">
            Sign In
          </button>
          <button className="px-8 py-3 bg-white border-2 border-yellow-500 text-yellow-600 font-semibold rounded-xl hover:bg-yellow-50 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
