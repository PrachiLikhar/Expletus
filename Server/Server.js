// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// import authRoutes from "./routes/authRoutes.js";
// import sellerRoutes from "./routes/sellerRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import adminRoutes from "./routes/adminRoutes.js";

// import fs from "fs";
// import path from "path";




// dotenv.config();
// connectDB();

// const app = express();

// // ====== PARSERS ======
// // Increase payload limits for large requests (like Base64 images)
// // app.use(express.json({ limit: "50mb" }));
// // app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(cookieParser());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// // ====== ENSURE UPLOADS FOLDER ======
// const uploadFolder = path.join(process.cwd(), "uploads");
// if (!fs.existsSync(uploadFolder)) {
//   fs.mkdirSync(uploadFolder);
// }

// // ====== CORS ======
// app.use(
//   cors({
//     origin: "http://localhost:5173", // frontend origin
//     credentials: true,              // allow cookies
//   })
// );

// // ====== ROUTES ======
// // Auth routes
// app.use("/api/auth", authRoutes);

// // Seller routes
// app.use("/api/seller", sellerRoutes);

// // Product routes
// app.use("/api", productRoutes);

// //admin routes
// app.use("/api/admin", adminRoutes);

// // ====== START SERVER ======
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
//===========new one=============
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import fs from "fs";


import authRoutes from "./routes/authRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";



dotenv.config();
connectDB();


const app = express();


// ===== Parsers =====
app.use(cookieParser());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));



app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ===== CORS =====
app.use(
cors({
origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
credentials: true,
})
);


// ===== Routes =====
app.use("/api/auth", authRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/cart", cartRoutes);



// ===== Start =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));