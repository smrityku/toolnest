import type { ToolDefinition, CategoryInfo } from "@/types/tool";

export const categories: CategoryInfo[] = [
  {
    slug: "json-tools",
    label: "JSON Tools",
    description: "Format, validate, and transform JSON data",
    icon: "{ }",
  },
  {
    slug: "encoding-tools",
    label: "Encoding Tools",
    description: "Encode and decode data in various formats",
    icon: "🔐",
  },
  {
    slug: "text-tools",
    label: "Text Tools",
    description: "Analyze and transform text content",
    icon: "📝",
  },
  {
    slug: "generators",
    label: "Generators",
    description: "Generate UUIDs, timestamps, and more",
    icon: "⚡",
  },
];

export const tools: ToolDefinition[] = [
  // ─── JSON TOOLS ───────────────────────────────
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    title: "JSON Formatter & Beautifier Online — Free",
    description:
      "Format, beautify, and pretty-print JSON data instantly in your browser. Free online JSON formatter with syntax highlighting and validation.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "json formatter",
      "json beautifier",
      "json pretty print",
      "format json",
      "json beautify online",
    ],
    icon: "{ }",
    relatedTools: ["json-validator", "json-minifier"],
    faq: [
      {
        question: "What is JSON formatting?",
        answer:
          "JSON formatting (also called beautifying or pretty-printing) adds proper indentation and line breaks to JSON data, making it easier to read and understand. It converts compact, single-line JSON into a structured, hierarchical view.",
      },
      {
        question: "Is my data safe?",
        answer:
          "Yes. This tool runs entirely in your browser. Your JSON data never leaves your device — nothing is sent to any server.",
      },
      {
        question: "What indentation does the formatter use?",
        answer:
          "By default, the formatter uses 2 spaces for indentation. You can change this to 4 spaces or tabs using the options panel.",
      },
      {
        question: "Can I format invalid JSON?",
        answer:
          "No. The formatter requires valid JSON input. If your JSON has syntax errors, the tool will show you where the error is so you can fix it. Use our JSON Validator tool for detailed error checking.",
      },
    ],
    howToUse: [
      "Paste your JSON data into the input area, or click 'Sample' to load example JSON.",
      "Click the 'Format' button to beautify your JSON.",
      "Copy the formatted result using the 'Copy' button, or download it as a file.",
    ],
  },
  {
    slug: "json-validator",
    name: "JSON Validator",
    title: "JSON Validator Online — Check JSON Syntax Free",
    description:
      "Validate JSON data and find syntax errors instantly. Free online JSON validator with detailed error messages and line numbers.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "json validator",
      "validate json",
      "json checker",
      "json syntax check",
      "json lint",
    ],
    icon: "✓",
    relatedTools: ["json-formatter", "json-minifier"],
    faq: [
      {
        question: "What does a JSON validator do?",
        answer:
          "A JSON validator checks whether your JSON data follows the correct syntax rules. It identifies errors like missing commas, unmatched brackets, or invalid values and tells you exactly where the problem is.",
      },
      {
        question: "What are common JSON syntax errors?",
        answer:
          "The most common errors include trailing commas after the last item, single quotes instead of double quotes, unquoted keys, missing colons between keys and values, and unclosed brackets or braces.",
      },
    ],
    howToUse: [
      "Paste your JSON data into the input area.",
      "Click 'Validate' to check the syntax.",
      "If there are errors, the validator will show you the exact location and type of each error.",
    ],
  },
  {
    slug: "json-minifier",
    name: "JSON Minifier",
    title: "JSON Minifier Online — Compress JSON Free",
    description:
      "Minify and compress JSON by removing whitespace and formatting. Reduce JSON file size instantly in your browser.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "json minifier",
      "json minify",
      "compress json",
      "json compressor",
      "minify json online",
    ],
    icon: "▪",
    relatedTools: ["json-formatter", "json-validator"],
    faq: [
      {
        question: "What is JSON minification?",
        answer:
          "JSON minification removes all unnecessary whitespace, indentation, and line breaks from JSON data. This reduces file size, which is useful for network transfer and storage.",
      },
      {
        question: "Does minification change my data?",
        answer:
          "No. Minification only removes formatting characters (spaces, tabs, newlines). The actual data values, keys, and structure remain exactly the same.",
      },
    ],
    howToUse: [
      "Paste your formatted JSON into the input area.",
      "Click 'Minify' to compress the JSON.",
      "Copy the minified result or download it as a file.",
    ],
  },

  // ─── ENCODING TOOLS ──────────────────────────
  {
    slug: "base64-encoder",
    name: "Base64 Encoder",
    title: "Base64 Encoder Online — Encode Text to Base64 Free",
    description:
      "Encode text to Base64 format instantly in your browser. Free online Base64 encoding tool with UTF-8 support.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "base64 encoder",
      "base64 encode",
      "text to base64",
      "encode base64 online",
    ],
    icon: "🔒",
    relatedTools: ["base64-decoder", "url-encoder"],
    faq: [
      {
        question: "What is Base64 encoding?",
        answer:
          "Base64 is a binary-to-text encoding scheme that represents binary data using a set of 64 ASCII characters. It is commonly used to encode data in email (MIME), embed images in CSS/HTML, and transmit data in URLs and APIs.",
      },
      {
        question: "Is Base64 encryption?",
        answer:
          "No. Base64 is encoding, not encryption. Anyone can decode Base64 data — it provides no security. It is simply a way to represent binary data as text.",
      },
    ],
    howToUse: [
      "Type or paste your text into the input area.",
      "The Base64 encoded result appears automatically.",
      "Copy the result using the 'Copy' button.",
    ],
  },
  {
    slug: "base64-decoder",
    name: "Base64 Decoder",
    title: "Base64 Decoder Online — Decode Base64 to Text Free",
    description:
      "Decode Base64 encoded data back to plain text instantly. Free online Base64 decoding tool with UTF-8 support.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "base64 decoder",
      "base64 decode",
      "base64 to text",
      "decode base64 online",
    ],
    icon: "🔓",
    relatedTools: ["base64-encoder", "url-decoder"],
    faq: [
      {
        question: "What is Base64 decoding?",
        answer:
          "Base64 decoding is the reverse of Base64 encoding — it converts Base64-encoded text back into its original binary or text form.",
      },
      {
        question: "Why is my decoded text garbled?",
        answer:
          "If the original data was binary (like an image), decoding it to text will produce unreadable characters. Base64 can encode any binary data, not just text.",
      },
    ],
    howToUse: [
      "Paste your Base64 encoded string into the input area.",
      "The decoded text appears automatically.",
      "Copy the result using the 'Copy' button.",
    ],
  },
  {
    slug: "url-encoder",
    name: "URL Encoder",
    title: "URL Encoder Online — Encode URL Components Free",
    description:
      "Encode special characters in URLs using percent-encoding. Free online URL encoder for query strings and path components.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "url encoder",
      "url encode",
      "percent encoding",
      "encode url online",
      "urlencode",
    ],
    icon: "%",
    relatedTools: ["url-decoder", "base64-encoder"],
    faq: [
      {
        question: "What is URL encoding?",
        answer:
          "URL encoding (percent-encoding) replaces special characters with a percent sign followed by two hex digits. For example, a space becomes %20. This ensures that URLs can safely contain special characters.",
      },
      {
        question: "When should I URL encode?",
        answer:
          "You should URL encode any text that will be used as a query parameter, path segment, or any part of a URL that might contain spaces or special characters like &, =, ?, #, etc.",
      },
    ],
    howToUse: [
      "Type or paste your text into the input area.",
      "The URL-encoded result appears automatically.",
      "Copy the result and use it in your URL.",
    ],
  },
  {
    slug: "url-decoder",
    name: "URL Decoder",
    title: "URL Decoder Online — Decode Percent-Encoded URLs Free",
    description:
      "Decode percent-encoded URLs and query strings back to readable text. Free online URL decoder tool.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "url decoder",
      "url decode",
      "percent decode",
      "decode url online",
      "urldecode",
    ],
    icon: "🔗",
    relatedTools: ["url-encoder", "base64-decoder"],
    faq: [
      {
        question: "What is URL decoding?",
        answer:
          "URL decoding converts percent-encoded characters back to their original form. For example, %20 becomes a space, %26 becomes &, and %3D becomes =.",
      },
    ],
    howToUse: [
      "Paste your URL-encoded text into the input area.",
      "The decoded, readable text appears automatically.",
      "Copy the result using the 'Copy' button.",
    ],
  },

  // ─── TEXT TOOLS ───────────────────────────────
  {
    slug: "word-counter",
    name: "Word Counter",
    title: "Word Counter Online — Count Words, Characters & Sentences Free",
    description:
      "Count words, characters, sentences, and paragraphs in your text instantly. Free online word counter with reading time estimation.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "word counter",
      "word count",
      "character counter",
      "count words online",
      "text counter",
    ],
    icon: "📊",
    relatedTools: ["character-counter"],
    faq: [
      {
        question: "How are words counted?",
        answer:
          "Words are counted by splitting the text on whitespace characters (spaces, tabs, newlines). Consecutive whitespace is treated as a single separator. Hyphenated words like 'well-known' count as one word.",
      },
      {
        question: "How is reading time calculated?",
        answer:
          "Reading time is estimated based on an average reading speed of 200 words per minute for adults. Speaking time uses 130 words per minute.",
      },
    ],
    howToUse: [
      "Type or paste your text into the input area.",
      "Statistics update automatically as you type.",
      "View word count, character count, sentences, paragraphs, and estimated reading time.",
    ],
  },
  {
    slug: "character-counter",
    name: "Character Counter",
    title:
      "Character Counter Online — Count Characters With & Without Spaces",
    description:
      "Count characters in your text with and without spaces. Track your character limit for Twitter, SMS, meta descriptions, and more.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "character counter",
      "character count",
      "letter counter",
      "count characters online",
    ],
    icon: "🔤",
    relatedTools: ["word-counter"],
    faq: [
      {
        question: "What counts as a character?",
        answer:
          "Every letter, number, symbol, space, and punctuation mark counts as one character. Line breaks may count as one or two characters depending on the system.",
      },
      {
        question: "What are common character limits?",
        answer:
          "Twitter/X posts: 280 characters. SMS messages: 160 characters. Google meta descriptions: ~155 characters. Instagram captions: 2,200 characters. YouTube titles: 100 characters.",
      },
    ],
    howToUse: [
      "Type or paste your text into the input area.",
      "Character counts update in real time.",
      "View total characters, characters without spaces, and common platform limits.",
    ],
  },

  // ─── GENERATORS ───────────────────────────────
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    title: "UUID Generator Online — Generate Random UUIDs Free",
    description:
      "Generate random UUIDs (v4) instantly. Create one or multiple unique identifiers for your applications, databases, and APIs.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "uuid generator",
      "generate uuid",
      "uuid v4",
      "random uuid",
      "guid generator",
    ],
    icon: "🆔",
    relatedTools: ["base64-encoder"],
    faq: [
      {
        question: "What is a UUID?",
        answer:
          "UUID (Universally Unique Identifier) is a 128-bit identifier that is unique across space and time. UUIDs are formatted as 32 hexadecimal digits separated by hyphens: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.",
      },
      {
        question: "What is UUID v4?",
        answer:
          "UUID version 4 is generated using random or pseudo-random numbers. It is the most commonly used UUID version because it doesn't require any centralized authority or coordination.",
      },
      {
        question: "Can two UUIDs ever be the same?",
        answer:
          "While theoretically possible, the probability is astronomically small. With 2^122 possible UUIDs, you would need to generate about 2.71 quintillion UUIDs to have a 50% chance of collision.",
      },
    ],
    howToUse: [
      "Click 'Generate' to create a new UUID.",
      "Adjust the quantity to generate multiple UUIDs at once.",
      "Click 'Copy' to copy UUIDs to your clipboard.",
    ],
  },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): ToolDefinition[] {
  return tools.filter((t) => t.category === category);
}

export function getCategoryInfo(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllSlugs(): { category: string; tool: string }[] {
  return tools.map((t) => ({
    category: t.category,
    tool: t.slug,
  }));
}
