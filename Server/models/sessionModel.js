import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  userId: String,
  refreshToken: String,
  expiresAt: Date
});

export default mongoose.model("Session", sessionSchema);
