import { ecosystemBanner } from "../../../content/data/homeData";

import QuoteButton from "../../PartialComponents/QuoteButton";
import WhatsAppButton from "../../PartialComponents/WhatsAppButton";

const EcosystemBanner = () => {
  return (
    <section className="ecosystemBannerContainer">
      <div className="ecosystemBannerContent">
        <div className="ecosystemBannerLeft">
          <h3>
            {ecosystemBanner.title1} <br /> {ecosystemBanner.title2}
          </h3>
          <p>{ecosystemBanner.content}</p>
        </div>
        <div className="ecosystemBannerRight">
          <QuoteButton
            buttonParameters={
              "w-10.5rem h-12 lg:w-48 lg:h-14 font-semibold bg-darkGrey-700 text-lightGrey-100 mr-6"
            }
            buttonText={"Cotizar sistema"}
            isIcon={false}
          />
          <WhatsAppButton
            buttonParameters={
              "w-10.5rem h-12 lg:w-13.5rem lg:h-14 mt-6 font-semibold text-darkGrey-900 border-2 border-darkGrey-900 lg:mt-0"
            }
            buttonText={"Contáctanos"}
          />
        </div>
      </div>
    </section>
  );
};

export default EcosystemBanner;
