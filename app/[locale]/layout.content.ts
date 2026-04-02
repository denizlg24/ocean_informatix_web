import { t, type Dictionary } from "intlayer";

const layoutContent = {
  key: "layout",
  content: {
    title: t({
      en: "Ocean Informatix — Tech Consulting & Web Solutions",
      "pt": "Ocean Informatix — Consultoria Tecnológica & Soluções Web",
    }),
    description: t({
      en: "Porto-based technology consultancy specialising in web applications and digital platforms. From concept to production, we craft software that scales.",
      "pt":
        "Consultoria tecnológica sediada no Porto, especializada em aplicações web e plataformas digitais. Do conceito à produção, criamos software que escala.",
    }),
    ogTitle: t({
      en: "Ocean Informatix — Tech Consulting & Web Solutions",
      "pt": "Ocean Informatix — Consultoria Tecnológica & Soluções Web",
    }),
    ogDescription: t({
      en: "Porto-based technology consultancy building web applications and digital platforms.",
      "pt":
        "Consultoria tecnológica sediada no Porto a construir aplicações web e plataformas digitais.",
    }),
  },
} satisfies Dictionary;

export default layoutContent;
