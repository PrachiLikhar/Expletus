import Product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const product = await Product.create({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      sellerId: req.seller._id
    });

    res.status(201).json({ success: true, message: "Product added", product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, sellerId: req.seller._id },
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(403).json({ success: false, message: "Not allowed" });
    }

    res.json({ success: true, message: "Product Updated", product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: req.params.id,
      sellerId: req.seller._id
    });

    if (!product) {
      return res.status(403).json({ success: false, message: "Not allowed" });
    }

    res.json({ success: true, message: "Product Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
