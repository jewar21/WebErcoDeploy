import PropTypes from "prop-types";

// components
import QuoteButton from "../PartialComponents/QuoteButton";

// iconos
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
          {cards.map(({ title, info, buttonText }, i) => {
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

ContactComponent.propTypes = { contactData: PropTypes.array.isRequired };

export default ContactComponent;
