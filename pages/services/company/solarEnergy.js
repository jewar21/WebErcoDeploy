// Data

import {
  companyConverInfo,
  companyInstallation,
  neuPlus,
  operationAndMaintenance
} from "../../../content/data/servicesData";

// components

import SolarEnergy from "../../../components/Services/SolarEnergy";

const solarEnergy = () => {
  return (
    <SolarEnergy
      dataCover={companyConverInfo}
      dataInstallation={companyInstallation}
    />
  );
};

export default solarEnergy;
