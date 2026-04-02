import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "home-page",
  content: {
    footerRights: t({
      en: "All rights reserved.",
      "pt": "Todos os direitos reservados.",
    }),
    footerLocation: t({ en: "Porto, Portugal", "pt": "Porto, Portugal" }),
  },
} satisfies Dictionary;

export default pageContent;
