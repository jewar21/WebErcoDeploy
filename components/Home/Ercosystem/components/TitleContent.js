import React from "react";

const TitleContent = ({ headerData }) => {
  return (
    <section className="cardsEcosystemHeader">
      <h3>{headerData.title}</h3>
      <p>{headerData.content}</p>
    </section>
  );
};

export default TitleContent;
