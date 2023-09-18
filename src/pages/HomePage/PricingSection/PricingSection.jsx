import React, { useState } from "react";
import "./PricingSection.scss";
import { Switch } from "antd";
import PricingCard from "./PricingCard/PricingCard";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const onChange = (checked) => {
    setIsYearly(checked);
  };

  const planData = [
    {
      PlanLevel: "Start-up",
      PlanPriceMonthly: "$10/mo",
      PlanPriceYearly: "$100/year",
      Feature: [
        "Easy Customizable",
        "Commercia license",
        "Single user license",
        "Hotline support 24/7",
      ],
    },
    {
      PlanLevel: "Classic",
      PlanPriceMonthly: "$30/mo",
      PlanPriceYearly: "$300/year",
      Feature: [
        "Easy Customizable",
        "Commercia license",
        "5 user license",
        "Hotline support 24/7",
      ],
    },
    {
      PlanLevel: "Premium",
      PlanPriceMonthly: "$49/mo",
      PlanPriceYearly: "$490/year",
      Feature: [
        "Easy Customizable",
        "Commercia license",
        "10 user license",
        "Hotline support 24/7",
      ],
    },
  ];

  return (
    <div className="pricing-section container">
      <h2 className="section-title">Choose your best pricing plan</h2>
      <div className="pricing-filter">
        <p className="type">
          Added for {isYearly ? <span>Yearly</span> : <span>Monthly</span>}
        </p>
        <Switch onChange={onChange} />
        <p className="interval">{isYearly ? "Monthly" : "Yearly"}</p>
      </div>
      <div className="plan-wrapper">
        {planData.map((plan, index) => (
          <PricingCard
            key={index}
            PlanLevel={plan.PlanLevel}
            PlanPrice={isYearly ? plan.PlanPriceYearly : plan.PlanPriceMonthly}
            Feature={plan.Feature}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
