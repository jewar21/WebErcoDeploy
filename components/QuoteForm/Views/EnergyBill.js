import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

import { energyBill } from "../../../content/data/quoteData";
import { dataEnergyBill, disabledNextPageFormState } from "../../../recoil/atoms";

const EnergyBill = () => {
  const title = energyBill.title;
  const question = energyBill.question;
  const text = energyBill.bill.text;
  const iconUpload = energyBill.bill.icon;
  const question2 = energyBill.question2.q;
  const iconLink = energyBill.question2.icon;

  const [energyBillAtom, setEnergyBillAtom] = useRecoilState(dataEnergyBill);
  const [disabledNextPage, setDisabledNextPage] = useRecoilState(disabledNextPageFormState);

  const validateRequired = useCallback( () => {
    if(energyBillAtom.reciveEnergyBill) {
      setDisabledNextPage(false)
    } else {
      setDisabledNextPage(true)
    }
  },[energyBillAtom, setDisabledNextPage])

  useEffect(() => {
    validateRequired()
  }, [validateRequired])

  const clickCheck = (data) => {
    setEnergyBillAtom({
      ...energyBillAtom,
      reciveEnergyBill: data
    })
  }

  const uploadImage = () => {
    document.querySelector('#fileSelector').click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (!file.type.match(/image-*/)) {
      alert("Formato inválido");
      return;
    }
    if(file) {
      setEnergyBillAtom({
        ...energyBillAtom,
        image: file
      })
    }
}

  return (
    <div className="energyBillContent">
      <div className="energyBillContainer">
        <div className="titleQuoteContent">
          <h5 className="titleQuote">{title}</h5>
        </div>
        <div className="pt-6">
          <div className="energyBillQuestion1">
            <label>
              {question}
              <span className="requiredEnergyBillOption">*</span>
            </label>
            <div className="energyBillYesNo">
              <div className="energyBillOptionContent" onClick={() => clickCheck('Sí')} >
                <div className="energyBillOption">
                  {
                    energyBillAtom.reciveEnergyBill === 'Sí' &&
                    <div className="activeEnergyBillOption"></div>
                  }
                </div>
                <span>{energyBill.yes}</span>
              </div>
              <div className="energyBillOptionContent" onClick={() => clickCheck('No')} >
                <div className="energyBillOption">
                {
                    energyBillAtom.reciveEnergyBill === 'No' &&
                    <div className="activeEnergyBillOption"></div>
                  }
                </div>
                <span>{energyBill.no}</span>
              </div>
            </div>
          </div>
          <div className="energyBillUpload">
            <label>{text}</label>
            <div className="energyBillIconUpload" onClick={uploadImage} >{iconUpload}</div>
            <input 
                id="fileSelector"
                type="file"
                accept="image/*"
                name="file"
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />
          </div>
          <div className="energyBillQuestion2">
            <small>{question2}</small>
            <div>{iconLink}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyBill;
