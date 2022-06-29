import React, { useState } from "react";

import { iconAdd, iconSubtrac } from "../../../content/globalData";

import ComponentTitle from "./ComponentTitle";

const AccordionComponent = ({ data }) => {
  const { cards } = data;
  const [selected, setselected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setselected(null);
    }
    setselected(i);
  };
  return (
    <section>
      <div className="accordionComponentContainer">
        <ComponentTitle data={data} />
        <div className="pt-12">
          {cards &&
            cards.map(({ title, content }, i) => {
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
