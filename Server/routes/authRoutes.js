import express from "express";
import {
  registerUser,
  loginUser,
  logout ,
  getProfile,
  getAllUsers
} from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/profile", authMiddleware, getProfile);
// 🔹 GET → /api/users/all
router.get("/all", getAllUsers);

export default router;
