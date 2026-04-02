import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.PORTUGUESE],
    defaultLocale: Locales.ENGLISH,
    strictMode: "inclusive",
  },
  routing: {
    mode: "prefix-no-default",
  },
  dictionary: {
    importMode: "static",
  },
  content: {
    fileExtensions: [".content.ts", ".content.tsx"],
  },
  build: {
    optimize: true,
  },
};

export default config;
