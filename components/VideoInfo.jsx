import React, { useState } from "react";
import { FaHashtag } from "react-icons/fa";

const VideoInfo = ({ title, hashtags, onCopyAll }) => {
  const [copiedTag, setCopiedTag] = useState(null); // لتغيير زر نسخ هاشتاغ واحد
  const [copiedAll, setCopiedAll] = useState(false); // لتغيير زر نسخ الكل

  const copyText = (text, callback) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => callback(true))
        .catch(() => callback(false));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        callback(true);
      } catch {
        callback(false);
      }
      document.body.removeChild(textArea);
    }
  };

  const copyHashtag = (tag) => {
    copyText(tag, (success) => {
      if (success) {
        setCopiedTag(tag);
        setTimeout(() => setCopiedTag(null), 1500); // يعود للون الطبيعي بعد 1.5 ثانية
      }
    });
  };

  const handleCopyAll = () => {
    if (hashtags.length === 0) return;
    const allTags = hashtags.join(" ");
    copyText(allTags, (success) => {
      if (success) {
        setCopiedAll(true);
        setTimeout(() => setCopiedAll(false), 1500);
      }
    });
    if (onCopyAll) onCopyAll();
  };

  return (
    <div className="video-info">
      <h2>{title}</h2>
      <div className="hashtags">
        {hashtags.map((tag, index) => (
          <span
            key={index}
            onClick={() => copyHashtag(tag)}
            style={{
              background: copiedTag === tag ? "#ff4d4d" : "#2c2c2c",
              color: copiedTag === tag ? "#fff" : "#fff",
            }}
          >
            <FaHashtag style={{ marginRight: "4px" }} />
            {tag}
          </span>
        ))}
      </div>
      {hashtags.length > 0 && (
        <button
          className="copy-all"
          onClick={handleCopyAll}
          style={{
            background: copiedAll ? "#ff4d4d" : "#ff0000",
            color: "#fff",
          }}
        >
          {copiedAll ? "Copied!" : "Copy All Hashtags"}
        </button>
      )}
    </div>
  );
};

export default VideoInfo;
