import Cart from "../models/Cart.js";

// ADD TO CART
export const addToCart = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = await Cart.create({
      user: userId,
      items: [{ product: productId, quantity: 1 }]
    });
  } else {
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({ product: productId });
    }

    await cart.save();
  }

  res.json(cart);
};

// GET CART
export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");
  res.json(cart);
};