import Link from "next/link";
import { MouseEventHandler, useState, useEffect } from "react";

import { RiArrowRightSLine, RiArrowRightLine } from "react-icons/ri";

import { navInfo } from "../../../content/data/homeData";

const iconArrowRightL = <RiArrowRightLine />;
const iconArrowRight = <RiArrowRightSLine />;

const ServicesPanel = () => {
  const [className, setclassName] = useState("");

  useEffect(() => {
    const divHome = document.querySelector("#home");
    const divCompany = document.querySelector("#company");
    divHome.addEventListener("mouseover", () => {
      console.log("event mouseOver");
      setclassName("navLinksActiveMobile");
    });
  }, []);

  return (
    <div className="servicesPanelContent">
      <div className="servicesPanelLeft">
        <div id="home" className="menuLeft">
          <p>HOGAR</p>
          {iconArrowRight}
        </div>
        <div id="company" className="menuLeft">
          <p>EMPRESA</p>
          {iconArrowRight}
        </div>
      </div>
      <div className="servicesPanelRight">
        <div className="">
          <p>En Erco utilizamos la tecnología para transformar la energía.</p>
          <div>
            <Link href="/">
              <a className="">Conoce más</a>
            </Link>
            {iconArrowRightL}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPanel;
