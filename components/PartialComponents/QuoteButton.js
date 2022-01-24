import { iconArrow } from "../../content/data/homeData";

const QuoteButton = ({ buttonParameters, buttonText, isIcon }) => {
  return (
    <button className={`globalButton ${buttonParameters}`}>
      <p>{buttonText}</p>
      {isIcon && iconArrow}
    </button>
  );
};

export default QuoteButton;
