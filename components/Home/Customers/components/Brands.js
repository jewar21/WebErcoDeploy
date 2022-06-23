import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../../../../utils/handlers/handlers";

import { Autoplay } from "swiper";

const Brands = ({ companyLogos }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <div className="lg:p-5.5rem ">
      <Swiper
        slidesPerView={isMobile ? 2 : 6}
        spaceBetween={24}
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
        {companyLogos.map(({ name, logo }, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="grid grid-rows-2">
                <div className="brandsImgR">
                  <div className="brandsImgA">
                    <Image
                      alt={name}
                      src={logo}
                      layout="fill"
                      objectFit="fill"
                    />
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

export default Brands;
