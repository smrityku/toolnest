export type ToolCategory =
  | "json-tools"
  | "encoding-tools"
  | "text-tools"
  | "web-tools"
  | "generators"
  | "image-tools";

export interface FAQ {
  question: string;
  answer: string;
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
  faq: FAQ[];
  howToUse: string[];
}

export interface CategoryInfo {
  slug: ToolCategory;
  label: string;
  description: string;
  icon: string;
}
