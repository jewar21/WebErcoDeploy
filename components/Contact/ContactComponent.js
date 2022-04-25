import React from "react";
import QuoteButton from "../PartialComponents/QuoteButton";

const ContactComponent = ({ contactData }) => {
  const cards = contactData.cards;
  return (
    <section className="relative w-screen bg-lightGrey-300">
      <div className="contactContainer">
        <h3>{contactData.header}</h3>
        <h2>{contactData.title}</h2>
        <p>{contactData.content}</p>
        <div className="lg:flex w-full lg:justify-between">
          {cards.map((card, i) => {
            const icon = card.icon;
            const title = card.title;
            const info = card.info;
            const buttonText = card.buttonText;
            return (
              <div key={i} className={"contactCard"}>
                <div className="contactIconCard">{icon}</div>
                <h4>{title}</h4>
                <p>{info}</p>
                <QuoteButton
                  buttonParameters={
                    i === 0
                      ? "w-12.5rem h-12 px-2 font-semibold bg-primary-500 text-darkGrey-900"
                      : "h-12 w-12.5rem lg:h-12 border-primary-500 border-solid border-2 rounded-full text-darkGrey-900 font-semibold"
                  }
                  buttonText={buttonText}
                  isIcon={false}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
