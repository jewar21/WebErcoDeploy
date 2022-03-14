import { iconWhatsapp } from "../../content/globalData";

const WhatsAppButton = ({ buttonParameters, buttonText }) => {
  return (
    <button className={`globalButton ${buttonParameters}`}>
      <p>{buttonText}</p>
      <div className="text-2xl">{iconWhatsapp}</div>
    </button>
  );
};

export default WhatsAppButton;
