import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <hr />
        <p>
          &copy; {new Date().getFullYear()} YouTube Hashtag Extractor. All rights reserved.
        </p>
      </div>
      <div className="footer-bottom">
        Developed by Chaimaelbahtouri
      </div>
    </footer>
  );
};

export default Footer;
