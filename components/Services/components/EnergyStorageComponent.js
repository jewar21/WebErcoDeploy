import Image from "next/image";

const EnergyStorageComponent = ({ dataStorage }) => {
  const items = dataStorage.items;
  return (
    <section className="mobilityContent">
      <div className="mobilityContainer mobilityCard">
        {items.map((item, i) => {
          const img = item.img.src;
          const title = item.title;
          const content = item.content;
          return (
            <div key={i} className={i === 0 ? "" : "mobilityCardContent"}>
              <div className="mobilityItemImgR">
                <div className="mobilityItemImgA">
                  <Image src={img} alt="image" layout="fill" objectFit="fill" />
                </div>
              </div>
              <div className="mobilityTitle">
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EnergyStorageComponent;
