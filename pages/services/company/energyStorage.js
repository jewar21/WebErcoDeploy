// data

import {
  energyStorageData,
  fiveStepsS
} from "../../../content/data/servicesData";

// components

import Container from "../../../components/Navigation/Container";
import ServicesCover from "../../../components/PartialComponents/ServicesCover/ServicesCover";
import EnergyStorageComponent from "../../../components/Services/components/EnergyStorageComponent";
import Steps from "../../../components/PartialComponents/StepsComponent/Steps";
import PaymentMethods from "../../../components/PartialComponents/PaymentMethods/PaymentMethods";

const energyStorage = () => {
  return (
    <Container>
      <ServicesCover dataCover={energyStorageData} isActiveQuoteButton={true} />
      <EnergyStorageComponent dataStorage={energyStorageData}/>
      <Steps dataSteps={fiveStepsS} />
      <PaymentMethods colorPrimary={true} />
    </Container>
  );
};

export default energyStorage;
