// Icons

import {
  iconHandler,
  iconComputer,
  iconLeaf,
  iconLightbulb,
  iconCar,
  iconBattery,
  iconCustomer,
  iconShield,
  iconGroup,
  iconTrophy
} from "../globalData";

// Imagenes

import img1 from "../../assets/imagenes/1.png";
import img2 from "../../assets/imagenes/2.png";
import img3 from "../../assets/imagenes/3.png";
import p01 from "../../assets/imagenes/phone/instalacion.svg";
import p02 from "../../assets/imagenes/phone/tecnologia.svg";
import p03 from "../../assets/imagenes/phone/oym.svg";
import colombia from "../../assets/Paises/CO.png";
import panama from "../../assets/Paises/PA.png";
import unitedStates from "../../assets/Paises/UE.png";
import imgBackground from "../../assets/Backgrounds/backgroundGrid.svg";

// Brands

import allers from "../../assets/imagenes/brands/Allers.png";
import auteco from "../../assets/imagenes/brands/Auteco.png";
import autoGas from "../../assets/imagenes/brands/AutoGas.png";
import avinal from "../../assets/imagenes/brands/Avinal.png";
import bancolombia from "../../assets/imagenes/brands/Bancolombia.png";
import bosi from "../../assets/imagenes/brands/Bosi.png";
import cIJeans from "../../assets/imagenes/brands/CIJeans.png";
import comfama from "../../assets/imagenes/brands/Comfama.png";
import coopebombas from "../../assets/imagenes/brands/Coopebombas.jpg";
import eafit from "../../assets/imagenes/brands/EAFIT.png";
import elTesoro from "../../assets/imagenes/brands/ElTesoro.png";
import epm from "../../assets/imagenes/brands/EPM.png";
import estra from "../../assets/imagenes/brands/Estra.png";
import exxoMobil from "../../assets/imagenes/brands/ExxoMobil.png";
import floresElTrigal from "../../assets/imagenes/brands/FloresElTrigal.png";
import grupoAl from "../../assets/imagenes/brands/GrupoAl.png";
import ladrilleraDelta from "../../assets/imagenes/brands/ladrilleraDelta.jpg";
import personalSoft from "../../assets/imagenes/brands/PersonalSoft.png";
import pintuco from "../../assets/imagenes/brands/Pintuco.png";
import plasticosCorrea from "../../assets/imagenes/brands/PlasticosCorrea.png";
import rutaN from "../../assets/imagenes/brands/RutaN.png";
import sagradoCorazon from "../../assets/imagenes/brands/SagradoCorazon.png";
import suratex from "../../assets/imagenes/brands/Suratex.png";
import tcc from "../../assets/imagenes/brands/TCC.png";
import virelSAS from "../../assets/imagenes/brands/VirelSAS.jpg";

// Customers

import img1Customer from "../../assets/imagenes/testimonios/Virel.JPG";
import img2Customer from "../../assets/imagenes/testimonios/Pintuco.jpg";
import img3Customer from "../../assets/imagenes/testimonios/CI Jeans.jpg";

import imgClient from "../../assets/imagenes/testimonios/José Manuel Gutiérrez Pintuco.jpg";

export const co = colombia;
export const pa = panama;
export const us = unitedStates;

// Navegation information

export const navInfo = [
  {
    icon: iconLightbulb,
    title: "Energía solar",
    content: "Transforman la radiación solar en energía eléctrica.",
    link: "/solarEnergy"
  },
  {
    icon: iconCar,
    title: "Movilidad eléctrica",
    content:
      "Infraestructura e instalación de Equipos para recarga de vehículos eléctricos.",
    link: "/electricMobility"
  },
  {
    icon: iconBattery,
    title: "Almacenamiento de energía",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/energyStorage"
  }
];

// Cover information

export const coverInfo = [
  {
    icon: iconHandler,
    title: "Ahorro",
    description: "Logra ahorros hasta del 100% en tu factura de energía."
  },
  {
    icon: iconComputer,
    title: "Tecnología",
    description:
      "App propia  para el seguimiento de tu proyecto solar en tiempo real."
  },
  {
    icon: iconLeaf,
    title: "Sostenibilidad",
    description:
      "Disminuye tu huella de carbono con un sistema de energía solar."
  }
];

// Ecosystem information

export const ecoSystemHeader = {
  title: "Ecosistema de energía Erco",
  content: "Instala un sistema de energía solar y ten el control de tu energía."
};

export const ecoSystemContent = [
  {
    counter: 1,
    img: img1,
    subtitle: "Instalación de sistemas de autogeneración",
    items: [
      { item: "Generar ahorros en tu factura de energía." },
      {
        item: "Realizar seguimiento y control de tu proyecto en tiempo real."
      },
      { item: "Contribuir a un futuro sostenible." }
    ],
    phoneImg: p01
  },
  {
    counter: 2,
    img: img2,
    subtitle: "Control de consumos y producción de energía a través de NEU +",
    items: [
      { item: "Visualizar datos de consumo y generación en tiempo real." },
      { item: "Obtener alertas por consumos atípicos." },
      { item: "Evitar multas por consumo excesivo de energía reactiva." }
    ],
    phoneImg: p02
  },
  {
    counter: 3,
    img: img3,
    subtitle: "Gestionar y operar tus sistemas de Energía Solar",
    items: [
      {
        item: "Garantizar que el sistema solar trabaje al punto máximo de operación."
      },
      { item: "Realizar mantenimiento predictivo, preventivo y correctivo." },
      { item: "Acompañar tu proyecto con un equipo propio y calificado." }
    ],
    phoneImg: p03
  }
];

