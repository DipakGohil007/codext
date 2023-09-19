import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard/ReviewCard";
import { images } from "../../../assets/images/images";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./ReviewSection.scss";
import "swiper/css";

const ReviewSection = () => {
  const userData = [
    {
      UserReview:
        "Wilson Bergson's review: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit eli donec elit iaculis arcu. Quis fe........",
      UserImage: images.User1,
      UserName: "Wilson Bergson",
      UserDesignation: "Marketing manager",
    },
    {
      UserReview:
        "Zaire Aminoff's review: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit eli donec elit iaculis arcu. Quis fe........",
      UserImage: images.User2,
      UserName: "Zaire Aminoff",
      UserDesignation: "Marketing manager",
    },
    {
      UserReview:
        "Ryan Press's review: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit eli donec elit iaculis arcu. Quis fe........",
      UserImage: images.User3,
      UserName: "Ryan Press",
      UserDesignation: "Marketing manager",
    },
    {
      UserReview:
        "John Doe's review: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit eli donec elit iaculis arcu. Quis fe........",
      UserImage: images.User1,
      UserName: "John Doe",
      UserDesignation: "Marketing manager",
    },
    {
      UserReview:
        "Jane Smith's review: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit eli donec elit iaculis arcu. Quis fe........",
      UserImage: images.User2,
      UserName: "Jane Smith",
      UserDesignation: "Marketing manager",
    },
    {
      UserReview:
        "Emily Johnson's review: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit eli donec elit iaculis arcu. Quis fe........",
      UserImage: images.User3,
      UserName: "Emily Johnson",
      UserDesignation: "Marketing manager",
    },
  ];

  return (
    <div className="review-section container">
      <h2 className="section-title" data-aos="fade-up">
        Let's see our User's Review
      </h2>
      <p className="section-description" data-aos="fade-up">
        Gain valuable perspectives on the quality and impact of our services
        through their honest reviews.
      </p>

      <div className="swiper-wrapper" data-aos="fade-up" data-aos-delay="400">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {userData.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                UserReview={review.UserReview}
                UserImage={review.UserImage}
                UserName={review.UserName}
                UserDesignation={review.UserDesignation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;
