import React, { useState } from "react";
import { Dialog } from "primereact/dialog";

import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import { useRecoilState } from "recoil";
import { quoteCountState } from "../../recoil/atoms";

import { DeviceSize } from "../../utils/handlers/handlers";

import { iconArrow, ercoLogo } from "../../content/globalData";

import QuoteForm from "../QuoteForm/QuoteForm";

const QuoteButton = ({ buttonParameters, buttonText, isIcon }) => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [count, setCount] = useRecoilState(quoteCountState);

  const openQuote = () => {
    setIsOpenModal(true);
  };

  const closeQuote = () => {
    setIsOpenModal(false);
    setCount(0);
  };

  return (
    <>
      <button
        className={`globalButton ${buttonParameters}`}
        Button
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
  buttonText: PropTypes.string.isRequired,
  isIcon: PropTypes.bool.isRequired
};

export default QuoteButton;
