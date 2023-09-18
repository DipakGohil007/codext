import React from "react";
import CtaButton from "../../../../components/CtaButton/CtaButton";
import "./NewsCard.scss";

const NewsCard = ({
  NewsImg,
  NewsDept,
  NewsDate,
  NewsAuthor,
  NewsTitle,
  NewsDesc,
}) => {
  return (
    <div className="news-card">
      <img src={NewsImg} alt="news" className="news-img" />
      <div className="credit-line">
        <p className="department">{NewsDept}</p>
        <p className="date">{NewsDate}</p>
        <p className="author">{NewsAuthor}</p>
      </div>
      <h4 className="news-title">{NewsTitle}</h4>
      <p className="news-desc">{NewsDesc}</p>
      <CtaButton text="Continue" type="primary" />
    </div>
  );
};

export default NewsCard;
