const mongoose = require("mongoose");

const userActivitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  action: {
    type: String,
    required: true,
    enum: [
      "LOGIN",
      "LOGOUT",
      "VIEW_PRODUCT",
      "ADD_TO_CART",
      "REMOVE_FROM_CART",
      "ADD_TO_WISHLIST",
      "REMOVE_FROM_WISHLIST",
      "PLACE_ORDER",
      "PAYMENT_DONE",
      "PROFILE_UPDATE"
    ]
  },

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    default: null
  },

  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    default: null
  },

  ipAddress: {
    type: String,
    default: null
  },

  userAgent: {
    type: String,
    default: null
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("UserActivity", userActivitySchema);
