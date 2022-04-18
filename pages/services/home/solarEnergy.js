// Data

import {
  homeConverInfo,
  homeInstallation,
  cardsInstallation,
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
    />
  );
};

export default solarEnergy;
