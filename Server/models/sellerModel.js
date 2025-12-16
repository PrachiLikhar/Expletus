// server/models/Seller.js
import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  image: { type: String, default: "" },
  altMobile: String,
  dob: String,
  gender: String,
  pan: String,
  aadhaar: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  pincode: String,
  bank: {
    accountName: String,
    accountNumber: String,
    ifsc: String,
    bankName: String,
  },
  passwordHash: { type: String, required: true },
  documents: {
    aadhaarFront: String,
    aadhaarBack: String,
    panImage: String,
    passbookImage: String,
    profileImage: String,
  },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default 
mongoose.models.Seller || mongoose.model("Seller", sellerSchema);
