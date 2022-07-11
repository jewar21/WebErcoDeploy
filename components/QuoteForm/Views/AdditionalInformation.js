import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from 'primereact/dropdown';
// import { AutoComplete } from "primereact/autocomplete";
// import { Dialog } from "primereact/dialog";

import {
  additionalInformation,
  optionsQuestion
} from "../../../content/data/quoteData";

import { dataAdditionalInformation, disabledNextPageFormState } from "../../../recoil/atoms";

const AdditionalInformation = () => {
  const title = additionalInformation.title;
  const terms = additionalInformation.terms.split(" ");


  const [additionalInformationAtom, setAdditionalInformationAtom] = useRecoilState(dataAdditionalInformation);
  const [disabledNextPage, setDisabledNextPage] = useRecoilState(disabledNextPageFormState);

  const [errorMessageIQ1, setErrorMessageIQ1] = useState(null);
  const [errorMessageIQ2, setErrorMessageIQ2] = useState(null);

  const validateRequired = useCallback( () => {
    let allReady = false;

    if(additionalInformationAtom.meetUs && additionalInformationAtom.moreInformation && additionalInformationAtom.agreeTerms) {
      allReady = true;
    } 

    if(allReady) {
      setDisabledNextPage(false);
      setErrorMessageIQ1(null)
      setErrorMessageIQ2(null)
    } else {
      setDisabledNextPage(true);
      if(!additionalInformationAtom.meetUs)
        setErrorMessageIQ1('Este campo es requerido.')
      else
        setErrorMessageIQ1(null)
    
      if(!additionalInformationAtom.moreInformation)
        setErrorMessageIQ2('Este campo es requerido.')
      else
        setErrorMessageIQ2(null)
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
        <div className="additionalIQ1 generalInput">
          <label className="additionalIText">{additionalInformation.q1}</label>
          <span className="text-secondary-500">*</span>
          <Dropdown 
            showClear
            className={`mt-4 ${errorMessageIQ1 && 'p-invalid'} ${!additionalInformationAtom.meetUs && 'd-none'}`}
            value={additionalInformationAtom.meetUs} 
            options={optionsQuestion} 
            onChange={(e) => onChangeInfo('meetUs', e.value)}
            optionLabel="label" 
            placeholder="Seleccione una opción" 
            emptyMessage='Sin información' 
            virtualScrollerOptions={{ itemSize: 10 }}
          />
          {errorMessageIQ1 &&
            <small className="p-error p-d-block">{errorMessageIQ1}</small>
          }
        </div>
        <div className="additionalIQ2">
          <label className="additionalIText">{additionalInformation.q2}</label>
          <span className="text-secondary-500">*</span>
          <div className={`mt-4 ${errorMessageIQ2 && 'inputRoundedError'}`}>
            <InputTextarea
              value={additionalInformationAtom.moreInformation}
              onChange={(e) => onChangeInfo('moreInformation', e.target.value)}
              rows={5}
              cols={30}
              className={`additionalInputTextarea ${errorMessageIQ2 && 'p-invalid p-d-block'}`}
            />
          </div>
          {errorMessageIQ2 &&
            <small className="p-error p-d-block">{errorMessageIQ2}</small>
          }
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
