import { atom } from "recoil";

/* Creating a state called typeServiceState and setting the default value to home. */
export const typeServiceState = atom({
  key: "WhatSection",
  default: "home"
});

/* Creating a state called mobilePanelServiceState and setting the default value to false. */
export const mobilePanelServiceState = atom({
  key: "IsOpenPanel",
  default: false
});

/* Creating a state called quoteCountState and setting the default value to 0. */
export const quoteCountState = atom({
  key: "Counter",
  default: 0
});

/* Creating a state called quoteContentState and setting the default value to an empty array. */
export const quoteContentState = atom({
  key: "QuoteContent",
  default: []
});

// quote form
export const disabledNextPageFormState = atom({
  key: "NextPageForm",
  default: true
});

export const dataGeneralInformation = atom({
  key: "GeneralInformation",
  default: {
    firstName: { value: '', isRequired: true, typeValidation: 'text', errorMessage: null }, 
    lastName: { value: '', isRequired: true, typeValidation: 'text', errorMessage: null },
    email: { value: '', isRequired: true, typeValidation: 'email', errorMessage: null },
    phone: { value: '', isRequired: true, typeValidation: 'number', errorMessage: null },
    department: { value: '', isRequired: true, typeValidation: 'select', errorMessage: null },
  }
});

export const dataInfrastructure = atom({
  key: "Infrastructure",
  default: ''
})

export const dataTypeOfSystem = atom({
  key: "TypeOfSystem",
  default: ''
})

export const dataEnergyBill = atom({
  key: "EnergyBill",
  default: {
    reciveEnergyBill: null,
    image: null
  }
})

export const dataAdditionalInformation = atom({
  key: "AdditionalInformation",
  default: {
    meetUs: { value: '', isRequired: true, typeValidation: 'select', errorMessage: null },
    moreInformation: { value: '', isRequired: true, typeValidation: 'text', errorMessage: null },
    agreeTerms: { value: false, isRequired: true, typeValidation: 'boolean', errorMessage: null }
  }
})
