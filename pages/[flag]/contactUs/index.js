// data

import { constactInfo } from "../../../content/data/contactData";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { contactUs } from "../../../recoil/atoms";

// components

import ContactComponent from "../../../components/Contact/ContactComponent";
import Offices from "../../../components/Contact/Offices";
import Container from "../../../components/Navigation/Container";
import EcosystemBanner from "../../../components/PartialComponents/EcosystemBanner/EcosystemBanner";

const ContactUs = () => {
  const contactData = useRecoilValue(contactUs);

  return (
    <Container>
      <ContactComponent contactData={contactData} />
      <Offices contactData={constactInfo.offices} />
      <EcosystemBanner />
    </Container>
  );
};

export default ContactUs;
