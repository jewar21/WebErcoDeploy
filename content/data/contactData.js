// incons

import {
  iconHandler,
  iconCustomer,
  iconWhatsapp,
  iconMail,
  iconPhone
} from "../globalData";

// imgs

import imgBackgroundMobile from "../../assets/Backgrounds/backgroundContactMobile.png";
import imgBackground from "../../assets/Backgrounds/backgroundContact.png";

export const constactInfo = {
  header: "¡TE AYUDAMOS!",
  title: "Contáctanos",
  content:
    "Estamos siempre listos para brindarte un servicio increíble en cada una de nuestras líneas de negocio. Sé pionero de nuestras tecnologías y aporta a un futuro sostenible con Erco Energía.",
  cards: [
    {
      icon: iconHandler,
      title: "Cotiza un servicio",
      info: "Te brindamos una cotización que se ajusta a tus necesidades ya sea para tu hogar o empresa.",
      buttonText: "Cotiza un servicio"
    },
    {
      icon: iconCustomer,
      title: "Llama a un asesor",
      info: "Llámanos y recibe una asesoría personalizada en cualquiera de nuestras soluciones.",
      buttonText: "Llama a un asesor"
    },
    {
      icon: iconWhatsapp,
      title: "Chatea con un asesor",
      info: "¡Habla con nosotros! nos encantará resolver tus dudas y brindarte soluciones sostenibles.",
      buttonText: "Chatea con un asesor"
    }
  ],
  offices: {
    title: "Nuestras oficinas",
    img1: imgBackgroundMobile,
    img2: imgBackground,
    iconMail: iconMail,
    iconPhone: iconPhone,
    contacts: [
      {
        country: "Colombia",
        email: "comercial@ercoenergia.com.co",
        phone: "+57 316 018 67 72"
      },
      {
        country: "Panamá",
        email: "bstein@ercoenergia.com.pa",
        phone: "+507 6319 2694"
      },
      {
        country: "San Antonio, Texas",
        email: "comercial@ercoenergia.com.co",
        phone: "+1 210 639 3818"
      }
    ]
  }
};
