// Data

import {
  companyConverInfo,
  companyInstallation,
  cardsInstallation,
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
      cardsData={cardsInstallation}
    />
  );
};

export default solarEnergy;
