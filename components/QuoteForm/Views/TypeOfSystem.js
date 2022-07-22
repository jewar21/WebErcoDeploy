import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

import { typeOfSystem } from "../../../content/data/quoteData";
import { dataTypeOfSystem, disabledNextPageFormState } from "../../../recoil/atoms";

const TypeOfSystem = () => {
  const [typeOfSystemAtom, setTypeOfSystemAtom] = useRecoilState(dataTypeOfSystem);
  const [disabledNextPage, setDisabledNextPage] = useRecoilState(disabledNextPageFormState);

  const { title, cards } = typeOfSystem;

  const validateRequired = useCallback( () => {
    if(typeOfSystemAtom) {
      setDisabledNextPage(false)
    } else {
      setDisabledNextPage(true)
    }
  },[typeOfSystemAtom, setDisabledNextPage])

  useEffect(() => {
    validateRequired();
  }, [validateRequired])

  const clickCard = (data) => {
    setTypeOfSystemAtom(data)
  }

  return (
    <div className="typeOfSystemContent">
      <div className="typeOfSystemContainer">
        <div className="titleQuoteContent">
          <h5 className="titleQuote">{title}</h5>
        </div>
        <div className="typeOfSystemCardContent">
          {cards.map((card, i) => {
            const { subTitle, desc } = card;
            return (
              <div className={`typeOfSystemCard ${typeOfSystemAtom === subTitle && "activeTypeOfSystemCard"}`} key={i} onClick={() => clickCard(subTitle)} >
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
