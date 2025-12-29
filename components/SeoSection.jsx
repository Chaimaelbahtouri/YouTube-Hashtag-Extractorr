import React from "react";

const SeoSection = () => {
  return (
    <section className="seo-section" id="seo">
      <h2>SEO & Hashtag Optimization Tips</h2>
      <p>
        Hashtags are one of the key tools to improve your content's reach. TubeTags provides 
        suggestions based on trending topics and video metadata, allowing your content to 
        appear in relevant searches.
      </p>
      <img 
        src="/images/creator2.jpg" 
        alt="SEO Tips" 
        style={{ width: "100%", borderRadius: "12px", margin: "20px 0" }} 
      />
      <h3>Best Practices for Hashtags:</h3>
      <ul>
        <li>Use 5–15 relevant hashtags per video.</li>
        <li>Include trending hashtags related to your niche.</li>
        <li>Mix broad and specific hashtags for maximum reach.</li>
        <li>Analyze competitors to find effective tags.</li>
        <li>Update hashtags regularly according to trends.</li>
      </ul>
      <p>
        Following these practices will help your videos get more views, engagement, 
        and higher ranking in search results. TubeTags makes it simple to apply these tips 
        in seconds, giving you a competitive advantage.
      </p>
    </section>
  );
};

export default SeoSection;
