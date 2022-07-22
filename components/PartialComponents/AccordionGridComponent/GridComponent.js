import Image from "next/image";

/* Importing the image. */
import imgBackground from "../../../assets/Backgrounds/backgroundGrid.svg";

// component
import ComponentTitle from "./ComponentTitle";

const GridComponent = ({ data, icons, isImage, isNeu }) => {
  const { cards } = data;
  return (
    <section
      className={
        isNeu
          ? "gridComponentContainer bg-darkGrey-900"
          : "gridComponentContainer"
      }
    >
      <div className="gridComponentImg">
        {isImage && (
          <Image
            src={imgBackground.src}
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className="gridComponentContent">
        <ComponentTitle data={data} isNeu={isNeu} />
        <div className="gridComponentRight">
          {cards &&
            cards.map(({ title, content }, i) => {
              return (
                <div key={i} className="gridComponentRightItem">
                  <div className="gridComponentRightItemIcon">{icons[i]}</div>
                  <div
                    className={
                      isNeu
                        ? "gridComponentRightItemTextNeu"
                        : "gridComponentRightItemText"
                    }
                  >
                    <h4>{title}</h4>
                    <p>{content}</p>
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
