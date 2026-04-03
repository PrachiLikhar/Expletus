import express from "express";
import { addToCart, getCart,removeFromCart, updateQuantity } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addToCart);
router.get("/", protect, getCart);
router.post("/remove", protect, removeFromCart);
router.post("/update", protect, updateQuantity);

export default router;