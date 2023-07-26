import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        Gavrilo
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com" target="blank">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="blank">
          <FaTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Stankovic Gavrilo. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
