import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number
    }
  ],
  total: Number,
  address: Object,
  paymentMethod: String,
  status: { type: String, enum: ["placed","packed","shipped","out_for_delivery","delivered","cancelled","returned"], default: "placed" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
