import React, { useState } from "react";

import { Dialog } from "primereact/dialog";

import PropTypes from "prop-types";

import { useRecoilState } from "recoil";
import { quoteCountState, quoteContentState, disabledNextPageFormState } from "../../recoil/atoms";

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
  const [nextPage, setNextPage] = useRecoilState(disabledNextPageFormState);

  // const [next, setNext] = useState(false)

  const clickPrevius = () => {
    console.log('clickPrevius')
    setCount(count - 1)
    // setNextPage(false)
  }

  const clickNext = () => {
    console.log('clickNext')
    setCount(count + 1)
    // setNextPage(true)
  }

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
                  onClick={clickPrevius}
                >
                  <div className="text-2xl">{iconArrowL}</div>
                  <p className="hidden lg:block">Anterior</p>
                </button>
              )}
              <button
                className="baseButton nextButton disabled:opacity-75"
                onClick={clickNext}
                disabled={nextPage}
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
