import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Ocean Informatix — Tech Consulting & Web Solutions",
  description:
    "Porto-based technology consultancy specialising in web applications and digital platforms. From concept to production, we craft software that scales.",
  keywords: ["tech consulting", "web applications", "digital platforms", "Porto", "Portugal"],
  openGraph: {
    title: "Ocean Informatix — Tech Consulting & Web Solutions",
    description:
      "Porto-based technology consultancy building web applications and digital platforms.",
    siteName: "Ocean Informatix",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
