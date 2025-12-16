import express from "express";
import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register Admin
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, adminCode } = req.body;

    // 🛑 If you still want to accept ANY code admin enters:
    if (!adminCode || adminCode.trim() === "") {
      return res.json({
        success: false,
        message: "Admin Secret Code is required",
      });
    }

    const exists = await Admin.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Admin already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const admin = new Admin({
      name,
      email,
      phone,
      password: hashed,
      adminCode, // jo admin ne enter kiya wahi save hoga
    });

    await admin.save();

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      "JWT_SECRET_12345",
      { expiresIn: "7d" }
    );

    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      message: "Admin Registered & Logged In",
      token,
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});
// Login Admin

router.post("/login", async (req, res) => {
  try {
    const { email, password, adminCode } = req.body;

    // 1️⃣ Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    // 2️⃣ Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // 3️⃣ Compare Password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    // 4️⃣ Generate JWT Token
    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5️⃣ Successful Login Response
    res.status(200).json({
      success: true,
      message: "Admin Login Successful!",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
      },
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error, please try again",
    });
  }
});


export default router;
