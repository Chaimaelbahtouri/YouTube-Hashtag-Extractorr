import React from "react";

const reviews = [
  {
    name: "Ali",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    comment: "Great tool! Saved me so much time finding hashtags.",
    stars: 5,
  },
  {
    name: "Sara",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    comment: "Simple and effective. Love the UI.",
    stars: 4,
  },
  {
    name: "Youssef",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    comment: "Very accurate hashtag extractor.",
    stars: 5,
  },
  {
    name: "Amal",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    comment: "Perfect for YouTube videos!",
    stars: 5,
  },
  {
    name: "Mohamed",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    comment: "Fast and easy. The copy button is super useful 🔥",
    stars: 5,
  },
  {
    name: "Laila",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    comment: "I recommended it to all my creator friends!",
    stars: 4,
  },
  {
    name: "Karim",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    comment: "Great support! Keep improving the tool.",
    stars: 5,
  },
  {
    name: "Nadia",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    comment: "A must-have for content creators 😍",
    stars: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <h2>What Users Say</h2>
      {reviews.map((review, i) => (
        <div className="review-card" key={i}>
          <img src={review.avatar} alt={review.name} />
          <div className="review-content">
            <div className="review-name">{review.name}</div>
            <div className="review-stars">{"★".repeat(review.stars)}</div>
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ReviewsSection;
