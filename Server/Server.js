import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser("SECRET_KEY"));
app.use("/api/auth", authRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
 

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
