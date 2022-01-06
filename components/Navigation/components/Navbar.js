import React from "react";

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
      className={`flex fixed w-full bg-lightGrey-100 h-14 lg:h-24 ${
        isScrolling > 20 ? "scrolling" : null
      }`}
    >
      <div className="flex w-full justify-between mx-6 lg:mx-20">
        <div className="flex h-full items-center">
          {isMobile ? ercoLogo("102", "28") : ercoLogo("142", "40")}
        </div>
        {isTablet ? (
          <MobileNav />
        ) : (
          <>
            <div className="flex h-full items-center w-3/5">
              <NavLinks />
            </div>
            <div className="flex justify-evenly h-full w-1/4 items-center">
              <CountriesButton />
              <QuoteButton
                buttonParameters={"w-52 h-12"}
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
