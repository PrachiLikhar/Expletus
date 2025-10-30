import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-50 px-4 relative">
      <h1 className="text-[100px] font-extrabold text-yellow-600 leading-none">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-2">
        Oops! Page not found
      </h2>
      <p className="text-gray-500 mt-3 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <button className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 transition duration-300">
        Go Back Home
      </button>

      <div className="absolute bottom-6 text-sm text-gray-400">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </div>
  );
};

export default NotFound;
