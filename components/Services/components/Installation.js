import Image from "next/image";
import Link from "next/link";

import { useRecoilValue } from "recoil";
import { typeServiceState } from "../../../recoil/atoms";

import { iconAdd } from "../../../content/globalData";

const Installation = ({ dataInstallation, cardsData }) => {
  const section = useRecoilValue(typeServiceState);
  const title = dataInstallation.title1;
  const content = dataInstallation.content;
  const cards = cardsData;

  return (
    <section className="installation-container">
      <div className="installation-titleContent">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="installation-card-content">
        {cards.map((card, i) => {
          return (
            <div key={i} className="installation-cardContent">
              <div className="installationImg-content">
                <div className="installationImg">
                  <Image
                    src={section=== "home" ? card.imgHome.src : card.imgCompany.src}
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
      <div className="installationButton-container">
        <Link href="installation" passHref>
          {/* <Link href={`services/${section}/installation`} passHref> */}
          {/* passHref: se utiliza cada vez que hay un componente personalizado dentro de un Link, esto es clave para el SEO */}
          <button className="installationButton">
            <p>Conoce más</p>
            {iconAdd}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Installation;
