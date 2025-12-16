import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import CardsSection from "./components/CardsSection";
import TopCategories from "./components/TopCategories";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import SellerRegister from "./components/SellerRegister";
import Signup from "./components/Signup";
import SellerEntry from "./components/SellerEntry";
import SellerLogin from "./components/SellerLogin";
import SellerDashboard from "./components/SellerDashboard";
import AdminLogin from "./components/adminlogin";
import AdminRegister from "./components/adminregister";
import EditProduct from "./components/EditProduct";
import ProductsPage from "./components/Products";
import CartPage from "./components/CartPage";
// import Dashboard from "./pages/Dashboard";

// ⭐ Add this new import
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <TopCategories />
              <FeaturesSection />
              <CardsSection />
              <Testimonials />
              <Newsletter />
              <Footer />
            </>
          }
        />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ⭐ User Dashboard Route */}
        <Route path="/profile" element={<UserDashboard />} />

        {/* Seller & Admin Routes */}
        {/* <Route path="/admin" element={<ProductAdmin />} /> */}
        <Route path="/seller" element={<SellerEntry />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Admin Routes  */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
