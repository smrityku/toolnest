export type ToolCategory =
  | "json-tools"
  | "encoding-tools"
  | "text-tools"
  | "generators"
  | "web-tools";

export interface FAQ {
  question: string;
  answer: string;
}

export interface ToolExample {
  title: string;
  input: string;
  output: string;
  explanation?: string;
}

export interface ToolDefinition {
  slug: string;
  name: string;
  title: string;
  description: string;
  category: ToolCategory;
  categoryLabel: string;
  keywords: string[];
  icon: string;
  relatedTools: string[];
  relatedGuides?: string[];
  faq: FAQ[];
  howToUse: string[];
  whatIs?: string;
  features?: string[];
  examples?: ToolExample[];
  privacyNote?: string;
}

export interface CategoryInfo {
  slug: ToolCategory;
  label: string;
  description: string;
  icon: string;
}

export interface GuideDefinition {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  keywords: string[];
  relatedTools: string[];
  relatedGuides: string[];
  summary: string;
  contentHtml: string;
  faq?: FAQ[];
}

