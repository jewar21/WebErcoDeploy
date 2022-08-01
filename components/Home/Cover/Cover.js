// import React, { useEffect } from "react";
import React from "react";

// Lib
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";

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
  const { coverContent, cardsCover } = useRecoilValue(homeCoverData);
  const buttonT = useRecoilValue(textsButtons);
  // const [cookie, setCookie] = useCookies(["data"]);

  // useEffect(() => {
  //   // setCookie("data", [coverContent, cardsCover, buttonText]);
  // }, [coverContent, cardsCover, buttonText]);

  // const { data } = cookie;

  return (
    <section>
      {coverContent && (
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
              buttonText={buttonT[1]}
              isIcon={true}
            />
          </motion.div>
          <div className="hidden lg:block">
            <CardsCover data={cardsCover} />
          </div>
        </div>
      )}
      {cardsCover && (
        <div className="lg:hidden">
          <CardsCover data={cardsCover} />
        </div>
      )}
    </section>
  );
};

export default Cover;
