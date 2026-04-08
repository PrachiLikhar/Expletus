import express from "express";
import upload from "../middleware/upload.js";
import { addProduct, getProducts ,deleteProduct,updateProduct} from "../controllers/productController.js";
import  {protect} from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", protect, isAdmin, addProduct);
router.delete("/:id", protect, isAdmin, deleteProduct);
router.put("/:id", protect, isAdmin, updateProduct);
router.get("/", getProducts);

export default router;