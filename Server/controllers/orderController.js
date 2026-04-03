import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

// PLACE ORDER
export const placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart empty" });
  }

  const total = cart.items.reduce(
    (sum, item) => sum + item.quantity * 1000, // simple price logic (later improve)
    0
  );

  const order = await Order.create({
    user: req.user.id,
    items: cart.items,
    totalAmount: total
  });

  // clear cart
  cart.items = [];
  await cart.save();

  res.json(order);
};

// GET USER ORDERS
export const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate("items.product");
  res.json(orders);
};