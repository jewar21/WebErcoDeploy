import React from "react";

import {
  ecoSystemContent,
  ecoSystemHeader,
  iconCheck
} from "../../../content/data/homeData";

import ErcosystemContent from "./ErcosystemContent";
import TitleContent from "./components/TitleContent";

const ErcosystemHeader = ({ isMobile }) => {
  return (
    <div className="scroller">
      <TitleContent headerData={ecoSystemHeader} />
      <ErcosystemContent
        isMobile={isMobile}
        contentData={ecoSystemContent}
        icon={iconCheck}
      />
    </div>
  );
};

export default ErcosystemHeader;
