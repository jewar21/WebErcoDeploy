import React from "react";

import { experienceContent } from "../../../content/data/homeData";

// components
import AccordionGridComponent from "../../PartialComponents/AccordionGridComponent";

const ErcoExperience = ({ isMobile }) => {
  return (
    <AccordionGridComponent isMobile={isMobile} data={experienceContent} />
  );
};

export default ErcoExperience;
