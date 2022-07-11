// components

import ContactComponent from "../../../components/Contact/ContactComponent";
import Offices from "../../../components/Contact/Offices";
import Container from "../../../components/Navigation/Container";
import EcosystemBanner from "../../../components/PartialComponents/EcosystemBanner";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { contactUs } from "../../../recoil/atoms";

const ContactUS = () => {
  const contactData = useRecoilValue(contactUs);
  const { offices } = contactData;
  return (
    <Container>
      <ContactComponent contactData={contactData} />
      <Offices contactData={offices} />
      <EcosystemBanner />
    </Container>
  );
};

export default ContactUS;
