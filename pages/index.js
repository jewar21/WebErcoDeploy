import Head from "next/Head";

import Navbar from "../components/Navigation/components/Navbar";
import Cover from "../components/Cover/Cover";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Erco Energía</title>
        <link rel="icon" href="/erco_logo.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Cover />
    </div>
  );
};

export default Home;
