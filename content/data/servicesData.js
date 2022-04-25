import {
  iconHandler,
  iconComputer,
  iconMobile,
  iconAlert,
  iconTechnology,
  iconAlertCircle,
  iconBill,
  iconStar,
  iconAnalytics,
  iconTools,
  iconWorker,
  iconRadioTower,
  iconPlug,
  iconLightBulb,
  iconCancel,
  iconTime,
  iconPlace,
  iconLightning,
  iconSolarPanel,
  iconBatteryLine,
  iconBattery
} from "../globalData";

// Imagenes

import imgCoverHomeE from "../../assets/imagenes/Hogar/EnergiaSolar/BannerEnergiaSolarHogar.png";
import imghomeE1 from "../../assets/imagenes/Hogar/EnergiaSolar/HogarInterconectado.png";
import imghomeE2 from "../../assets/imagenes/Hogar/EnergiaSolar/HogarHibrido.png";
import imghomeE3 from "../../assets/imagenes/Hogar/EnergiaSolar/HogarAisldo.png";
import imgCoverInstallationHome from "../../assets/imagenes/Instalacion/BannerInstalacionHogar.jpg";

import imgCoverCompanyE from "../../assets/imagenes/Empresas/EnergiaSolar/BannerEnergiaSolarEmpresa.jpg";
import imgCompanyE1 from "../../assets/imagenes/Empresas/EnergiaSolar/EmpresaInterconectado.png";
import imgCompanyE2 from "../../assets/imagenes/Empresas/EnergiaSolar/EmpresaHibrido.png";
import imgCompanyE3 from "../../assets/imagenes/Empresas/EnergiaSolar/EmpresaAislado.png";
import imgCoverInstallationCompany from "../../assets/imagenes/Instalacion/BannerInstalacionEmpresa.jpg";

import imgCoverMobilityH from "../../assets/imagenes/Hogar/MovilidadElectrica/BannerMovilidadElectrica.jpg";
import imgHomeM1 from "../../assets/imagenes/Hogar/MovilidadElectrica/MovilidadElectrica.jpeg";
import imgHomeM2 from "../../assets/imagenes/Hogar/MovilidadElectrica/CargaPublica.jpeg";
import imgCoverMobilityE from "../../assets/imagenes/Empresas/MovilidadElectrica/BannerMovilidadElectrica.jpg";
import imgCompanyM1 from "../../assets/imagenes/Empresas/MovilidadElectrica/MovilidadSostenible.jpeg";

import imgCoverStorage from "../../assets/imagenes/Empresas/Almacenamiento/BannerAE.jpg";
import imghome from "../../assets/imagenes/Empresas/Almacenamiento/AEhogar.jpg";
import imgCompany from "../../assets/imagenes/Empresas/Almacenamiento/AEempresas.jpg";

// cover info

export const homeConverInfo = {
  section: "Hogar",
  img: imgCoverHomeE,
  title: "Energía solar",
  content:
    "Elige una de nuestras soluciones de energía solar y comienza a construir tu ecosistema de energía. Así podrás tener ahorros adicionales y el control de toda tu energía."
};

export const companyConverInfo = {
  section: "Empresa",
  img: imgCoverCompanyE,
  title: "Energía solar",
  content:
    "Elige una de nuestras soluciones de energía solar y comienza a construir tu ecosistema de energía. Así podrás tener ahorros adicionales y el control de toda tu energía."
};

// instalación

export const homeInstallation = {
  img: imgCoverInstallationHome,
  title: "Instalación energía solar",
  description:
    "¡Deja que tu proyecto solar esté en manos de expertos! Nos encargamos del diseño, instalación y puesta en marcha de tu sistema de energía solar. ",
  title1: "Instalación",
  content:
    "Instala un sistema de energía solar fotovoltaico para tu hogar y genera hasta el 100% de tus consumos energéticos.",
  cardsInstallation: [
    {
      imgHome: imghomeE1,
      title: "Sistema interconectado",
      content:
        "Estos sistemas funcionan en conjunto con la red eléctrica convencional, te permiten un flujo constante de energía y conectar cualquier equipo de tu hogar sin importar su potencia o consumo. Los sistemas interconectados no generan un respaldo de energía."
    },
    {
      imgHome: imghomeE2,
      title: "Sistema Híbrido",
      content:
        "Está compuesto por un sistema de energía solar y un banco de baterías que te permiten almacenar la energía producida por los paneles solares y utilizarla en cualquier momento del día, durante la noche o en caso de cortes de la energía de la red convencional."
    }
  ]
};

