import React, { useState } from "react";
import { FaShareAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const ShareSection = ({ videoLink }) => {
  const [copied, setCopied] = useState(false);

  const shareText = encodeURIComponent(
    `Check this video and extract hashtags: ${videoLink || "https://you-tube-hashtag-extractorr-jvzr.vercel.app/"}`
  );

  const copyWebsite = () => {
    const linkToCopy = videoLink || "https://you-tube-hashtag-extractorr-jvzr.vercel.app/";

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(linkToCopy)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500); // يرجع للزر الأصلي بعد 1.5 ثانية
        })
        .catch(() => setCopied(false));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = linkToCopy;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {
        setCopied(false);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="share-section-container">
      <button
        className="share-main-button"
        onClick={copyWebsite}
        style={{ background: copied ? "#ff4d4d" : "#1877f2" }}
      >
        <FaShareAlt style={{ marginRight: "8px" }} />
        {copied ? "Copied!" : "Share Website"}
      </button>

      <p className="share-subtitle">
        Help others discover this YouTube hashtag extractor
      </p>

      <p className="share-or">Or share on</p>

      <div className="share-buttons">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoLink || "https://you-tube-hashtag-extractorr-jvzr.vercel.app/")}`}
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
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(videoLink || "https://you-tube-hashtag-extractorr-jvzr.vercel.app/")}`}
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

      <p className="share-bottom-message">
        Share with friends and help them <br />
        extract hashtags easily!
      </p>
    </div>
  );
};

export default ShareSection;
