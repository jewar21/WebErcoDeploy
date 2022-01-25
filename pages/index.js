import { useMediaQuery } from "react-responsive";

// vars
import { DeviceSize } from "../utils/handlers/handlers";

// Components
import Container from "../components/Navigation/Container";
import Cover from "../components/Home/Cover/Cover";
import Ecosystem from "../components/Home/Ecosystem/Ecosystem";
import StatisticsBanner from "../components/Home/StatisticsBanner/StatisticsBanner";
import EcosystemBanner from "../components/Home/EcosystemBanner/EcosystemBanner";

const Home = () => {
  const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet });
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <div>
      <Container isMobile={isMobile}>
        <Cover isTablet={isTablet}/>
        <Ecosystem />
        <StatisticsBanner />
        <EcosystemBanner />
      </Container>
    </div>
  );
};

export default Home;
