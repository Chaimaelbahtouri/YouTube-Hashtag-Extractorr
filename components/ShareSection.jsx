import React from "react";
import { FaShareAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const ShareSection = ({ videoLink }) => {
  const shareText = encodeURIComponent(
    `Check this video and extract hashtags: ${videoLink}`
  );

  // Copy website link
  const copyWebsite = () => {
    navigator.clipboard.writeText("https://you-tube-hashtag-extractorr-jvzr.vercel.app/"); // Replace with your website
    alert("Website link copied!");
  };

  return (
    <div className="share-section-container">
      {/* Main share button */}
      <button className="share-main-button" onClick={copyWebsite}>
        <FaShareAlt style={{ marginRight: "8px" }} />
        Share Website
      </button>

      {/* Subtitle */}
      <p className="share-subtitle">
        Help others discover this YouTube hashtag extractor
      </p>

      {/* OR separator */}
      <p className="share-or">Or share on</p>

      {/* Social buttons */}
      <div className="share-buttons">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${videoLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FaFacebookF /> Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <FaTwitter /> Twitter
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${videoLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedinIn /> LinkedIn
        </a>
        <a
          href={`https://wa.me/?text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </div>

      {/* Bottom message */}
      <p className="share-bottom-message">
        Share with friends and help them <br />
        extract hashtags easily!
      </p>
    </div>
  );
};

export default ShareSection;
