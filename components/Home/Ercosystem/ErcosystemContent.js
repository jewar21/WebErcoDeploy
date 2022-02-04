// import { useEffect } from "react";

import CardsErcosystem from "./components/CardsErcosystem";
import MobileErcosystem from "./components/MobileErcosystem";

const ErcosystemContent = ({ isMobile, headerData, contentData }) => {
  return (
    <>
      {isMobile ? (
        <MobileErcosystem />
      ) : (
        <CardsErcosystem
          headerData={headerData}
          contentData={contentData}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export default ErcosystemContent;
