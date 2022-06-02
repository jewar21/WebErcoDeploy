import React from "react";
import PropTypes from "prop-types";

// Components
import SearchProject from "./Components/SearchProject";
import CardProjects from "./Components/CardProjects";
import ButtonMoreProject from "./Components/ButtonMoreProject";

const viewProjects = ({ dataProjects }) => {
  return (
    <section>
      <SearchProject />
      <CardProjects />
      <ButtonMoreProject />
    </section>
  );
};

viewProjects.propTypes = { dataProjects: PropTypes.array.isRequired };

export default viewProjects;
