import AccordionComponent from "./AccordionComponent";
import GridComponent from "./GridComponent";

const index = ({ data, icons, isImage, isNeu }) => {
  return (
    <>
      {data && (
        <>
          <AccordionComponent data={data} />
          <GridComponent
            data={data}
            icons={icons}
            isImage={isImage}
            isNeu={isNeu}
          />
        </>
      )}
    </>
  );
};

export default index;
