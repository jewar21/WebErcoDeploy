import { atom } from "recoil";

export const isTablet = atom({
  key: "isTablet",
  default: false
});

export const isMobile = atom({
  key: "isMobile",
  default: false
});
