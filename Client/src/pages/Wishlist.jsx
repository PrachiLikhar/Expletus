import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist 😔</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded-xl shadow">
              <img
                src={item.image}
                alt=""
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="font-bold mt-2">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
