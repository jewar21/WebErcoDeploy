import React from "react";

import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";

import CardMobile from "./CardMobile";
import CardDesktop from "./CardDesktop";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

SwiperCore.use([EffectCoverflow, Navigation]);

const Testimonials = ({ cardContent }) => {
  return (
    <div className="testimonialsContainer">
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        pagination={false}
        className="testimonialSwiperMobile"
      >
        {cardContent.map((content, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="swiperSlideContainer">
                <CardMobile content={content} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={2}
        navigation={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        pagination={false}
        modules={[EffectCoverflow]}
        className="testimonialSwiper"
      >
        {cardContent.map((content, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="swiperSlideContainer">
                <CardDesktop content={content} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

Testimonials.propTypes = { cardContent: PropTypes.array.isRequired };

export default Testimonials;
