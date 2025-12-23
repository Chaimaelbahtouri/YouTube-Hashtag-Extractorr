import React from "react";
import { FaYoutube, FaHashtag } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Icons line */}
      <div className="navbar-icons">
        <FaYoutube style={{ color: "#FF0000" }} />
        <FaHashtag style={{ color: "#ffcc00" }} />
      </div>

      {/* Title line */}
      <h1 className="navbar-title">YouTube Hashtag Extractor</h1>
    </div>
  );
};

export default Navbar;
