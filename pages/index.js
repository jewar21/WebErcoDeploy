// import { useRecoilState } from "recoil";

import { useMediaQuery } from "react-responsive";

import { DeviceSize } from "../utils/handlers/handlers";

// import {
//   isTablet as isTableAtom,
//   isMobile as isMobileAtom
// } from "../recoil/atoms";

// Components
import Container from "../components/Navigation/Container";
import Cover from "../components/Home/Cover/Cover";
import Ercosystem from "../components/Home/Ercosystem/Ercosystem";
import ErcoExperience from "../components/Home/ErcoExperience/ErcoExperience";
import Customers from "../components/Home/Customers/Customers";
import StatisticsBanner from "../components/Home/StatisticsBanner/StatisticsBanner";
import EcosystemBanner from "../components/PartialComponents/EcosystemBanner/EcosystemBanner";

const Home = () => {
  // const [isMobile, setIsMobile] = useRecoilState(isMobileAtom);
  // const [isTablet, setIsTablet] = useRecoilState(isTableAtom);

  const isMobileVar = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const isTabletVar = useMediaQuery({ maxWidth: DeviceSize.tablet });
  // isMobileVar
  //   ? setIsMobile(true)
  //   : isTabletVar
  //   ? setIsTablet(true)
  //   : setIsMobile(false);
  return (
    <Container>
      <Cover />
      <Ercosystem isMobile={isMobileVar} />
      <ErcoExperience isMobile={isMobileVar} />
      <Customers />
      <StatisticsBanner />
      <EcosystemBanner />
    </Container>
  );
};

export default Home;
