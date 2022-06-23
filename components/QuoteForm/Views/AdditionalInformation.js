import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { InputTextarea } from "primereact/inputtextarea";

import {
  additionalInformation,
  optionsQuestion
} from "../../../content/data/quoteData";

import { AutoComplete } from "primereact/autocomplete";
import { Dialog } from "primereact/dialog";
import { dataAdditionalInformation, disabledNextPageFormState } from "../../../recoil/atoms";

const AdditionalInformation = () => {
  const title = additionalInformation.title;
  const terms = additionalInformation.terms.split(" ");


  const [additionalInformationAtom, setAdditionalInformationAtom] = useRecoilState(dataAdditionalInformation);
  const [disabledNextPage, setDisabledNextPage] = useRecoilState(disabledNextPageFormState);

  const [filteredItems, setFilteredItems] = useState(null);

  /**
   * It takes the query from the input field and filters the places array based on the query.
   * @param event - The event object.
   */
  const searchItems = (event) => {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let query = event.query;
    let _filteredItems = [];

    for (let i = 0; i < optionsQuestion.length; i++) {
      let option = optionsQuestion[i];
      if (option.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        _filteredItems.push(option);
      }
    }

    setFilteredItems(_filteredItems);
  };

  const validateRequired = useCallback( () => {
    let allReady = false;

    if(additionalInformationAtom.meetUs && additionalInformationAtom.moreInformation && additionalInformationAtom.agreeTerms) {
      allReady = true;
    }

    if(allReady) {
      setDisabledNextPage(false);
    } else {
      setDisabledNextPage(true);
    }
  },[additionalInformationAtom, setDisabledNextPage])

  useEffect(() => {
    validateRequired(true);
  }, [validateRequired])

  const onChangeInfo = (id, data) => {
    setAdditionalInformationAtom({
      ...additionalInformationAtom,
      [id]: data
    })
  }

  return (
    <div className="additionalIContent">
      <div className="additionalIContainer">
        <div className="titleQuoteContent">
          <h5 className="titleQuote">{title}</h5>
        </div>
        <div className="additionalIQ1">
          <label className="additionalIText">{additionalInformation.q1}</label>
          <span className="text-secondary-500">*</span>
          <AutoComplete
            className="inputRounded mt-4"
            value={additionalInformationAtom.meetUs}
            suggestions={filteredItems}
            completeMethod={searchItems}
            virtualScrollerOptions={{ itemSize: 10 }}
            field="label"
            dropdown
            onChange={(e) => onChangeInfo('meetUs', e.value)}
            aria-label="meetUs"
          />
        </div>
        <div className="additionalIQ2">
          <label className="additionalIText">{additionalInformation.q2}</label>
          <span className="text-secondary-500">*</span>
          <div className="inputRounded mt-4">
            <InputTextarea
              value={additionalInformationAtom.moreInformation}
              onChange={(e) => onChangeInfo('moreInformation', e.target.value)}
              rows={5}
              cols={30}
              className="additionalInputTextarea"
            />
          </div>
        </div>
        <div className="additionalITerms">
          <label className="additionalCheckbox">
            <input type="checkbox" checked={additionalInformationAtom.agreeTerms} onChange={(e) => onChangeInfo('agreeTerms', e.target.checked)} />
            <span className="checkmark"></span>
          </label>
          <small>
            {terms[0]}{" "}
            <span className="underline">
              {terms[1]} {terms[2]} {terms[3]}
            </span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
