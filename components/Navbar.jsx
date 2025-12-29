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
      <h1 className="logo">
        <FaYoutube className="logo-icon" />
        TubeTags
      </h1>

      <ul className="nav-links">
        <li onClick={() => scrollToSection("features")}>Features</li>
        <li onClick={() => scrollToSection("faq")}>FAQ</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;