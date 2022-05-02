import AccordionComponent from "./AccordionComponent";
import GridComponent from "./GridComponent";

const index = ({ data, isImage, isNeu }) => {
  return (
    <>
      <AccordionComponent data={data} />
      <GridComponent data={data} isImage={isImage} isNeu={isNeu} />
    </>
  );
};

export default index;
