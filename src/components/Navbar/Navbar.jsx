import React, { useRef, useState } from "react";
import { images } from "../../assets/images/images";
import { Link } from "react-router-dom";
import CtaButton from "../CtaButton/CtaButton";
import { Button } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("hamburger");
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <div className="navbar" ref={navRef}>
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
        <CtaButton type="primary" text="FREE TRIAL" />
      </div>
      <Button className="hamburger-menu" onClick={showNavbar}>
        <GiHamburgerMenu />
      </Button>
    </div>
  );
};

export default Navbar;
