import AccordionComponent from "./AccordionComponent";
import GridComponent from "./GridComponent";

const index = ({ data }) => {
  return (
    <>
      <AccordionComponent data={data} />
      <GridComponent data={data} />
    </>
  );
};

export default index;
