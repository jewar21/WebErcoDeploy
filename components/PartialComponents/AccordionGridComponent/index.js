import React from "react";
import PropTypes from "prop-types";

import AccordionComponent from "./AccordionComponent";
import GridComponent from "./GridComponent";

const AccordionGridComponent = ({ data, icons, isImage, isNeu }) => {
  return (
    <>
      {data && (
        <>
          <AccordionComponent data={data} />
          <GridComponent
            data={data}
            icons={icons}
            isImage={isImage}
            isNeu={isNeu}
          />
        </>
      )}
    </>
  );
};

AccordionGridComponent.propTypes = {
  data: PropTypes.object.isRequired,
  icons: PropTypes.array,
  isImage: PropTypes.bool,
  isNeu: PropTypes.bool
};

export default AccordionGridComponent;
