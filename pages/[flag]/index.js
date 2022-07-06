import React from "react";

/* Importing the components from the folder. */
import Container from "../../components/Navigation/Container";
import Cover from "../../components/Home/Cover";
import Ercosystem from "../../components/Home/Ercosystem";
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

export async function getStaticProps({ params: { flag } }) {
  console.log(`Building slug: ${flag}`);
  try {
    const response = await fetch("http://127.0.0.1:3000/api/hello");
    const data = await response.json();
    return {
      props: { flag: data }
    };
  } catch (error) {
    console.log(error);
  }
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
