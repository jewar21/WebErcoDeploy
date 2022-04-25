// data

import {
  fiveStepsM,
  electricMobilityData
} from "../../../content/data/servicesData";

// components

import Container from "../../../components/Navigation/Container";
import ServicesCover from "../../../components/PartialComponents/ServicesCover/ServicesCover";
import MobilityComponent from "../../../components/PartialComponents/MobilityComponent/MobilityComponent";
import Steps from "../../../components/PartialComponents/StepsComponent/Steps";
import EcosystemBanner from "../../../components/PartialComponents/EcosystemBanner/EcosystemBanner";

const electricMobility = () => {
  const dataCover = electricMobilityData.bannerCompany;
  return (
    <Container>
      <ServicesCover dataCover={dataCover} isActiveQuoteButton={true} />
      <MobilityComponent dataMobility={electricMobilityData} />
      <Steps dataSteps={fiveStepsM} />
      <EcosystemBanner />
    </Container>
  );
};

export default electricMobility;
