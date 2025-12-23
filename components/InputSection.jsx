import React from "react";

const InputSection = ({ videoLink, setVideoLink, onGetHashtags }) => {
  const isDisabled = !videoLink.trim();

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter full YouTube URL"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
      />
      <button
        onClick={onGetHashtags}
        disabled={isDisabled}
        className={isDisabled ? "disabled-button" : "active-button"}
      >
        Get Hashtags
      </button>
    </div>
  );
};

export default InputSection;
