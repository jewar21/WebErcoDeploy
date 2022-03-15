import React from "react";

import { experienceContent } from "../../../content/data/homeData";

// components
import AccordionGridComponent from "../../PartialComponents/AccordionGridComponent";

const ErcoExperience = () => {
  return <AccordionGridComponent data={experienceContent} isImage={true} />;
};

export default ErcoExperience;
