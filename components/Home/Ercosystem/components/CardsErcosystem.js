import { useEffect } from "react";
import Image from "next/image";

// Packages
import { gsap } from "gsap/dist/gsap";
import Scrollbar from "smooth-scrollbar";

import {
  sliderAnimation,
  sidebarAnimations
} from "../../../../styles/animations/globals";

import QuoteButton from "../../../PartialComponents/QuoteButton";

const CardsEcosystem = ({ contentData }) => {
  useEffect(() => {
    gsap.set(".panel-imgs", {
      zIndex: (i, target, targets) => targets.length - i
    });

    const images = gsap.utils.toArray(".panel-imgs:not(.purple)");

    gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i
    });

    gsap.set(".counter", {
      zIndex: (i, target, targets) => targets.length - i
    });

    const texts = gsap.utils.toArray(".panel-text");
    const counter = gsap.utils.toArray(".counter");
    const card = gsap.utils.toArray(".cardsEcosystemContainer");

    sidebarAnimations(images, texts, card, counter);
  }, []);

  return (
    <section className="ecosystemContainer">
      <div className="cardsEcosystemContainer">
        <div className="cardText-wrap">
          <div className="contentTextButton">
            <div className="progressBar">
              <p>0</p>
              <div>
                {contentData.map((e, i) => (
                  <span
                    key={i}
                    className={
                      i === 0
                        ? "counter opacity-1"
                        : "counter opacity-1 translate-y-[-10%]"
                    }
                  >
                    {e.counter}
                  </span>
                ))}
              </div>
              <p className="pl-2.5">/03</p>
              <div className="progressBar-content">
                <div className="progressBar-line">
                  <div id="progress" className="progressBar-line-fill"></div>
                </div>
              </div>
            </div>
            <div>
              {contentData.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={
                      i === 0
                        ? "panel-text opacity-1"
                        : "panel-text opacity-0 translate-x-[10%]"
                    }
                  >
                    <div>{e.subtitle}</div>
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
              className={i === 2 ? "panel-imgs purple" : "panel-imgs"}
            >
              <Image
                src={e.img.src}
                // className="w-full max-w-full h-full max-h-full rounded-r-[2.5rem] object-cover absolute"
                alt="image"
                layout="fill"
                objectFit="fill"
              />
            </div>
          ))}
          {/* <div className="panel-imgs bg-blue-300"></div>
          <div className="panel-imgs bg-red-300"></div>
          <div className="panel-imgs purple bg-orange-300"></div> */}
        </div>
      </div>
    </section>
  );
};

export default CardsEcosystem;
