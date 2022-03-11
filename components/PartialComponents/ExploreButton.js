import React from "react";
import Link from "next/link";

const ExploreButton = () => {
  return (
    <Link href="/projects" passHref>
      {/* passHref: se utiliza cada vez que hay un componente personalizado dentro de un Link, esto es clave para el SEO */}
      <button className="exploreButton">
        <p>Explorar proyectos</p>
      </button>
    </Link>
  );
};

export default ExploreButton;
