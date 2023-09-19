import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import PricingSection from "./PricingSection/PricingSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import NewsSection from "./NewsSection/NewsSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <BenefitsSection /> */}
      <FeatureSection />
      <PricingSection />
      <ReviewSection />
      <NewsSection />
      <Footer />
    </>
  );
};

export default Home;
