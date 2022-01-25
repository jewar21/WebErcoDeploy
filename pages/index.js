// Components
import Container from "../components/Navigation/Container";
import Cover from "../components/Home/Cover/Cover";
import Ecosystem from "../components/Home/Ecosystem/Ecosystem";
import ErcoExperience from "../components/Home/ErcoExperience/ErcoExperience";
import StatisticsBanner from "../components/Home/StatisticsBanner/StatisticsBanner";
import EcosystemBanner from "../components/Home/EcosystemBanner/EcosystemBanner";

const Home = () => {
  return (
    <div>
      <Container>
        <Cover />
        <Ecosystem />
        <ErcoExperience />
        <StatisticsBanner />
        <EcosystemBanner />
      </Container>
    </div>
  );
};

export default Home;
