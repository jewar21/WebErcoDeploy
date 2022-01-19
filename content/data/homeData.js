// Icons

import {
  RiHandCoinLine,
  RiComputerLine,
  RiLeafLine,
  RiCheckFill,
  RiLightbulbFlashFill,
  RiRoadsterLine,
  RiBatteryChargeLine,
  RiCustomerService2Line,
  RiShieldStarLine,
  RiGroupLine,
  RiTrophyLine
} from "react-icons/ri";

const iconHandler = <RiHandCoinLine />;
const iconComputer = <RiComputerLine />;
const iconLeaf = <RiLeafLine />;
const iconLightbulb = <RiLightbulbFlashFill />;
const iconCar = <RiRoadsterLine />;
const iconBattery = <RiBatteryChargeLine />;
const iconCustomer = <RiCustomerService2Line />;
const iconShield = <RiShieldStarLine />;
const iconGroup = <RiGroupLine />;
const iconTrophy = <RiTrophyLine />;

// Imagenes

import img1 from "../../assets/imagenes/1.png";
import img2 from "../../assets/imagenes/2.png";
import img3 from "../../assets/imagenes/3.png";

// Navegation information

export const navInfo = [
  {
    icon: iconLightbulb,
    title: "Energía solar",
    content: "Transforman la radiación solar en energía eléctrica.",
    id: 0
  },
  {
    icon: iconCar,
    title: "Movilidad eléctrica",
    content:
      "Infraestructura e instalación de Equipos para recarga de vehículos eléctricos.",
    id: 1
  },
  {
    icon: iconBattery,
    title: "Almacenamiento de energía",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 2
  }
];

// Cover information

export const coverInfo = [
  {
    icon: iconHandler,
    title: "Ahorro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    icon: iconComputer,
    title: "Tecnología",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    icon: iconLeaf,
    title: "Sostenibilidad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

// Ecosystem information

export const checkIcon = (
  <div className="">
    <RiCheckFill />
  </div>
);

export const ecoSystemHeader = {
  title: "Ecosistema de energía Erco",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at suscipit odio."
};

export const ecoSystemContent = [
  {
    img: { img1 },
    subtitle: "Instalación de sistemas de autogeneración",
    items: {
      item1: "Generar ahorros en tu factura de energía.",
      item2: "Realizar seguimiento y control de tu proyecto en tiempo real.",
      item3: "Contribuir a un futuro sostenible."
    }
  },
  {
    img: { img2 },
    subtitle: "Control de consumos y producción de energía a través de NEU +",
    items: {
      item1: "Visualizar datos de consumo y generación en tiempo real.",
      item2: "Obtener alertas por consumos atípicos.",
      item3: "Evitar multas por consumo excesivo de energía reactiva."
    }
  },
  {
    img: { img3 },
    subtitle: "Gestionar y operar tus sistemas de Energía Solar",
    items: {
      item1:
        "Garantizar que el sistema solar trabaje al punto máximo de operación.",
      item2: "Realizar mantenimiento predictivo, preventivo y correctivo.",
      item3: "Acompañar tu proyecto con un equipo propio y calificado."
    }
  }
];

// Experience Erco Information

export const experienceTitle = {
  title: "Experiencia Erco: deja todo en nuestras manos",
  content:
    "Realizamos diseño, instalación, legalización, certificados UPME y carbono cero."
};

export const experienceContent = [
  {
    icon: iconCustomer,
    title: "Acompañamiento permanente",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: iconShield,
    title: "Garantía",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: iconGroup,
    title: "Equipos de calidad",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: iconComputer,
    title: "Tecnología",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: iconLeaf,
    title: "Medio ambiente",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    icon: iconTrophy,
    title: "Trayectoria",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

// Clients testimonials

export const testimonials = [
  {
    img: "",
    photo: "",
    name: "Maria Janeth Grajales",
    position: "Nombre del cargo",
    testimonial:
      "“Luego de recibir varias ofertas por nuestro sistema solar fotovoltaico, optamos por la empresa colombiana Erco Energía S.A.S. como la empresa con mejor oferta tecnológica, conocimiento de la normativa colombiana en el sistema energético y mejor programación en el montaje y control del proyecto”",
    companyIcon: ""
  }
];

// Company logos

export const companyLogos = [
  {
    name: "",
    logo: ""
  }
];

// statistics Erco

export const statisticsErco = [
  {
    number: "10",
    description: "años de experiencia",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    number: "1.9K",
    description: "clientes felices",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    number: "3",
    description: "países en operación",
    info: "Panamá, Colombia y Estados Unidos"
  },
  {
    number: "XX",
    description: "Lorem ipsum dolor",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];
