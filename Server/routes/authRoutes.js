import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import {protect} from "../middleware/authMiddleware.js";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// protected route
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User profile",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error); // 👈 ADD THIS
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

export default router;