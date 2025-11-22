const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },

  description: {
    type: String,
    trim: true
  },

  discountType: {
    type: String,
    enum: ["PERCENTAGE", "FLAT"],
    required: true
  },

  discountValue: {
    type: Number,
    required: true
  },

  minOrderAmount: {
    type: Number,
    default: 0
  },

  maxDiscountAmount: {
    type: Number,
    default: null  
  },

  startDate: {
    type: Date,
    required: true
  },

  endDate: {
    type: Date,
    required: true
  },

  usageLimit: {
    type: Number,
    default: 1000 
  },

  usedCount: {
    type: Number,
    default: 0
  },

  userUsageLimit: {
    type: Number,
    default: 1  
  },

  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE"],
    default: "ACTIVE"
  }
});

module.exports = mongoose.model("Coupon", couponSchema);
