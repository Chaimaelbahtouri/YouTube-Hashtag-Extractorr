import React from "react";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        <FaYoutube className="logo-icon" />
        Tube<span className="logo-highlight">Tags</span>
      </h1>
    </div>
  );
};

export default Navbar;
