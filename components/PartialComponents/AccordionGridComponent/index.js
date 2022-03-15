import AccordionComponent from "./AccordionComponent";
import GridComponent from "./GridComponent";

const index = ({ data, isImage, isColor }) => {
  console.log(isColor);
  return (
    <>
      <AccordionComponent data={data} />
      <GridComponent data={data} isImage={isImage} isColor={isColor} />
    </>
  );
};

export default index;
