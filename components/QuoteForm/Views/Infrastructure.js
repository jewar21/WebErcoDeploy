import React from "react";

import { infrastructure } from "../../../content/data/quoteData";
import { iconCheck } from "../../../content/globalData";

const Infrastructure = () => {
  const title = infrastructure.title;
  const cards = infrastructure.cards;

  return (
    <div className="infrastructureContent">
      <div className="infrastructureContainer">
        <div className="titleQuoteContent">
          <h5 className="titleQuote">{title}</h5>
        </div>
        <div className="infrastructureCardsContent">
          {cards.map((card, i) => (
            <div className="infrastructureCard" key={i}>
              {false && (
                <div className="infrastructureIconCheck">{iconCheck}</div>
              )}
              <div className="infrastructureIconText">
                <div>{card.icon}</div>
                <h5>{card.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
