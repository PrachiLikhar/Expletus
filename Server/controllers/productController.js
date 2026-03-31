import Product from "../models/Product.js";

// ADD PRODUCT
export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};