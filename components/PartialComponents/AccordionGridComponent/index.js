import AccordionComponent from "./AccordionComponent";
import GridComponent from "./GridComponent";

const index = ({ isMobile, headContent, bodyContent }) => {
  return (
    <div>
      {isMobile ? (
        <AccordionComponent />
      ) : (
        <GridComponent headContent={headContent} bodyContent={bodyContent} />
      )}
    </div>
  );
};

export default index;
