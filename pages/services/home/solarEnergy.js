// Data

import {
  homeConverInfo,
  homeInstallation,
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
    />
  );
};

export default solarEnergy;
