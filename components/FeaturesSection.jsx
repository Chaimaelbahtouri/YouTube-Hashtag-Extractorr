import React from "react";
import { FaHashtag, FaBolt, FaLink, FaShareAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaHashtag />,
    title: "Smart Hashtags",
    description: "Extract the best hashtags instantly.",
    color: "#ff4757",
  },
  {
    icon: <FaBolt />,
    title: "Fast Performance",
    description: "Quick analysis and hashtag generation.",
    color: "#1e90ff",
  },
  {
    icon: <FaLink />,
    title: "Simple To Use",
    description: "Just paste the link and click extract.",
    color: "#2ed573",
  },
  {
    icon: <FaShareAlt />,
    title: "Easy Sharing",
    description: "Copy or share hashtags anywhere easily.",
    color: "#ffa502",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Why Use This Tool?</h2>

      <div className="features-container">
        {features.map((feature, i) => (
          <div className="feature-card" key={i} style={{ borderTop: `4px solid ${feature.color}` }}>
            <div className="feature-icon" style={{ color: feature.color }}>
              {feature.icon}
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
