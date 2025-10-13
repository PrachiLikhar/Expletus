import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function CardsSection() {
  const products = [
    {
      name: "iPhone 15 Pro",
      image: "https://via.placeholder.com/150",
      price: 120000,
      oldPrice: 130000,
      rating: 4.5,
      reviews: 120,
      category: "Mobile",
      desc: "Latest Apple iPhone with powerful A17 chip and Pro camera system.",
    },
    {
      name: "Dell XPS 13",
      image: "https://via.placeholder.com/150",
      price: 95000,
      oldPrice: 100000,
      rating: 4.0,
      reviews: 80,
      category: "Laptop",
      desc: "Compact and high-performance laptop suitable for work and study.",
    },
    {
      name: "Sony WH-1000XM5",
      image: "https://via.placeholder.com/150",
      price: 20000,
      oldPrice: 22000,
      rating: 4.7,
      reviews: 50,
      category: "Accessories",
      desc: "Industry-leading noise cancelling headphones for immersive sound.",
    },
    {
      name: "Samsung Galaxy S23",
      image: "https://via.placeholder.com/150",
      price: 70000,
      oldPrice: 75000,
      rating: 4.3,
      reviews: 90,
      category: "Mobile",
      desc: "Flagship Samsung smartphone with amazing camera and display.",
    },
  ];

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++)
      stars.push(<FaStar key={i} className="text-yellow-400 inline" />);
    if (halfStar)
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 inline" />
      );
    while (stars.length < 5)
      stars.push(
        <FaRegStar key={stars.length} className="text-yellow-400 inline" />
      );
    return stars;
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5DE23C] mb-12 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-[#5DE23C]/30 hover:scale-105 transform transition duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover mb-4 rounded-lg hover:scale-105 transition duration-300"
                />

                {/* Product Name */}
                <h3 className="text-lg font-bold mb-1 text-center">
                  {product.name}
                </h3>

                {/* Category */}
                <p className="text-green-400 text-sm mb-2">
                  {product.category}
                </p>

                {/* Price */}
                <p className="text-white font-semibold mb-2">
                  ₹{product.price.toLocaleString()}{" "}
                  <span className="line-through text-gray-400 text-sm ml-2">
                    ₹{product.oldPrice.toLocaleString()}
                  </span>
                </p>

                {/* Rating */}
                <div className="mb-2">
                  {renderStars(product.rating)}{" "}
                  <span className="text-gray-400 text-sm ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm text-center">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
