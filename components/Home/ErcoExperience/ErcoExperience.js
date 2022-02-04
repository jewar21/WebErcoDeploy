import React from "react";

// components
import AccordionComponent from "../../PartialComponents/AccordionComponent";
import GridComponent from "../../PartialComponents/GridComponent";

const ErcoExperience = ({ isMobile }) => {
  return <div>{isMobile ? <AccordionComponent /> : <GridComponent />}</div>;
};

export default ErcoExperience;
