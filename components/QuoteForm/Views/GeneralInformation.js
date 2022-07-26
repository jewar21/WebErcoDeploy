import React, { useState, useEffect } from "react";

import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';

import { generalInformations, places } from "../../../content/data/quoteData";
import { dataGeneralInformation, disabledNextPageFormState } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";
import { remplaceInfo, ValidateDataRequired } from "../../../utils/handlers/handlers";

const GeneralInformation = () => {
  const { title, fiels, selections } = generalInformations;
  const { question, id } = selections;

  const [dataGeneral, setDataGeneral] = useRecoilState(dataGeneralInformation);
  const [nextPage, setNextPage] = useRecoilState(disabledNextPageFormState);
  
  useEffect(() => {
    validateRequired();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const validateRequired = (data, id) => {
    let allReady = true;

    for( let el in dataGeneral) {
      const { value, isRequired, typeValidation } = dataGeneral[el];
      let valueSend = value

      if(id && id === el) {
        valueSend = data
      } 
      
      if(isRequired) {
        const { status, error } = ValidateDataRequired(valueSend, typeValidation)
        if(!status) allReady = status

        if(!!error && id === el) {
          setDataGeneral({
            ...dataGeneral,
            [id]: { ...dataGeneral[id], value:valueSend, errorMessage: error }
          })
        } else if(id === el) {
          setDataGeneral({
            ...dataGeneral,
            [id]: { ...dataGeneral[id], value:valueSend, errorMessage: null }
          })
        }
      }
    }

    if(allReady) {
      console.log('Activa boton next')
      setNextPage(false);
    } else {
      console.log('Desactiva boton next')
      setNextPage(true);
    }

  }

  const changeInput = (value, id, type) => {
    value = remplaceInfo(value, type);
    validateRequired(value, id);
  }

  return (
    <div className="generalIContent">
      <div className="generalIContainer">
        <div className="titleQuoteContent">
          <h5 className="titleQuote">{title}</h5>
        </div>
        <div className="generalICards">
          {fiels.map((fiel, i) => {
            const { question, id } = fiel;
            const { value, isRequired, typeValidation, errorMessage } = dataGeneral[id];
            return (
              <div className="generalInput" key={i}>
                <div className="generalIQuestion">
                  <label>{question}</label>
                  {isRequired &&
                    <span>*</span>
                  }
                </div>
                <div className={`${errorMessage && 'inputRoundedError'}`}>
                  <InputText value={value} onChange={(e) => changeInput(e.target.value, id, typeValidation)} className={`${errorMessage && 'p-invalid p-d-block'}`} />
                </div>
                {errorMessage &&
                  <small className="p-error p-d-block">{errorMessage}</small>
                }
              </div>
            );
          })}
          <div className={`generalInput ${dataGeneral.department.errorMessage && 'inputRoundedError'}`}>
            <div className="generalIQuestion">
              <label>{question}</label>
              {dataGeneral.department.isRequired &&
                <span>*</span>
              }
            </div>
            <Dropdown 
              showClear
              // filter
              className={`${dataGeneral.department.errorMessage && 'p-invalid'} ${!dataGeneral.department.value && 'd-none'}`}
              value={dataGeneral.department.value} 
              options={places} 
              onChange={(e) => changeInput(e.value, id)}
              optionLabel="label" 
              // filterBy="label"
              placeholder="Seleccione una opción" 
              emptyMessage='Sin información' 
              // emptyFilterMessage='Sin resultados'
              virtualScrollerOptions={{ itemSize: 10 }}
              // showFilterClear={true}
            />
            {dataGeneral.department.errorMessage &&
              <small className="p-error p-d-block">{dataGeneral.department.errorMessage}</small>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;