import React, { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";

import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import { useRecoilState, useResetRecoilState } from "recoil";
import { dataAdditionalInformation, dataEnergyBill, dataGeneralInformation, dataInfrastructure, dataTypeOfSystem, quoteCountState } from "../../recoil/atoms";

import { DeviceSize } from "../../utils/handlers/handlers";

import { iconArrow, ercoLogo } from "../../content/globalData";

import QuoteForm from "../QuoteForm/QuoteForm";

const QuoteButton = ({ buttonParameters, buttonText, isIcon }) => {

  // Reset quote form atoms
  const resetGeneralInformation = useResetRecoilState(dataGeneralInformation);
  const resetInfrastructure = useResetRecoilState(dataInfrastructure);
  const resetTypeOfSystem = useResetRecoilState(dataTypeOfSystem);
  const resetEnergyBill = useResetRecoilState(dataEnergyBill);
  const resetAdditionalInformation = useResetRecoilState(dataAdditionalInformation);

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [count, setCount] = useRecoilState(quoteCountState);

  const openQuote = () => {
    setIsOpenModal(true);
  };

  const closeQuote = () => {
    // Reset quote form atoms
    resetGeneralInformation();
    resetInfrastructure();
    resetTypeOfSystem();
    resetEnergyBill();
    resetAdditionalInformation();
    
    setIsOpenModal(false);
    setCount(0);
  };

  useEffect(() => {
    if(isOpenModal) {
      document.querySelectorAll('html').forEach(target => {
        target.classList.add('no-scroll')
      });
    } else {
      document.querySelectorAll('html').forEach(target => {
        target.classList.remove('no-scroll')
      });
    }
  }, [isOpenModal])

  return (
    <>
      <button
        className={`globalButton ${buttonParameters}`}
        label="Top"
        onClick={openQuote}
      >
        <p>{buttonText}</p>
        {isIcon && <div className="text-2xl">{iconArrow}</div>}
      </button>
      <Dialog
        header={
          count !== 5 && (
            <div className="hidden lg:block">{ercoLogo(192.27, 45)}</div>
          )
        }
        visible={isOpenModal}
        modal
        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
        style={{ width: "95vw", height: "100vh" }}
        onHide={closeQuote}
        draggable={false}
        resizable={false}
      >
        <QuoteForm />
      </Dialog>
    </>
  );
};

QuoteButton.propTypes = {
  buttonParameters: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isIcon: PropTypes.bool.isRequired
};

export default QuoteButton;
