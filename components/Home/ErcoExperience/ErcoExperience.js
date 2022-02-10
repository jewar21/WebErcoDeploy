import React from "react";

import {
  experienceTitle,
  experienceContent
} from "../../../content/data/homeData";

// components
import AccordionComponent from "../../PartialComponents/AccordionComponent";
import GridComponent from "../../PartialComponents/GridComponent";

const ErcoExperience = ({ isMobile }) => {
  return (
    <div>
      {isMobile ? (
        <AccordionComponent />
      ) : (
        <GridComponent headContent={experienceTitle} bodyContent={experienceContent} />
      )}
    </div>
  );
};

export default ErcoExperience;
