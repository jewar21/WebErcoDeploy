import { useMediaQuery } from "react-responsive";

import { DeviceSize } from "../utils/handlers/handlers";

// Components
import Container from "../components/Navigation/Container";
import Cover from "../components/Home/Cover/Cover";
import Ercosystem from "../components/Home/Ercosystem/Ercosystem";
import ErcoExperience from "../components/Home/ErcoExperience/ErcoExperience";
import Customers from "../components/Home/Customers/Customers";
import StatisticsBanner from "../components/Home/StatisticsBanner/StatisticsBanner";
import EcosystemBanner from "../components/PartialComponents/EcosystemBanner/EcosystemBanner";

const Home = () => {
  const isMobileVar = useMediaQuery({ maxWidth: DeviceSize.mobile });

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
