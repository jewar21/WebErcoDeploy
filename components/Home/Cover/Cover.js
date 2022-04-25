// Lib
import { motion } from "framer-motion";

// Components
import CardsCover from "./components/cardsCover";
import QuoteButton from "../../PartialComponents/QuoteButton";

// animations
import { containerInfo } from "../../../styles/animations/globals";

const Cover = () => {
  return (
    <section>
      <div className="coverContainer">
        <div className="coverBackground" />
        <video
          className="object-cover w-full h-screen absolute -z-50"
          src="/cover.m4v"
          // src="/cover.mp4"
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
            buttonParameters={
              "w-44 h-12 font-semibold bg-primary-500 text-darkGrey-900"
            }
            buttonText={"Cotizar ahora"}
            isIcon={true}
          />
        </motion.div>
        <div className="hidden lg:block">
          <CardsCover />
        </div>
      </div>
      <div className="lg:hidden">
        <CardsCover />
      </div>
    </section>
  );
};

export default Cover;
