import Image from "next/image";

// component
import ComponentTitle from "./ComponentTitle";

const GridComponent = ({ data, isImage, isNeu }) => {
  const cards = data.cards;
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
            src={data.imgBackground.src}
            alt="image"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className="gridComponentContent">
        <ComponentTitle data={data} isNeu={isNeu} />
        <div className="gridComponentRight">
          {cards.map((body, i) => {
            return (
              <div key={i} className="gridComponentRightItem">
                <div className="gridComponentRightItemIcon">{body.icon}</div>
                <div
                  className={
                    isNeu
                      ? "gridComponentRightItemTextNeu"
                      : "gridComponentRightItemText"
                  }
                >
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
