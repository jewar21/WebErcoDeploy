import { useEffect } from "react";
import Image from "next/image";

// Packages
import { gsap } from "gsap/dist/gsap";

import { sidebarAnimations } from "../../../../styles/animations/globals";

import QuoteButton from "../../../PartialComponents/QuoteButton";

const CardsEcosystem = ({ contentData, icon }) => {
  useEffect(() => {
    gsap.set(".panel-imgs", {
      zIndex: (i, target, targets) => targets.length - i
    });
    gsap.set(".panel-phone", {
      zIndex: (i, target, targets) => targets.length - i
    });

    gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i
    });

    gsap.set(".counter", {
      zIndex: (i, target, targets) => targets.length - i
    });

    const images = gsap.utils.toArray(".panel-imgs:not(.exclude)");
    const phoneImgs = gsap.utils.toArray(".panel-phone:not(.exclude)");
    const texts = gsap.utils.toArray(".panel-text");
    const card = gsap.utils.toArray(".cardsEcosystemContainer");
    const counter = gsap.utils.toArray(".counter");

    sidebarAnimations(images, phoneImgs, texts, card, counter);
  }, []);

  return (
    <section className="ecosystemContainer">
      <div className="cardsEcosystemContainer">
        <div className="cardText-wrap">
          <div className="contentTextButton">
            <div className="progressBar">
              <p className="progressBar-number">0</p>
              <div>
                {contentData.map((e, i) => (
                  <span
                    key={i}
                    className={
                      i === 0
                        ? "progressBar-number counter opacity-1"
                        : "progressBar-number counter opacity-1 translate-y-[-5%]"
                    }
                  >
                    {e.counter}
                  </span>
                ))}
              </div>
              <p className="progressBar-base">/03</p>
              <div className="progressBar-content">
                <div className="progressBar-line">
                  <div id="progress" className="progressBar-line-fill"></div>
                </div>
              </div>
            </div>
            <div>
              {contentData.map((e, i) => {
                let items = e.items;
                return (
                  <div
                    key={i}
                    className={
                      i === 0
                        ? "panel-text opacity-1"
                        : "panel-text opacity-0 translate-x-[10%]"
                    }
                  >
                    <h5 className="panel-title">{e.subtitle}</h5>
                    {items.map((e, i) => (
                      <div key={i} className="panel-body">
                        <div className="panel-icon">{icon}</div>
                        <p className="panel-item">{e.item}</p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            <QuoteButton
              buttonParameters={
                "w-12.5rem h-14 font-bold border-solid border-2 border-primary-500 text-darkGrey-900"
              }
              buttonText={"Cotizar sistema"}
              isIcon={false}
            />
          </div>
        </div>
        <div className="imgs-wrap">
          {contentData.map((e, i) => (
            <div
              key={i}
              className={i === 2 ? "panel-imgs exclude" : "panel-imgs"}
            >
              <Image
                src={e.img.src}
                alt="image"
                layout="fill"
                objectFit="fill"
              />
            </div>
          ))}
        </div>
        <div id="panel-phone" className="panel-phone-content">
          <Image
            className="z-10"
            src="/imagenes/phone/phone.svg"
            alt="image"
            layout="fill"
            objectFit="fill"
          />
          {contentData.map((p, i) => (
            <Image
              key={i}
              className={i === 2 ? "panel-phone exclude" : "panel-phone"}
              src={p.phoneImg.src}
              alt="image"
              layout="fill"
              objectFit="fill"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsEcosystem;
