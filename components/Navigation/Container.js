import Head from "next/Head";

import Navigation from "./Navigation";
import Footer from "../Footer/Footer";

const Container = (props) => (
  <div>
    <Head>
      <title>Erco Energía</title>
      <link rel="icon" href="/erco_logo.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&display=swap"
      />
    </Head>
    <Navigation />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Container;
