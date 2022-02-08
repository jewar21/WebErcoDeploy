import Image from "next/image";
import React, { useRef } from "react";

import { RiArrowDownSLine } from "react-icons/ri";
import { OverlayPanel } from "primereact/overlaypanel";

import "primereact/resources/themes/lara-light-indigo/theme.css";

import CountriesPanel from "./CountriesPanel";
import { co, pe, us } from "../../../content/data/homeData";

const CountriesButton = () => {
  const op = useRef(null);
  return (
    <>
      <button
        className="flex items-center"
        type="button"
        onClick={(e) => op.current.toggle(e)}
      >
        <Image src={co} alt="Colombia" width={24} height={24} />
        <RiArrowDownSLine className="w-7 h-7 ml-1" />
      </button>
      <OverlayPanel
        ref={op}
        style={{
          width: "17.5rem",
          position: "absolute",
          marginTop: "2.5rem",
          borderRadius: "1rem"
        }}
      >
        <CountriesPanel />
      </OverlayPanel>
    </>
  );
};

export default CountriesButton;
