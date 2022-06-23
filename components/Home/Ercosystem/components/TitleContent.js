import React from "react";
import PropTypes from "prop-types";

const TitleContent = ({ headerData }) => {
  const { title, content } = headerData;
  return (
    <div className="TitleContent">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
TitleContent.propTypes = { headerData: PropTypes.object.isRequired };

export default TitleContent;
