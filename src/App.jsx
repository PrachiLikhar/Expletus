import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/SignUp";
import Signin from "./components/SignIn";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import CardsSection from "./components/CardsSection";
import ProductAdmin from "./components/ProductAdmin";
import TopCategories from "./components/TopCategories";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
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
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Page */}
        <Route path="/admin" element={<ProductAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
