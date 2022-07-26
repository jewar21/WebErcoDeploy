import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

/* Recoil. */
import { useRecoilState, useRecoilValue } from "recoil";
import { mobilePanelServiceState, nameCountry } from "../../../recoil/atoms";

/* I'm using the react-responsive library to detect the device size and the primereact library to
create a panel that is displayed when the user clicks on the services button. */
import { useMediaQuery } from "react-responsive";
import { OverlayPanel } from "primereact/overlaypanel";
import { RiArrowRightLine } from "react-icons/ri";

/* I'm importing the DeviceSize object to use it in the react-responsive library.
 */
import { DeviceSize } from "../../../utils/handlers/handlers";

/* I'm importing the components that I use in the panel. */
import ServicesPanel from "./ServicesPanel";
import ServicesPanelMobile from "./ServicesPanelMobile";

const NavLinks = ({ navbar }) => {
  const op = useRef(null);
  const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet });
  const [isOpenPanel, setOpenPanel] = useRecoilState(mobilePanelServiceState);
  const country = useRecoilValue(nameCountry);

  const { menu, services, iconFlag } = navbar;

  return (
    <div className="navLinksContainer">
      {menu && (
        <ul className="contentUl">
          <Link href={`/${country}`}>
            <a className="navLinksActive navLinksActiveMobile">{menu[0]}</a>
          </Link>
          {isTablet ? (
            <div className="flex justify-between navLinksActiveMobile">
              <p>{navbar && menu[1]}</p>
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
                disabled //Quitar, solo para QA del Home
              >
                {menu[1]}
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
                <ServicesPanel data={services} />
              </OverlayPanel>
            </>
          )}

          {/* <Link href={`/${country}/projects`}> */} 
          {/* Unir ramas para luego habilitar esto, pendiente (Terminar proyectos) */}
          <Link href={`/${country}`}>
            <a className="navLinksActive navLinksActiveMobile">{menu[2]}</a>
          </Link>
          <Link href={`/${country}`}>
            <a className="navLinksActive navLinksActiveMobile">{menu[3]}</a>
          </Link>
          <Link href={`/${country}`}>
            <a className="navLinksActive navLinksActiveMobile">{menu[4]}</a>
          </Link>
          <Link href={`/${country}/contactUs`}>
            <a className="navLinksActive navLinksActiveMobile">{menu[5]}</a>
          </Link>
        </ul>
      )}
      {isTablet && (
        <div className="flex mb-6">
          {iconFlag.map((e, i) => (
            <div
              key={i}
              className={
                i === 0
                  ? "countriesButton border-primary-500 border-2 "
                  : i === 1
                  ? "countriesButton mx-2"
                  : "countriesButton"
              }
            >
              <Image src={e.src} alt={e.alt} width={32} height={32} />
            </div>
          ))}
        </div>
      )}
      {isOpenPanel && <ServicesPanelMobile data={services} />}
    </div>
  );
};

NavLinks.propTypes = { navbar: PropTypes.object.isRequired };

export default NavLinks;
