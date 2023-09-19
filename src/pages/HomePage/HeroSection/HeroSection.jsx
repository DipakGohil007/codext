import React from "react";
import "./HeroSection.scss";
import Button from "../../../components/CtaButton/CtaButton";
import { images } from "../../../assets/images/images";

const HeroSection = () => {
  return (
    <div className="hero-section container-fluid">
      <div className=" hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="600">
            Codext one of the best system in SAAS.
          </h1>
          <p
            className="hero-description"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            A premier SAAS platform delivering excellence. Streamline your
            business with cutting-edge solutions.
          </p>
          <div
            className="hero-btn"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-offset="0"
          >
            <Button type="primary" text="Try A Live Demo" />
          </div>
        </div>
        <div className="hero-mockup" data-aos="fade-up" data-aos-delay="500">
          <img src={images.HeroMockup} alt="hero mockup" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
