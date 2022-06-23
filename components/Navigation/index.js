import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useMediaQuery } from "react-responsive";

import { DeviceSize } from "../../utils/handlers/handlers";

/* It's importing a function that returns a svg. */
import { ercoLogo } from "../../content/globalData";

/* Importing the components that are going to be used in the Navbar. */
import NavLinks from "./components/NavLinks";
import MobileNav from "./components/MobileNav";
import QuoteButton from "../PartialComponents/QuoteButton";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { nameCountry, navbarInfo, textsButtons } from "../../recoil/atoms";

const Navbar = () => {
  const country = useRecoilValue(nameCountry);
  const navbar = useRecoilValue(navbarInfo);
  const buttonText = useRecoilValue(textsButtons);
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet });

  const iconFlag = navbar.iconFlag;

  return (
    <nav className="navbarContainer">
      <div className="navbarDivContainer">
        <Link href={`/${country}`}>
          <a className="navbarLogo">
            {isMobile ? ercoLogo(102, 28) : ercoLogo(142, 40)}
          </a>
        </Link>
        {isTablet ? (
          <MobileNav navbar={navbar} />
        ) : (
          <>
            <div className="navbarLinks">
              <NavLinks navbar={navbar} />
            </div>
            <div className="navbarButtons">
              {iconFlag && (
                <Image
                  src={iconFlag.src}
                  alt={iconFlag.alt}
                  width={28}
                  height={28}
                />
              )}
              <QuoteButton
                buttonParameters={
                  "w-12.5rem h-12 font-bold bg-primary-500 text-darkGrey-900"
                }
                buttonText={buttonText[0]}
                isIcon={false}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