export const companyInstallation = {
  img: imgCoverInstallationCompany,
  title: "Instalación energía solar",
  description:
    "¡Deja que tu proyecto solar esté en manos de expertos! Nos encargamos del diseño, instalación y puesta en marcha de tu sistema de energía solar. ",
  title1: "Instalación",
  content:
    "Instala un sistema de energía solar fotovoltaico en tu empresa para que mejores la productividad, seas más eficiente y obtengas ahorros en tu factura.",
  cardsInstallation: [
    {
      imgCompany: imgCompanyE1,
      title: "Sistema interconectado",
      content:
        "Son sistemas ideales para que tu empresa pueda generar ahorros hasta del 100% de la factura de energía, recuperar la inversión entre 4 a 6 años, contribuir a un futuro sostenible y acceder a beneficios tributarios. Este sistema no genera un respaldo de energía."
    },
    {
      imgCompany: imgCompanyE2,
      title: "Sistema Híbrido",
      content:
        "Si tienes un servicio de energía inestable y tu producción se ve afectada, el sistema híbrido es el ideal para tu empresa. Combina el sistema interconectado con el aislado, generando un respaldo de energía a la red eléctrica la cual podrás utilizar en cualquier momento del día o durante la noche."
    },
    {
      imgCompany: imgCompanyE3,
      title: "Sistema Aislado",
      content:
        "Si tu empresa se encuentra en una zona rural, está apartada de la red eléctrica o tiene energía inestable ¡el sistema aislado es el ideal! Este sistema almacena la energía producida en baterías que puedes utilizar en cualquier momento del día o durante la noche. Este sistema no necesita estar conectado a la red eléctrica."
    }
  ]
};

export const cardsInstallation = [
  {
    imgHome: imghomeE1,
    imgCompany: imgCompanyE1,
    title: "Sistema interconectado",
    content:
      "Este sistema funciona en conjunto con la red eléctrica convencional y te permiten un flujo constante en la energía.",
    items: [
      {
        icon: iconRadioTower,
        title: "Conexión a la red eléctrica",
        text: "Al tener un sistema interconectado  a la red eléctrica convencional tienes una menor inversión y  tener mayor rentabilidad. "
      },
      {
        icon: iconPlug,
        title: "Conexión de máquinas y equipos",
        text: "Este tipo de sistema te permite conectar cualquier equipo eléctrico sin importar su potencia o consumo."
      },
      {
        icon: iconLightBulb,
        title: "Generación y ahorros",
        text: "Generas hasta el 100% en tus consumos energéticos, ahorrando significativamente en tu factura de energía."
      },
      {
        icon: iconCancel,
        title: "Sin respaldo de energía",
        text: "Al ser un sistema conectado a la red eléctrica no cuenta con respaldo de energía."
      }
    ]
  },
  {
    imgHome: imghomeE3,
    imgCompany: imgCompanyE3,
    title: "Sistema Aislado",
    content:
      "Este sistema funciona con un banco de baterías que permite almacenar la energía eléctrica producida por los paneles solares.",
    items: [
      {
        icon: iconRadioTower,
        title: "¡Independízate de la energía tradicional!",
        text: "Este sistema no requiere de conexión a la red eléctrica convencional para funcionar."
      },
      {
        icon: iconTime,
        title: "En cualquier momento",
        text: "Usa esta energía en cualquier momento del día o durante la noche."
      },
      {
        icon: iconPlace,
        title: "En cualquier lugar",
        text: "Si te encuentras en un lugar rural, aislado de la red eléctrica convencional este sistema es el ideal para ti."
      },
      {
        icon: iconLightning,
        title: "Respaldo de energía",
        text: "Si tu energía tiene fallas, cortes y/o es inestable, elige un sistema solar aislado, tendrás energía en todo momento."
      }
    ]
  },
  {
    imgHome: imghomeE2,
    imgCompany: imgCompanyE2,
    title: "Sistema Híbrido",
    content:
      "Este sistema cuenta con la combinación de un sistema interconectado y un sistema aislado. Es necesario tener conexión con la red eléctrica convencional.",
    items: [
      {
        icon: iconSolarPanel,
        title: "Composición",
        text: "Está compuesto por un sistema de energía solar y un banco de baterías que almacena la energía producida por los paneles solares."
      },
      {
        icon: iconTime,
        title: "En cualquier momento y lugar",
        text: "Usa esta energía en cualquier momento del día o durante la noche."
      },
      {
        icon: iconLightning,
        title: "Respaldo de energía",
        text: "Si tu energía tiene fallas, cortes y/o es inestable, elige un sistema solar híbrido, tendrás energía en todo momento."
      },
      {
        icon: iconHandler,
        title: "Ahorros",
        text: "Con este sistema de energía solar generas significativos ahorros en tu factura de energía."
      }
    ]
  }
];

