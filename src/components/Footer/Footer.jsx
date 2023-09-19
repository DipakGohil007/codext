import React from "react";
import { images } from "../../assets/images/images";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="footer-content">
          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Link>
              <img src={images.Logo} alt="logo" className="logo" />
            </Link>
            <p className="desc">
              Explore our services, stay updated with the latest trends, and
              join us on a journey of endless possibilities.
            </p>
            <div className="social-wrapper">
              <Link className="social-link">
                <FiTwitter />
              </Link>
              <Link className="social-link">
                <FiFacebook />
              </Link>
              <Link className="social-link">
                <FiInstagram />
              </Link>
              <Link className="social-link">
                <FiLinkedin />
              </Link>
            </div>
          </div>
          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="title">Resources</h4>
            <div className="link-wrapper">
              <Link className="footer-link">Services</Link>
              <Link className="footer-link">Pricing</Link>
              <Link className="footer-link">Testimonials</Link>
              <Link className="footer-link">Blog</Link>
            </div>
          </div>
          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="title">Usefull links</h4>
            <div className="link-wrapper">
              <Link className="footer-link">Terms of Services</Link>
              <Link className="footer-link">Privacy Policy</Link>
              <Link className="footer-link">Cookie Policy</Link>
              <Link className="footer-link">Contact us </Link>
            </div>
          </div>
          <div
            className="footer-column"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4 className="title">Newsletter</h4>
            <p className="desc">
              Sign up and receive the lastest news via email.
            </p>
            <div className="email-box">
              <input
                placeholder="Enter your email"
                className="input"
                name="email"
                type="email"
              />
              <button className="button">Send</button>
            </div>
          </div>
        </div>
        <p className="copyright">
          Copyright 2021 The Codext All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
