import { t, type Dictionary } from "intlayer";

const navbarContent = {
  key: "navbar",
  content: {
    services: t({ en: "Services", "pt": "Serviços" }),
    process: t({ en: "Process", "pt": "Processo" }),
    about: t({ en: "About", "pt": "Sobre" }),
    contact: t({ en: "Contact", "pt": "Contacto" }),
    cta: t({ en: "Start a project", "pt": "Iniciar projeto" }),
  },
} satisfies Dictionary;

export default navbarContent;
