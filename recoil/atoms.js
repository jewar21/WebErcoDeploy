import { atom } from "recoil";

export const typeServiceState = atom({
  key: "whatSection",
  default: "home"
});

export const mobilePanelServiceState = atom({
  key: "IsOpenPanel",
  default: false
});
