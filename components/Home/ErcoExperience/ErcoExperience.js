import React from "react";

import { experienceContent } from "../../../content/data/homeData";

// components
import AccordionGridComponent from "../../PartialComponents/AccordionGridComponent";

const ErcoExperience = () => {
  return (
    <section>
      <AccordionGridComponent data={experienceContent} isImage={true} />;
    </section>
  );
};

export default ErcoExperience;
