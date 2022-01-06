import React, { useState, useEffect } from "react";

import NavLinks from "./NavLinks";
import MenuToggle from "./MenuToggle";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mobileNavContainer">
      <MenuToggle
        isOpen={isOpen}
        toggle={() => {
          setOpen(!isOpen);
        }}
      />
      {isOpen && (
        <div className="mobileNav">
          <NavLinks />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
