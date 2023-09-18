import React from "react";

import { ReactComponent as IconArrowBtn } from "../../../../assets/svg/IconArrowBtn.svg";
import "./FeatureCard.scss";
import { Link } from "react-router-dom";

const FeatureCard = ({
  FeatureIcon,
  FeatureTitle,
  FeatureDesc,
  FeatureCta,
}) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{FeatureIcon}</div>
      <div className="feature-content">
        <h3 className="feature-title">{FeatureTitle}</h3>
        <p className="feature-desc">{FeatureDesc}</p>
        <Link to="/" className="feature-cta">
          <IconArrowBtn />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
