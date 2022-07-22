import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

// Atoms
import {
  dataInfrastructure,
  disabledNextPageFormState
} from "../../../recoil/atoms";

import { infrastructure } from "../../../content/data/quoteData";
import { iconCheck } from "../../../content/globalData";

const Infrastructure = () => {
  const [infrastructureAtom, setInfrastructureAtom] =
    useRecoilState(dataInfrastructure);
  const [disabledNextPage, setDisabledNextPage] = useRecoilState(
    disabledNextPageFormState
  );

  const { title, cards } = infrastructure;

  const validateRequired = useCallback(() => {
    if (infrastructureAtom) {
      setDisabledNextPage(false);
    } else {
      setDisabledNextPage(true);
    }
  }, [infrastructureAtom, setDisabledNextPage]);

  useEffect(() => {
    validateRequired();
  }, [validateRequired]);

  const clickCard = (data) => {
    setInfrastructureAtom(data.name);
  };

  return (
    <div className="infrastructureContent">
      <div className="infrastructureContainer">
        <div className="titleQuoteContent">
          <h5 className="titleQuote">{title}</h5>
        </div>
        <div className="infrastructureCardsContent">
          {cards.map((card, i) => (
            <div
              className={`infrastructureCard ${
                infrastructureAtom === card.name && "activeInfrastructureCard"
              }`}
              key={i}
              onClick={() => clickCard(card)}
            >
              {infrastructureAtom === card.name && (
                <div className="infrastructureIconCheck">{iconCheck}</div>
              )}
              <div className="infrastructureIconText">
                <div>{card.icon}</div>
                <h5
                  className={`${
                    infrastructureAtom === card.name &&
                    "infrastructureTextActive"
                  }`}
                >
                  {card.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
