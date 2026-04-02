import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import { IntlayerClientProvider, generateStaticParams as intlayerStaticParams } from "next-intlayer";
import type { NextLayoutIntlayer } from "next-intlayer";
import { IntlayerServerProvider, useIntlayer } from "next-intlayer/server";
import type { LocalesValues } from "intlayer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { intlayerStaticParams as generateStaticParams };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: LocalesValues }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = useIntlayer("layout", locale);

  return {
    title: content.title.value,
    description: content.description.value,
    keywords: ["tech consulting", "web applications", "digital platforms", "Porto", "Portugal"],
    openGraph: {
      title: content.ogTitle.value,
      description: content.ogDescription.value,
      siteName: "Ocean Informatix",
      locale: locale === "pt" ? "pt" : "en",
      type: "website",
    },
  };
}

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <IntlayerServerProvider locale={locale}>
          <IntlayerClientProvider locale={locale}>
            {children}
          </IntlayerClientProvider>
        </IntlayerServerProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
