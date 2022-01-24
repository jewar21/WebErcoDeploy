import React from "react";
import Link from "next/link";

import { useMediaQuery } from "react-responsive";

import { DeviceSize } from "../../../utils/handlers/handlers";
import { ercoLogo } from "../../../content/data/homeData";

import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import QuoteButton from "../../PartialComponents/QuoteButton";
import CountriesButton from "./CountriesButton";

const Navbar = ({ isScrolling }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet });
  return (
    <nav className={`navbarContainer ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbarDivContainer">
        <Link href="/">
          <a className="navbarLogo">
            {isMobile ? ercoLogo(102, 28) : ercoLogo(142, 40)}
          </a>
        </Link>
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
                buttonParameters={"w-12.5rem h-12 font-bold bg-primary-500 text-darkGrey-900"}
                buttonText={"¡Quiero cotizar!"}
                isIcon={true}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
