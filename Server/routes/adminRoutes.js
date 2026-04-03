import express from "express";
import { getDashboardStats } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/stats", protect, isAdmin, getDashboardStats);

export default router;