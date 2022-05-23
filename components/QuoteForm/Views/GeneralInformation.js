import React, { useState } from "react";

import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";

import { generalInformations, places } from "../../../content/data/quoteData";

const GeneralInformation = () => {
  const title = generalInformations.title;
  const fiels = generalInformations.fiels;
  const selection = generalInformations.selections.question;

  const [value1, setValue1] = useState("");

  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

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

  return (
    <div className="generalIContent">
      <div className="generalIContainer">
        <div className="titleQuoteContent">
          <h5 className="titleQuote">{title}</h5>
        </div>
        <div className="generalICards">
          {fiels.map((fiel, i) => {
            const question = fiel.question;
            return (
              <div className="generalInput" key={i}>
                <div className="generalIQuestion">
                  <label>{question}</label>
                  <span>*</span>
                </div>
                <div className="inputRounded">
                  <InputText onChange={(e) => setValue1(e.target.value)} />
                </div>
              </div>
            );
          })}
          <div className="generalInput">
            <div className="generalIQuestion">
              <label>{selection}</label>
            </div>
            <AutoComplete
              className="inputRounded"
              value={selectedItem}
              suggestions={filteredItems}
              completeMethod={searchItems}
              virtualScrollerOptions={{ itemSize: 10 }}
              field="label"
              dropdown
              onChange={(e) => setSelectedItem(e.value)}
              aria-label="Placves"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
