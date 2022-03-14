// Components

import Container from "../components/Navigation/Container";
import Cover from "../components/Home/Cover/Cover";
import Ercosystem from "../components/Home/Ercosystem/Ercosystem";
import ErcoExperience from "../components/Home/ErcoExperience/ErcoExperience";
import Customers from "../components/Home/Customers/Customers";
import StatisticsBanner from "../components/Home/StatisticsBanner/StatisticsBanner";
import EcosystemBanner from "../components/PartialComponents/EcosystemBanner/EcosystemBanner";

const Home = () => {
  return (
    <Container>
      <Cover />
      <Ercosystem />
      <ErcoExperience />
      <Customers />
      <StatisticsBanner />
      <EcosystemBanner />
    </Container>
  );
};

export default Home;
