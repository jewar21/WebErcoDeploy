import { RiArrowRightLine } from "react-icons/ri";

const QuoteButton = ({ buttonParameters, buttonText }) => {
  const iconArrow = <RiArrowRightLine className="w-5 h-5" />;
  return (
    <button
      className={`flex justify-evenly items-center bg-primary-500 rounded-full text-darkGrey-900 font-Sora ${buttonParameters}`}
    >
      <p>{buttonText}</p>
      {iconArrow}
    </button>
  );
};

export default QuoteButton;
