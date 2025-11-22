import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: String,
  images: [String] // can include local path like /mnt/data/...
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
