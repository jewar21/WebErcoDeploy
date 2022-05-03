// components
import QuoteButton from "../PartialComponents/QuoteButton";

const ContactComponent = ({ contactData }) => {
  const cards = contactData.cards;
  return (
    <section className="contactContent">
      <div className="contactContainer">
        <h3>{contactData.header}</h3>
        <h2>{contactData.title}</h2>
        <p>{contactData.content}</p>
        <div className="contentCardContainer">
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
