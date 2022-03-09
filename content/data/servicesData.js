import {
  RiComputerLine,
  RiLeafLine,
  RiCustomerService2Line,
  RiShieldStarLine,
  RiGroupLine,
  RiTrophyLine
} from "react-icons/ri";

import imghome1 from "../../assets/imagenes/Hogar/HogarInterconectado.png";
import imghome2 from "../../assets/imagenes/Hogar/HogarHibrido.png";
import imghome3 from "../../assets/imagenes/Hogar/HogarAisldo.png";
import imgCompany1 from "../../assets/imagenes/Empresas/EmpresaInterconectado.png";
import imgCompany2 from "../../assets/imagenes/Empresas/EmpresaHibrido.png";
import imgCompany3 from "../../assets/imagenes/Empresas/EmpresaAislado.png";

const iconComputer = <RiComputerLine />;
const iconLeaf = <RiLeafLine />;
const iconCustomer = <RiCustomerService2Line />;
const iconShield = <RiShieldStarLine />;
const iconGroup = <RiGroupLine />;

// cover info

export const homeConverInfo = {
  img: "",
  section: "Hogar",
  title: "Energía solar",
  content:
    "Elige una de nuestras soluciones de energía solar y comienza a construir tu ecosistema de energía. Así podrás tener ahorros adicionales y el control de toda tu energía. "
};

export const companyConverInfo = {
  img: "",
  section: "Empresa",
  title: "Energía solar",
  content:
    "Elige una de nuestras soluciones de energía solar y comienza a construir tu ecosistema de energía. Así podrás tener ahorros adicionales y el control de toda tu energía. "
};

// instalación

export const homeInstallation = {
  title: "Instalación energía solar",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lectus tortor. Fusce ut dolor dolor. Morbi viverra bibendum risus a imperdiet.",
  subtitle: "Instalación",
  content:
    "Instala un sistema de energía solar fotovoltaico para tu hogar y genera hasta el 100% de tus consumos energéticos.",
  cards: [
    {
      img: imghome1,
      title: "Sistema interconectado",
      content:
        "Estos sistemas funcionan en conjunto con la red eléctrica convencional, te permiten un flujo constante de energía y conectar cualquier equipo de tu hogar sin importar su potencia o consumo. Los sistemas interconectados no generan un respaldo de energía.",
      items: [
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        }
      ]
    },
    {
      img: imghome2,
      title: "Sistema Híbrido",
      content:
        "Está compuesto por un sistema de energía solar y un banco de baterías que te permiten almacenar la energía producida por los paneles solares y utilizarla en cualquier momento del día, durante la noche o en caso de cortes de la energía de la red convencional.",
      items: [
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        }
      ]
    },
    {
      img: imghome3,
      title: "Sistema Aislado",
      content:
        "Utiliza un banco de baterías para almacenar la energía eléctrica producida por los paneles solares, este sistema no requiere de la red eléctrica convencional para funcionar. Esta energía la puedes utilizar en cualquier momento del día o durante la noche.",
      items: [
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        }
      ]
    }
  ]
};

export const companyInstallation = {
  title: "Instalación energía solar",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lectus tortor. Fusce ut dolor dolor. Morbi viverra bibendum risus a imperdiet.",
  subtitle: "Instalación",
  content:
    "Instala un sistema de energía solar fotovoltaico para tu empresa y mejora su productividad y eficiencia energética.",
  cards: [
    {
      img: imgCompany1,
      title: "Sistema interconectado",
      content:
        "Son sistemas ideales para que tu empresa pueda generar ahorros hasta del 100% de la factura de energía, recuperar la inversión entre 4 a 6 años, contribuir a un futuro sostenible y acceder a beneficios tributarios. Este sistema no genera un respaldo de energía.",
      items: [
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        }
      ]
    },
    {
      img: imgCompany2,
      title: "Sistema Híbrido",
      content:
        "Si tienes un servicio de energía inestable y deseas tener un respaldo de energía y al mismo tiempo generar ahorros en la factura de energía, el sistema híbrido es el ideal, ya que combina el sistema interconectado con el aislado, permitiendo utilizar la energía producida en cualquier momento del día o durante la noche.",
      items: [
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        }
      ]
    },
    {
      img: imgCompany3,
      title: "Sistema Aislado",
      content:
        "Si tu empresa se encuentra en una zona rural, está apartada de la red eléctrica, tiene energía inestable y necesita de un respaldo de energía ¡el sistema aislado es el ideal para ti! Este sistema almacena la energía producida en baterías que puedes utilizar en cualquier momento del día o durante la noche.",
      items: [
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        },
        {
          icon: iconComputer,
          title: "Lorem ipsum",
          text: "Activa alarmas de consumo para enterarte en tiempo real del consumo alcanzado."
        }
      ]
    }
  ]
};

// NEU+

export const neuPlus = {
  title: "NEU+",
  description:
    "Visualiza tus consumos de energía en tiempo real, recibe notificaciones a través de inteligencia artificial.",
  cards: [
    {
      icon: iconCustomer,
      title: "Visualización",
      content: "De datos de consumo y generación en tiempo real."
    },
    {
      icon: iconShield,
      title: "Notificaciones",
      content: "Recibe alertas por consumos atípicos."
    },
    {
      icon: iconGroup,
      title: "Alta tecnología",
      content: "Para la gestión inteligente de tus proyectos."
    },
    {
      icon: iconComputer,
      title: "Evita multas",
      content: "Por consumo excesivo de energía reactiva."
    },
    {
      icon: iconLeaf,
      title: "Facturación",
      content: "Paga tu factura desde la App o automatiza tus pagos."
    }
  ]
};

// Operación y mantenimiento

export const operationAndMaintenance = {
  title: "Operación & Mantenimiento",
  description:
    "Garantizamos que tu sistema solar trabaje al punto máximo de operación.",
  cards: [
    {
      icon: iconCustomer,
      title: "Calidad",
      content:
        "Garantizamos que tu sistema solar trabaje al punto máximo de operación."
    },
    {
      icon: iconShield,
      title: "Análisis",
      content: "Del comportamiento y eficiencia de tu proyecto solar."
    },
    {
      icon: iconGroup,
      title: "Mantenimiento",
      content: "Realizamos mantenimiento predictivo, preventivo y correctivo."
    },
    {
      icon: iconComputer,
      title: "Personal",
      content: "Contamos con un equipo técnico propio y calificado."
    }
  ]
};

// Banner 5 steps

export const stepsSolarEnergy = [
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
    description: "instalación",
    info: "De estructuras, paneles, inversor e instalación de acometidas DC, AC."
  },
  {
    number: "04",
    description: "RETIE",
    info: "Envío de documentación, visita de certificación y certificación."
  },
  {
    number: "05",
    description: "Tu primer kilovatio",
    info: "Entrega de tu sistema solar y capacitación de la App de monitoreo."
  }
];

// Payment Methods

export const paymentMethods = {
  title: "Formas de pago",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit:",
  methods: "Forma de pago 1, forma de pago 2, forma de pago 3."
};
