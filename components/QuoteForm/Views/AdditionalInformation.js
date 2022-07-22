import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from 'primereact/dropdown';

import {
  additionalInformation,
  optionsQuestion
} from "../../../content/data/quoteData";

import { dataAdditionalInformation, disabledNextPageFormState } from "../../../recoil/atoms";
import { ValidateDataRequired } from "../../../utils/handlers/handlers";

const AdditionalInformation = () => {
  const title = additionalInformation.title;
  const terms = additionalInformation.terms.split(" ");


  const [additionalInformationAtom, setAdditionalInformationAtom] = useRecoilState(dataAdditionalInformation);
  const [disabledNextPage, setDisabledNextPage] = useRecoilState(disabledNextPageFormState);

  const validateRequired = (data, id) => {
    let allReady = true;

    for (let el in additionalInformationAtom) {
      const { value, isRequired, typeValidation } = additionalInformationAtom[el];
      let valueSend = value
      
      if(id && id === el) {
        valueSend = data
      }

      if(isRequired) {
        const { status, error } = ValidateDataRequired(valueSend, typeValidation)
        if(!status) allReady = status

        if(!!error && id === el) {
          setAdditionalInformationAtom({
            ...additionalInformationAtom,
            [id]: { ...additionalInformationAtom[id], value:valueSend, errorMessage: error }
          })
        } else if(id === el) {
          setAdditionalInformationAtom({
            ...additionalInformationAtom,
            [id]: { ...additionalInformationAtom[id], value:valueSend, errorMessage: null }
          })
        }
      }
    }

    console.log('allReady',allReady)

    if(allReady) {
      setDisabledNextPage(false);
    } else {
      setDisabledNextPage(true);
    }
  }

  useEffect(() => {
    validateRequired();
  }, [])

  const onChangeInfo = (id, data) => {
    // setAdditionalInformationAtom({
    //   ...additionalInformationAtom,
    //   [id]: data
    // })
    validateRequired(data, id)
  }

  return (
    <div className="additionalIContent">
      <div className="additionalIContainer">
        <div className="titleQuoteContent">
          <h5 className="titleQuote">{title}</h5>
        </div>
        <div className={`additionalIQ1 generalInput ${additionalInformationAtom.meetUs.errorMessage && 'inputRoundedError'}`}>
          <label className="additionalIText">{additionalInformation.q1}</label>
          <span className="text-secondary-500">*</span>
          <Dropdown 
            showClear
            className={`mt-4 ${additionalInformationAtom.meetUs.errorMessage && 'p-invalid'} ${!additionalInformationAtom.meetUs.value && 'd-none'}`}
            value={additionalInformationAtom.meetUs.value} 
            options={optionsQuestion} 
            onChange={(e) => onChangeInfo('meetUs', e.value)}
            optionLabel="label" 
            placeholder="Seleccione una opción" 
            emptyMessage='Sin información' 
            virtualScrollerOptions={{ itemSize: 10 }}
          />
          {additionalInformationAtom.meetUs.errorMessage &&
            <small className="p-error p-d-block">{additionalInformationAtom.meetUs.errorMessage}</small>
          }
        </div>
        <div className="additionalIQ2">
          <label className="additionalIText">{additionalInformation.q2}</label>
          <span className="text-secondary-500">*</span>
          <div className={`mt-4 ${additionalInformationAtom.moreInformation.errorMessage && 'inputRoundedError'}`}>
            <InputTextarea
              value={additionalInformationAtom.moreInformation.value}
              onChange={(e) => onChangeInfo('moreInformation', e.target.value)}
              rows={5}
              cols={30}
              className={`additionalInputTextarea ${additionalInformationAtom.moreInformation.errorMessage && 'p-invalid p-d-block'}`}
            />
          </div>
          {additionalInformationAtom.moreInformation.errorMessage &&
            <small className="p-error p-d-block">{additionalInformationAtom.moreInformation.errorMessage}</small>
          }
        </div>
        <div className="additionalITerms">
          <label className="additionalCheckbox">
            <input type="checkbox" checked={additionalInformationAtom.agreeTerms.value} onChange={(e) => onChangeInfo('agreeTerms', e.target.checked)} />
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
