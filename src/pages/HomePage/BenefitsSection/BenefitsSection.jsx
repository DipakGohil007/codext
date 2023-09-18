import React from "react";
import { images } from "../../../assets/images/images";
import { ReactComponent as IconArrowBlue } from "../../../assets/svg/IconArrowBlue.svg";
import { ReactComponent as IconArrowOrange } from "../../../assets/svg/IconArrowOrange.svg";
import { ReactComponent as IconArrowGreen } from "../../../assets/svg/IconArrowGreen.svg";
import "./BenefitsSection.scss";

const BenefitsSection = () => {
  return (
    <div className="benefits-section ">
      <img
        src={images.BenefitsMockup}
        alt="Benefits Mockup"
        className="benefits-mockup"
      />
      <div className="benefits-content">
        <div className="section-title">It's helpful for operating system</div>

        <div className="benefits-wrapper">
          <h2 className="benefit-title">
            <span className="arrow">
              <IconArrowOrange />
            </span>
            Ultra fast & Secure
          </h2>
          <p className="benefit-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit
            proin justo, elementum siIn morbi
          </p>

          <h2 className="benefit-title">
            <span className="arrow">
              <IconArrowGreen />
            </span>
            Allows customization
          </h2>
          <p className="benefit-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit
            proin justo, elementum siIn morbi
          </p>

          <h2 className="benefit-title">
            <span className="arrow">
              <IconArrowBlue />
            </span>
            Smart contract
          </h2>
          <p className="benefit-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit
            proin justo, elementum siIn morbi
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
