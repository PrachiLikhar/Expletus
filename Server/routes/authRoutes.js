import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// protected route
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "User profile",
    user: req.user
  });
});

export default router;