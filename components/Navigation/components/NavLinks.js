import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";

import { useRecoilState } from "recoil";
import { mobilePanelServiceState } from "../../../recoil/atoms";

import { useMediaQuery } from "react-responsive";
import { OverlayPanel } from "primereact/overlaypanel";
import { RiArrowRightLine } from "react-icons/ri";

import { DeviceSize } from "../../../utils/handlers/handlers";
import { co, pa, us } from "../../../content/data/homeData";

// components

import ServicesPanel from "./ServicesPanel";
import ServicesPanelMobile from "./ServicesPanelMobile";

const NavLinks = () => {
  const op = useRef(null);
  const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet });
  const [isOpenPanel, setOpenPanel] = useRecoilState(mobilePanelServiceState);

  return (
    <div className="navLinksContainer">
      <ul className="contentUl">
        <Link href="/">
          <a className="navLinksActive navLinksActiveMobile">¿Quiénes somos?</a>
        </Link>
        {isTablet ? (
          <div className="flex justify-between navLinksActiveMobile">
            <p>Servicios</p>
            <button
              type="button"
              onClick={() => {
                setOpenPanel(!isOpenPanel);
              }}
            >
              <RiArrowRightLine className="iconArrow" />
            </button>
          </div>
        ) : (
          <>
            <button
              className="navLinksActive navLinksActiveMobile"
              type="button"
              onClick={(e) => op.current.toggle(e)}
            >
              Servicios
            </button>
            <OverlayPanel
              ref={op}
              style={{
                width: "38rem",
                height: "17rem",
                position: "absolute",
                marginTop: "1rem",
                borderRadius: "1rem"
              }}
            >
              <ServicesPanel />
            </OverlayPanel>
          </>
        )}

        <Link href="/projects">
          <a className="navLinksActive navLinksActiveMobile">Proyectos</a>
        </Link>
        <Link href="/">
          <a className="navLinksActive navLinksActiveMobile">Referidos</a>
        </Link>
        <Link href="/">
          <a className="navLinksActive navLinksActiveMobile">Blog</a>
        </Link>
        <Link href="/contactUs">
          <a className="navLinksActive navLinksActiveMobile">Contacto</a>
        </Link>
      </ul>
      {isTablet && (
        <div className="flex mb-6">
          <div className="countriesButton border-primary-500 border-2 ">
            <Image src={co} alt="Colombia" width={32} height={32} />
          </div>
          <div className="countriesButton mx-2">
            <Image src={pa} alt="Colombia" width={32} height={32} />
          </div>
          <div className="countriesButton">
            <Image src={us} alt="Colombia" width={32} height={32} />
          </div>
        </div>
      )}
      {isOpenPanel && <ServicesPanelMobile />}
    </div>
  );
};

export default NavLinks;
