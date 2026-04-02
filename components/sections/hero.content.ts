import { t, type Dictionary } from "intlayer";

const heroContent = {
  key: "hero",
  content: {
    location: t({ en: "Porto · Portugal", "pt": "Porto · Portugal" }),
    headingLine1: t({ en: "We craft digital", "pt": "Criamos infraestrutura" }),
    headingLine2: t({ en: "infrastructure.", "pt": "digital." }),
    description: t({
      en: "From concept to production — we build web applications and platforms that scale with your ambitions.",
      "pt":
        "Do conceito à produção — construímos aplicações web e plataformas que escalam com as suas ambições.",
    }),
    ctaPrimary: t({ en: "Start a project", "pt": "Iniciar projeto" }),
    ctaSecondary: t({ en: "Explore services", "pt": "Explorar serviços" }),
    scroll: t({ en: "Scroll", "pt": "Descer" }),
  },
} satisfies Dictionary;

export default heroContent;
