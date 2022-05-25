import React from "react";
import Image from "next/image";

import PropTypes from "prop-types";

const CardDesktop = ({ img, photo, brand, content }) => {
  return (
    <div className="swiperDesktopContent">
      <div className="swiperDesktopCard">
        <div className="flex w-full h-full">
          <div className="sdImg">
            <div className="sdImgA">
              <Image src={img} alt="image" layout="fill" objectFit="fill" />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full h-full p-4.5rem">
            <div className="">
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
                  <h3>{content.name}</h3>
                  <p>{content.position}</p>
                </div>
              </div>
              <p className="swiperText">{content.testimonial}</p>
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
      </div>
    </div>
  );
};

CardDesktop.propTypes = {
  img: PropTypes.object.isRequired,
  photo: PropTypes.object.isRequired,
  brand: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
};

export default CardDesktop;
