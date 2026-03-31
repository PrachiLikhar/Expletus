import express from "express";
import { addProduct, getProducts } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addProduct); // only logged user
router.get("/", getProducts);

export default router;