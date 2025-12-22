import express from "express";
import { upload  } from "../middleware/upload.js";


import {
  registerSeller,
  loginSeller,
  logoutSeller,
  getSellerProfile,
  updateSellerProfile,
  deleteProduct,editProduct,getAllSellers,approveSeller,toggleBanSeller
} from "../controllers/sellerController.js";

import {
  addProduct,
  getSellerProducts
} from "../controllers/productController.js";

import { authSeller } from "../middleware/sellerAuth.js";


const router = express.Router();

// REGISTER
router.post(
  "/register",
  upload.fields([
    { name: "aadhaarFront", maxCount: 1 },
    { name: "aadhaarBack", maxCount: 1 },
    { name: "panImage", maxCount: 1 },
    { name: "passbookImage", maxCount: 1 },
    { name: "profileImage", maxCount: 1 },
  ]),
  registerSeller
);

// LOGIN
router.post("/login", loginSeller);
router.post("/logout", logoutSeller);

// PROTECTED
router.get("/me", authSeller, getSellerProfile);
router.put("/update", authSeller, updateSellerProfile);
router.delete("/delete-product/:id", authSeller, deleteProduct);

// PRODUCTS
router.get("/my-products", authSeller, getSellerProducts);

router.post("/add-product", authSeller, upload.single("image"), addProduct);
router.post(
  "/edit-product/:id",
  authSeller,
  upload.single("image"),
  editProduct
);


router.get("/all", getAllSellers);

router.put("/approve/:id", approveSeller);
router.put("/ban/:id", toggleBanSeller);


export default router;
