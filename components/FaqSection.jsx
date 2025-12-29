import React, { useState } from "react";

const faqData = [
  {
    question: "How do I extract hashtags from a YouTube video?",
    answer: "Simply paste the YouTube video link and click 'Get Hashtags'.",
  },
  {
    question: "Can I copy all hashtags at once?",
    answer: "Yes, use the 'Copy All Hashtags' button below the video info.",
  },
  {
    question: "Is this tool free?",
    answer: "Absolutely, it’s completely free to use.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, i) => (
        <div
          className={`faq-item ${activeIndex === i ? "active" : ""}`}
          key={i}
          onClick={() => toggle(i)}
        >
          <div className="faq-question">
            {item.question}
            <span>{activeIndex === i ? "-" : "+"}</span>
          </div>
          <div className="faq-answer">{item.answer}</div>
        </div>
      ))}
    </section>
  );
};

export default FaqSection;