// NEU+

export const neuPlus = {
  title: "NEU+",
  content:
    "Visualiza tus consumos de energía en tiempo real, recibe notificaciones a través de inteligencia artificial.",
  cards: [
    {
      icon: iconMobile,
      title: "Visualización",
      content: "De datos de consumo y generación en tiempo real."
    },
    {
      icon: iconAlert,
      title: "Notificaciones",
      content: "Recibe alertas por consumos atípicos."
    },
    {
      icon: iconTechnology,
      title: "Alta tecnología",
      content: "Para la gestión inteligente de tus proyectos."
    },
    {
      icon: iconAlertCircle,
      title: "Evita multas",
      content: "Por consumo excesivo de energía reactiva."
    },
    {
      icon: iconBill,
      title: "Facturación",
      content: "Paga tu factura desde la App o automatiza tus pagos."
    }
  ]
};

// Operación y mantenimiento

export const operationAndMaintenance = {
  title: "Operación & Mantenimiento",
  content:
    "Garantizamos que tu sistema solar trabaje al punto máximo de operación.",
  cards: [
    {
      icon: iconStar,
      title: "Calidad",
      content:
        "Garantizamos que tu sistema solar trabaje al punto máximo de operación."
    },
    {
      icon: iconAnalytics,
      title: "Análisis",
      content: "Del comportamiento y eficiencia de tu proyecto solar."
    },
    {
      icon: iconTools,
      title: "Mantenimiento",
      content: "Realizamos mantenimiento predictivo, preventivo y correctivo."
    },
    {
      icon: iconWorker,
      title: "Personal",
      content: "Contamos con un equipo técnico propio y calificado."
    }
  ]
};

// Banner 5 steps

export const stepsSolarEnergy = {
  title: "5 pasos para tener tu sistema de energía solar",
  steps: [
    {
      number: "01",
      description: "Firma de contrato",
      info: "Relacionamiento inicial, introducción y entrega de documentos."
    },
    {
      number: "02",
      description: "Diseño e ingeniería",
      info: "Visita de ingeniería, ingeniería de detalle y compra de equipos."
    },
    {
      number: "03",
      description: "Instalación",
      info: "De estructuras, paneles, inversor e instalación de acometidas DC, AC."
    },
    {
      number: "04",
      description: "Legalización y RETIE",
      info: "Envío de documentación, visita de certificación y certificación."
    },
    {
      number: "05",
      description: "Tu primer kilovatio",
      info: "Entrega de tu sistema solar y capacitación de la App de monitoreo."
    }
  ]
};

// Payment Methods

export const paymentMethods = {
  title: "Formas de pago",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit:",
  methods: "Forma de pago 1, forma de pago 2, forma de pago 3."
};

// Mobility

