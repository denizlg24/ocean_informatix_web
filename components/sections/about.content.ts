import { t, type Dictionary } from "intlayer";

const aboutContent = {
  key: "about",
  content: {
    sectionLabel: t({ en: "Who we are", "pt": "Quem somos" }),
    headingLine1: t({ en: "Built from the", "pt": "Construído a partir das" }),
    headingLine2: t({ en: "shores of Porto.", "pt": "margens do Porto." }),
    paragraph1: t({
      en: "We're a young, passionate team of engineers based in Porto, driven by a genuine love for building things that work. What we lack in grey hair, we make up for in curiosity, craft, and a relentless focus on quality.",
      "pt":
        "Somos uma equipa jovem e apaixonada de engenheiros sediada no Porto, movidos por um amor genuíno por construir coisas que funcionam. O que nos falta em experiência, compensamos em curiosidade, ofício e um foco implacável na qualidade.",
    }),
    paragraph2: t({
      en: "We specialise in end-to-end delivery — taking products from a blank page all the way to production. No hand-offs, no silos. We own the whole system and stand behind every line of it.",
      "pt":
        "Especializamo-nos na entrega de ponta a ponta — levando produtos de uma página em branco até à produção. Sem transferências, sem silos. Assumimos todo o sistema e respondemos por cada linha.",
    }),
    companyName: t({ en: "Ocean Informatix", "pt": "Ocean Informatix" }),
    companyLocation: t({ en: "Porto, Portugal", "pt": "Porto, Portugal" }),
    pillars: [
      {
        value: t({ en: "End-to-end", "pt": "Ponta a ponta" }),
        label: t({
          en: "From architecture to deployment",
          "pt": "Da arquitetura à implementação",
        }),
      },
      {
        value: t({ en: "Modern", "pt": "Moderno" }),
        label: t({
          en: "Latest tools & best practices",
          "pt": "Ferramentas atuais e boas práticas",
        }),
      },
      {
        value: t({ en: "Porto", "pt": "Porto" }),
        label: t({
          en: "EU-based, global reach",
          "pt": "Sediados na UE, alcance global",
        }),
      },
      {
        value: t({ en: "Craft", "pt": "Ofício" }),
        label: t({
          en: "Quality over speed, always",
          "pt": "Qualidade acima de velocidade, sempre",
        }),
      },
    ],
    quote: t({
      en: "Strategy before code. Architecture before features. Quality over quantity — always.",
      "pt":
        "Estratégia antes do código. Arquitetura antes das funcionalidades. Qualidade acima de quantidade — sempre.",
    }),
  },
} satisfies Dictionary;

export default aboutContent;
