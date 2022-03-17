// components

import Container from "../../components/Navigation/Container";
import ServicesCover from "../../components/PartialComponents/ServicesCover/ServicesCover";

const Installation = ({ dataInstallation }) => {
  return (
    <Container>
      <ServicesCover dataCover={dataInstallation} isActiveQuoteButton={false} />
    </Container>
  );
};

export default Installation;
