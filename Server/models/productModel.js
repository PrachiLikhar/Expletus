// // models/productModel.js
// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   seller: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },
//   name: String,
//   image: String,
//   price: Number,
//   oldPrice: Number,
//   stock: Number,
//   rating: Number,
//   reviews: Number,
//   category: String,
//   desc: String,
// });

// const Product = mongoose.model("Product", productSchema);

// export default Product; // ✅ default export


//==============new one==============//
// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true },
//   category: { type: String },
//   brand: { type: String },
//   rating: { type: Number, default: 0 },
//   stock: { type: Number, default: 1 },
//   image: { type: String },
// });

// const Product = mongoose.model("Product", productSchema);

// export default Product;
// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: String },
//   rating: { type: Number, default: 0 },
//   stock: { type: Number, default: 1 },
//   image: { type: String },

//   // ⭐ MOST IMPORTANT — Seller ID store hoga
//   seller: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Seller",
//     required: true
//   }
// });

// const Product = mongoose.model("Product", productSchema);

// export default Product;

//==========new one==========
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    stock: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    category: { type: String },
    desc: { type: String },
    
    // seller already creates internal index
    seller: { type: mongoose.Schema.Types.ObjectId, ref: "Seller" },
  },
  { timestamps: true }
);

// ❌ Remove this line
// productSchema.index({ seller: 1 });

export default mongoose.model("Product", productSchema);




