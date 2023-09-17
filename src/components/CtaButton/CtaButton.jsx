import React from "react";
import { Link } from "react-router-dom";
import "./CtaButton.scss";

const CtaButton = ({ type, text }) => {
  return (
    <Link
      to={"/"}
      className={`button ${type === "primary" ? "primary-btn" : ""} ${
        type === "secondary" ? "secondary-btn" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default CtaButton;
