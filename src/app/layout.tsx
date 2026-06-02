import Script from "next/script";
import type { Metadata } from "next";
import { Providers } from "../context/providers";
import Header from "./_home/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Roman Hernandez",
  description:
    "Esta es la página web personal de David Román Hernández, desarrollador front-end. En ella se encuentra una pequeña introducción personal junto con una recolección de trabajos y habilidades, además de un formulario de contacto.",
  robots: "index, follow",
  openGraph: {
    title: "David Román Hernández",
    description:
      "Esta es la página web personal de David Román Hernández, desarrollador front-end. En ella se encuentra una pequeña introducción personal junto con una recolección de trabajos y habilidades, además de un formulario de contacto.",
    url: "https://davidromanhernandez.com",
    images: [{ url: "https://davidromanhernandez.com/front.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P6JHSJR9');
          `}
        </Script>
        <Providers>
          <Header />
          {children}
        </Providers>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6JHSJR9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
