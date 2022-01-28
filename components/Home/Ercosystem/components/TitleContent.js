import React from "react";

const TitleContent = ({ headerData }) => {
  return (
    <div className="cardsEcosystemHeader">
      <h3>{headerData.title}</h3>
      <p>{headerData.content}</p>
    </div>
  );
};

export default TitleContent;
