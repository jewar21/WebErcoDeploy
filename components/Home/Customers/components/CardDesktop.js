import React from "react";
import Image from "next/image";

import PropTypes from "prop-types";

const CardDesktop = ({ content }) => {
  const { testimonial, img, photo, name, position, companyIcon, altCompany } =
    content;
  return (
    <div className="swiperDesktopContent">
      <div className="swiperDesktopCard">
        <div className="flex w-full h-full">
          <div className="sdImg">
            <div className="sdImgA">
              <Image
                src={img}
                alt={altCompany}
                layout="fill"
                objectFit="fill"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full h-full p-4.5rem">
            <div className="">
              <div className="swiperClientInfo">
                <div className="swiperClientImgR">
                  <div className="swiperClientImgA">
                    <Image
                      src={photo}
                      alt={name}
                      layout="fill"
                      objectFit="fill"
                    />
                  </div>
                </div>
                <div className="swiperClientName">
                  <h3>{name}</h3>
                  <p>{position}</p>
                </div>
              </div>
              <p className="swiperText">{testimonial}</p>
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
        </div>
      </div>
    </div>
  );
};

CardDesktop.propTypes = { content: PropTypes.object.isRequired };

export default CardDesktop;
