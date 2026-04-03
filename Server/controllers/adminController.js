import User from "../models/userModel.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const getDashboardStats = async (req, res) => {
  const users = await User.countDocuments({ role: "user" });
  const admins = await User.countDocuments({ role: "admin" });

  const orders = await Order.countDocuments();
  const products = await Product.countDocuments();

  res.json({
    users,
    admins,
    orders,
    products
  });
};