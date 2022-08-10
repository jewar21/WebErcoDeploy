import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/router";

/* Importing the components from the folder. */
import Container from "../../components/Navigation/Container";
import Cover from "../../components/Home/Cover/Cover";
import Ercosystem from "../../components/Home/Ercosystem/Ercosystem";
import ErcoExperience from "../../components/Home/ErcoExperience/ErcoExperience";
import Customers from "../../components/Home/Customers/Customers";
import StatisticsBanner from "../../components/Home/StatisticsBanner/StatisticsBanner";
import EcosystemBanner from "../../components/PartialComponents/EcosystemBanner/EcosystemBanner";

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
} from "../../recoil/atoms";

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
} from "../../utils/firebase/firebaseTypes";
import remote_config from "../../utils/firebase/controller";

import Loading from "../../components/PartialComponents/Loading";

const Home = () => {
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

  const isData = Object.entries(coverInfo).length === 0;

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
    if (isData || !coverInfo) {
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
    }
  }, [
    coverInfo,
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
    isData,
    navbar,
    setCountry
  ]);

  return (
    <>
      {isData ? (
        <Loading />
      ) : (
        <Container>
          <Cover />
          <Ercosystem />
          <ErcoExperience />
          <Customers />
          <StatisticsBanner />
          <EcosystemBanner />
        </Container>
      )}
    </>
  );
};

export default Home;

export async function getStaticProps({ params: { flag } }) {
  console.log(`Building slug: ${flag}`);
  let data = [];
  let error = "";
  try {
    // const URL = process.env.API_TESTING_LOCAL_URL;
    const URL = process.env.API_TESTING_URL;
    const response = await fetch(
      // "http:web-erco-deploy-oymmwh7u6-jesseard94.vercel.app/api/hello"
      `${URL}/api/hello`,
      {
        method: "GET",
        headers: {
          // update with your user-agent
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
          Accept: "application/json; charset=UTF-8"
        }
      }
    );
    data = await response.json();
  } catch (e) {
    error = e.toString();
  }
  return {
    props: { flag: data }
  };
}

export async function getStaticPaths() {
  try {
    // const res = await fetch("http://127.0.0.1:3000/api/hello");
    // const data = await res.json();
    const paths = [
      // For each [flag] It would have a possible value like the following:
      {
        params: {
          flag: "co"
        }
      },
      {
        params: {
          flag: "pa"
        }
      },
      {
        params: {
          flag: "us"
        }
      }
    ];
    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.log(error);
  }
}
