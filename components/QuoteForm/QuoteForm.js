import React from "react";

import { Dialog } from "primereact/dialog";

import PropTypes from "prop-types";

import { useRecoilState } from "recoil";
import { quotePanelState } from "../../recoil/atoms";

import { iconArrow, iconArrowL } from "../../content/globalData";

// Views
import GeneralInformation from "./Views/GeneralInformation";
import TypeOfSystem from "./Views/TypeOfSystem";
import Infrastructure from "./Views/Infrastructure";
import RoofType from "./Views/RoofType";
import EnergyBill from "./Views/EnergyBill";
import AdditionalInformation from "./Views/AdditionalInformation";
import Confirmation from "./Views/Confirmation";

const QuoteForm = () => {
  return (
    <div className="quoteContent">
      <div className="progressBarQuote">
        <div className="progressBarQuote-line">
          <div id="progress" className="progressBarQuote-line-fill"></div>
        </div>
      </div>
      <div className="quoteContainer">
        <div className="dynamicContent">
          <GeneralInformation />
          <TypeOfSystem />
          <Infrastructure />
          <RoofType />
          <EnergyBill />
          <AdditionalInformation />
          <Confirmation />
        </div>
        <div className="flex justify-between">
          <button className="baseButton backButton">
            <div className="text-2xl">{iconArrowL}</div>
            <p>Anterior</p>
          </button>
          <button className="baseButton nextButton">
            <p>Siguiente</p>
            <div className="text-2xl">{iconArrow}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
