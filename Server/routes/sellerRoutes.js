import express from "express";
import { registerSeller, loginSeller,logoutSeller } from "../controllers/sellerController.js";

const router = express.Router();

router.post("/register", registerSeller);
router.post("/login", loginSeller);
router.post("/logout", logoutSeller);  

export default router;
