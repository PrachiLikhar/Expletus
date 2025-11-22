const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  }
}, { _id: false });

const cartSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },

  items: [cartItemSchema],

  subtotal: {
    type: Number,
    default: 0
  },

  discountAmount: {
    type: Number,
    default: 0
  },

  deliveryCharges: {
    type: Number,
    default: 0
  },
  // final amount
  grandTotal: { 
    type: Number,
    default: 0
  },

  couponCode: {
    type: String,
    default: null
  },

  status: {
    type: String,
    enum: ["active", "ordered"],
    default: "active"
  }

}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);
