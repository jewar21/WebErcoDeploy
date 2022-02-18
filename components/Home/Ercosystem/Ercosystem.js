import {
  ecoSystemContent,
  ecoSystemHeader,
  iconCheck
} from "../../../content/data/homeData";

import TitleContent from "./components/TitleContent";
import MobileErcosystem from "./components/MobileErcosystem";
import CardsErcosystem from "./components/CardsErcosystem";

const ErcosystemHeader = () => {
  return (
    <section>
      <TitleContent headerData={ecoSystemHeader} />
      <MobileErcosystem contentData={ecoSystemContent} icon={iconCheck} />
      <CardsErcosystem contentData={ecoSystemContent} icon={iconCheck} />
    </section>
  );
};

export default ErcosystemHeader;
