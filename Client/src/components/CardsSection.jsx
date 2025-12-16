import React, { useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function CardsSection() {
  const {
    products = [],
    loadingProducts,
    userToken,
    updateCartCount,
    fetchAllProducts,
    fetchProductsByCategory,
  } = useContext(StoreContext);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category"); // 🔥 URL category

  /* ================= FETCH PRODUCTS ================= */
  useEffect(() => {
    if (category) {
      fetchProductsByCategory(category);
    } else {
      fetchAllProducts();
    }
  }, [category]);

  /* ================= ADD TO CART ================= */
  // const handleAddToCart = async (product) => {
  //   try {
  //     const res = await fetch("http://localhost:5000/api/cart/add", {
  //       method: "POST",
  //       credentials: "include", // 🔥 COOKIE TOKEN
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ productId: product._id }),
  //     });

  //     const data = await res.json();

  //     if (res.status === 401) {
  //       navigate("/login"); // ❌ login nahi
  //       return;
  //     }

  //     if (res.ok) {
  //       alert("Added to cart");
  //       updateCartCount();
  //     } else {
  //       alert(data.message);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleAddToCart = async (product) => {
    try {
      const res = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product._id }),
      });

      if (res.status === 401) {
        navigate("/login");
        return;
      }

      if (!res.ok) {
        const data = await res.json();
        alert(data.message);
        return;
      }

      // ✅ SUCCESS
      navigate("/cart");
    } catch (err) {
      console.log("Add to cart error:", err);
    }
  };

  /* ================= WISHLIST ================= */
  const handleWishlist = async (id) => {
    if (!userToken) return navigate("/login");

    try {
      const res = await fetch("http://localhost:5000/api/wishlist/toggle", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: id }),
      });

      const data = await res.json();
      if (res.ok) alert("Wishlist updated!");
      else alert(data.message);
    } catch (error) {
      console.log("Wishlist error:", error);
    }
  };

  /* ================= RATING STARS ================= */
  const renderStars = (rating = 0) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;

    for (let i = 0; i < full; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400 inline" />);
    }

    if (half) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 inline" />
      );
    }

    while (stars.length < 5) {
      stars.push(
        <FaRegStar key={stars.length} className="text-yellow-400 inline" />
      );
    }

    return stars;
  };

  /* ================= STATES ================= */
  if (loadingProducts) {
    return <p className="text-center text-white py-20">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center text-white py-20">No products found</p>;
  }

  /* ================= UI ================= */
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5DE23C] mb-12 text-center">
          {category ? category : "Featured Products"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="relative bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              {/* Wishlist */}
              <button
                onClick={() => handleWishlist(product._id)}
                className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition text-xl"
              >
                <FaHeart />
              </button>

              <div className="flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover mb-4 rounded-lg"
                />

                <h3 className="text-lg font-bold mb-1">{product.name}</h3>

                <p className="text-green-400 text-sm mb-2">
                  {product.category}
                </p>

                {/* Price */}
                <p className="font-semibold mb-2">
                  ₹{product.price}
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 text-sm ml-2">
                      ₹{product.oldPrice}
                    </span>
                  )}
                </p>

                {/* Rating */}
                <div className="mb-2">
                  {renderStars(product.rating)}
                  <span className="text-gray-400 text-sm ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm text-center mb-4">
                  {product.desc}
                </p>

                {/* Add to Cart */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-auto bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded-lg shadow transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
