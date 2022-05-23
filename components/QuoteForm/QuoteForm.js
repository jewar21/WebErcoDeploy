import React from "react";

import { Dialog } from "primereact/dialog";

import PropTypes from "prop-types";

import { useRecoilState } from "recoil";
import { quoteCountState, quoteContentState } from "../../recoil/atoms";

import { iconArrow, iconArrowL } from "../../content/globalData";

// Views
import GeneralInformation from "./Views/GeneralInformation";
import TypeOfSystem from "./Views/TypeOfSystem";
import Infrastructure from "./Views/Infrastructure";
import EnergyBill from "./Views/EnergyBill";
import AdditionalInformation from "./Views/AdditionalInformation";
import Confirmation from "./Views/Confirmation";

const QuoteForm = () => {
  const [count, setCount] = useRecoilState(quoteCountState);

  return (
    <div className="quoteContent">
        {count !== 5 && (
          <div className="progressBarQuote">
            <div className="progressBarQuote-line">
              <div id="progress" className={`progressBarQuote-line-fill`}></div>
            </div>
          </div>
        )}
        {count !== 5 && (
          <div className="quoteContainer">
            <form className="dynamicContent">
              {count === 0 && <GeneralInformation />}
              {count === 1 && <Infrastructure />}
              {count === 2 && <TypeOfSystem />}
              {count === 3 && <EnergyBill />}
              {count === 4 && <AdditionalInformation />}
            </form>

            <div
              className={
                count === 0 ? "flex justify-end" : "flex justify-between"
              }
            >
              {count !== 0 && (
                <button
                  className="baseButton backButton"
                  onClick={() => setCount(count - 1)}
                >
                  <div className="text-2xl">{iconArrowL}</div>
                  <p className="hidden lg:block">Anterior</p>
                </button>
              )}
              <button
                className="baseButton nextButton"
                onClick={() => setCount(count + 1)}
              >
                <p className="hidden lg:block">Siguiente</p>
                <div className="text-2xl">{iconArrow}</div>
              </button>
            </div>
          </div>
        )}
      {count === 5 && <Confirmation />}
    </div>
  );
};

export default QuoteForm;
