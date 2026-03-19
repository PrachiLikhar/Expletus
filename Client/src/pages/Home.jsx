import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Features from "../components/Feature";
import FlashSale from "../components/FlashSale";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <FlashSale />
      <Banner />
      <Trending />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
