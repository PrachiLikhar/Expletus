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

//remove cart
export const removeFromCart = async (req, res) => {
  const { productId } = req.body;

  const cart = await Cart.findOne({ user: req.user.id });

  cart.items = cart.items.filter(
    (item) => item.product.toString() !== productId
  );

  await cart.save();

  res.json(cart);
};

//updatequantity
export const updateQuantity = async (req, res) => {
  const { productId, action } = req.body;

  const cart = await Cart.findOne({ user: req.user.id });

  const item = cart.items.find(
    (item) => item.product.toString() === productId
  );

  if (action === "inc") {
    item.quantity += 1;
  } else if (action === "dec" && item.quantity > 1) {
    item.quantity -= 1;
  }

  await cart.save();

  res.json(cart);
};