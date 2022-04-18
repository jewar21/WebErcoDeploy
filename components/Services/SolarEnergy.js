// components

import Container from "../../components/Navigation/Container";
import ServicesCover from "../../components/PartialComponents/ServicesCover/ServicesCover";
import Installation from "./components/installation";
import AccordionGridComponent from "../../components/PartialComponents/AccordionGridComponent";
import EcosystemBanner from "../../components/PartialComponents/EcosystemBanner/EcosystemBanner";
import StepsSolarEnergy from "./components/StepsSolarEnergy";
import PaymentMethods from "./components/PaymentMethods";

const SolarEnergy = ({
  dataCover,
  dataInstallation,
  cardsData,
  stepsData,
  paymentMethods,
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
      <StepsSolarEnergy dataSteps={stepsData} />
      <PaymentMethods dataPayment={paymentMethods} />
    </Container>
  );
};

export default SolarEnergy;
