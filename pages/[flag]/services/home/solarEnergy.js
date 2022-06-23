// Data

import {
  homeConverInfo,
  homeInstallation,
  cardsInstallation,
  stepsSolarEnergy,
  neuPlus,
  operationAndMaintenance
} from "../../../../content/data/servicesData";

// components

import SolarEnergy from "../../../../components/Services/SolarEnergy";

const solarEnergy = () => {
  return (
    <SolarEnergy
      dataCover={homeConverInfo}
      dataInstallation={homeInstallation}
      cardsData={cardsInstallation}
      stepsData={stepsSolarEnergy}
      neuPlus={neuPlus}
      operationAndMaintenance={operationAndMaintenance}
    />
  );
};

export default solarEnergy;
