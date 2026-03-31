// import React, { useEffect, useState } from "react";
// import API from "../services/api";

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     API.get("/auth/profile")
//       .then((res) => setUser(res.data.user))
//       .catch(() => alert("Not logged in"));
//   }, []);

//   const handleLogout = async () => {
//     await API.post("/auth/logout");
//     alert("Logged out");
//     window.location.href = "/";
//   };

//   return (
//     <div>
//       {user ? <h1>Welcome {user.role}</h1> : <h1>Please login</h1>}
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Profile;
import React, { useEffect, useState } from "react";
import API from "../services/api";
import { User, LogOut, ShieldCheck, Mail, Loader2 } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/auth/profile")
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
      window.location.href = "/";
    } catch (err) {
      alert("Logout failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Main Card */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Cover Header */}
          <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

          <div className="px-8 pb-8">
            <div className="relative">
              {/* Profile Image / Avatar Placeholder */}
              <div className="absolute -top-12 left-0">
                <div className="h-24 w-24 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                  <User className="h-12 w-12 text-indigo-600" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end pt-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition-colors"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>

            {/* User Info Section */}
            <div className="mt-12">
              {user ? (
                <>
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-gray-900 capitalize">
                      {user.name || "User Name"}
                    </h1>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase rounded-full flex items-center gap-1">
                      <ShieldCheck size={14} />
                      {user.role}
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-sm text-gray-500 mb-1">
                        Email Address
                      </p>
                      <div className="flex items-center gap-2 text-gray-700 font-medium">
                        <Mail size={18} className="text-gray-400" />
                        {user.email || "user@example.com"}
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-sm text-gray-500 mb-1">
                        Account Status
                      </p>
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        Active Account
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Please Login
                  </h2>
                  <p className="text-gray-500 mt-2">
                    You need to be authenticated to view this page.
                  </p>
                  <button
                    onClick={() => (window.location.href = "/")}
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg"
                  >
                    Go to Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-400 text-sm mt-8">
          © 2026 Your App Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Profile;
