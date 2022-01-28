import { RecoilRoot } from "recoil";

import "../styles/tailwind.css";

// import DebugObserver from "../components/DebugObserver";

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      {/* <DebugObserver /> */}
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
