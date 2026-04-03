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
// export const addProduct = async (req, res) => {
//   try {
//     const product = await Product.create({
//       ...req.body,
//       image: req.file.path // 🔥 Cloudinary URL
//     });

//     res.json(product);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
// DELETE
export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

// UPDATE
export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
};