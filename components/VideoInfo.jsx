"use client";
import React from "react";
import { FaHashtag } from "react-icons/fa";

const VideoInfo = ({ title, hashtags, onCopyAll }) => {
  const copyHashtag = (tag) => {
    navigator.clipboard.writeText(tag);
    alert(`Copied: ${tag}`);
  };

  return (
    <div className="video-info">
      <h2>{title}</h2>
      <div className="hashtags">
        {hashtags.map((tag, index) => (
          <span key={index} onClick={() => copyHashtag(tag)}>
            <FaHashtag style={{ marginRight: "4px" }} />
            {tag}
          </span>
        ))}
      </div>
      {hashtags.length > 0 && (
        <button className="copy-all" onClick={onCopyAll}>
          Copy All Hashtags
        </button>
      )}
    </div>
  );
};

export default VideoInfo;
