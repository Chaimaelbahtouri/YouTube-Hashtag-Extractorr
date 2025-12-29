import React from "react";

const InfoSection = () => {
  return (
    <section className="info-section" id="info">
      <h2>Why TubeTags</h2>
      <p>
        TubeTags is your ultimate YouTube hashtag extractor. With just a few clicks, 
        you can find the most relevant hashtags for any YouTube video to boost your visibility 
        and reach. This tool helps YouTube content creators optimize their videos effectively.
      </p>
      <p>
        Our platform uses advanced algorithms to analyze YouTube video metadata and trending hashtags, 
        ensuring that you get the most accurate and relevant results. TubeTags saves time and improves engagement on YouTube.
      </p>
      <img 
        src="/images/creator1.png" 
        alt="YouTube Hashtag Example" 
        style={{ width: "100%", borderRadius: "12px", margin: "20px 0" }} 
      />
      <h3>Why Use TubeTags?</h3>
      <ul>
        <li>Quick and easy extraction of YouTube video hashtags.</li>
        <li>Improve video discoverability and reach on YouTube.</li>
        <li>Save hours of manual research.</li>
        <li>Free to use and fully online.</li>
      </ul>
      <p>
        Join thousands of YouTube creators who have already boosted their audience with TubeTags.
        Start optimizing your YouTube videos today and increase your views organically!
      </p>
    </section>
  );
};

export default InfoSection;
