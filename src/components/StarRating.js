import React, { useState } from "react";

const StarRating = ({ rating, setRating }) => {
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
