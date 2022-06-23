import { atom } from "recoil";

/* Creating a state called flag and setting the default value to co. */
export const nameCountry = atom({
  key: "country",
  default: "co"
});

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

/* Creating a state called navbarInfo and setting the default value to an empty object. */
export const navbarInfo = atom({
  key: "Navbar",
  default: {}
});

/* Creating a state called homeCoverData and setting the default value to an empty object. */
export const homeCoverData = atom({
  key: "homeCover",
  default: {}
});

/* Creating a state called homeEcosystemContent and setting the default value to an empty object. */
export const homeEcosystemContent = atom({
  key: "homeEcosystem",
  default: {}
});

/* Creating a state called experienceContent and setting the default value to an empty object. */
export const homeExpContent = atom({
  key: "homeExperience",
  default: {}
});

/* Creating a state called homeTestimonials and setting the default value to an empty object. */
export const homeTestimonials = atom({
  key: "testimonials",
  default: {}
});

/* Creating a state called brands and setting the default value to an empty array. */
export const brands = atom({
  key: "brand",
  default: []
});

/*------------------------------------------------------------------------------------------------- */

/* Creating a state called homeStatisticsErco and setting the default value to an empty array. */
export const bannersData = atom({
  key: "banners",
  default: {}
});

/* Creating a state called textsButtons and setting the default value to an empty array. */
export const textsButtons = atom({
  key: "Button",
  default: []
});

/* Creating a state called contactUs and setting the default value to an empty object. */
export const contactUs = atom({
  key: "cu",
  default: {}
});
