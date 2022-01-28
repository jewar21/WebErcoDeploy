import { useEffect } from "react";

// Packages
import { gsap } from "gsap/dist/gsap";

import { sliderAnimation } from "../../../../styles/animations/globals";

const CardsEcosystem = ({ contentData }) => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".cardsEcosystemInfoContent");
    sliderAnimation(sections);
  }, []);

  return (
    <section className="cardsEcosystemContainer">
      <div className="cardsEcosystem">
        {contentData.map((e, i) => (
          <div key={i} className="cardsEcosystemInfoContent">
            <div className="cardsEcosystemInfo">{e.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsEcosystem;
