import Link from "next/link";
import { useState, useEffect } from "react";

import { useRecoilState } from "recoil";
import { typeServiceState } from "../../../recoil/atoms";

import { navInfo } from "../../../content/data/homeData";

import { iconArrow, iconArrowRight } from "../../../content/globalData";

const initialState = {
  opacity: "opacity-0 pointer-events-none",
  class: "hidden",
  colorHover: " "
};

const viewedComponent = {
  opacity: "opacity-1",
  class: "",
  colorHover: "bg-[#F3FCD6]"
};

const ServicesPanel = () => {
  const [home, setHome] = useState(initialState);
  const [company, setCompany] = useState(initialState);
  const [opening, setopening] = useState(viewedComponent.class);
  const [typeService, setTypeService] = useRecoilState(typeServiceState);

  useEffect(() => {
    const divHome = document.querySelector("#home");
    const divCompany = document.querySelector("#company");
    const divServicesPanel = document.querySelector("#servicesPanel");

    divHome.addEventListener("mouseover", () => {
      setHome(viewedComponent);
      setCompany(initialState);
      setopening(initialState.class);
      setTypeService("Hogar");
    });

    divServicesPanel.addEventListener("mouseleave", () => {
      setHome(initialState);
      setopening(viewedComponent.class);
    });

    divCompany.addEventListener("mouseover", () => {
      setHome(viewedComponent.class);
      setCompany(viewedComponent);
      setopening(initialState.class);
      setTypeService("Empresa");
    });

    divServicesPanel.addEventListener("mouseleave", () => {
      setHome(initialState);
      setopening(viewedComponent.class);
      setCompany(initialState);
    });
  }, [setTypeService]);

  return (
    <div id="servicesPanel" className="servicesPanelContent">
      <div className="servicesPanelLeft">
        <div id="home" className={`menuLeft ${home.colorHover}`}>
          <p>HOGAR</p>
          {iconArrowRight}
        </div>
        <div id="company" className={`menuLeft ${company.colorHover}`}>
          <p>EMPRESA</p>
          {iconArrowRight}
        </div>
      </div>
      <div className={`viewConditionalContent ${opening}`}>
        <div className="viewConditionalContainer">
          <p>En Erco utilizamos la tecnología para transformar la energía.</p>
          <div className="viewConditionalButton">
            <Link href="/">
              <a className="viewConditionalButtonText">Conoce más</a>
            </Link>
            <div className="text-primary-500 text-xl">{iconArrow}</div>
          </div>
        </div>
      </div>
      <div className={`hiddenConditional ${home.class}`}>
        <div className="p-6 flex flex-col h-full w-full justify-between">
          {navInfo.map((item, i) => (
            <Link
              key={i}
              href={
                typeService === "Hogar"
                  ? `/services/home${item.link}`
                  : `/services/company${item.link}`
              }
            >
              <a
                className={
                  i === 2
                    ? `flex justify-between w-full ${company.opacity}`
                    : "flex justify-between w-full"
                }
              >
                <div
                  className={
                    i === 1
                      ? "hiddenConditionalIcon bg-[#F3FCD6]"
                      : "hiddenConditionalIcon"
                  }
                >
                  {item.icon}
                </div>
                <div className="hiddenConditionalText w-4/5">
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPanel;
