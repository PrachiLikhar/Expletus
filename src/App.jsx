import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/SignUp";
import Signin from "./components/SignIn";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FeaturesSection from "./components/FeaturesSection";
import CardsSection from "./components/CardsSection";

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
              <FeaturesSection />
              <CardsSection />
              <Footer />
            </>
          }
        />

        {/* Auth Pages */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
