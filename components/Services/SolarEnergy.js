// components

import Container from "../../components/Navigation/Container";
import ServicesCover from "../../components/PartialComponents/ServicesCover/ServicesCover";
import Installation from "./components/Installation";
import AccordionGridComponent from "../../components/PartialComponents/AccordionGridComponent";
import EcosystemBanner from "../../components/PartialComponents/EcosystemBanner/EcosystemBanner";
import PaymentMethods from "../PartialComponents/PaymentMethods/PaymentMethods";
import Steps from "../PartialComponents/StepsComponent/Steps";

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
      <ServicesCover dataCover={dataCover} isActiveQuoteButton={true} />
      <Installation dataInstallation={dataInstallation} cardsData={cardsData} />
      <AccordionGridComponent data={neuPlus} isColor={true} />
      <AccordionGridComponent data={operationAndMaintenance} />
      <EcosystemBanner />
      <Steps dataSteps={stepsData} />
      <PaymentMethods colorPrimary={false} />
    </Container>
  );
};

export default SolarEnergy;
