import React from "react";

// components
import AccordionGridComponent from "../../PartialComponents/AccordionGridComponent";

import { iconsErcoExperience } from "../../../content/globalData";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { homeExpContent } from "../../../recoil/atoms";

const ErcoExperience = () => {
  const expContent = useRecoilValue(homeExpContent);

  return (
    <section>
      {expContent && (
        <AccordionGridComponent
          data={expContent}
          icons={iconsErcoExperience}
          isImage={true}
          isNeu={false}
        />
      )}
    </section>
  );
};

export default ErcoExperience;
