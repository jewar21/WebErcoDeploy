import React from "react";
import Image from "next/image";

import PropTypes from "prop-types";

const CardMobile = ({ content }) => {
  const { testimonial, photo, name, position, companyIcon, altCompany } =
    content;

  return (
    <div className="swiperMobileContent">
      <div className="swiperMobileContainer">
        <p className="swiperText">{testimonial}</p>
        <div className="swiperClientInfo">
          <div className="swiperClientImgR">
            <div className="swiperClientImgA">
              <Image src={photo} alt={name} layout="fill" objectFit="fill" />
            </div>
          </div>
          <div className="swiperClientName">
            <h3>{name}</h3>
            <p>{position}</p>
          </div>
        </div>
        <div className="swiperBrandR">
          <div className="swiperBrandA">
            <Image
              src={companyIcon}
              alt={altCompany}
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CardMobile.propTypes = { content: PropTypes.object.isRequired };

export default CardMobile;
