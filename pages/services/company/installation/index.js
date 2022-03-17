// Data

import { companyInstallation } from "../../../../content/data/servicesData";

// components

import Installation from "../../../../components/Services/Installation";

const index = () => {
  return (
    <>
      <Installation dataInstallation={companyInstallation} />
    </>
  );
};

export default index;
