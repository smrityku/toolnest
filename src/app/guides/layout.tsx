import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Guides & Technical References — ToolNest",
  description:
    "Comprehensive technical documentation and developer guides on JSON syntax, Base64 encoding, URL parameters, UUID v4 randomness, JWT architecture, and cryptographic hashing.",
  keywords:
    "developer guides, technical documentation, json guide, base64 guide, jwt guide, uuid guide, web development tutorials",
  openGraph: {
    title: "Developer Guides & Technical References — ToolNest",
    description:
      "Practical technical guides with code examples, comparisons, and best practices for modern web developers.",
    url: "https://toolnest.smrityku.workers.dev/guides/",
    type: "website",
  },
  alternates: {
    canonical: "https://toolnest.smrityku.workers.dev/guides/",
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
