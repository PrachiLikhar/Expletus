const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  name: {
    type: String,
    required: true,
    trim: true  
  },

  phone: {
    type: String,
    required: true,
    trim: true
  },

  houseNo: {
    type: String,
    required: true,
    trim: true
  },

  street: {
    type: String,
    trim: true
  },

  landmark: {
    type: String,
    trim: true
  },

  city: {
    type: String,
    required: true,
    trim: true
  },

  state: {
    type: String,
    required: true,
    trim: true
  },

  pincode: {
    type: String,
    required: true,
    trim: true
  },

  addressType: {
    type: String,
    enum: ["HOME", "WORK", "OTHER"],
    default: "HOME"
  },

  isDefault: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Address", addressSchema);
