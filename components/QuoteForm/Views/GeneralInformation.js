import React, { useState, useEffect } from "react";

import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";

import { generalInformations, places } from "../../../content/data/quoteData";
import { dataGeneralInformation, disabledNextPageFormState } from "../../../recoil/atoms";
import { useRecoilState } from "recoil";
import { remplaceInfo, ValidateDataRequired } from "../../../utils/handlers/handlers";

const GeneralInformation = () => {
  const { title, fiels, selections } = generalInformations;
  const { question, id } = selections;

  const [dataGeneral, setDataGeneral] = useRecoilState(dataGeneralInformation);
  const [nextPage, setNextPage] = useRecoilState(disabledNextPageFormState);
  
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    validateRequired();
  }, [])
  

  /**
   * It takes the query from the input field and filters the places array based on the query.
   * @param event - The event object.
   */
  const searchItems = (event) => {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let query = event.query;
    let _filteredItems = [];

    for (let i = 0; i < places.length; i++) {
      let place = places[i];
      if (place.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        _filteredItems.push(place);
      }
    }

    setFilteredItems(_filteredItems);
  };

  const validateRequired = (data, id) => {
    let allReady = true;

    for( let el in dataGeneral) {
      const { value, isRequired, typeValidation } = dataGeneral[el];
      let valueSend = value

      if(id) {
        if(id === el){
          valueSend = data
        } 
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
                <div className={`inputRounded ${errorMessage && 'inputRoundedError'}`}>
                  <InputText value={value} onChange={(e) => changeInput(e.target.value, id, typeValidation)} />
                </div>
                {errorMessage &&
                  <small className="p-error p-d-block">{errorMessage}</small>
                }
              </div>
            );
          })}
          <div className="generalInput">
            <div className="generalIQuestion">
              <label>{question}</label>
              {dataGeneral.department.isRequired &&
                <span>*</span>
              }
            </div>
            <AutoComplete
              className="inputRounded"
              value={dataGeneral.department.value}
              suggestions={filteredItems}
              completeMethod={searchItems}
              virtualScrollerOptions={{ itemSize: 10 }}
              field="label"
              dropdown
              onChange={(e) => changeInput(e.value, id)}
              aria-label="Places"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
