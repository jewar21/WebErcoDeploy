import React from "react";
// import Link from "next/link";

import { useMediaQuery } from "react-responsive";

import { ercoLogo, DeviceSize } from "../../../utils/handlers/handlers";

import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import QuoteButton from "../../PartialComponents/QuoteButton";
import CountriesButton from "./CountriesButton";

const Navbar = ({ isScrolling }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet });
  return (
    <nav
      className={`navbarContainer ${
        isScrolling > 20 ? "scrolling" : null
      }`}
    >
      <div className="navbarDivContainer">
        <div className="navbarLogo">
          {isMobile ? ercoLogo(102, 28) : ercoLogo(142, 40)}
        </div>
        {isTablet ? (
          <MobileNav />
        ) : (
          <>
            <div className="navbarLinks">
              <NavLinks />
            </div>
            <div className="navbarButtons">
              <CountriesButton />
              <QuoteButton
                buttonParameters={"w-12.5 h-12 font-bold"}
                buttonText={"¡Quiero cotizar!"}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
