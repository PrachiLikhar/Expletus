import express from "express";
import {
  registerUser,
  loginUser,
  logout ,
  getProfile
} from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/profile", authMiddleware, getProfile);

export default router;
