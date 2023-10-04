import React from "react";
import "./Navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const servicesSection = document.getElementById("services");
      const contactSection = document.getElementById("contact");

      const aboutThreshold = aboutSection.offsetTop - windowHeight / 2;
      const experienceThreshold =
        experienceSection.offsetTop - windowHeight / 2;
      const servicesThreshold = servicesSection.offsetTop - windowHeight / 2;
      const contactThreshold = contactSection.offsetTop - windowHeight / 2;

      if (scrollPosition < aboutThreshold) {
        setActiveNav("#");
      } else if (scrollPosition < experienceThreshold) {
        setActiveNav("#about");
      } else if (scrollPosition < servicesThreshold) {
        setActiveNav("#experience");
      } else if (scrollPosition < contactThreshold) {
        setActiveNav("#services");
      } else {
        setActiveNav("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeNav]);

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#expirience"
        onClick={() => setActiveNav("#expirience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navigation;
