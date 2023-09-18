import React from "react";
import { ReactComponent as IconArrow2 } from "../../../../assets/svg/IconArrow2.svg";
import "./PricingCard.scss";
import CtaButton from "../../../../components/CtaButton/CtaButton";

const PricingCard = ({ PlanLevel, PlanPrice, Feature }) => {
  return (
    <div className="pricing-card">
      <div className="pricing-header">
        <p className="plan-level">{PlanLevel}</p>
        <IconArrow2 />
        <h3 className="plan-price">{PlanPrice}</h3>
      </div>
      <div className="plan-features">
        {Feature.map((feature, index) => (
          <p key={index} className="feature">
            {feature}
          </p>
        ))}
      </div>
      <CtaButton type="primary" text="TRY THIS PACKAGE" />
    </div>
  );
};

export default PricingCard;
