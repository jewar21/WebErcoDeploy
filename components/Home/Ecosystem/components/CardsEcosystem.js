import { useEffect } from "react";

// Packages
import { gsap } from "gsap/dist/gsap";

import {
  ecoSystemContent,
  ecoSystemHeader
} from "../../../../content/data/homeData";
import { sliderAnimation } from "../../../../styles/animations/globals";

const CardsEcosystem = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".cardsEcosystemInfoContent");
    sliderAnimation(sections);
  }, []);

  return (
    <section className="cardsEcosystemContainer">
      <div className="cardsEcosystemHeader flex flex-col">
        <h3>{ecoSystemHeader.title}</h3>
        <p>{ecoSystemHeader.content}</p>
      </div>
      <div className="cardsEcosystem">
        {ecoSystemContent.map((e, i) => (
          <div key={i} className="cardsEcosystemInfoContent">
            <div className="cardsEcosystemInfo">{e.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsEcosystem;
