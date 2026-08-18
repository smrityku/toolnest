import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getToolBySlug, getAllSlugs } from "@/registry/tools";

// Existing Tools
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

// New Developer & Utility Tools
import JsonToCsv from "@/tools/json/JsonToCsv";
import CsvToJson from "@/tools/json/CsvToJson";
import JsonEscape from "@/tools/json/JsonEscape";
import SqlFormatter from "@/tools/json/SqlFormatter";
import XmlFormatter from "@/tools/json/XmlFormatter";
import YamlFormatter from "@/tools/json/YamlFormatter";
import JwtDecoder from "@/tools/encoding/JwtDecoder";
import HtmlEncoder from "@/tools/encoding/HtmlEncoder";
import TextCaseConverter from "@/tools/text/TextCaseConverter";
import TextDiff from "@/tools/text/TextDiff";
import DuplicateLineRemover from "@/tools/text/DuplicateLineRemover";
import RegexTester from "@/tools/text/RegexTester";
import HashGenerator from "@/tools/generators/HashGenerator";
import PasswordGenerator from "@/tools/generators/PasswordGenerator";
import QrCodeGenerator from "@/tools/generators/QrCodeGenerator";
import TimestampConverter from "@/tools/generators/TimestampConverter";
import LoremIpsumGenerator from "@/tools/generators/LoremIpsumGenerator";
import ColorConverter from "@/tools/web/ColorConverter";
import UrlParser from "@/tools/web/UrlParser";

const componentMap: Record<string, React.ComponentType> = {
  "json-formatter": JsonFormatter,
  "json-validator": JsonValidator,
  "json-minifier": JsonMinifier,
  "json-to-csv": JsonToCsv,
  "csv-to-json": CsvToJson,
  "json-escape": JsonEscape,
  "sql-formatter": SqlFormatter,
  "xml-formatter": XmlFormatter,
  "yaml-formatter": YamlFormatter,
  "base64-encoder": Base64Encoder,
  "base64-decoder": Base64Decoder,
  "url-encoder": UrlEncoder,
  "url-decoder": UrlDecoder,
  "jwt-decoder": JwtDecoder,
  "html-encoder": HtmlEncoder,
  "word-counter": WordCounter,
  "character-counter": CharacterCounter,
  "text-case-converter": TextCaseConverter,
  "text-diff": TextDiff,
  "duplicate-line-remover": DuplicateLineRemover,
  "regex-tester": RegexTester,
  "uuid-generator": UuidGenerator,
  "hash-generator": HashGenerator,
  "password-generator": PasswordGenerator,
  "qr-code-generator": QrCodeGenerator,
  "timestamp-converter": TimestampConverter,
  "lorem-ipsum-generator": LoremIpsumGenerator,
  "color-converter": ColorConverter,
  "url-parser": UrlParser,
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
      url: `https://toolnest.smrityku.workers.dev/${tool.category}/${tool.slug}/`,
    },
    alternates: {
      canonical: `https://toolnest.smrityku.workers.dev/${tool.category}/${tool.slug}/`,
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
