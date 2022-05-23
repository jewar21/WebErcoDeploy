import React from "react";

import { energyBill } from "../../../content/data/quoteData";

const EnergyBill = () => {
  const title = energyBill.title;
  const question = energyBill.question;
  const text = energyBill.bill.text;
  const iconUpload = energyBill.bill.icon;
  const question2 = energyBill.question2.q;
  const iconLink = energyBill.question2.icon;
  return (
    <div className="energyBillContent">
      <div className="energyBillContainer">
        <div className="titleQuoteContent">
          <h5 className="titleQuote">{title}</h5>
        </div>
        <div className="pt-6">
          <div className="energyBillQuestion1">
            <label>{question}</label>
            <div className="energyBillYesNo">
              <div className="energyBillOptionContent">
                <div className="energyBillOption"></div>
                <span>{energyBill.yes}</span>
              </div>
              <div className="energyBillOptionContent">
                <div className="energyBillOption"></div>
                <span>{energyBill.no}</span>
              </div>
            </div>
          </div>
          <div className="energyBillUpload">
            <label>{text}</label>
            <div className="energyBillIconUpload">{iconUpload}</div>
          </div>
          <div className="energyBillQuestion2">
            <small>{question2}</small>
            <div>{iconLink}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyBill;
