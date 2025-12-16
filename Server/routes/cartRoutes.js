import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
  getCartCount
} from "../controllers/cartController.js";
import {authMiddleware}from "../middleware/authMiddleware.js";

const router = express.Router();

/* ADD TO CART */
router.post("/add", authMiddleware, addToCart);

/* GET USER CART */
router.get("/", authMiddleware, getCart);

router.get("/count", authMiddleware, getCartCount);

/* REMOVE ITEM */
router.delete("/remove/:productId", authMiddleware, removeFromCart);

/* CLEAR CART */
router.delete("/clear", authMiddleware, clearCart);

export default router;
