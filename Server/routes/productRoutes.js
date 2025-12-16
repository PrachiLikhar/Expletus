import express from "express";
import { authSeller } from "../middleware/sellerAuth.js";
import { addProduct, getAllProducts,getSellerProducts,getProductsByCategory } from "../controllers/productController.js";

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

router.get("/category/:category", async (req, res) => {
  try {
    const products = await Product.find({
      category: { $regex: req.params.category, $options: "i" },
    });

    res.json({ products });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
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






export default router;
