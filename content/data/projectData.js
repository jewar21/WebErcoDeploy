import imgCoverProjects from "../../assets/imagenes/Projects/InternaProyectos/Banner/Banner-proyectos.jpg";

import imgProjectsA01 from "../../assets/imagenes/Projects/InternaProyectos/FotosResidenciales/1/1.JPG";
import imgProjectsA02 from "../../assets/imagenes/Projects/InternaProyectos/FotosResidenciales/1/2.jpg";
import imgProjectsA03 from "../../assets/imagenes/Projects/InternaProyectos/FotosResidenciales/1/3.jpg";

import imgProjectsB01 from "../../assets/imagenes/Projects/InternaProyectos/FotosResidenciales/2/1.jpg";
import imgProjectsB02 from "../../assets/imagenes/Projects/InternaProyectos/FotosResidenciales/2/2.JPG";
import imgProjectsB03 from "../../assets/imagenes/Projects/InternaProyectos/FotosResidenciales/2/3.JPG";

export const projectsConverInfo = {
  section: "Proyectos",
  img: imgCoverProjects,
  title: "Conoce nuestros proyectos",
  content: "Sistemas de energía solar para hogares, empresas e industrias."
};

export const projectsGeneralData = [
  {
    name: "Sistema de energía solar",
    section: "Hogar",
    type: "Residencial 9,72 kWp",
    description: "",
    details: {
      sistem: "Inter 9,72",
      numPanels: "36",
      panelsPower: "270", //Wp
      ability: "9,72", //kWp
      trees: "5",
      co2: "18", //Tons
      annualGeneration: "13191,984" //kWh
    },
    imgs: [
      { img: imgProjectsA01 },
      { img: imgProjectsA02 },
      { img: imgProjectsA03 }
    ]
  },
  {
    name: "Sistema de energía solar",
    section: "Hogar",
    type: "Residencial 4,32 kWp",
    description: "",
    details: {
      sistem: "Interconectado",
      numPanels: "16",
      panelsPower: "270",
      ability: "4.32",
      trees: "8",
      co2: "2",
      annualGeneration: "5.945"
    },
    imgs: [
      { img: imgProjectsB01 },
      { img: imgProjectsB02 },
      { img: imgProjectsB03 }
    ]
  },
  {
    name: "Sistema de energía solar",
    section: "Hogar",
    type: "Residencial 6,6 kWp",
    description: "",
    details: {
      sistem: "Interconectado",
      numPanels: "24",
      panelsPower: "275",
      ability: "6,6",
      trees: "20",
      co2: "6",
      annualGeneration: "8.553,6"
    },
    imgs: [
      { img: imgProjectsA01 },
      { img: imgProjectsA02 },
      { img: imgProjectsA03 }
    ]
  }
];
