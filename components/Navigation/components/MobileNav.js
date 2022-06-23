import React, { useState } from "react";
import PropTypes from "prop-types";

import NavLinks from "./NavLinks";
import MenuToggle from "./MenuToggle";

const MobileNav = ({ navbar }) => {
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
          <NavLinks navbar={navbar} />
        </div>
      )}
    </div>
  );
};

MobileNav.propTypes = { navbar: PropTypes.object.isRequired };

export default MobileNav;
