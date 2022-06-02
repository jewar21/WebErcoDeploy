import { RecoilRoot } from "recoil";


// styles

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import "../styles/tailwind.css";

// Remote config

import { FLAG } from "../utils/firebase/firebaseTypes";
import remote_config from "../utils/firebase/controller";

export default function MyApp({ Component, pageProps }) {

  const getData = async () => {
    const flag = await remote_config.get(FLAG);

    console.log("flag -->", flag);
  };

  getData();
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
