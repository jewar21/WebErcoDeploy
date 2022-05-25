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

const Testimonials = ({ testimonials }) => {
  const { cardContent } = testimonials;

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
          const photo = content.photo.src;
          const brand = content.companyIcon.src;

          return (
            <SwiperSlide key={i}>
              <div className="swiperSlideContainer">
                <CardMobile photo={photo} brand={brand} content={content} />
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
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={false}
        modules={[EffectCoverflow]}
        className="testimonialSwiper"
      >
        {cardContent.map((content, i) => {
          const image = content.img.src;
          const photo = content.photo.src;
          const brand = content.companyIcon.src;

          return (
            <SwiperSlide key={i}>
              <div className="swiperSlideContainer">
                <CardDesktop
                  img={image}
                  photo={photo}
                  brand={brand}
                  content={content}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

Testimonials.propTypes = { testimonials: PropTypes.object.isRequired };

export default Testimonials;
