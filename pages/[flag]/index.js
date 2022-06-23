import React from "react";

/* Importing the components from the folder. */
import Container from "../../components/Navigation/Container";
import Cover from "../../components/Home/Cover";
import Ercosystem from "../../components/Home/Ercosystem/Ercosystem";
import ErcoExperience from "../../components/Home/ErcoExperience";
import Customers from "../../components/Home/Customers";
import StatisticsBanner from "../../components/Home/StatisticsBanner";
import EcosystemBanner from "../../components/PartialComponents/EcosystemBanner";

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
