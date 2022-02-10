import Image from "next/image";

// component
import ComponentTitle from "./ComponentTitle";

const GridComponent = ({ headContent, bodyContent }) => {
  return (
    <section className="gridComponentContainer">
      <div className="gridComponentImg">
        <Image
          src={headContent.imgBackground.src}
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="gridComponentContent">
        <ComponentTitle headContent={headContent} />
        <div className="gridComponentRight">
          {bodyContent.map((body, i) => {
            return (
              <div key={i} className="gridComponentRightItem">
                <div className="gridComponentRightItemIcon">{body.icon}</div>
                <div className="gridComponentRightItemText">
                  <h4>{body.title}</h4>
                  <p>{body.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GridComponent;
