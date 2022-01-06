import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.33 };

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <button className="fixed right-6" type="button" onClick={toggle}>
      <svg width="24" height="24" viewBox="0 0 23 23">
        <Path
          className="open"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0,0%,8%)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(60,1%,24%)" }
          }}
          transition={transition}
        />
        <Path
          d="M 20 9.423 L 10 9.423"
          stroke="hsl(0,0%,8%)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {
              d: "M 2 16.346 L 20 16.346",
              stroke: "hsl(0,0%,8%)"
            },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(60,1%,24%)" }
          }}
          transition={transition}
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
