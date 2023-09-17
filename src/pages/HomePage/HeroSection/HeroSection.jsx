import React from "react";
import "./HeroSection.scss";
import Button from "../../../components/CtaButton/CtaButton";
import { images } from "../../../assets/images/images";

const HeroSection = () => {
  return (
    <div className="hero-section container-fluid">
      <div className=" hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">Codext one of the best system in SAAS.</h1>
          <p className="hero-description">
            A premier SAAS platform delivering excellence. Streamline your
            business with cutting-edge solutions.
          </p>
          <Button type="primary" text="Try A Live Demo" />
        </div>
        <div className="hero-mockup">
          <img src={images.HeroMockup} alt="hero mockup" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
