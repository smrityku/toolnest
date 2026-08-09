import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tools, getToolBySlug, getToolsByCategory, getCategoryInfo, getAllSlugs } from "@/registry/tools";

import JsonFormatter from "@/tools/json/JsonFormatter";
import JsonValidator from "@/tools/json/JsonValidator";
import JsonMinifier from "@/tools/json/JsonMinifier";
import Base64Encoder from "@/tools/encoding/Base64Encoder";
import Base64Decoder from "@/tools/encoding/Base64Decoder";
import UrlEncoder from "@/tools/encoding/UrlEncoder";
import UrlDecoder from "@/tools/encoding/UrlDecoder";
import WordCounter from "@/tools/text/WordCounter";
import CharacterCounter from "@/tools/text/CharacterCounter";
import UuidGenerator from "@/tools/generators/UuidGenerator";

const componentMap: Record<string, React.ComponentType> = {
  "json-formatter": JsonFormatter,
  "json-validator": JsonValidator,
  "json-minifier": JsonMinifier,
  "base64-encoder": Base64Encoder,
  "base64-decoder": Base64Decoder,
  "url-encoder": UrlEncoder,
  "url-decoder": UrlDecoder,
  "word-counter": WordCounter,
  "character-counter": CharacterCounter,
  "uuid-generator": UuidGenerator,
};

export function generateStaticParams() {
  return getAllSlugs();
}

type PageProps = {
  params: Promise<{ category: string; tool: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tool: toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: tool.title,
    description: tool.description,
    keywords: tool.keywords.join(", "),
    openGraph: {
      title: tool.title,
      description: tool.description,
      type: "website",
    },
    alternates: {
      canonical: `/${tool.category}/${tool.slug}/`,
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { category, tool: toolSlug } = await params;
  const tool = getToolBySlug(toolSlug);

  if (!tool || tool.category !== category) {
    notFound();
  }

  const Component = componentMap[tool.slug];
  if (!Component) {
    notFound();
  }

  return <Component />;
}
