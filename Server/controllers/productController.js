import Product from "../models/productModel.js";
export const addProduct = async (req, res) => {
  try {
    const sellerId = req.sellerId; // ⭐ ID from token

    if (!sellerId) {
      return res.status(401).json({ message: "Unauthorized seller" });
    }

    const newProduct = new Product({
      ...req.body,
      seller: sellerId   // ⭐ attaching seller ID
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log("Add product error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



// ⭐ Public products (Home / CardsSection)
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getSellerProducts = async (req, res) => {
  try {
    const sellerId = req.sellerId;

    const products = await Product.find({ seller: sellerId });

    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updateData = req.body;

    if (req.file) updateData.imageUrl = `/uploads/${req.file.filename}`;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json({ product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const products = await Product.find({
      category: category,
    });

    res.status(200).json({ products });
  } catch (error) {
    console.log("Category fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
