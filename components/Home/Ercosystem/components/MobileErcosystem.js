import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";

import QuoteButton from "../../../PartialComponents/QuoteButton";

const MobileErcosystem = ({ contentData, icon, textButton }) => {
  return (
    <div>
      {contentData.map(({ img, subtitle, items }, i) => (
        <div className="flex w-full lg:hidden" key={i}>
          <div className="mobileErcosystemImg">
            <Image src={img} alt={subtitle} layout="fill" objectFit="fill" />
          </div>
          <div className="mobileErcosystemContainer">
            <h5 className="panel-title">{subtitle}</h5>
            <div className="pt-6 pb-6">
              {items.map(({ item }, i) => (
                <div key={i} className="panel-body">
                  <div className="panel-icon">{icon}</div>
                  <p className="pl-3.5">{item}</p>
                </div>
              ))}
            </div>
            <QuoteButton
              buttonParameters={
                "w-10.5rem h-12 font-bold border-solid border-2 border-primary-500 text-darkGrey-900"
              }
              buttonText={textButton}
              isIcon={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

MobileErcosystem.propTypes = {
  contentData: PropTypes.array.isRequired,
  icon: PropTypes.object.isRequired,
  textButton: PropTypes.string.isRequired
};

export default MobileErcosystem;
