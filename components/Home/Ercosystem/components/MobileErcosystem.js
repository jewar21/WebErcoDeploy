import Image from "next/image";

import QuoteButton from "../../../PartialComponents/QuoteButton";

const MobileErcosystem = ({ contentData, icon }) => {
  return (
    <div>
      {contentData.map((e, i) => {
        let items = e.items;
        return (
          <div className="flex w-full lg:hidden" key={i}>
            <div className="mobileErcosystemImg">
              <Image
                src={e.img.src}
                alt="image"
                layout="fill"
                objectFit="fill"
              />
            </div>
            <div className="mobileErcosystemContainer">
              <h5 className="panel-title">{e.subtitle}</h5>
              <div className="pt-6 pb-6">
                {items.map((e, i) => (
                  <div key={i} className="panel-body">
                    <div className="panel-icon">{icon}</div>
                    <p className="pl-3.5">{e.item}</p>
                  </div>
                ))}
              </div>
              <QuoteButton
                buttonParameters={
                  "w-10.5rem h-12 font-bold border-solid border-2 border-primary-500 text-darkGrey-900"
                }
                buttonText={"Cotizar sistema"}
                isIcon={false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileErcosystem;
