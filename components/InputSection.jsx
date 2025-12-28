import React from "react";

const InputSection = ({ videoLink, setVideoLink, onGetHashtags }) => {
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter YouTube video link"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
      />
      <button
        className={videoLink ? "active-button" : "disabled-button"}
        onClick={onGetHashtags}
        disabled={!videoLink}
      >
        Get Hashtags
      </button>
    </div>
  );
};

export default InputSection;
