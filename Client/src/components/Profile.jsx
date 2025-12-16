import React, { useEffect, useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Profile() {
  const { user } = useContext(StoreContext);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // If you want to fetch fresh data from backend
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/profile", {
          credentials: "include", // important for cookies
        });
        const data = await res.json();
        setProfileData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  if (!profileData) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <p>
        <strong>Name:</strong> {profileData.name}
      </p>
      <p>
        <strong>Email:</strong> {profileData.email}
      </p>
      <p>
        <strong>ID:</strong> {profileData.id}
      </p>
    </div>
  );
}
