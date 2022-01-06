import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";

import { co, pe, us } from "../../../utils/handlers/handlers";

const CountriesButton = () => {
  return (
    <div className="flex items-center">
      <Image src={co} alt="Colombia" width={24} height={24} />
      <button>
        <RiArrowDownSLine className="w-7 h-7 ml-1" />
      </button>
    </div>
  );
};

export default CountriesButton;