// Experience Erco Information

export const experienceTitle = {
  title: "Experiencia Erco:",
  title1: "deja todo en nuestras manos",
  content:
    "Realizamos diseño, instalación, legalización, certificados UPME y carbono cero.",
  imgBackground: imgBackground
};

export const experienceContent = [
  {
    icon: iconCustomer,
    title: "Acompañamiento permanente",
    content:
      "Un líder de experiencia te acompañará en cada una de las etapas de tu proyecto.​"
  },
  {
    icon: iconShield,
    title: "Garantía",
    content: "10 años en mano de obra y 25 años en paneles solares.​"
  },
  {
    icon: iconGroup,
    title: "Equipos de calidad",
    content: "Contamos con equipos de alto reconocimiento en el mercado."
  },
  {
    icon: iconComputer,
    title: "Tecnología",
    content:
      "Visualización y control de tus consumos de energía en tiempo real."
  },
  {
    icon: iconLeaf,
    title: "Medio ambiente",
    content: "A través de nuestras soluciones aportas a un futuro sostenible."
  },
  {
    icon: iconTrophy,
    title: "Trayectoria",
    content: "10 años de experiencia a nivel nacional e internacional."
  }
];

// Clients testimonials

export const testimonials = {
  title: "Clientes que confiaron en Erco",
  cardContent: [
    {
      img: img1Customer,
      photo: imgClient,
      name: "Jaime Jaramillo Henao",
      position: "Gerente Grupo AL S.A.S.",
      testimonial:
        "“Erco es la mejor alternativa, por su experiencia, conocimiento de la industria y su alianza con EPM. Además, por su conocimiento técnico y respaldo. Para nosotros Erco App fue una herramienta fundamental, porque nos mantuvo actualizados sin estar en el montaje”.",
      companyIcon: ""
    },
    {
      img: img2Customer,
      photo: imgClient,
      name: "",
      position: "",
      testimonial:
        "“Erco Energía fue y es la empresa adecuada para nuestro proyecto solar; por su respaldo, por el acompañamiento durante el proceso y la trayectoria de proyectos reconocidos”.",
      companyIcon: ""
    },
    {
      img: img3Customer,
      photo: imgClient,
      name: "José Manuel Gutiérrez",
      position: "Director Cadena de Suministro",
      testimonial:
        "“Después de recibir varias ofertas para nuestro sistema solar fotovoltaico, optamos por la empresa colombiana Erco Energía S.A.S. como la empresa con mejor oferta tecnológica, conocimiento de la normativa colombiana en el sistema energético y mejor programación en el montaje y control del proyecto”.",
      companyIcon: ""
    }
  ]
};

// Company logos

export const companyLogos = [
  {
    name: "Allers Group",
    logo: allers
  },
  {
    name: "Auteco",
    logo: auteco
  },
  {
    name: "Auto Gas",
    logo: autoGas
  },
  {
    name: "Avinal",
    logo: avinal
  },
  {
    name: "Bancolombia",
    logo: bancolombia
  },
  {
    name: "Bosi",
    logo: bosi
  },
  {
    name: "CI Jeans",
    logo: cIJeans
  },
  {
    name: "Comfama",
    logo: comfama
  },
  {
    name: "Coopebombas",
    logo: coopebombas
  },
  {
    name: "EAFIT",
    logo: eafit
  },
  {
    name: "El Tesoro",
    logo: elTesoro
  },
  {
    name: "EPM",
    logo: epm
  },
  {
    name: "Estra",
    logo: estra
  },
  {
    name: "ExxoMobil",
    logo: exxoMobil
  },
  {
    name: "Flores El Trigal",
    logo: floresElTrigal
  },
  {
    name: "Grupo Al",
    logo: grupoAl
  },
  {
    name: "ladrillera Delta",
    logo: ladrilleraDelta
  },
  {
    name: "Personal Soft",
    logo: personalSoft
  },
  {
    name: "Pintuco",
    logo: pintuco
  },
  {
    name: "Plasticos Correa",
    logo: plasticosCorrea
  },
  {
    name: "Ruta N",
    logo: rutaN
  },
  {
    name: "Sagrado Corazon",
    logo: sagradoCorazon
  },
  {
    name: "Suratex",
    logo: suratex
  },
  {
    name: "TCC",
    logo: tcc
  },
  {
    name: "Virel S.A.S",
    logo: virelSAS
  }
];

// statistics Erco

export const statisticsErco = [
  {
    number: "10",
    description: "años de experiencia",
    info: "Ofreciendo soluciones a la medida de nuestros clientes."
  },
  {
    number: "1.9K",
    description: "clientes felices",
    info: "En proyectos de energía solar, almacenamiento y movilidad eléctrica."
  },
  {
    number: "3",
    description: "países en operación",
    info: "Colombia, Panamá y Estados Unidos."
  },
  {
    number: "17 MWp",
    description: "Instalados",
    info: "Proyectos residenciales, comerciales e industriales y gran escala."
  }
];

// EcosystemBanner information

export const ecosystemBanner = {
  title1: "Quiero unirme al",
  title2: "Ecosistema de Energía Erco",
  content:
    "Con nuestra tecnología y energía tienes el control de tus consumos energéticos."
};
