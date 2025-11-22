const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    default: null
  },

  image: {
    type: String,  
    required: true
  },

  redirectUrl: {
    type: String,  
    default: "/"
  },

  position: {
    type: Number,
    default: 1
  },

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

module.exports = mongoose.model("Banner", bannerSchema);

