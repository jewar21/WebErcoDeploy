import {
  stepsSolarEnergy,
  cardsInstallation
} from "../../content/data/servicesData";

// components

import Container from "../Navigation/Container";
import GeneralCover from "../PartialComponents/GeneralCover/GeneralCover";

import EcosystemBanner from "../PartialComponents/EcosystemBanner/EcosystemBanner";
import Steps from "../PartialComponents/StepsComponent/Steps";
import PaymentMethods from "../PartialComponents/PaymentMethods/PaymentMethods";
import InstallationGeneralView from "./components/InstallationGeneralView";

const InstallationPage = ({ dataInstallation }) => {
  return (
    <Container>
      <GeneralCover dataCover={dataInstallation} isActiveQuoteButton={false} />
      <InstallationGeneralView dataCards={cardsInstallation} />
      <EcosystemBanner />
      <Steps dataSteps={stepsSolarEnergy} />
      <PaymentMethods colorPrimary={false} />
    </Container>
  );
};

export default InstallationPage;
