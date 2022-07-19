// data

import { constactInfo } from "../../../content/data/contactData";

// components

import ContactComponent from "../../../components/Contact/ContactComponent";
import Offices from "../../../components/Contact/Offices";
import Container from "../../../components/Navigation/Container";
import EcosystemBanner from "../../../components/PartialComponents/EcosystemBanner";

const index = () => {
  return (
    <Container>
      <ContactComponent contactData={constactInfo} />
      <Offices contactData={constactInfo.offices} />
      <EcosystemBanner />
    </Container>
  );
};

export default index;
