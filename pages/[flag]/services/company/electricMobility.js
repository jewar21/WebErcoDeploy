// data

import {
  fiveStepsM,
  electricMobilityData
} from "../../../../content/data/servicesData";

// components

import Container from "../../../../components/Navigation/Container";
import GeneralCover from "../../../../components/PartialComponents/GeneralCover/GeneralCover";
import MobilityComponent from "../../../../components/PartialComponents/MobilityComponent/MobilityComponent";
import Steps from "../../../../components/PartialComponents/StepsComponent/Steps";
import EcosystemBanner from "../../../../components/PartialComponents/EcosystemBanner/EcosystemBanner";

const electricMobility = () => {
  const dataCover = electricMobilityData.bannerCompany;
  return (
    <Container>
      <GeneralCover dataCover={dataCover} isActiveQuoteButton={true} />
      <MobilityComponent dataMobility={electricMobilityData} />
      <Steps dataSteps={fiveStepsM} />
      <EcosystemBanner />
    </Container>
  );
};

export default electricMobility;
