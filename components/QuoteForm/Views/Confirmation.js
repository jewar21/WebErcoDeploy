import React from "react";
import Image from "next/image";
import Link from "next/link";

import { confirmation } from "../../../content/data/quoteData";

import bgConfirmation from "../../../assets/Backgrounds/backgroundGrid.svg";

const Confirmation = () => {
  const img = confirmation.img.src;
  return (
    <div className="confirmationContent">
      <div className="confirmationContainer">
        <div className="confirmationImgR">
          <div className="confirmationImgA">
            <Image src={img} alt="image" layout="fill" objectFit="fill" />
          </div>
        </div>
        <div className="absolute w-full h-full overflow-hidden rounded-3xl">
          <div className="confirmationBackground">
            <Image
              src={bgConfirmation.src}
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="confirmationText">
          <h5>{confirmation.title}</h5>
          <p>{confirmation.text1}</p>
          <p>{confirmation.text2}</p>
          <div className="confirmationButtons">
            <Link href="/projects" passHref>
              {/* passHref: se utiliza cada vez que hay un componente personalizado dentro de un Link, esto es clave para el SEO */}
              <button className="ConfirmationButton">
                <p>Contáctanos</p>
              </button>
            </Link>
            <Link href="/projects" passHref>
              {/* passHref: se utiliza cada vez que hay un componente personalizado dentro de un Link, esto es clave para el SEO */}
              <button className="ConfirmationButton ConfirmationButtonFill">
                <p>Ver más proyectos</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
