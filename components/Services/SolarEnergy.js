import React from "react";

// data

import {
  stepsSolarEnergy,
  paymentMethods,
  neuPlus,
  operationAndMaintenance
} from "../../content/data/servicesData";

// components

import Container from "../../components/Navigation/Container";
import ServicesCover from "../../components/PartialComponents/ServicesCover/ServicesCover";
import Installation from "./components/installation";
import AccordionGridComponent from "../../components/PartialComponents/AccordionGridComponent";
import EcosystemBanner from "../../components/PartialComponents/EcosystemBanner/EcosystemBanner";
import StepsSolarEnergy from "./components/StepsSolarEnergy";
import PaymentMethods from "./components/PaymentMethods";

const SolarEnergy = ({ dataCover, dataInstallation }) => {
  return (
    <Container>
      <ServicesCover dataCover={dataCover} />
      <Installation dataInstallation={dataInstallation} />
      <AccordionGridComponent data={neuPlus} isImage={false} isColor={true} />
      <AccordionGridComponent data={operationAndMaintenance} isImage={false} isColor={false} />
      <EcosystemBanner />
      <StepsSolarEnergy dataSteps={stepsSolarEnergy} />
      <PaymentMethods dataPayment={paymentMethods} />
    </Container>
  );
};

export default SolarEnergy;
