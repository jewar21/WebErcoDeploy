// Components
import Container from "../components/Navigation/Container";
import Cover from "../components/Cover/Cover";
import Ecosystem from "../components/Ecosystem/Ecosystem";

const Home = () => {
  return (
    <div>
      <Container>
        <Cover />
        <Ecosystem />
      </Container>
    </div>
  );
};

export default Home;
