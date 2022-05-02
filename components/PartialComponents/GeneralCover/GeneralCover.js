import Image from "next/image";
import PropTypes from "prop-types";

import { useRecoilValue } from "recoil";
import { typeServiceState } from "../../../recoil/atoms";

// components

import ExploreButton from "../ExploreButton";
import QuoteButton from "../QuoteButton";

const GeneralCover = ({ dataCover, isActiveQuoteButton }) => {
  const typeService = useRecoilValue(typeServiceState);
  const sectionType = dataCover.section;
  const title = dataCover.title;
  const content = dataCover.content;
  const image = dataCover.img;

  return (
    <section className="generalCoverContent">
      <div className="generalCoverImage">
        <Image
          src={image.src}
          alt="image"
          layout="fill"
          objectFit="cover"
          priority="true"
        />
      </div>
      <div className="generalCoverContainer">
        {/* <span>{typeService}</span> */}
        <span>{sectionType}</span>
        <h1>{title}</h1>
        <p>{content}</p>
        <div className="generalCoverButtons">
          {isActiveQuoteButton && (
            <QuoteButton
              buttonParameters={
                "w-12.5rem h-12 px-2 font-semibold bg-primary-500 text-darkGrey-900"
              }
              buttonText={"Cotizar sistema"}
              isIcon={true}
            />
          )}
          <ExploreButton />
        </div>
      </div>
    </section>
  );
};

GeneralCover.propTypes = { dataCover: PropTypes.object.isRequired };

export default GeneralCover;
