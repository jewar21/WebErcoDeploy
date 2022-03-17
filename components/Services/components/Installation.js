import Image from "next/image";

const Installation = ({ dataInstallation }) => {
  const title = dataInstallation.title1;
  const description = dataInstallation.description;
  const cards = dataInstallation.cards;
  return (
    <section className="w-screem">
      <div className="TitleContent">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="installation-card-content">
        {cards.map((card, i) => {
          return (
            <div key={i} className="installation-cardContent">
              <div className="installationImg-content">
                <div className="installationImg">
                  <Image
                    src={card.img.src}
                    alt="image"
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
              </div>
              <div className="installationText-content">
                <h5>{card.title}</h5>
                <p>{card.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Installation;
