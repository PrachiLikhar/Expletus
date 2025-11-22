const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },

  productName: {
    type: String,
    required: true,
    trim: true
  },

  quantity: {
    type: Number,
    required: true,
    min: 1
  },

  price: {
    type: Number, 
    required: true
  },

  discount: {
    type: Number,
    default: 0
  },

  finalPrice: {
    type: Number, 
    required: true
  },

  variant: {
    size: { type: String, default: null },
    color: { type: String, default: null }
  }
});

module.exports = mongoose.model("OrderItem", orderItemSchema);
