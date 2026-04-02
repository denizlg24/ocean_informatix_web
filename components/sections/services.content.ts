import { t, type Dictionary } from "intlayer";

const servicesContent = {
  key: "services",
  content: {
    sectionLabel: t({ en: "What we build", "pt": "O que construímos" }),
    heading: t({ en: "Services", "pt": "Serviços" }),
    items: [
      {
        num: "01",
        title: t({ en: "Web Applications", "pt": "Aplicações Web" }),
        description: t({
          en: "Custom-built applications that perform at scale. From single-page apps to complex multi-tier systems — we engineer for reliability.",
          "pt":
            "Aplicações personalizadas com desempenho à escala. De single-page apps a sistemas complexos multi-camada — engenharia focada em fiabilidade.",
        }),
        tags: ["React", "Next.js", "TypeScript"],
      },
      {
        num: "02",
        title: t({ en: "Digital Platforms", "pt": "Plataformas Digitais" }),
        description: t({
          en: "Multi-sided platforms, SaaS products, and marketplaces built with the architecture to grow without breaking.",
          "pt":
            "Plataformas multi-lado, produtos SaaS e marketplaces construídos com arquitetura para crescer sem falhar.",
        }),
        tags: ["Architecture", "APIs", "Infrastructure"],
      },
      {
        num: "03",
        title: t({ en: "Custom Software", "pt": "Software Personalizado" }),
        description: t({
          en: "Bespoke software for complex business problems that off-the-shelf products simply cannot solve.",
          "pt":
            "Software à medida para problemas de negócio complexos que soluções genéricas simplesmente não resolvem.",
        }),
        tags: ["Backend", "Integrations", "Automation"],
      },
      {
        num: "04",
        title: t({ en: "Technical Consulting", "pt": "Consultoria Técnica" }),
        description: t({
          en: "Strategic guidance on technology decisions, architecture reviews, and engineering team augmentation.",
          "pt":
            "Orientação estratégica em decisões tecnológicas, revisão de arquitetura e reforço de equipas de engenharia.",
        }),
        tags: ["Strategy", "Code Review", "Mentoring"],
      },
    ],
  },
} satisfies Dictionary;

export default servicesContent;
