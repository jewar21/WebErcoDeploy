import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import { useRecoilValue } from "recoil";
import { typeServiceState } from "../../../recoil/atoms";

// components

import ExploreButton from "../ExploreButton";
import QuoteButton from "../QuoteButton";

const ServicesCover = ({ dataCover }) => {
  const typeService = useRecoilValue(typeServiceState);
  const title = dataCover.title;
  const content = dataCover.content;
  const image = dataCover.img;

  return (
    <div className="servicesCoverContent">
      <div className="servicesCoverImage">
        <Image
          src={image.src}
          alt="image"
          layout="fill"
          objectFit="cover"
          priority="true"
        />
      </div>
      <div className="servicesCoverContainer">
        <span>{typeService}</span>
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="servicesCoverButtons">
          <QuoteButton
            buttonParameters={
              "w-12.5rem h-12 px-2 font-semibold bg-primary-500 text-darkGrey-900"
            }
            buttonText={"Cotizar sistema"}
            isIcon={true}
          />
          <ExploreButton />
        </div>
      </div>
    </div>
  );
};

ServicesCover.propTypes = { dataCover: PropTypes.object.isRequired };

export default ServicesCover;
