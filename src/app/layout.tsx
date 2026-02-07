import type { Metadata } from "next";
import { Playfair_Display, Newsreader, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Develi Pide Kebap | Geleneksel Lezzet",
  description: "Yüzyıllık Develi geleneği, özel taş fırınımızda, en kaliteli malzemelerle yeniden hayat buluyor. İvedik OSB, Ankara",
  keywords: "develi pide, kebap, ankara, ivedik osb, develi cıvıklısı, taş fırın",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${newsreader.variable} ${montserrat.variable}`}>
      <head>
        {/* Font Awesome */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
