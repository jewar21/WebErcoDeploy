// Components
import Container from "../components/Navigation/Container";
import Cover from "../components/Home/Cover/Cover";
import Ecosystem from "../components/Home/Ecosystem/Ecosystem";
import EcosystemBanner from "../components/Home/EcosystemBanner/EcosystemBanner";

const Home = () => {
  return (
    <div>
      <Container>
        <Cover />
        <Ecosystem />
        <EcosystemBanner />
      </Container>
    </div>
  );
};

export default Home;
