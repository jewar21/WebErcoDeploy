import React from "react";

import { typeOfSystem } from "../../../content/data/quoteData";

const TypeOfSystem = () => {
  const title = typeOfSystem.title;
  const cards = typeOfSystem.cards;

  return (
    <div className="typeOfSystemContent">
      <div className="typeOfSystemContainer">
        <div className="titleQuoteContent">
          <h5 className="titleQuote">{title}</h5>
        </div>
        <div className="typeOfSystemCardContent">
          {cards.map((card, i) => {
            const subTitle = card.subTitle;
            const desc = card.desc;
            return (
              <div className="typeOfSystemCard" key={i}>
                <h5>{subTitle}</h5>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TypeOfSystem;
