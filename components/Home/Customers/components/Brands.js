import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { Autoplay } from "swiper";

const Brands = ({ companyLogos }) => {
  return (
    <div className="lg:p-5.5rem ">
      <Swiper
        // effect={"coverflow"}
        slidesPerView={6}
        spaceBetween={32}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {companyLogos.map((e, i) => {
          const image = e.logo.src;
          return (
            <SwiperSlide key={i}>
              <div className="brandsImg">
                <Image
                  src={image}
                  alt="Picture of the brand"
                  layout="fill"
                  objectFit="fill"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Brands;
