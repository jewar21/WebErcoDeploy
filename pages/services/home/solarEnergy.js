import {
  homeConverInfo,
  homeInstallation,
  neuPlus,
  operationAndMaintenance
} from "../../../content/data/servicesData";

// components

import Container from "../../../components/Navigation/Container";
import ServicesCover from "../../../components/PartialComponents/ServicesCover/ServicesCover";
import EcosystemBanner from "../../../components/PartialComponents/EcosystemBanner/EcosystemBanner";

const solarEnergy = () => {
  return (
    <Container>
      <ServicesCover dataCover={homeConverInfo} />
      solarEnergy
      <EcosystemBanner />
    </Container>
  );
};

export default solarEnergy;
