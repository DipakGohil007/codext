import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import BenefitsSection from "./BenefitsSection/BenefitsSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
    </>
  );
};

export default Home;
