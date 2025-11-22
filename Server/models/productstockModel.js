const mongoose = require("mongoose");

const productStockSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },

  variant: {
   
    color: { type: String, default: null }
  },

  quantity: {
    type: Number,
    required: true,
    default: 0
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("ProductStock", productStockSchema);
