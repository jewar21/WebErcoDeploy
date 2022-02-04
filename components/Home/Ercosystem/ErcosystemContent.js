// import { useEffect } from "react";

import CardsErcosystem from "./components/CardsErcosystem";
import MobileErcosystem from "./components/MobileErcosystem";

const ErcosystemContent = ({ isMobile, headerData, contentData, icon }) => {
  return (
    <>
      {isMobile ? (
        <MobileErcosystem />
      ) : (
        <CardsErcosystem contentData={contentData} icon={icon} />
      )}
    </>
  );
};

export default ErcosystemContent;
