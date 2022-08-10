import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/router";

// data

import { constactInfo } from "../../../content/data/contactData";

/* Recoil */
/* A state management library. */
import { useRecoilState } from "recoil";
import {
  nameCountry,
  navbarInfo,
  textsButtons,
  contactUs
} from "../../../recoil/atoms";

// components

import ContactComponent from "../../../components/Contact/ContactComponent";
import Offices from "../../../components/Contact/Offices";
import Container from "../../../components/Navigation/Container";
import EcosystemBanner from "../../../components/PartialComponents/EcosystemBanner/EcosystemBanner";
import Loading from "../../../components/PartialComponents/Loading";

/* Importing the remote config from firebase. */
import {
  FLAG,
  NAVBAR,
  BUTTONTEXT,
  CONTACT_US
} from "../../../utils/firebase/firebaseTypes";
import remote_config from "../../../utils/firebase/controller";

const ContactUs = () => {
  const [country, setCountry] = useRecoilState(nameCountry);
  const [navbar, setNavbar] = useRecoilState(navbarInfo);
  const [buttonText, setButtonText] = useRecoilState(textsButtons);
  const [contactData, setContactData] = useRecoilState(contactUs);
  const router = useRouter();

  const isData = Object.entries(contactData).length === 0;

  const getFlag = useCallback(async () => {
    const flag = await remote_config.get(FLAG);
    setCountry(flag[0]);
    router.push(`/${country}/contactUs`);
  }, [country, router, setCountry]);

  const getNav = useCallback(async () => {
    const nav = await remote_config.get(NAVBAR);
    setNavbar(nav);
  }, [setNavbar]);

  const getButtonsT = useCallback(async () => {
    const buttonText = await remote_config.get(BUTTONTEXT);
    setButtonText(buttonText);
  }, [setButtonText]);

  const getContactUs = useCallback(async () => {
    const cu = await remote_config.get(CONTACT_US);
    setContactData(cu);
  }, [setContactData]);

  useEffect(() => {
    if (isData || !contactData) {
      getFlag();
      getContactUs();
      getNav();
      getButtonsT();
    }
  }, [contactData, getButtonsT, getContactUs, getFlag, getNav, isData]);

  return (
    <>
      {isData ? (
        <Loading />
      ) : (
        <Container>
          <ContactComponent contactData={contactData} />
          <Offices contactData={constactInfo.offices} />
          <EcosystemBanner />
        </Container>
      )}
    </>
  );
};

export default ContactUs;
