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

/* Importing the remote config from firebase. */
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

const IndexPage = ({ flag }) => {
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
  }, [country, router, setCountry]);

  const getNav = useCallback(async () => {
    const nav = await remote_config.get(NAVBAR);
    setNavbar(nav);
  }, [setNavbar]);

  const getButtonsT = useCallback(async () => {
    const buttonText = await remote_config.get(BUTTONTEXT);
    setButtonText(buttonText);
  }, [setButtonText]);

  const getHomeCover = useCallback(async () => {
    const homeCover = await remote_config.get(HOME_COVER);
    setCoverInfo(homeCover);
  }, [setCoverInfo]);

  const getHomeEcosystem = useCallback(async () => {
    const homeEcosystem = await remote_config.get(HOME_ECOSYSTEM);
    seteEcosystem(homeEcosystem);
  }, [seteEcosystem]);

  const getExp = useCallback(async () => {
    const exp = await remote_config.get(HOME_EXP);
    setHomeExp(exp);
  }, [setHomeExp]);

  const getBanners = useCallback(async () => {
    const bann = await remote_config.get(BANNERS);
    setBanners(bann);
  }, [setBanners]);

  const getTestimonials = useCallback(async () => {
    const testi = await remote_config.get(HOME_TESTIMONIALS);
    setTestimonials(testi);
  }, [setTestimonials]);

  const getBrands = useCallback(async () => {
    const brands = await remote_config.get(HOME_BRANDS);
    setBrand(brands);
  }, [setBrand]);

  const getContactUs = useCallback(async () => {
    const cu = await remote_config.get(CONTACT_US);
    setContact(cu);
  }, [setContact]);

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
    getBanners,
    getBrands,
    getButtonsT,
    getContactUs,
    getExp,
    getFlag,
    getHomeCover,
    getHomeEcosystem,
    getNav,
    getTestimonials,
    router,
    setCountry
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

// export async function getStaticProps() {
//   try {
//     const response = await fetch("http://localhost:3000/api/hello");
//     const data = await response.json();
//     console.log("data--------->", data);
//     return {
//       props: { flag: data }
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
