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
  const [overCompany, setoverCompany] = useState(false);
  const [typeService, setTypeService] = useRecoilState(typeServiceState);
  console.log(typeService);

  const handleClick = (e, isCompany) => {
    if (isCompany) {
      setTypeService("company");
    } else {
      setTypeService("home");
    }
  };

  useEffect(() => {
    const divHome = document.querySelector("#home");
    const divCompany = document.querySelector("#company");
    const divServicesPanel = document.querySelector("#servicesPanel");

    divHome.addEventListener("mouseover", () => {
      setHome(viewedComponent);
      setCompany(initialState);
      setopening(initialState.class);
      setoverCompany(false);
    });

    divServicesPanel.addEventListener("mouseleave", () => {
      setHome(initialState);
      setopening(viewedComponent.class);
    });

    divCompany.addEventListener("mouseover", () => {
      setHome(viewedComponent.class);
      setCompany(viewedComponent);
      setopening(initialState.class);
      setoverCompany(true);
    });

    divServicesPanel.addEventListener("mouseleave", () => {
      setHome(initialState);
      setopening(viewedComponent.class);
      setCompany(initialState);
    });
  }, []);

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
                overCompany
                  ? `/services/company${item.link}`
                  : `/services/home${item.link}`
              }
            >
              <a
                onClick={(e) => handleClick(e, overCompany)}
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
