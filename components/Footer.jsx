"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>
          &copy; {new Date().getFullYear()} YouTube Hashtag Extractor. All rights
          reserved.
        </p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
        <hr />
      </div>
      <div className="footer-bottom">Made by cel</div>
    </footer>
  );
};

export default Footer;
