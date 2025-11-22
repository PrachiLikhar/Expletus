const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },

  attributes: {
    type: Map,
    of: String,
    required: true
  
  },

  sku: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },

  price: {
    type: Number,
    required: true
  },

  mrp: {
    type: Number,
    required: true
  },

  stock: {
    type: Number,
    required: true,
    default: 0
  },

  images: [
    {
      type: String
    }
  ],

  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
    default: "ACTIVE"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Variant", variantSchema);
