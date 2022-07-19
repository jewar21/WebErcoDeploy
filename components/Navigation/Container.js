import Head from "next/head";

// Recoil
import { useRecoilValue } from "recoil";
import { nameCountry } from "../../recoil/atoms";

/* Importing the components that are going to be used in the Container component. */
import Footer from "../Footer/Footer";
import Navigation from ".";

const Container = (props) => {
  const country = useRecoilValue(nameCountry);
  return (
    <div>
      <Head>
        <title>
          {country === "co" || country === "pa"
            ? "Erco Energía"
            : "Erco Energy"}
        </title>
      </Head>
      <Navigation />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Container;

import React from "react";
