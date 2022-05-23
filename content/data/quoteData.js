import {
  RiHome3Line,
  RiBuilding4Line,
  RiCommunityLine,
  RiUploadCloud2Line,
  RiExternalLinkLine
} from "react-icons/ri";

import imgQuote from "../../assets/imagenes/imgQuote.png";

export const generalInformations = {
  title: "¡Háblanos de ti! Queremos conocerte",
  fiels: [
    { question: "¿Para quién es esta cotización?" },
    { question: "¿Cuáles son tus apellidos?" },
    {
      question: "¿A cuál correo debemos enviar esta cotización?",
      error: "Correo no válido"
    },
    { question: "¿Cuál es tu número de celular?" }
  ],
  selections: { question: "¿En dónde vives?" }
};

export const infrastructure = {
  title: "Tu solicitud es para:",
  cards: [
    { icon: <RiHome3Line />, name: "Hogar" },
    { icon: <RiBuilding4Line />, name: "Empresa" },
    { icon: <RiCommunityLine />, name: "Gran Escala más de 1 MW" }
  ]
};

export const typeOfSystem = {
  title: "¿En cuál sistema estás interesado?",
  cards: [
    {
      subTitle: "Interconectado",
      desc: "Ideal si deseas ahorrar dinero. No tiene baterías"
    },
    {
      subTitle: "Híbrido",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
      subTitle: "Aislado",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
      subTitle: "Respaldo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    }
  ]
};

export const roofType = {
  title: "Selecciona tu tipo de techo:",
  cards: [
    { img: "", name: "Teja de barro" },
    { img: "", name: "Termoacústica" },
    { img: "", name: "Standing seam" },
    { img: "", name: "Piso" },
    { img: "", name: "Losa de concreto" },
    { img: "", name: "Manto asfáltico" },
    // { img: "", name: "Eternit" },
    { img: "", name: "Otro" }
  ]
};

export const energyBill = {
  title: "Nos gustaría saber más sobre tu consumo de energía",
  question: "¿Actualmente recibes factura de energía?",
  yes: "Sí",
  no: "No",
  bill: {
    text: "Compártenos una foto completa de tu última factura de energía",
    icon: <RiUploadCloud2Line />
  },
  question2: {
    q: "¿Por qué es necesario adjuntar mi factura?",
    icon: <RiExternalLinkLine />
  }
};

export const additionalInformation = {
  title: "Estás a un paso de vivir una Experiencia Increíble con Erco",
  q1: "¿Cómo nos conociste?",
  q2: "¿Debemos saber algo más de tu proyecto solar?",
  terms: "Acepto términos y condiciones"
};

export const confirmation = {
  img: imgQuote,
  title: "¡Todo listo!",
  text1:
    "Hemos recibido tus datos en unos minutos nos podremos en contacto contigo.",
  text2: "¡Muchas gracias!"
};

export const places = [
  { label: "Antioquia" },
  { label: "Antioquia" },
  { label: "Antioquia" },
  { label: "Antioquia" }
];

export const optionsQuestion = [
  { label: "Facebook/Instagram" },
  { label: "LinkedIn" },
  { label: "Búsqueda Google" },
  { label: "Ferias/Eventos" },
  { label: "Periódicos" },
  { label: "Radio" },
  { label: "Televisión" },
  { label: "Referido" },
  { label: "Valla Publicitaria" },
  { label: "Email Marketing" }
];
