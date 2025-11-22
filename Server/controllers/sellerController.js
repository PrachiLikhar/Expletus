import Seller from "../models/sellerModel.js";
import bcrypt from "bcryptjs";

// ================= REGISTER SELLER =================
export const registerSeller = async (req, res) => {
  try {
    const { name, email, password, phone, shopName, shopAddress } = req.body;

    const exist = await Seller.findOne({ email });
    if (exist) return res.status(400).json({ message: "Seller already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const seller = await Seller.create({
      name,
      email,
      password: hashedPassword,
      phone,
      shopName,
      shopAddress,
    });

    return res.status(201).json({
      success: true,
      message: "Seller registered successfully",
      seller,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ================= LOGIN SELLER =================
export const loginSeller = async (req, res) => {
  try {
    const { email, password } = req.body;

    const seller = await Seller.findOne({ email });
    if (!seller) return res.status(404).json({ message: "Seller not found" });

    const isMatch = await bcrypt.compare(password, seller.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    // ===== SET COOKIE =====
    res.cookie("seller_token", seller._id.toString(), {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      signed: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      seller,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// ================= LOGOUT SELLER =================
export const logoutSeller = async (req, res) => {
  try {
    res.clearCookie("seller_token", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      signed: true,
    });

    return res.status(200).json({
      success: true,
      message: "Seller logged out successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Logout failed",
      error: error.message,
    });
  }
};
