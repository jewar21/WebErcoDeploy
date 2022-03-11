import PropTypes from "prop-types";

import { iconArrow } from "../../content/globalData";

const QuoteButton = ({ buttonParameters, buttonText, isIcon }) => {
  return (
    <button className={`globalButton ${buttonParameters}`}>
      <p>{buttonText}</p>
      {isIcon && <div className="text-2xl">{iconArrow}</div>}
    </button>
  );
};

QuoteButton.propTypes = {
  buttonParameters: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isIcon: PropTypes.bool.isRequired
};

export default QuoteButton;
