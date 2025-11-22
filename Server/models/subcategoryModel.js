const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",   
    required: true
  },

  description: {
    type: String,
    trim: true
  },

  image: {
    type: String,  
    default: null
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

module.exports = mongoose.model("SubCategory", subCategorySchema);
