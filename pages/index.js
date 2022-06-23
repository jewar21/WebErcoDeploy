import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Recoil
import { useRecoilState } from "recoil";
import {
  nameCountry,
  navbarInfo,
  textsButtons,
  homeCoverData,
  homeEcosystemContent,
  homeExpContent,
  bannersData,
  homeTestimonials,
  brands,
  contactUs
} from "../recoil/atoms";

// Remote config
import {
  FLAG,
  NAVBAR,
  BUTTONTEXT,
  HOME_COVER,
  HOME_ECOSYSTEM,
  HOME_EXP,
  BANNERS,
  HOME_TESTIMONIALS,
  HOME_BRANDS,
  CONTACT_US
} from "../utils/firebase/firebaseTypes";
import remote_config from "../utils/firebase/controller";

const IndexPage = () => {
  const [country, setCountry] = useRecoilState(nameCountry);
  const [navbar, setNavbar] = useRecoilState(navbarInfo);
  const [buttonText, setButtonText] = useRecoilState(textsButtons);
  const [coverInfo, setCoverInfo] = useRecoilState(homeCoverData);
  const [ecosystem, seteEcosystem] = useRecoilState(homeEcosystemContent);
  const [homeExp, setHomeExp] = useRecoilState(homeExpContent);
  const [banners, setBanners] = useRecoilState(bannersData);
  const [testimonial, setTestimonials] = useRecoilState(homeTestimonials);
  const [brand, setBrand] = useRecoilState(brands);
  const [contact, setContact] = useRecoilState(contactUs);
  const router = useRouter();

  const getFlag = useCallback(async () => {
    const flag = await remote_config.get(FLAG);
    setCountry(flag[0]);
    router.push(`/${country}`);
  }, []);

  const getNav = useCallback(async () => {
    const nav = await remote_config.get(NAVBAR);
    setNavbar(nav);
  }, []);

  const getButtonsT = useCallback(async () => {
    const buttonText = await remote_config.get(BUTTONTEXT);
    setButtonText(buttonText);
  }, []);

  const getHomeCover = useCallback(async () => {
    const homeCover = await remote_config.get(HOME_COVER);
    setCoverInfo(homeCover);
  }, []);

  const getHomeEcosystem = useCallback(async () => {
    const homeEcosystem = await remote_config.get(HOME_ECOSYSTEM);
    seteEcosystem(homeEcosystem);
  }, []);

  const getExp = useCallback(async () => {
    const exp = await remote_config.get(HOME_EXP);
    setHomeExp(exp);
  }, []);

  const getBanners = useCallback(async () => {
    const bann = await remote_config.get(BANNERS);
    setBanners(bann);
  }, []);

  const getTestimonials = useCallback(async () => {
    const testi = await remote_config.get(HOME_TESTIMONIALS);
    setTestimonials(testi);
  }, []);

  const getBrands = useCallback(async () => {
    const brands = await remote_config.get(HOME_BRANDS);
    setBrand(brands);
  }, []);

  const getContactUs = useCallback(async () => {
    const cu = await remote_config.get(CONTACT_US);
    setContact(cu);
  }, []);

  useEffect(() => {
    getFlag();
    getNav();
    getButtonsT();
    getHomeCover();
    getHomeEcosystem();
    getExp();
    getTestimonials();
    getBrands();
    getBanners();
    getContactUs();
  }, [
    getFlag,
    getNav,
    getButtonsT,
    getHomeCover,
    getHomeEcosystem,
    getExp,
    getTestimonials,
    getBrands,
    getBanners,
    getContactUs
  ]);

  return (
    <div>
      <Head>
        <title>
          {country === "co" || country === "pa"
            ? "Erco Energía"
            : "Erco Energy"}
        </title>
      </Head>
      <p>loading...</p>
    </div>
  );
};

export default IndexPage;
