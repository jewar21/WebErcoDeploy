// Data

import { ecoSystemContent } from "../../../content/data/homeData";

// Iconos

import { iconCheck, phoneSVG } from "../../../content/globalData";

// Components

import TitleContent from "./components/TitleContent";
import MobileErcosystem from "./components/MobileErcosystem";
import CardsErcosystem from "./components/CardsErcosystem";

const ErcosystemHeader = () => {
  const dataInformation = ecoSystemContent.information;
  return (
    <section>
      <TitleContent headerData={ecoSystemContent} />
      <MobileErcosystem contentData={dataInformation} icon={iconCheck} />
      <CardsErcosystem
        contentData={dataInformation}
        icon={iconCheck}
        phone={phoneSVG}
      />
    </section>
  );
};

export default ErcosystemHeader;
