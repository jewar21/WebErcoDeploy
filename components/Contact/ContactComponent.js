// components
import QuoteButton from "../PartialComponents/QuoteButton";

// iconos
import {
  iconHandler,
  iconCustomer,
  iconWhatsapp
} from "../../content/globalData";

const ContactComponent = ({ contactData }) => {
  const { cards } = contactData;
  return (
    <section className="contactContent">
      <div className="contactContainer">
        <h3>{contactData.header}</h3>
        <h2>{contactData.title}</h2>
        <p>{contactData.content}</p>
        <div className="contentCardContainer">
          {cards.map(({ title, info, buttonText }, i) => {
            return (
              <div key={i} className={"contactCard"}>
                <div className="contactIconCard">
                  {i === 0
                    ? iconHandler
                    : i === 1
                    ? iconCustomer
                    : iconWhatsapp}
                </div>
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
