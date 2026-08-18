import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "ToolNest — Free Online Developer & Utility Tools",
    template: "%s | ToolNest",
  },
  description:
    "Free online developer and utility tools that run 100% in your browser. JSON formatter, Base64 encoder, JWT decoder, UUID generator, SQL formatter, and more.",
  keywords:
    "online tools, developer tools, json formatter, base64 encoder, word counter, uuid generator, jwt decoder, free tools",
  metadataBase: new URL("https://toolnest.smrityku.workers.dev"),
  alternates: {
    canonical: "https://toolnest.smrityku.workers.dev/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ToolNest",
    url: "https://toolnest.smrityku.workers.dev/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "xSyByodlianSfbnjK4_J_g4r65y0eDBMP2cpj-ns_Mg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark">
      <head />
      <body>
        <Header />
        <main style={{ position: "relative", zIndex: 1, minHeight: "70vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
