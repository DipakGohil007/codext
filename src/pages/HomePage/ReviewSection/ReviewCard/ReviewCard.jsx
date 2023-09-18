import React from "react";
import "./ReviewCard.scss";

const ReviewCard = ({ UserReview, UserImage, UserName, UserDesignation }) => {
  return (
    <div className="review-card">
      <p className="user-review">{UserReview}</p>
      <div className="user-profile">
        <img src={UserImage} alt="" className="user-image" />
        <div className="user-details">
          <h4 className="user-name">{UserName}</h4>
          <p className="user-designation">{UserDesignation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
