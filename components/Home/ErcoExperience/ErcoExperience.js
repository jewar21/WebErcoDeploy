import React from "react";

import {
  experienceTitle,
  experienceContent
} from "../../../content/data/homeData";

// components
import AccordionGridComponent from "../../PartialComponents/AccordionGridComponent";

const ErcoExperience = ({ isMobile }) => {
  return (
    <AccordionGridComponent
      isMobile={isMobile}
      headContent={experienceTitle}
      bodyContent={experienceContent}
    />
  );
};

export default ErcoExperience;
