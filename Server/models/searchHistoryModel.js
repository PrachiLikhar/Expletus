const mongoose = require("mongoose");

const searchHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  keyword: {
    type: String,
    required: true,
    trim: true
  },

  searchedAt: {
    type: Date,
    default: Date.now
  }
});


searchHistorySchema.index({ userId: 1, keyword: 1 }, { unique: true });

module.exports = mongoose.model("SearchHistory", searchHistorySchema);
