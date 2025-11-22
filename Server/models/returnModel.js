import mongoose from "mongoose";

const returnRefundSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  reason: {
    type: String,
    required: true,
    trim: true
  },
  requestType: {
    type: String,
    enum: ["return", "refund"],
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected", "completed"],
    default: "pending"
  },
  images: [{
    type: String
  }],
  pickupAddress: {
    houseNo: String,
    street: String,
    city: String,
    state: String,
    pincode: String,
    country: { type: String, default: "India" }
  },
  refundAmount: {
    type: Number,
    default: 0
  },
  processedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    default: null
  }
}, { timestamps: true });

export default mongoose.model("ReturnRefund", returnRefundSchema);
