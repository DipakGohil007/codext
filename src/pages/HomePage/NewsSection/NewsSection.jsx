import React from "react";
import "./NewsSection.scss";
import NewsCard from "./NewsCard/NewsCard";
import { images } from "../../../assets/images/images";

const NewsSection = () => {
  const newsData = [
    {
      NewsImg: images.News1,
      NewsDept: "Our Creative Team",
      NewsDate: "17 June, 2021",
      NewsAuthor: "by Stive Smithi",
      NewsTitle: "Running remote offsites and onbordings",
      NewsDesc:
        "Explore the innovative strategies employed by Our Creative Team in running remote offsites and onboarding processes. Discover how we adapt and thrive in the evolving landscape of remote work.",
    },
    {
      NewsImg: images.News2,
      NewsDept: "Create presentations",
      NewsDate: "17 June, 2021",
      NewsAuthor: "by Thomas lews",
      NewsTitle: "A new look & new ways to collaborate",
      NewsDesc:
        "Discover the latest updates in presentation design and collaboration methods. Dive into the innovative features that promise a fresh perspective and enhanced teamwork",
    },
  ];

  return (
    <div className="news-section container">
      <h2 className="section-title">Lastest insights news</h2>
      <div className="news-wrapper">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            NewsImg={news.NewsImg}
            NewsDept={news.NewsDept}
            NewsDate={news.NewsDate}
            NewsAuthor={news.NewsAuthor}
            NewsTitle={news.NewsTitle}
            NewsDesc={news.NewsDesc}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
