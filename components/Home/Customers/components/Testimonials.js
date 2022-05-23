import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";

import CardMobile from "./CardMobile";

SwiperCore.use([EffectCoverflow, Navigation]);

const Testimonials = ({ testimonials }) => {
  const { cardContent } = testimonials;
  return (
    <div className="testimonialsContainer">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
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
      >
        {cardContent.map((content, i) => {
          const image = content.img.src;
          const photo = content.photo.src;
          const brand = content.companyIcon.src;

          return (
            <SwiperSlide key={i}>
              <div className="flex justify-center">
                <CardMobile photo={photo} brand={brand} content={content} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
