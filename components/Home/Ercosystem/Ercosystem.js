// Iconos

import { iconCheck, phoneSVG } from "../../../content/globalData";

// Components

import TitleContent from "./components/TitleContent";
import MobileErcosystem from "./components/MobileErcosystem";
import CardsErcosystem from "./components/CardsErcosystem";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { homeEcosystemContent, textsButtons } from "../../../recoil/atoms";

const ErcosystemHeader = () => {
  const { header, information } = useRecoilValue(homeEcosystemContent);
  const buttons = useRecoilValue(textsButtons);

  return (
    <section>
      {header && <TitleContent headerData={header} />}
      {information && (
        <>
          <MobileErcosystem
            contentData={information}
            icon={iconCheck}
            textButton={buttons[4]}
          />
          <CardsErcosystem
            contentData={information}
            icon={iconCheck}
            phone={phoneSVG}
            textButton={buttons[4]}
          />
        </>
      )}
    </section>
  );
};

export default ErcosystemHeader;
