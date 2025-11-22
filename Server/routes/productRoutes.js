import express from "express";
import { addProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { sellerAuth } from "../middleware/sellerAuth.js";

const router = express.Router();

// Protected Routes: Only Seller Access
router.post("/add", sellerAuth, addProduct);
router.put("/update/:id", sellerAuth, updateProduct);
router.delete("/delete/:id", sellerAuth, deleteProduct);

export default router;
