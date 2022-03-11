import { RecoilRoot } from "recoil";

import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
