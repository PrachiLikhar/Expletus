import jwt from "jsonwebtoken";

export const sellerAuth = (req, res, next) => {
  try {
    const token = req.cookies.sellerToken;

    if (!token)
      return res.status(401).json({ message: "Unauthorized - Login required" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.sellerId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired cookie" });
  }
};
