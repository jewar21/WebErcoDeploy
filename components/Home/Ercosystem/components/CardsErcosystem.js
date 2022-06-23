import { useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

// Packages
import { gsap } from "gsap/dist/gsap";

import { sidebarAnimations } from "../../../../styles/animations/globals";

import { p1, p2, p3 } from "../../../../content/globalData";

import QuoteButton from "../../../PartialComponents/QuoteButton";

const CardsEcosystem = ({ contentData, icon, phone, textButton }) => {
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
                {contentData.map(({ counter }, i) => (
                  <span
                    key={i}
                    className={
                      i === 0
                        ? "progressBar-number counter opacity-1"
                        : "progressBar-number counter opacity-1 translate-y-[-5%]"
                    }
                  >
                    {counter}
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
              {contentData.map(({ subtitle, items }, i) => {
                return (
                  <div
                    key={i}
                    className={
                      i === 0
                        ? "panel-text opacity-1"
                        : "panel-text opacity-0 translate-x-[10%]"
                    }
                  >
                    <h5 className="panel-title">{subtitle}</h5>
                    {items.map(({ item }, i) => (
                      <div key={i} className="panel-body">
                        <div className="panel-icon">{icon}</div>
                        <p className="panel-item">{item}</p>
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
              buttonText={textButton}
              isIcon={false}
            />
          </div>
        </div>
        <div className="imgs-wrap">
          {contentData.map(({ img, subtitle }, i) => (
            <div
              key={i}
              className={i === 2 ? "panel-imgs exclude" : "panel-imgs"}
            >
              <Image src={img} alt={subtitle} layout="fill" objectFit="fill" />
            </div>
          ))}
        </div>
        <div id="panel-phone" className="panel-phone-content">
          <Image
            className="z-10"
            src={phone.src}
            alt="phone"
            layout="fill"
            objectFit="fill"
          />
          {contentData.map((e, i) => (
            <Image
              key={i}
              className={i === 2 ? "panel-phone exclude" : "panel-phone"}
              src={i === 0 ? p1.src : i === 1 ? p2.src : p3.src}
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

CardsEcosystem.propTypes = {
  contentData: PropTypes.object.isRequired,
  icon: PropTypes.object.isRequired,
  phone: PropTypes.object.isRequired,
  textButton: PropTypes.string.isRequired
};

export default CardsEcosystem;
