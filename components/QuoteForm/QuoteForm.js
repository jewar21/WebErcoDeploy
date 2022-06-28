import React, { useState } from "react";
import axios from 'axios';

import { Dialog } from "primereact/dialog";

import PropTypes from "prop-types";

import { useRecoilState, useRecoilValue } from "recoil";
import { quoteCountState, quoteContentState, disabledNextPageFormState } from "../../recoil/atoms";

import { iconArrow, iconArrowL } from "../../content/globalData";

// Views
import GeneralInformation from "./Views/GeneralInformation";
import TypeOfSystem from "./Views/TypeOfSystem";
import Infrastructure from "./Views/Infrastructure";
import EnergyBill from "./Views/EnergyBill";
import AdditionalInformation from "./Views/AdditionalInformation";
import Confirmation from "./Views/Confirmation";
import { dataToSendZoho } from "../../recoil/selectors";

const QuoteForm = () => {
  const [count, setCount] = useRecoilState(quoteCountState);
  const [nextPage, setNextPage] = useRecoilState(disabledNextPageFormState);

  const dataSend = useRecoilValue(dataToSendZoho);

  // const [next, setNext] = useState(false)

  const clickPrevius = () => {
    console.log('clickPrevius')
    setCount(count - 1)
    // setNextPage(false)
  }

  const clickNext = async () => {
    console.log('clickNext',count)
    if(count !== 4) {
      setCount(count + 1);
    } else {
      console.log('dataSend',dataSend)
      const URL = process.env.NEXT_PUBLIC_API_URL;
      const CONFIG = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (event) => {
          console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
        },
      }
      const {status, data} = await axios.post(`${URL}zoho/new_entity`, dataSend, CONFIG);

      console.log('status',status)
      console.log('data',data)
      if(status === 200 && data.status === 'SUCCESS') {
        // setCount(count + 1);
      } else {
        console.log('Error algo salio mal. STATUS:', status)
        console.log('Error', data.message)
      }
    }
  }

  return (
    <div className="quoteContent">
        {count !== 5 && (
          <div className="progressBarQuote">
            <div className="progressBarQuote-line">
              <div id="progress" className={`progressBarQuote-line-fill`}></div>
            </div>
          </div>
        )}
        {count !== 5 && (
          <div className="quoteContainer">
            <form className="dynamicContent">
              {count === 0 && <GeneralInformation />}
              {count === 1 && <Infrastructure />}
              {count === 2 && <TypeOfSystem />}
              {count === 3 && <EnergyBill />}
              {count === 4 && <AdditionalInformation />}
            </form>

            <div
              className={
                count === 0 ? "flex justify-end" : "flex justify-between"
              }
            >
              {count !== 0 && (
                <button
                  className="baseButton backButton"
                  onClick={clickPrevius}
                >
                  <div className="text-2xl">{iconArrowL}</div>
                  <p className="hidden lg:block">Anterior</p>
                </button>
              )}
              <button
                className="baseButton nextButton disabled:opacity-75"
                onClick={clickNext}
                disabled={nextPage}
              >
                <p className="hidden lg:block">Siguiente</p>
                <div className="text-2xl">{iconArrow}</div>
              </button>
            </div>
          </div>
        )}
      {count === 5 && <Confirmation />}
    </div>
  );
};

export default QuoteForm;