export const electricMobilityData = {
  bannerHome: {
    img: imgCoverMobilityH,
    title: "Movilidad eléctrica",
    content:
      "Infraestructura e instalación de equipos para recarga de vehículos eléctricos e híbridos."
  },
  bannerCompany: {
    img: imgCoverMobilityE,
    title: "Movilidad eléctrica",
    content:
      "Infraestructura e instalación de equipos para recarga de vehículos eléctricos e híbridos."
  },

  iconBattery: iconBattery,
  iconBatteryL: iconBatteryLine,
  var1: "Carga rápida",
  var2: "Carga estándar",
  itemsHome: [
    {
      img: imgHomeM1,
      title: "Moilidad Eléctrica para tu hogar",
      content:
        "El cargador es parte integral de tu vehículo eléctrico o híbrido y en Erco lo instalamos por ti. Somos aliados de las principales marca del país.",
      fastCharge: "(30 Min a 2 horas)",
      standarLoad: "(3 a 8 horas)"
    },
    {
      img: imgHomeM2,
      title: "Carga pública",
      content:
        "Carga especializada para sitios públicos, centros comerciales, estaciones de servicio, concesiones viales o lugares con alta circulación de vehículos que deseen prestar el servicio de recarga vehicular. Normalmente son estaciones de carga rápida aunque dependiendo de los tiempos de estadía puede ser carga estándar.",
      fastCharge: "(30 Min a 2 horas)",
      standarLoad: "(3 a 8 horas)"
    }
  ],
  itemsCompany: [
    {
      img: imgCompanyM1,
      title: "Lleva la movilidad sostenible a tu empresa",
      content:
        "Esta solución está enfocada para empresas que tengan flotas de vehículos eléctricos, transporte público o privado o que quieran instalar infraestructura de carga en sus instalaciones para ofrecer un valor agregado a sus clientes e incentivar la movilidad sostenible en sus colaboradores.",
      fastCharge: "(30 Min a 2 horas)",
      standarLoad: "(3 a 8 horas)"
    },
    {
      img: imgHomeM2,
      title: "Carga pública",
      content:
        "Carga especializada para sitios públicos, centros comerciales, estaciones de servicio, concesiones viales o lugares con alta circulación de vehículos que deseen prestar el servicio de recarga vehicular. Normalmente son estaciones de carga rápida aunque dependiendo de los tiempos de estadía puede ser carga estándar.",
      fastCharge: "(30 Min a 2 horas)",
      standarLoad: "(3 a 8 horas)"
    }
  ]
};

export const fiveStepsM = {
  title: "5 pasos para tener tu cargador eléctrico",
  steps: [
    {
      number: "01",
      description: "Visita de ingeniería",
      info: "Análisis e información inicial de la necesidad para la acometida del punto de carga."
    },
    {
      number: "02",
      description: "Diseño e ingeniería",
      info: "Se realiza la propuesta cumpliendo con los requisitos técnicos."
    },
    {
      number: "03",
      description: "Instalación",
      info: "Se organiza la documentación según el proyecto y se programa instalación."
    },
    {
      number: "04",
      description: "Pruebas de carga con tu carro",
      info: "Se entrega la instalación a conformidad de clientes y actores interesados."
    },
    {
      number: "05",
      description: "Disfruta tu cargador",
      info: "La experiencia continua después de la instalación con mantenimiento y soporte."
    }
  ]
};

export const energyStorageData = {
  img: imgCoverStorage,
  title: "Movilidad eléctrica",
  content:
    "No estamos exentos de cortes de energía, por esto, si quieres asegurar el funcionamiento de tus equipos y no parar la producción de tu empresa, ¡Este sistema es ideal para ti!",
  items: [
    {
      img: imghome,
      title: "Para tu hogar:",
      content:
        "Almacena tu energía eléctrica proveniente de la red convencional en baterías y úsala en caso de cortes o fallas energéticas de la red."
    },
    {
      img: imgCompany,
      title: "Para tu empresa:",
      content:
        "Almacena la energía de tu empresa proveniente de la red eléctrica en un banco de baterías. Aprovecha esta energía en cualquier momento del día o durante la noche."
    }
  ]
};

export const fiveStepsS = {
  title: "5 pasos para tener tu sistema de respaldo",
  steps: [
    {
      number: "01",
      description: "Diagnóstico",
      info: "Análisis de cargas, consumos y tiempo de respaldo."
    },
    {
      number: "02",
      description: "Diseño",
      info: "Visita y diseño de propuesta para la autonomía de tu sistema de respaldo."
    },
    {
      number: "03",
      description: "Ingeniería",
      info: "Ingeniería de detalle y compra de equipos."
    },
    {
      number: "04",
      description: "Instalación y legalización",
      info: "Instalación de paneles y banco de baterías, envio de documentación y certificación."
    },
    {
      number: "05",
      description: "Disfruta tu energía",
      info: "Entrega de tu sistema y capacitación de la App de monitoreo."
    }
  ]
};
