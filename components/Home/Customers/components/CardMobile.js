import React from "react";
import Image from "next/image";

import PropTypes from "prop-types";

const CardMobile = ({ photo, brand, content }) => {
  return (
    <div className="swiperMobileContent">
      <div className="swiperMobileContainer">
        <p className="swiperText">{content.testimonial}</p>
        <div className="swiperClientInfo">
          <div className="swiperClientImgR">
            <div className="swiperClientImgA">
              <Image src={photo} alt="image" layout="fill" objectFit="fill" />
            </div>
          </div>
          <div className="swiperClientName">
            <h3>{content.name}</h3>
            <p>{content.position}</p>
          </div>
        </div>
        <div className="swiperBrandR">
          <div className="swiperBrandA">
            <Image src={brand} alt="image" layout="fill" objectFit="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

CardMobile.propTypes = {
  photo: PropTypes.object.isRequired,
  brand: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
};

export default CardMobile;
