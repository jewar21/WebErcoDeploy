import React from "react";

import {
  ecoSystemContent,
  ecoSystemHeader
} from "../../../content/data/homeData";

import ErcosystemContent from "./ErcosystemContent";
import TitleContent from "./components/TitleContent";

const ErcosystemHeader = ({ isMobile }) => {
  return (
    <div>
      <TitleContent headerData={ecoSystemHeader} />
      <ErcosystemContent isMobile={isMobile} contentData={ecoSystemContent} />
    </div>
  );
};

export default ErcosystemHeader;
