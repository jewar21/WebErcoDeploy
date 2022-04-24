import Image from "next/image";
import Link from "next/link";

import { useRecoilValue } from "recoil";
import { typeServiceState } from "../../../recoil/atoms";

// components

import QuoteButton from "../../PartialComponents/QuoteButton";

const InstallationGeneralView = ({ dataCards }) => {
  const section = useRecoilValue(typeServiceState);
  return (
    <section className="installationGeneralContainer">
      <div className="installationGeneralContent">
        {dataCards.map((card, i) => {
          const title = card.title;
          const desc = card.content;
          const imgHome = card.imgCompany.src;
          const imgCompany = card.imgCompany.src;
          const items = card.items;
          return (
            <div
              className={
                i === 1
                  ? `cardIntallation `
                  : `cardIntallation  bg-lightGrey-300`
              }
              key={i}
            >
              <div className="px-6">
                <div className="cardTitle">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <div className="cardImg">
                  <div className="installationImg">
                    <Image
                      src={section === "home" ? imgHome : imgCompany}
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                      priority="true"
                    />
                  </div>
                </div>
                <div className="cardItemGrid">
                  {items.map((item, i) => (
                    <div key={i} className="cardItem">
                      <div className="cardItemIcon">{item.icon}</div>
                      <div className="cardItemText">
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cardQuoteButton">
                  <QuoteButton
                    buttonParameters={
                      "w-12.5rem h-12 px-2 font-semibold bg-primary-500 text-darkGrey-900"
                    }
                    buttonText={"Cotizar sistema"}
                    isIcon={true}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InstallationGeneralView;
