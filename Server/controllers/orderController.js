import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
// PLACE ORDER
export const placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart empty" });
    }

    let total = 0;

    // 🔥 Fetch real product prices
    const updatedItems = [];

    for (const item of cart.items) {
      const product = await Product.findById(item.product);

      if (!product) continue;

      total += product.price * item.quantity;

      updatedItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        image: product.image
      });
    }

    // ✅ Create Order
    const order = await Order.create({
      user: req.user.id,
      items: updatedItems,
      totalAmount: total,
      status: "Processing"
    });

    // ✅ Clear Cart
    cart.items = [];
    await cart.save();

    res.json(order);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Order failed" });
  }
};

// GET USER ORDERS
export const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate("items.product");
  res.json(orders);
};