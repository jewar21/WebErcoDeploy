/* Importing the components from the other files. */
import QuoteButton from "../QuoteButton";
import WhatsAppButton from "../WhatsAppButton";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { bannersData, textsButtons } from "../../../recoil/atoms";

const EcosystemBanner = () => {
  const { ecosystem } = useRecoilValue(bannersData);
  const button = useRecoilValue(textsButtons);

  return (
    <section className="ecosystemBannerContainer">
      {ecosystem && (
        <div className="ecosystemBannerContent">
          <div className="ecosystemBannerLeft">
            <h3>
              {ecosystem.title1} <br /> {ecosystem.title2}
            </h3>
            <p>{ecosystem.content}</p>
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
      )}
    </section>
  );
};

export default EcosystemBanner;
