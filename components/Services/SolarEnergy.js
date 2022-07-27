// components

import Container from "../../components/Navigation/Container";
import GeneralCover from "../PartialComponents/GeneralCover/GeneralCover";
import Installation from "./components/Installation";
import AccordionGridComponent from "../PartialComponents/AccordionGridComponent";
import EcosystemBanner from "../../components/PartialComponents/EcosystemBanner/EcosystemBanner";
import PaymentMethods from "../PartialComponents/PaymentMethods/PaymentMethods";
import Steps from "../PartialComponents/StepsComponent/Steps";

/* Importing the iconsErcoExperience from the globalData.js file. */
import { iconsErcoExperience } from "../../content/globalData";

const SolarEnergy = ({
  dataCover,
  dataInstallation,
  cardsData,
  stepsData,
  neuPlus,
  operationAndMaintenance
}) => {
  return (
    <Container>
      <GeneralCover
        dataCover={dataCover}
        isActiveQuoteButton={true}
        isActiveExploreButton={true}
      />
      <Installation dataInstallation={dataInstallation} cardsData={cardsData} />
      <AccordionGridComponent
        data={neuPlus}
        icons={iconsErcoExperience}
        isImage={false}
        isNeu={true}
      />
      <AccordionGridComponent data={operationAndMaintenance} />
      <EcosystemBanner />
      <Steps dataSteps={stepsData} />
      <PaymentMethods colorPrimary={false} />
    </Container>
  );
};

export default SolarEnergy;
