import React from "react";
import { images } from "../../assets/images/images";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={images.Logo} alt="logo" className="logo" />
      <div className="nav-links">
        <Link to={"/"} className="link">
          Home
        </Link>
        <Link to={"/"} className="link">
          services
        </Link>
        <Link to={"/"} className="link">
          Pricing
        </Link>
        <Link to={"/"} className="link">
          Testimonials
        </Link>
        <Link to={"/"} className="link">
          Blog
        </Link>
        <Button type="primary" text="FREE TRIAL" />
      </div>
    </div>
  );
};

export default Navbar;
