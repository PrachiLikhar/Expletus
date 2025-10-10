import React from "react";
import { FaStar } from "react-icons/fa";

export default function CardsSection() {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1580910051074-cb3e51b7d90a?auto=format&fit=crop&w=500&q=80",
      title: "Wireless Headphones",
      price: "$49.99",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1606813908753-f5d6d2f8f6a6?auto=format&fit=crop&w=500&q=80",
      title: "Smartwatch Series 5",
      price: "$129.99",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1581276879432-15d6e3dc5f45?auto=format&fit=crop&w=500&q=80",
      title: "Portable Speaker",
      price: "$39.99",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1611162617210-3fdbf6b0fc6e?auto=format&fit=crop&w=500&q=80",
      title: "Gaming Mouse",
      price: "$29.99",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5DE23C] mb-12">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#5DE23C]/40 hover:scale-105 transform transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-[#5DE23C] font-bold mb-2">{product.price}</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating ? "text-yellow-400" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
