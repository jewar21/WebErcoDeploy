// import { useEffect } from "react";

import CardsErcosystem from "./components/CardsErcosystem";
import MobileErcosystem from "./components/MobileErcosystem";

const ErcosystemContent = ({ isMobile, headerData, contentData }) => {
  return (
    <>
      {isMobile ? (
        <MobileErcosystem />
      ) : (
        <div className="ecosystemContainer">
          <CardsErcosystem
            headerData={headerData}
            contentData={contentData}
            isMobile={isMobile}
          />
        </div>
      )}
    </>
  );
};

export default ErcosystemContent;
