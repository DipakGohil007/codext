import React, { useEffect, useRef, useState } from "react";
import { images } from "../../assets/images/images";
import { Link } from "react-router-dom";
import CtaButton from "../CtaButton/CtaButton";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("hamburger");
    setHamburgerActive(!hamburgerActive);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    const body = document.body;
    hamburgerActive
      ? body.classList.add("no-scroll")
      : body.classList.remove("no-scroll");
  }, [hamburgerActive]);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`} ref={navRef}>
      <Link to="/">
        <img src={images.Logo} alt="logo" className="logo" />
      </Link>
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
      <button className="hamburger-menu-btn" onClick={showNavbar}>
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export default Navbar;
