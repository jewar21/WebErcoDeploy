// import React, { useEffect } from "react";
import React from "react";

// Lib
import { motion } from "framer-motion";
// import { useCookies } from "react-cookie";

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
            className="coverContent"
            variants={containerInfo}
            initial="displacement"
            animate="visible"
          >
            <div className="coverInfo">
              <h1>{coverContent.title}</h1>
              <p>
                {coverContent.content}
                <span className="text-primary-300 pl-2">
                  {coverContent.content1}
                </span>
              </p>
            </div>
            <QuoteButton
              buttonParameters={
                "w-44 h-12 font-semibold bg-primary-500 text-darkGrey-900 xl:w-60 xl:h-16 xl:text-xl"
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
