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

/* Creating a state called quoteContentState and setting the default value to an empty array. */
export const quoteContentState = atom({
  key: "QuoteContent",
  default: []
});
