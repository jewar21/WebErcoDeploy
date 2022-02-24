// Data

import {
  ecoSystemContent,
  ecoSystemHeader
} from "../../../content/data/homeData";

// Iconos

import { iconCheck, phoneSVG } from "../../../content/globalData";

// Components

import TitleContent from "./components/TitleContent";
import MobileErcosystem from "./components/MobileErcosystem";
import CardsErcosystem from "./components/CardsErcosystem";

const ErcosystemHeader = () => {
  return (
    <section>
      <TitleContent headerData={ecoSystemHeader} />
      <MobileErcosystem contentData={ecoSystemContent} icon={iconCheck} />
      <CardsErcosystem
        contentData={ecoSystemContent}
        icon={iconCheck}
        phone={phoneSVG}
      />
    </section>
  );
};

export default ErcosystemHeader;
