import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
// import "primeflex/primeflex.css";

import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import PropTypes from "prop-types";

import { iconArrow, ercoLogo } from "../../content/globalData";

const QuoteButton = ({ buttonParameters, buttonText, isIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderFooter = (
    <div>
      <Button
        label="Next"
        icon="pi pi-times"
        onClick={() => {
          setIsOpen(false);
        }}
        className="p-button-text"
      />
      <Button
        label="Previus"
        icon="pi pi-check"
        onClick={() => {
          setIsOpen(false);
        }}
        autoFocus
      />
    </div>
  );

  return (
    <button
      className={`globalButton ${buttonParameters}`}
      Button
      label="Top"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <Dialog
        header={ercoLogo(142, 40)}
        visible={isOpen}
        position={"top"}
        modal
        style={{ width: "95vw", height: "100vh" }}
        footer={renderFooter}
        onHide={() => {
          setIsOpen(false);
        }}
        draggable={false}
        resizable={false}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close
        </button>
      </Dialog>
      <p>{buttonText}</p>
      {isIcon && <div className="text-2xl">{iconArrow}</div>}
    </button>
  );
};

QuoteButton.propTypes = {
  buttonParameters: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isIcon: PropTypes.bool.isRequired
};

export default QuoteButton;
