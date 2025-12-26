"use client";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <FaYoutube style={{ color: "#ff0000", marginRight: "8px" }} />
        YouTube Hashtag Extractor
      </h1>
    </nav>
  );
};

export default Navbar;
