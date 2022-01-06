
import { RiArrowRightLine } from "react-icons/ri";

const QuoteButton = ({ buttonParameters, buttonText }) => {
  return (
    <button
      className={`flex justify-evenly items-center bg-primary-500 rounded-full font-bold ${buttonParameters}`}
    >
      <p>{buttonText}</p>
      <RiArrowRightLine className="w-5 h-5"/>
    </button>
  );
};

export default QuoteButton;
