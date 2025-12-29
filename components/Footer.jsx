// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} TubeTags. All rights reserved.</p>
        <p>
          <a href="#privacy">Privacy Policy</a> | 
          <a href="#terms">Terms & Conditions</a>
        </p>
      </div>
      <div className="footer-bottom">
      Designed & Developed by Chaimaa El Bahtouri
      </div>
    </footer>
  );
};

export default Footer;
