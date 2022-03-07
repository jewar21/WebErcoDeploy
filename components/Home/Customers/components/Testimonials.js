import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";

SwiperCore.use([EffectCoverflow, Navigation]);

const Testimonials = ({ testimonials }) => {
  const { cardContent } = testimonials;
  return (
    <div className="Testimonials-content">
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        // slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={false}
        className="mySwiper"
      >
        {cardContent.map((e, i) => {
          const image = e.img.src;
          const photo = e.photo.src;
          return (
            <SwiperSlide key={i}>
              <div className="swiper-container">
                <div className="swiper-container-img">
                  {/* <Image
                  src={image}
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="fill"
                /> */}
                </div>
                <div className="swiper-container-desc">
                  <div className="swiper-title">
                    <div className="swiper-client">
                      {/* <Image
                      src={photo}
                      alt="Picture of the representative"
                      layout="fill"
                      objectFit="fill"
                    /> */}
                    </div>
                    <div className="swiper-client-name">
                      <h3>{e.name}</h3>
                      <p>{e.position}</p>
                    </div>
                  </div>
                  <div className="swiper-text">
                    <p>{e.testimonial}</p>
                  </div>
                  <div className="swiper-logo">
                    {/* <Image
                    src={image}
                    alt="Picture of the representative"
                    layout="fill"
                    objectFit="fill"
                  /> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
