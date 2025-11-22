const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { JWT_SECRET } = require("../config");

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.token;   // 🔥 COOKIE SE TOKEN

    if (!token) return res.status(401).json({ msg: "No token" });

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ msg: "User not found" });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Auth failed" });
  }
};
