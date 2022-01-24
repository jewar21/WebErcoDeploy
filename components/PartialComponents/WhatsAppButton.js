import { iconWhatsapp } from "../../content/data/homeData";

const WhatsAppButton = ({ buttonParameters, buttonText }) => {
  return (
    <button className={`globalButton ${buttonParameters}`}>
      <p>{buttonText}</p>
      {iconWhatsapp}
    </button>
  );
};

export default WhatsAppButton;
