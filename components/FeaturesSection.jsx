import React from "react";
import { FaBolt, FaSearch, FaCopy, FaChartLine } from "react-icons/fa";

const features = [
  { icon: <FaBolt />, title: "Fast Extraction", desc: "Get hashtags in seconds." },
  { icon: <FaSearch />, title: "Accurate", desc: "Find the most relevant hashtags." },
  { icon: <FaCopy />, title: "Copy Easily", desc: "Copy individual or all hashtags." },
  { icon: <FaChartLine />, title: "Analytics Ready", desc: "Optimize your reach with hashtags." },
];

const FeaturesSection = () => (
  <section className="features-section" id="features">
    <h2 className="features-title">Features</h2>
    <div className="features-container">
      {features.map((f, i) => (
        <div className="feature-card" key={i}>
          <div className="feature-icon">{f.icon}</div>
          <div className="feature-title">{f.title}</div>
          <div className="feature-description">{f.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
