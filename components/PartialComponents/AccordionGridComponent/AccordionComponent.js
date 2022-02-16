import React, { useState } from "react";
import ComponentTitle from "./ComponentTitle";

import { iconAdd, iconSubtrac } from "../../../content/data/homeData";
import { RiNumbersFill } from "react-icons/ri";

const AccordionComponent = ({ headContent, bodyContent }) => {
  const [selected, setselected] = useState(RiNumbersFill);

  const toggle = (i) => {
    if (selected === i) {
      return setselected(null);
    }
    setselected(i);
  };
  return (
    <section>
      <div className="accordionComponentContainer">
        <ComponentTitle headContent={headContent} />
        <div className="pt-12">
          {bodyContent.map(({ title, content }, i) => {
            return (
              <div key={i} className="accordan">
                <div
                  className="accordan-head"
                  onClick={() => {
                    toggle(i);
                  }}
                >
                  <h4>{title}</h4>
                  <div className="action-itemButton">
                    {selected === i ? iconSubtrac : iconAdd}
                  </div>
                </div>
                <div
                  className={
                    selected === i ? "acordan-body-show" : "acordan-body"
                  }
                >
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionComponent;
