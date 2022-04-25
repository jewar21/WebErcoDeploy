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
    <div className="testimonialsContainer">
      {/* <Swiper
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
      > */}
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
      >
        {cardContent.map((e, i) => {
          const image = e.img.src;
          const photo = e.photo.src;
          const brand = e.companyIcon.src;

          return (
            <SwiperSlide key={i}>
              <div className="flex justify-center">
                <div className="swiperMobileContent">
                  <div className="swiperMobileContainer">
                    <p className="swiperText">{e.testimonial}</p>
                    <div className="swiperClientInfo">
                      <div className="swiperClientImgR">
                        <div className="swiperClientImgA">
                          <Image
                            src={photo}
                            alt="image"
                            layout="fill"
                            objectFit="fill"
                          />
                        </div>
                      </div>
                      <div className="swiperClientName">
                        <h3>{e.name}</h3>
                        <p>{e.position}</p>
                      </div>
                    </div>
                    <div className="swiperBrandR">
                      <div className="swiperBrandA">
                        <Image
                          src={brand}
                          alt="image"
                          layout="fill"
                          objectFit="fill"
                        />
                      </div>
                    </div>
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
