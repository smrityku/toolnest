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
    "Free online tools for developers and everyone. JSON formatter, Base64 encoder, word counter, UUID generator, and more. Everything runs in your browser — fast, private, no sign-up required.",
  keywords:
    "online tools, developer tools, json formatter, base64 encoder, word counter, uuid generator, free tools",
  metadataBase: new URL("https://toolnest.pages.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ToolNest",
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
      <head>
        {/* TODO: Uncomment and add your GA4 Measurement ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} /> */}
      </head>
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
