// Data

import {
  homeConverInfo,
  homeInstallation,
  cardsInstallation,
  stepsSolarEnergy,
  paymentMethods,
  neuPlus,
  operationAndMaintenance
} from "../../../content/data/servicesData";

// components

import SolarEnergy from "../../../components/Services/SolarEnergy";

const solarEnergy = () => {
  return (
    <SolarEnergy
      dataCover={homeConverInfo}
      dataInstallation={homeInstallation}
      cardsData={cardsInstallation}
      stepsData={stepsSolarEnergy}
      paymentMethods={paymentMethods}
      neuPlus={neuPlus}
      operationAndMaintenance={operationAndMaintenance}
    />
  );
};

export default solarEnergy;
