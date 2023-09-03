import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            onClick={() => handleStarClick(starValue)}
            style={{ cursor: "pointer" }}
          >
            {starValue <= rating ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
