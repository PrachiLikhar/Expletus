import React from "react";
import { FaShippingFast, FaLock, FaHeadset, FaTags } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaShippingFast className="text-[#5DE23C] text-4xl mb-3" />,
      title: "Fast & Free Shipping",
      desc: "Get your gadgets delivered quickly with no extra shipping cost.",
    },
    {
      icon: <FaLock className="text-[#5DE23C] text-4xl mb-3" />,
      title: "Secure Payments",
      desc: "Your payment information is encrypted and completely secure.",
    },
    {
      icon: <FaHeadset className="text-[#5DE23C] text-4xl mb-3" />,
      title: "24/7 Support",
      desc: "Our customer support team is always available to assist you.",
    },
    {
      icon: <FaTags className="text-[#5DE23C] text-4xl mb-3" />,
      title: "Exclusive Deals",
      desc: "Get amazing discounts and offers on top gadgets every week.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#5DE23C] mb-12">
          Why Choose Gizmora?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-[#5DE23C]/30 hover:scale-105 transform transition duration-300"
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
