import Image from "next/image";

/* Importing the image. */
import imgBackground from "../../../assets/Backgrounds/backgroundGrid.svg";

/* Importing the icons from the globalData.js file. */
import {
  iconCustomer,
  iconShield,
  iconGroup,
  iconComputer,
  iconLeaf,
  iconTrophy
} from "../../../content/globalData";

// component
import ComponentTitle from "./ComponentTitle";

const GridComponent = ({ data, isImage, isNeu }) => {
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
                  <div className="gridComponentRightItemIcon">
                    {i === 0
                      ? iconCustomer
                      : i === 1
                      ? iconShield
                      : i === 2
                      ? iconGroup
                      : i === 3
                      ? iconComputer
                      : i === 4
                      ? iconLeaf
                      : i === 5
                      ? iconTrophy
                      : null}
                  </div>
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
