// Data

import { companyInstallation } from "../../../../content/data/servicesData";

// components

import InstallationPage from "../../../../components/Services/InstallationPage";

const index = () => {
  return <InstallationPage dataInstallation={companyInstallation} />;
};

export default index;
