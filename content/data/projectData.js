import imgCoverProjects from "../../assets/imagenes/Projects/Interna Proyectos/Banner/Banner-proyectos.jpg";

import imgP01_01 from "../../assets/imagenes/Projects/Interna Proyectos/Fotos residenciales/1. Residencial 9,72 kWp/1.jpg";
import imgP01_02 from "../../assets/imagenes/Projects/Interna Proyectos/Fotos residenciales/1. Residencial 9,72 kWp/2.jpg";
import imgP01_03 from "../../assets/imagenes/Projects/Interna Proyectos/Fotos residenciales/1. Residencial 9,72 kWp/3.jpg";

import imgP02_01 from "../../assets/imagenes/Projects/Interna Proyectos/Fotos residenciales/2. Residencial 4,32 kWp/1.jpg";
import imgP02_02 from "../../assets/imagenes/Projects/Interna Proyectos/Fotos residenciales/2. Residencial 4,32 kWp/2.JPG";
import imgP02_03 from "../../assets/imagenes/Projects/Interna Proyectos/Fotos residenciales/2. Residencial 4,32 kWp/3.JPG";

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
    imgs: { img1: imgP01_01, img2: imgP01_02, img3: imgP01_03 }
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
    imgs: { img1: imgP02_01, img2: imgP02_02, img3: imgP02_03 }
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
    imgs: { img1: imgP02_01, img2: imgP02_02, img3: imgP02_03 }
  }
];
