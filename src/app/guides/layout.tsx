import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Developer Guides & Technical References",
  description:
    "In-depth technical guides, specifications breakdowns, and practical code examples for JSON, Base64, JWT architecture, UUID generation, URL standards, and cryptography.",
  keywords:
    "developer guides, technical documentation, json guide, base64 guide, jwt guide, uuid guide, web development tutorials, crypto references",
  openGraph: {
    title: "Developer Guides & Technical References | ToolNest",
    description:
      "Practical technical guides with code examples, comparisons, and best practices for modern software engineers.",
    url: getCanonicalUrl("guides/"),
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Developer Guides & Technical References | ToolNest",
    description:
      "Practical technical guides with code examples, comparisons, and best practices for modern software engineers.",
  },
  alternates: {
    canonical: getCanonicalUrl("guides/"),
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
