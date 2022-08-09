// components
import QuoteButton from "../PartialComponents/QuoteButton";

/* Importing the svg icons. */
import { iconsContact } from "../../content/globalData";

const ContactComponent = ({ contactData }) => {
  const { cards } = contactData;
  return (
    <section className="contactContent">
      <div className="contactContainer">
        <h3>{contactData.header}</h3>
        <h2>{contactData.title}</h2>
        <p>{contactData.content}</p>
        <div className="contentCardContainer">
          {cards.map(({ buttonText, info, title }, i) => {
            return (
              <div key={i} className={"contactCard"}>
                <div className="contactIconCard">{iconsContact[i]}</div>
                <h4>{title}</h4>
                <p>{info}</p>
                <QuoteButton
                  buttonParameters={
                    i === 0 ? "contactButton" : "contactButtonT"
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
