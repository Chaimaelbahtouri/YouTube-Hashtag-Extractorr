import React from "react";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <h1>
        <FaYoutube className="youtube-icon" />
        TubeTags
      </h1>
      <ul className="navbar-links">
        <li onClick={() => scrollToSection("intro")}>Intro</li>
        <li onClick={() => scrollToSection("input")}>Extractor</li>
        <li onClick={() => scrollToSection("features")}>Features</li>
        <li onClick={() => scrollToSection("faq")}>FAQ</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
