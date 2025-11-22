const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  paymentMethod: {
    type: String,
    enum: ["COD", "UPI", "CARD", "NET_BANKING", "WALLET"],
    required: true,
    default: "COD"
  },

  paymentStatus: {
    type: String,
    enum: ["PENDING", "SUCCESS", "FAILED", "REFUNDED"],
    default: "PENDING"
  },

  amount: {
    type: Number,
    required: true
  },

  transactionId: {
    type: String,
    default: null
  },

  paymentGatewayResponse: {
    type: Object,
    default: {}
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Payment", paymentSchema);
