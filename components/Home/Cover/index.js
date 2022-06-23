import React from "react";

// Lib
import { motion } from "framer-motion";

// Components
import CardsCover from "./components/CardsCover";
import QuoteButton from "../../PartialComponents/QuoteButton";

// animations
import { containerInfo } from "../../../styles/animations/globals";

/* Recoil */
/* A state management library. */
import { useRecoilValue } from "recoil";
import { homeCoverData, textsButtons } from "../../../recoil/atoms";

const Cover = () => {
  const coverInfo = useRecoilValue(homeCoverData);
  const buttonText = useRecoilValue(textsButtons);

  const coverContent = coverInfo.coverContent;

  return (
    <section>
      <div className="coverContainer">
        <div className="coverBackground" />
        <video
          className="object-cover w-full h-screen absolute -z-50"
          src={coverContent.bg}
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
          <h1>{coverContent.title}</h1>
          <p>
            {coverContent.content}
            <span className="text-primary-300 pl-2">
              {coverContent.content1}
            </span>
          </p>
          <QuoteButton
            buttonParameters={
              "w-44 h-12 font-semibold bg-primary-500 text-darkGrey-900"
            }
            buttonText={buttonText[1]}
            isIcon={true}
          />
        </motion.div>
        <div className="hidden lg:block">
          <CardsCover data={coverInfo.cardsCover} />
        </div>
      </div>
      <div className="lg:hidden">
        <CardsCover data={coverInfo.cardsCover} />
      </div>
    </section>
  );
};

export default Cover;
