import { ecosystemBanner } from "../../../content/data/homeData";

import QuoteButton from "../QuoteButton";
import WhatsAppButton from "../WhatsAppButton";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { bannersData, textsButtons } from "../../../recoil/atoms";

const EcosystemBanner = () => {
  const { ecosystem } = useRecoilValue(bannersData);
  const { title1, title2, content } = ecosystem;
  const button = useRecoilValue(textsButtons);

  return (
    <section className="ecosystemBannerContainer">
      <div className="ecosystemBannerContent">
        <div className="ecosystemBannerLeft">
          <h3>
            {title1} <br /> {title2}
          </h3>
          <p>{content}</p>
        </div>
        <div className="ecosystemBannerRight">
          <QuoteButton
            buttonParameters={
              "w-10.5rem h-12 lg:w-48 lg:h-14 font-semibold bg-darkGrey-700 text-lightGrey-100 mr-6"
            }
            buttonText={button[4]}
            isIcon={false}
          />
          <WhatsAppButton
            buttonParameters={
              "w-10.5rem h-12 lg:w-13.5rem lg:h-14 mt-6 font-semibold text-darkGrey-900 border-2 border-darkGrey-900 lg:mt-0"
            }
            buttonText={button[2]}
          />
        </div>
      </div>
    </section>
  );
};

export default EcosystemBanner;
