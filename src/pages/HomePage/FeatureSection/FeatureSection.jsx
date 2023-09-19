import React from "react";
import { ReactComponent as IconCleanCode } from "../../../assets/svg/IconCleanCode.svg";
import { ReactComponent as IconData } from "../../../assets/svg/IconData.svg";
import { ReactComponent as IconSecure } from "../../../assets/svg/IconSecure.svg";
import { ReactComponent as IconSupport } from "../../../assets/svg/IconSupport.svg";
import "./FeatureSection.scss";
import FeatureCard from "./FeatureCard/FeatureCard";

const FeatureSection = () => {
  const FeatureData = [
    {
      FeatureIcon: <IconCleanCode />,
      FeatureTitle: "Clean Code",
      FeatureDesc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
    },
    {
      FeatureIcon: <IconData />,
      FeatureTitle: "Data Analytic",
      FeatureDesc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
    },
    {
      FeatureIcon: <IconSecure />,
      FeatureTitle: "Clean Code",
      FeatureDesc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
    },
    {
      FeatureIcon: <IconSupport />,
      FeatureTitle: "24/7 Support",
      FeatureDesc: "Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.",
    },
  ];
  return (
    <div className="feature-section container">
      <h2 className="section-title" data-aos="fade-up">
        We Provides best Feature for customer
      </h2>

      <div
        className="feature-card-wrapper"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {FeatureData.map((feature, index) => (
          <FeatureCard
            key={index}
            FeatureIcon={feature.FeatureIcon}
            FeatureTitle={feature.FeatureTitle}
            FeatureDesc={feature.FeatureDesc}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
