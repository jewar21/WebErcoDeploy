// data

import {
  energyStorageData,
  fiveStepsS
} from "../../../content/data/servicesData";

// components

import Container from "../../../components/Navigation/Container";
import GeneralCover from "../../../components/PartialComponents/GeneralCover/GeneralCover";
import EnergyStorageComponent from "../../../components/Services/components/EnergyStorageComponent";
import Steps from "../../../components/PartialComponents/StepsComponent/Steps";
import PaymentMethods from "../../../components/PartialComponents/PaymentMethods/PaymentMethods";

const energyStorage = () => {
  return (
    <Container>
      <GeneralCover dataCover={energyStorageData} isActiveQuoteButton={true} />
      <EnergyStorageComponent dataStorage={energyStorageData}/>
      <Steps dataSteps={fiveStepsS} />
      <PaymentMethods colorPrimary={true} />
    </Container>
  );
};

export default energyStorage;
