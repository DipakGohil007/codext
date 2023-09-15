import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ type, text }) => {
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

export default Button;
