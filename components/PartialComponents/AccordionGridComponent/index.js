import AccordionComponent from "./AccordionComponent";
import GridComponent from "./GridComponent";

const index = ({ isMobile, headContent, bodyContent }) => {
  return (
    <>
      <AccordionComponent headContent={headContent} bodyContent={bodyContent} />
      <GridComponent headContent={headContent} bodyContent={bodyContent} />
    </>
  );
};

export default index;
