import { t, type Dictionary } from "intlayer";

const processContent = {
  key: "process",
  content: {
    sectionLabel: t({ en: "How we work", "pt": "Como trabalhamos" }),
    heading: t({ en: "Our process", "pt": "O nosso processo" }),
    steps: [
      {
        num: "01",
        title: t({ en: "Discover", "pt": "Descobrir" }),
        description: t({
          en: "Deep-diving into your goals, constraints, and existing systems before touching a keyboard.",
          "pt":
            "Imersão nos seus objetivos, restrições e sistemas existentes antes de tocar no teclado.",
        }),
      },
      {
        num: "02",
        title: t({ en: "Design", "pt": "Desenhar" }),
        description: t({
          en: "Architecting scalable solutions with clarity — technical design documents, not guesswork.",
          "pt":
            "Arquitetar soluções escaláveis com clareza — documentos de design técnico, não suposições.",
        }),
      },
      {
        num: "03",
        title: t({ en: "Build", "pt": "Construir" }),
        description: t({
          en: "Iterative engineering with weekly deliverables, transparent progress, and zero surprises.",
          "pt":
            "Engenharia iterativa com entregas semanais, progresso transparente e zero surpresas.",
        }),
      },
      {
        num: "04",
        title: t({ en: "Launch", "pt": "Lançar" }),
        description: t({
          en: "Deployment, monitoring, and ongoing support to ensure lasting performance post-launch.",
          "pt":
            "Implementação, monitorização e suporte contínuo para garantir desempenho duradouro após o lançamento.",
        }),
      },
    ],
  },
} satisfies Dictionary;

export default processContent;
