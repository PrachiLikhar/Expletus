import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function ProductAdmin() {
  const dummyProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      image: "https://via.placeholder.com/150",
      price: 120000,
      oldPrice: 130000,
      rating: 4.5,
      reviews: 120,
      category: "Mobile",
      desc: "Latest Apple iPhone with powerful A17 chip.",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
      name: "Samsung Galaxy S23",
      image: "https://via.placeholder.com/150",
      price: 70000,
      oldPrice: 75000,
      rating: 4.3,
      reviews: 90,
      category: "Mobile",
      desc: "Flagship Samsung smartphone with amazing camera and display.",
    },
    {
      id: 5,
      name: 'MacBook Pro 16"',
      image: "https://via.placeholder.com/150",
      price: 250000,
      oldPrice: 260000,
      rating: 4.8,
      reviews: 65,
      category: "Laptop",
      desc: "Apple MacBook Pro with M2 chip, ideal for professionals and creatives.",
    },
    {
      id: 6,
      name: "Bose QuietComfort 45",
      image: "https://via.placeholder.com/150",
      price: 22000,
      oldPrice: 25000,
      rating: 4.6,
      reviews: 40,
      category: "Accessories",
      desc: "Premium noise-cancelling headphones for an immersive experience.",
    },
    {
      id: 7,
      name: "OnePlus 12",
      image: "https://via.placeholder.com/150",
      price: 55000,
      oldPrice: 60000,
      rating: 4.4,
      reviews: 75,
      category: "Mobile",
      desc: "Flagship OnePlus smartphone with fast charging and smooth performance.",
    },
    {
      id: 8,
      name: "HP Spectre x360",
      image: "https://via.placeholder.com/150",
      price: 120000,
      oldPrice: 125000,
      rating: 4.5,
      reviews: 35,
      category: "Laptop",
      desc: "Convertible HP laptop with touchscreen, lightweight and powerful.",
    },
    {
      id: 9,
      name: "JBL Flip 6",
      image: "https://via.placeholder.com/150",
      price: 8000,
      oldPrice: 10000,
      rating: 4.2,
      reviews: 60,
      category: "Accessories",
      desc: "Portable Bluetooth speaker with powerful bass and waterproof design.",
    },
    {
      id: 10,
      name: 'iPad Pro 12.9"',
      image: "https://via.placeholder.com/150",
      price: 120000,
      oldPrice: 125000,
      rating: 4.7,
      reviews: 50,
      category: "Tablet",
      desc: "Apple iPad Pro with M2 chip, perfect for productivity and creativity.",
    },
  ];

  const [products, setProducts] = useState(dummyProducts);
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    price: "",
    oldPrice: "",
    rating: "",
    reviews: "",
    category: "",
    desc: "",
  });

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price) return;
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({
      name: "",
      image: "",
      price: "",
      oldPrice: "",
      rating: "",
      reviews: "",
      category: "",
      desc: "",
    });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleUpdate = (id) => {
    const updatedName = prompt("Enter new product name:");
    const updatedPrice = prompt("Enter new product price:");
    if (!updatedName || !updatedPrice) return;
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, name: updatedName, price: updatedPrice } : p
      )
    );
  };

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
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Admin Panel - Manage Products
      </h1>

      {/* Add Product Form */}
      <div className="flex flex-col md:flex-row gap-2 mb-6">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="border p-2 rounded flex-1 text-black"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
          className="border p-2 rounded flex-1 text-black"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="border p-2 rounded w-32 text-black"
        />
        <input
          type="number"
          placeholder="Old Price"
          value={newProduct.oldPrice}
          onChange={(e) =>
            setNewProduct({ ...newProduct, oldPrice: e.target.value })
          }
          className="border p-2 rounded w-32 text-black"
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-[#5DE23C]/30 hover:scale-105 transform transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-green-400 text-sm">{product.category}</p>
            <p className="text-white font-semibold">
              ₹{product.price}{" "}
              <span className="line-through text-gray-400 text-sm ml-2">
                ₹{product.oldPrice}
              </span>
            </p>
            <div className="my-1">
              {renderStars(product.rating)}{" "}
              <span className="text-gray-400 text-sm ml-1">
                ({product.reviews})
              </span>
            </div>
            <p className="text-gray-400 text-sm">{product.desc}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleUpdate(product.id)}
                className="bg-yellow-400 px-3 py-1 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
