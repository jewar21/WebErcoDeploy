// Lib
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// Data
import { coverInfo } from "../../content/data/homeData";

// Components
import CardsCover from "./components/cardsCover";
import QuoteButton from "../PartialComponents/QuoteButton";

// vars
import { DeviceSize } from "../../utils/handlers/handlers";

// animations
import { containerInfo } from "../../styles/animations/globals";

const Cover = () => {
  const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet});
  console.log(isTablet);
  return (
    <sections>
      <div className="coverContainer">
        <div className="coverBackground" />
        <video
          className="object-cover w-full h-full absolute -z-50 "
          src="/cover.m4v"
          autoPlay
          loop
          muted
        />
        <motion.div
          className="coverInfo"
          variants={containerInfo}
          initial="displacement"
          animate="visible"
        >
          <h1>ENERGIA SOLAR</h1>
          <p>
            En Erco somos más que una empresa de energía solar, somos un{" "}
            <span className="text-primary-300">ecosistema de energía</span>
          </p>
          <QuoteButton
            buttonParameters={"w-44 h-12 font-semibold"}
            buttonText={"Cotizar ahora"}
          />
        </motion.div>
        {!isTablet && <CardsCover />}
      </div>
      <div className="lg:hidden">
        <CardsCover />
      </div>
    </sections>
  );
};

export default Cover;
