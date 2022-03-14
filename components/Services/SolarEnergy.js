import React from "react";

// data

import {
  stepsSolarEnergy,
  paymentMethods
} from "../../content/data/servicesData";

// components

import Container from "../../components/Navigation/Container";
import ServicesCover from "../../components/PartialComponents/ServicesCover/ServicesCover";
import Installation from "./components/installation";
import EcosystemBanner from "../../components/PartialComponents/EcosystemBanner/EcosystemBanner";
import StepsSolarEnergy from "./components/StepsSolarEnergy";
import PaymentMethods from "./components/PaymentMethods";

const SolarEnergy = ({ dataCover, dataInstallation }) => {
  return (
    <Container>
      <ServicesCover dataCover={dataCover} />
      <Installation dataInstallation={dataInstallation} />
      <EcosystemBanner />
      <StepsSolarEnergy dataSteps={stepsSolarEnergy} />
      <PaymentMethods dataPayment={paymentMethods} />
    </Container>
  );
};

export default SolarEnergy;
