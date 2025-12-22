import Seller from "../models/sellerModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Product from "../models/productModel.js"



//================== REGISTER ==================

export const registerSeller = async (req, res) => {
  try {
    const body = req.body;

    if (!body.name || !body.email || !body.mobile || !body.password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const exists = await Seller.findOne({ email: body.email });
    if (exists) return res.status(409).json({ message: "Email already registered" });

    const passwordHash = await bcrypt.hash(body.password, 10);

    const files = req.files || {};
    const docPaths = {
      aadhaarFront: files.aadhaarFront?.[0]?.path || null,
      aadhaarBack: files.aadhaarBack?.[0]?.path || null,
      panImage: files.panImage?.[0]?.path || null,
      passbookImage: files.passbookImage?.[0]?.path || null,
      profileImage: files.profileImage?.[0]?.path || null,
    };

    const seller = new Seller({
      name: body.name,
      email: body.email,
      mobile: body.mobile,
      altMobile: body.altMobile,
      dob: body.dob,
      gender: body.gender,

      address: {
        address1: body.address1,
        address2: body.address2,
        city: body.city,
        state: body.state,
        pincode: body.pincode,
      },

      bank: {
        accountName: body.accountName,
        accountNumber: body.accountNumber,
        ifsc: body.ifsc,
        bankName: body.bankName,
      },

      documents: {
        aadhaar: body.aadhaar,
        pan: body.pan,
        ...docPaths
      },

      passwordHash,
      status: "pending",
    });

    await seller.save();

    res.status(201).json({ message: "Registration submitted", sellerId: seller._id });

  } catch (err) {
    console.error("registerSeller error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


// =====================LOGIN (COOKIE + TOKEN) ===================
export const loginSeller = async (req, res) => {
  try {
    const { email, password } = req.body;

    const seller = await Seller.findOne({ email });
    if (!seller) return res.status(400).json({ message: "Seller not found" });

    const isMatch = await bcrypt.compare(password, seller.passwordHash);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Create JWT token
    const token = jwt.sign({ id: seller._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // Set cookie
    res.cookie("sellerToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    // Send token and seller info
    res.json({
      message: "Login successful",
      token, // <--- send token so frontend can use localStorage if needed
      seller: {
        id: seller._id,
        email: seller.email,
        shopName: seller.shopName || "",
      },
    });

  } catch (error) {
    console.error("loginSeller error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// ================== SELLER LOGOUT ==================
export const logoutSeller = (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      message: "Seller logged out successfully",
    });
  } catch (error) {
    console.error("logoutSeller error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ==================GET PROFILE (Success)======================


export const getSellerProfile = async (req, res) => {
  try {
    const seller = await Seller.findById(req.sellerId).select("-password");

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    res.json({
      id: seller._id,
      name: seller.name,
      email: seller.email,
    });

  } catch (error) {
    console.log("Profile error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const updateSellerProfile = async (req, res) => {
  try {
    const seller = await Seller.findById(req.seller._id);

    seller.name = req.body.name || seller.name;
    seller.email = req.body.email || seller.email;

    await seller.save();

    res.json({
      message: "Seller updated successfully",
      seller,
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating profile" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const sellerId = req.sellerId;

    const deletedProduct = await Product.findOneAndDelete({
      _id: id,
      seller: sellerId,
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Delete product error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const addProduct = async (req, res) => {
  try {
    const sellerId = req.sellerId;

    if (!sellerId) {
      return res.status(401).json({ message: "Unauthorized seller" });
    }

    const newProduct = new Product({
      name: req.body.name,
      price: Number(req.body.price),
      oldPrice: Number(req.body.oldPrice),
      stock: Number(req.body.stock),
      rating: Number(req.body.rating),
      reviews: Number(req.body.reviews),
      category: req.body.category,
      desc: req.body.desc,
      image: req.file ? `/uploads/${req.file.filename}` : "",
      seller: sellerId,
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log("Add product error:", error.message);
    res.status(400).json({ message: error.message });
  }
};

export const editProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // ✅ SAME seller check AS deleteProduct
    if (product.seller.toString() !== req.sellerId) {
      return res.status(403).json({ message: "Unauthorized seller" });
    }

    // update fields
    product.name = req.body.name;
    product.price = req.body.price;
    product.oldPrice = req.body.oldPrice;
    product.stock = req.body.stock;
    product.rating = req.body.rating;
    product.reviews = req.body.reviews;
    product.category = req.body.category;
    product.desc = req.body.desc;

    // image update (optional)
    if (req.file) {
      product.image = `/uploads/${req.file.filename}`;
    }

    await product.save();

    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.log("Edit product error:", error);
    res.status(500).json({ message: "Edit product failed" });
  }
};

//========get all selller================
export const getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find().select("-password");

    res.status(200).json({
      success: true,
      count: sellers.length,
      sellers,
    });
  } catch (error) {
    console.error("GET SELLERS ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



// 2. Approve Seller
export const approveSeller = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) {
      return res.status(404).json({ success: false, message: "Seller not found" });
    }

    seller.isApproved = true;
    await seller.save();

    res.status(200).json({ success: true, message: "Seller Approved successfully!", seller });
  } catch (error) {
    res.status(500).json({ success: false, message: "Update Failed", error: error.message });
  }
};

// 3. Toggle Ban/Unban Seller
export const toggleBanSeller = async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) {
      return res.status(404).json({ success: false, message: "Seller not found" });
    }

    seller.isBlocked = !seller.isBlocked;
    await seller.save();

    res.status(200).json({ 
      success: true, 
      message: seller.isBlocked ? "Seller Banned" : "Seller Unbanned", 
      seller 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Operation Failed", error: error.message });
  }
};



