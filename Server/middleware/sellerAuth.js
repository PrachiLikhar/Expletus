import jwt from "jsonwebtoken";


export const authSeller = (req, res, next) => {
try {
const token = req.cookies?.sellerToken;
if (!token) return res.status(401).json({ message: "No token found" });


const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.sellerId = decoded.id;
next();
} catch (error) {
console.error("authSeller error:", error);
res.status(401).json({ message: "Invalid token" });
}
};












