const categories = [
  "Smartphones",
  "Laptops",
  "Headphones",
  "Tablets",
  "Smart TVs",
  "Cameras",
];

export default function CategoryBar({ onSelect }) {
  return (
    <div className="flex gap-4 justify-center mb-10 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="px-5 py-2 bg-gray-800 hover:bg-green-500 hover:text-black text-white rounded-xl transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
