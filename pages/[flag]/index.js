import React from "react";

/* Importing the components from the folder. */
import Container from "../../components/Navigation/Container";
import Cover from "../../components/Home/Cover/Cover";
import Ercosystem from "../../components/Home/Ercosystem/Ercosystem";
import ErcoExperience from "../../components/Home/ErcoExperience/ErcoExperience";
import Customers from "../../components/Home/Customers/Customers";
import StatisticsBanner from "../../components/Home/StatisticsBanner/StatisticsBanner";
import EcosystemBanner from "../../components/PartialComponents/EcosystemBanner/EcosystemBanner";

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
