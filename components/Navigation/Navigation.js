import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

const Navigation = () => {
  const [scrollHeight, setscrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setscrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
  return (
    <>
      <Navbar isScrolling={scrollHeight} />
    </>
  );
};

export default Navigation;
