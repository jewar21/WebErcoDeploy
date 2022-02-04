import { iconArrow } from "../../content/data/homeData";

const QuoteButton = ({ buttonParameters, buttonText, isIcon }) => {
  return (
    <button className={`globalButton ${buttonParameters}`}>
      <p>{buttonText}</p>
      {isIcon && <div className="text-2xl">{iconArrow}</div>}
    </button>
  );
};

export default QuoteButton;
