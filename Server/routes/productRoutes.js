import express from "express";
import { authSeller } from "../middleware/sellerAuth.js";
import { addProduct, getAllProducts,getSellerProducts,getProductsByCategory } from "../controllers/productController.js";
import mongoose from "mongoose";
import Product from "../models/productModel.js";

const router = express.Router();


// ⭐ For homepage (no login)
router.get("/products", getAllProducts);

// ⭐ For seller dashboard (login required)
router.get("/my-products", authSeller, getSellerProducts);

// ADD a new product
router.post("/add-product", authSeller, addProduct);

router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json({ success: true, product: updated });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};

    if (category) {
      // Exact match + case-insensitive + ignore extra spaces
      filter.category = { $regex: new RegExp(`^\\s*${category}\\s*$`, "i") };
    }

    const products = await Product.find(filter);

    res.json({ success: true, products });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});





router.get("/products", async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};
    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    const products = await Product.find(filter);
    res.json({ products });
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

// router.get("/products/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });
// GET single product by ID
router.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  // ✅ ObjectId validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Get product error:", error);
    res.status(500).json({ message: "Server error" });
  }
});






export default router;
