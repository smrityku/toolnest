import type { ToolDefinition, CategoryInfo } from "@/types/tool";

export const categories: CategoryInfo[] = [
  {
    slug: "json-tools",
    label: "JSON Tools",
    description: "Format, validate, minify, escape, and convert JSON data",
    icon: "{ }",
  },
  {
    slug: "encoding-tools",
    label: "Encoding Tools",
    description: "Encode and decode Base64, URLs, HTML entities, and JWTs",
    icon: "🔐",
  },
  {
    slug: "text-tools",
    label: "Text Tools",
    description: "Count words, compare diffs, convert cases, and sort text",
    icon: "📝",
  },
  {
    slug: "generators",
    label: "Generators",
    description: "Generate UUIDs, secure passwords, QR codes, and hashes",
    icon: "⚡",
  },
  {
    slug: "web-tools",
    label: "Web & Dev Tools",
    description: "Format SQL & XML, parse URLs, convert colors, and test regex",
    icon: "🌐",
  },
];

export const tools: ToolDefinition[] = [
  // ─── JSON TOOLS ───────────────────────────────
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    title: "JSON Formatter & Beautifier Online — Free",
    description:
      "Format, beautify, and pretty-print JSON data instantly in your browser. Free online JSON formatter with configurable indentation and instant error detection.",
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
    relatedTools: ["json-validator", "json-minifier", "json-to-csv", "json-escape"],
    relatedGuides: ["what-is-json", "how-to-format-json", "common-json-errors"],
    whatIs:
      "JSON Formatter is a client-side utility that takes dense or unformatted JSON strings and transforms them into clean, human-readable representations with proper indentation, whitespace, and line breaks.",
    features: [
      "Instant formatting with 2 spaces, 4 spaces, or tab indentation",
      "Clear syntax error markers indicating line numbers",
      "One-click copy to clipboard and JSON file download",
      "Sample payload generator for testing",
      "100% private browser-based execution with zero network transmission",
    ],
    examples: [
      {
        title: "Beautifying Compact Object",
        input: '{"user":{"id":42,"name":"Alice","roles":["admin","editor"]}}',
        output: `{\n  "user": {\n    "id": 42,\n    "name": "Alice",\n    "roles": [\n      "admin",\n      "editor"\n    ]\n  }\n}`,
        explanation: "Adds multi-line nesting and consistent 2-space indentation.",
      },
    ],
    privacyNote:
      "Your JSON payload is parsed locally using standard Web APIs. No data is sent over the network or saved to any database.",
    faq: [
      {
        question: "What is JSON formatting?",
        answer:
          "JSON formatting (also called beautifying or pretty-printing) adds structured indentation and line breaks to JSON strings, converting compact single-line payloads into clear, hierarchical documents.",
      },
      {
        question: "Is my JSON data kept private?",
        answer:
          "Yes. All processing occurs entirely in your browser using client-side JavaScript. Your data never leaves your device and is never uploaded to any server.",
      },
      {
        question: "What indentation options are supported?",
        answer:
          "You can select 2 spaces (standard web convention), 4 spaces, or 8-space tabs to match your team's code style.",
      },
      {
        question: "Can I format invalid JSON?",
        answer:
          "No. A JSON string must follow valid syntax rules. If syntax errors exist, the formatter pinpoints the error location so you can correct it.",
      },
    ],
    howToUse: [
      "Paste your unformatted or minified JSON into the input editor.",
      "Choose your preferred indentation style (2 spaces, 4 spaces, or tabs).",
      "Click 'Format' to beautify your data.",
      "Use 'Copy' to copy the formatted code or 'Download' to save as a .json file.",
    ],
  },
  {
    slug: "json-validator",
    name: "JSON Validator",
    title: "JSON Validator Online — Check JSON Syntax Free",
    description:
      "Validate JSON data and catch syntax errors instantly. Free online JSON validator with accurate error descriptions, line markers, and structural feedback.",
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
    relatedTools: ["json-formatter", "json-minifier", "json-escape"],
    relatedGuides: ["how-to-validate-json", "common-json-errors", "json-syntax-explained"],
    whatIs:
      "JSON Validator checks whether your JSON data conforms strictly to RFC 8259 specifications, catching unquoted keys, single quotes, trailing commas, and unclosed delimiters.",
    features: [
      "Strict RFC 8259 syntax validation",
      "Detailed error diagnostic reporting character offsets and line coordinates",
      "Instant status badge indicating validity",
      "One-click sample payload to test error diagnostics",
    ],
    examples: [
      {
        title: "Catching Single Quote Errors",
        input: "{ 'status': 'active' }",
        output: "Syntax Error: Expected property name or '}' (single quotes are invalid in standard JSON).",
        explanation: "JSON mandates standard double quotes for all keys and string values.",
      },
    ],
    privacyNote:
      "Validation runs purely in browser memory. Sensitive configuration files or API responses remain completely confidential on your machine.",
    faq: [
      {
        question: "What makes JSON valid?",
        answer:
          "Valid JSON conforms to RFC 8259: strings and keys must use double quotes, trailing commas are prohibited, and values must be standard types (string, number, boolean, null, object, or array).",
      },
      {
        question: "What are the most common validation failures?",
        answer:
          "Trailing commas after the last array/object element, single quotes, unquoted keys, unescaped newlines in strings, and NaN or Infinity values.",
      },
    ],
    howToUse: [
      "Paste the JSON text you want to inspect into the input area.",
      "Click 'Validate' to analyze the syntax structure.",
      "Review the success confirmation or inspect the highlighted error diagnostic.",
    ],
  },
  {
    slug: "json-minifier",
    name: "JSON Minifier",
    title: "JSON Minifier Online — Compress JSON Free",
    description:
      "Minify and compress JSON payloads by stripping unnecessary whitespace and line breaks. Reduce payload transfer size instantly in your browser.",
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
    relatedTools: ["json-formatter", "json-validator", "json-to-csv"],
    relatedGuides: ["how-to-minify-json", "what-is-json"],
    whatIs:
      "JSON Minifier compresses JSON files by eliminating non-semantic whitespace, indentation, and newlines without changing the underlying data values or structure.",
    features: [
      "Zero data loss compression",
      "Byte savings and percentage reduction calculation",
      "Fast processing for large JSON payloads",
      "Download compressed payload directly as .json",
    ],
    examples: [
      {
        title: "Payload Compression",
        input: `{\n  "api": "v1",\n  "count": 100\n}`,
        output: `{"api":"v1","count":100}`,
        explanation: "Removes all decorative spaces and line feeds, reducing transmission size.",
      },
    ],
    privacyNote:
      "Minification runs 100% locally in your client environment.",
    faq: [
      {
        question: "Does minification alter data values?",
        answer:
          "No. Minification only strips extraneous spaces and tabs between tokens. All keys, values, and array sequences remain identical.",
      },
      {
        question: "Why should I minify JSON?",
        answer:
          "Minifying JSON cuts payload size by up to 30-40%, lowering network latency, bandwidth usage, and storage overhead in high-throughput applications.",
      },
    ],
    howToUse: [
      "Paste your formatted JSON into the input box.",
      "Click 'Minify' to strip all whitespace.",
      "Copy or download the compressed output.",
    ],
  },
  {
    slug: "json-to-csv",
    name: "JSON to CSV Converter",
    title: "JSON to CSV Converter Online — Free & Fast",
    description:
      "Convert JSON arrays and objects into clean CSV spreadsheet format instantly in your browser. Download as CSV with customizable delimiters.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "json to csv",
      "convert json to csv",
      "json to excel",
      "json array to csv",
      "export json to csv",
    ],
    icon: "📑",
    relatedTools: ["csv-to-json", "json-formatter", "json-validator"],
    relatedGuides: ["json-objects-vs-arrays", "what-is-json"],
    whatIs:
      "JSON to CSV Converter flattens arrays of JSON objects into tabular Comma-Separated Values (CSV), suitable for Excel, Google Sheets, or database imports.",
    features: [
      "Automatic column header detection from object keys",
      "Handles nested objects and quoted strings with commas",
      "Download converted result as a .csv file",
      "Client-side processing with instant preview",
    ],
    examples: [
      {
        title: "User List to CSV",
        input: `[\n  {"name": "Alice", "age": 28, "city": "Seattle"},\n  {"name": "Bob", "age": 34, "city": "Austin"}\n]`,
        output: `name,age,city\nAlice,28,Seattle\nBob,34,Austin`,
        explanation: "Object keys become the first CSV header row, followed by rows of values.",
      },
    ],
    privacyNote:
      "Your datasets and proprietary spreadsheets are converted locally without server transmission.",
    faq: [
      {
        question: "What JSON structure works best?",
        answer:
          "An array of flat objects (e.g., `[{\"id\": 1, \"name\": \"Item\"}]`) produces the cleanest tabular CSV.",
      },
      {
        question: "How are commas inside text handled?",
        answer:
          "Values containing commas, quotes, or newlines are automatically wrapped in double quotes according to standard RFC 4180 CSV specifications.",
      },
    ],
    howToUse: [
      "Paste a JSON array of objects into the input area.",
      "Click 'Convert to CSV'.",
      "Copy the CSV text or download it as a .csv file.",
    ],
  },
  {
    slug: "csv-to-json",
    name: "CSV to JSON Converter",
    title: "CSV to JSON Converter Online — Free & Fast",
    description:
      "Convert CSV data and spreadsheet tables into structured JSON arrays and objects instantly in your browser.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "csv to json",
      "convert csv to json",
      "csv parser",
      "excel to json",
      "csv to json array",
    ],
    icon: "🔄",
    relatedTools: ["json-to-csv", "json-formatter"],
    relatedGuides: ["json-objects-vs-arrays", "what-is-json"],
    whatIs:
      "CSV to JSON Converter parses tabular comma-separated or tab-separated data and transforms each row into a structured JSON object with automatic type inference.",
    features: [
      "Parses standard comma, semicolon, and tab-delimited CSV",
      "Automatic number and boolean type parsing",
      "Formatted or minified output options",
      "Handles escaped quotes and multiline cells",
    ],
    examples: [
      {
        title: "Tabular Row Conversion",
        input: `id,product,price\n1,Keyboard,79.99\n2,Mouse,29.50`,
        output: `[\n  {\n    "id": 1,\n    "product": "Keyboard",\n    "price": 79.99\n  },\n  {\n    "id": 2,\n    "product": "Mouse",\n    "price": 29.5\n  }\n]`,
        explanation: "Generates an array of JSON objects matching the header columns.",
      },
    ],
    privacyNote:
      "Your CSV records are processed 100% client-side.",
    faq: [
      {
        question: "Does the converter infer numbers and booleans?",
        answer:
          "Yes. Numeric values (like `123` or `45.67`) and booleans (`true`/`false`) are automatically parsed as JSON numbers and booleans instead of plain strings.",
      },
    ],
    howToUse: [
      "Paste your raw CSV text into the input box.",
      "Click 'Convert to JSON'.",
      "Copy or download the formatted JSON array.",
    ],
  },
  {
    slug: "json-escape",
    name: "JSON Escape / Unescape",
    title: "JSON Escape & Unescape Tool Online — Free",
    description:
      "Escape and unescape JSON strings for use in source code, string literals, configuration files, and SQL queries.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "json escape",
      "json unescape",
      "escape json string",
      "unescape json",
      "json stringifier",
    ],
    icon: "🔣",
    relatedTools: ["json-formatter", "json-validator"],
    relatedGuides: ["json-syntax-explained", "common-json-errors"],
    whatIs:
      "JSON Escape / Unescape transforms string literals containing quotes, newlines, and backslashes into valid escaped JSON strings (and vice versa) for embedding in code.",
    features: [
      "Two-way escaping: Escape to JSON string and Unescape to raw text",
      "Accurate handling of \\\", \\n, \\r, \\t, and \\\\ escape sequences",
      "Instant copy to clipboard",
    ],
    examples: [
      {
        title: "Escaping Quotes and Newlines",
        input: `Line 1: "Hello"\nLine 2: 'World'`,
        output: `"Line 1: \\"Hello\\"\\nLine 2: 'World'"`,
        explanation: "Escapes double quotes and newlines for safe embedding inside JSON string literals.",
      },
    ],
    privacyNote:
      "Runs entirely inside your browser.",
    faq: [
      {
        question: "When should I escape JSON strings?",
        answer:
          "When passing a JSON payload as an environment variable, an API query parameter, a string literal in code, or a column inside a database SQL script.",
      },
    ],
    howToUse: [
      "Paste your text or escaped string into the input field.",
      "Click 'Escape' to add backslashes or 'Unescape' to restore original characters.",
      "Copy the converted output.",
    ],
  },

  // ─── ENCODING TOOLS ──────────────────────────
  {
    slug: "base64-encoder",
    name: "Base64 Encoder",
    title: "Base64 Encoder Online — Encode Text to Base64 Free",
    description:
      "Encode text, Unicode, and strings into standard Base64 format instantly. Free online Base64 encoder with UTF-8 support.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "base64 encoder",
      "base64 encode",
      "text to base64",
      "encode base64 online",
      "utf8 base64",
    ],
    icon: "🔒",
    relatedTools: ["base64-decoder", "url-encoder", "jwt-decoder"],
    relatedGuides: ["what-is-base64", "base64-vs-encryption", "when-to-use-base64"],
    whatIs:
      "Base64 Encoder converts binary or UTF-8 text into an ASCII string format using 64 safe characters (A-Z, a-z, 0-9, +, /) with '=' padding.",
    features: [
      "Full UTF-8 and multibyte character encoding support",
      "Real-time encoding as you type",
      "One-click copy to clipboard",
    ],
    examples: [
      {
        title: "Encoding Plain Text",
        input: "ToolNest Developer Tools",
        output: "VG9vbE5lc3QgRGV2ZWxvcGVyIFRvb2xz",
        explanation: "Maps 8-bit bytes into 6-bit Base64 character indexes.",
      },
    ],
    privacyNote:
      "Data is encoded locally in browser memory without external API calls.",
    faq: [
      {
        question: "Is Base64 secure for sensitive data?",
        answer:
          "No. Base64 is an encoding format, not encryption. Anyone can decode Base64 in milliseconds without a password.",
      },
      {
        question: "Does Base64 increase data size?",
        answer:
          "Yes. Base64 encoding expands raw data size by approximately 33% (4 characters for every 3 bytes).",
      },
    ],
    howToUse: [
      "Enter or paste your text in the input box.",
      "The Base64 encoded string is produced in real time.",
      "Click 'Copy' to copy the encoded output.",
    ],
  },
  {
    slug: "base64-decoder",
    name: "Base64 Decoder",
    title: "Base64 Decoder Online — Decode Base64 to Text Free",
    description:
      "Decode Base64 encoded strings back to readable UTF-8 text instantly in your browser. Free online Base64 decoding tool.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "base64 decoder",
      "base64 decode",
      "base64 to text",
      "decode base64 online",
    ],
    icon: "🔓",
    relatedTools: ["base64-encoder", "url-decoder", "jwt-decoder"],
    relatedGuides: ["what-is-base64", "base64-vs-encryption"],
    whatIs:
      "Base64 Decoder reverses Base64 encoding, converting 6-bit character groups back into original 8-bit bytes and UTF-8 strings.",
    features: [
      "Decodes standard Base64 and Base64URL strings",
      "Automatic UTF-8 character reconstruction",
      "Detailed error messaging for invalid Base64 input",
    ],
    examples: [
      {
        title: "Decoding Base64 String",
        input: "SGVsbG8sIFdvcmxkIQ==",
        output: "Hello, World!",
        explanation: "Converts the 16 Base64 characters back into the original 13 UTF-8 bytes.",
      },
    ],
    privacyNote:
      "Decoding is performed 100% client-side.",
    faq: [
      {
        question: "Why is decoded text sometimes unreadable?",
        answer:
          "If the original encoded data was a binary file (such as a PNG image or compiled binary), decoding it as text displays binary control characters.",
      },
    ],
    howToUse: [
      "Paste your Base64 string into the input field.",
      "The decoded text will appear in the output window.",
      "Copy the restored text.",
    ],
  },
  {
    slug: "url-encoder",
    name: "URL Encoder",
    title: "URL Encoder Online — Encode URL Components Free",
    description:
      "Encode special and reserved characters in query strings and URLs using percent-encoding (%XX). Free online URL encoder.",
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
    relatedTools: ["url-decoder", "url-parser", "base64-encoder"],
    relatedGuides: ["what-is-url-encoding", "url-encoding-vs-decoding", "understanding-url-query-params"],
    whatIs:
      "URL Encoder converts spaces and reserved characters into RFC 3986 percent-encoded triplets (such as %20 or %26) for safe transmission in web addresses.",
    features: [
      "Encode full URLs (encodeURI) or query parameters (encodeURIComponent)",
      "Instant real-time output",
      "One-click copy button",
    ],
    examples: [
      {
        title: "Query Parameter Encoding",
        input: "search term & filter=new",
        output: "search%20term%20%26%20filter%3Dnew",
        explanation: "Protects spaces, ampersands, and equal signs from breaking URL query parsers.",
      },
    ],
    privacyNote:
      "Processed locally in your browser.",
    faq: [
      {
        question: "What is the difference between encodeURI and encodeURIComponent?",
        answer:
          "encodeURI preserves protocol and path delimiters (`/`, `?`, `:`) to format entire URLs, while encodeURIComponent encodes all special characters to format individual query parameter values.",
      },
    ],
    howToUse: [
      "Enter your raw text or query string.",
      "Choose full URL or component encoding mode.",
      "Copy the percent-encoded URL string.",
    ],
  },
  {
    slug: "url-decoder",
    name: "URL Decoder",
    title: "URL Decoder Online — Decode Percent-Encoded URLs Free",
    description:
      "Decode percent-encoded URL strings and query parameters back into human-readable text. Free online URL decoder.",
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
    relatedTools: ["url-encoder", "url-parser", "base64-decoder"],
    relatedGuides: ["what-is-url-encoding", "url-encoding-vs-decoding"],
    whatIs:
      "URL Decoder converts percent-encoded sequences (like %20, %3D, %2F) and plus signs (+) back into their original characters.",
    features: [
      "Decodes RFC 3986 percent-encoding",
      "Supports decoding plus signs as spaces",
      "Handles full URLs and isolated parameter strings",
    ],
    examples: [
      {
        title: "Decoding Encoded Query String",
        input: "https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Ddeveloper%2Btools",
        output: "https://example.com/search?q=developer+tools",
        explanation: "Restores colons, slashes, question marks, and parameter keys.",
      },
    ],
    privacyNote:
      "Runs completely in client-side JavaScript.",
    faq: [
      {
        question: "How are plus signs (+) handled?",
        answer:
          "In application/x-www-form-urlencoded query strings, plus signs represent spaces. URL Decoder lets you toggle plus decoding on or off.",
      },
    ],
    howToUse: [
      "Paste your percent-encoded URL into the input area.",
      "The decoded, clean URL will be generated instantly.",
      "Copy the decoded string.",
    ],
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    title: "JWT Decoder Online — Inspect JSON Web Tokens Free",
    description:
      "Decode and inspect JSON Web Tokens (JWT) client-side. View header algorithms, payload claims, expiration dates, and token validity without sending tokens to any server.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "jwt decoder",
      "decode jwt",
      "jwt inspector",
      "jwt parser",
      "json web token decoder",
    ],
    icon: "🪪",
    relatedTools: ["base64-decoder", "json-formatter", "timestamp-converter"],
    relatedGuides: ["what-is-jwt", "jwt-structure-explained", "hashing-vs-encryption"],
    whatIs:
      "JWT Decoder parses the three dot-separated Base64URL sections of a JSON Web Token to display the JOSE header and claims payload in formatted JSON.",
    features: [
      "Displays decoded Header, Payload (claims), and Signature hash",
      "Human-readable expiration (exp) and issued-at (iat) date formatting",
      "Token expiration status indicator (Active vs Expired)",
      "100% client-side decoding ensures access tokens are never logged or transmitted",
    ],
    examples: [
      {
        title: "Decoding Authentication Token",
        input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        output: `Header: {"alg":"HS256","typ":"JWT"}\nPayload: {"sub":"1234567890","name":"John Doe","iat":1516239022}`,
        explanation: "Unpacks Base64URL claims into readable JSON.",
      },
    ],
    privacyNote:
      "Crucial security guarantee: Your JWT tokens, access secrets, and user claims are decoded purely in local memory and never transmitted over the internet.",
    faq: [
      {
        question: "Does this tool verify token signatures?",
        answer:
          "This tool is an inspector and decoder. Verifying cryptographic signatures requires your backend private key or secret, which should never be pasted into any web browser.",
      },
      {
        question: "Can someone steal my JWT by using this tool?",
        answer:
          "No. All decoding runs strictly inside your local browser via JavaScript. No network requests are made.",
      },
    ],
    howToUse: [
      "Paste your Bearer token or raw JWT string into the input box.",
      "Inspect the formatted Header and Payload sections.",
      "Check expiration dates and claim parameters.",
    ],
  },
  {
    slug: "html-encoder",
    name: "HTML Entity Encoder / Decoder",
    title: "HTML Entity Encoder & Decoder Online — Free",
    description:
      "Encode and decode HTML special entities (&lt;, &gt;, &amp;, &quot;) to prevent XSS and display code safely in HTML documents.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "html encoder",
      "html decoder",
      "html entities",
      "escape html",
      "html entity converter",
    ],
    icon: "🏷️",
    relatedTools: ["url-encoder", "json-escape", "base64-encoder"],
    relatedGuides: ["what-is-url-encoding"],
    whatIs:
      "HTML Entity Encoder converts reserved HTML characters (such as <, >, &, \") into safe named or numeric entities, protecting against Cross-Site Scripting (XSS).",
    features: [
      "Two-way operation: Encode text to HTML entities & Decode HTML entities to plain text",
      "Encodes named entities (&amp;, &lt;, &gt;, &quot;) and numeric entities",
      "One-click copy to clipboard",
    ],
    examples: [
      {
        title: "Escaping HTML Tags",
        input: "<script>alert('xss');</script>",
        output: "&lt;script&gt;alert(&#39;xss&#39;);&lt;/script&gt;",
        explanation: "Ensures code snippets can be safely rendered inside HTML without being executed as scripts.",
      },
    ],
    privacyNote:
      "All conversions happen in your browser.",
    faq: [
      {
        question: "Why is HTML entity encoding important?",
        answer:
          "It prevents browsers from interpreting user-supplied text as executable HTML or JavaScript tags, which is critical for web security and documentation rendering.",
      },
    ],
    howToUse: [
      "Paste your text or HTML snippet.",
      "Click 'Encode' to escape HTML tags or 'Decode' to restore original markup.",
      "Copy the converted output.",
    ],
  },

  // ─── TEXT TOOLS ───────────────────────────────
  {
    slug: "word-counter",
    name: "Word Counter",
    title: "Word Counter Online — Count Words, Characters & Sentences Free",
    description:
      "Count words, characters, sentences, and paragraphs in your text in real time. Free online word counter with reading and speaking time estimates.",
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
    relatedTools: ["character-counter", "text-case-converter", "duplicate-line-remover"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Word Counter is a real-time text analysis tool providing word counts, character counts (with and without spaces), sentence counts, paragraph stats, and reading duration.",
    features: [
      "Instant word and character statistics as you type",
      "Estimated reading time (200 wpm) and speaking time (130 wpm)",
      "Sentence, paragraph, and average word length metrics",
      "No character or word limits",
    ],
    examples: [
      {
        title: "Text Analysis Sample",
        input: "ToolNest provides fast, free developer utilities.",
        output: "6 words | 49 characters | 1 sentence | 0.03 min read",
        explanation: "Calculates precise word boundary metrics.",
      },
    ],
    privacyNote:
      "Your documents, essays, and drafts remain entirely in your browser.",
    faq: [
      {
        question: "How are words counted?",
        answer:
          "Words are identified by splitting text along whitespace boundaries. Hyphenated compound words count as single words.",
      },
      {
        question: "How is reading time computed?",
        answer:
          "Reading time assumes an average adult reading rate of 200 words per minute.",
      },
    ],
    howToUse: [
      "Type or paste your text into the text area.",
      "View live statistics displayed in the metrics dashboard.",
      "Copy your text or clear the area when finished.",
    ],
  },
  {
    slug: "character-counter",
    name: "Character Counter",
    title: "Character Counter Online — Count Characters With & Without Spaces",
    description:
      "Count characters with and without spaces in real time. Track limits for Twitter/X (280), SMS (160), SEO meta descriptions (155), and social media.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "character counter",
      "character count",
      "letter counter",
      "count characters online",
      "twitter character counter",
    ],
    icon: "🔤",
    relatedTools: ["word-counter", "text-case-converter"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Character Counter gives accurate letter, digit, whitespace, and symbol counts to help you meet constraints for social posts, SMS messages, and SEO meta tags.",
    features: [
      "Counts characters with spaces and without spaces",
      "Built-in limit progress bars for Twitter/X (280), Meta descriptions (155), and SMS (160)",
      "Counts letters, digits, whitespace, and special symbols individually",
    ],
    examples: [
      {
        title: "SEO Meta Description Check",
        input: "Format, validate, and convert developer data instantly with ToolNest.",
        output: "70 characters (well within Google's 155 character limit)",
        explanation: "Monitors length to prevent truncation in search result snippets.",
      },
    ],
    privacyNote:
      "Text is counted locally in memory.",
    faq: [
      {
        question: "Do emojis count as one character?",
        answer:
          "Most standard emojis count as 1 or 2 UTF-16 code units depending on composition. Our counter calculates both standard string lengths and visible grapheme characters.",
      },
    ],
    howToUse: [
      "Paste or type your content into the editor.",
      "Check the character breakdown and platform limit indicators.",
    ],
  },
  {
    slug: "text-case-converter",
    name: "Text Case Converter",
    title: "Text Case Converter Online — camelCase, snake_case, UPPERCASE",
    description:
      "Convert text between camelCase, snake_case, kebab-case, PascalCase, UPPERCASE, lowercase, Title Case, and Sentence case instantly.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "text case converter",
      "camelcase converter",
      "snake_case converter",
      "kebab-case converter",
      "title case converter",
    ],
    icon: "Aa",
    relatedTools: ["word-counter", "duplicate-line-remover"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Text Case Converter transforms strings and variable identifiers into various programming and typographical case formats in a single click.",
    features: [
      "Supports camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE",
      "Supports UPPERCASE, lowercase, Title Case, Sentence case, and Alternating cAsE",
      "One-click conversion buttons and copy action",
    ],
    examples: [
      {
        title: "Converting to Code Identifiers",
        input: "user account balance",
        output: "camelCase: userAccountBalance | snake_case: user_account_balance | kebab-case: user-account-balance",
        explanation: "Standardizes variable and CSS class names.",
      },
    ],
    privacyNote:
      "Conversion operates 100% in your browser.",
    faq: [
      {
        question: "What is kebab-case vs snake_case?",
        answer:
          "kebab-case separates words with hyphens (`user-profile`), standard in URLs and CSS. snake_case separates words with underscores (`user_profile`), standard in Python and SQL.",
      },
    ],
    howToUse: [
      "Paste your text or code identifiers in the input box.",
      "Click on the desired case transformation button.",
      "Copy the converted output.",
    ],
  },
  {
    slug: "text-diff",
    name: "Text Diff Checker",
    title: "Text Diff Checker Online — Compare Text Differences Free",
    description:
      "Compare two text snippets or code blocks side-by-side. Highlight added, deleted, and modified lines instantly in your browser.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "text diff",
      "diff checker",
      "compare text",
      "text comparison tool",
      "diff online",
    ],
    icon: "🔀",
    relatedTools: ["word-counter", "json-validator", "duplicate-line-remover"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Text Diff Checker computes line-by-line differences between original and modified text blocks, highlighting additions and deletions.",
    features: [
      "Line-by-line comparison with visual color coding (green for added, red for removed)",
      "Unified diff view",
      "Case-sensitive and trim whitespace options",
    ],
    examples: [
      {
        title: "Comparing Code Snippets",
        input: "Original: function test() { return 1; }\nModified: function test() { return 2; }",
        output: "Line 1: - return 1; + return 2;",
        explanation: "Visualizes changes between revisions.",
      },
    ],
    privacyNote:
      "Diff comparison runs purely in client-side memory. Confidential code is never sent to any server.",
    faq: [
      {
        question: "Can I compare large files?",
        answer:
          "Yes. The algorithm handles thousands of lines smoothly in modern web browsers.",
      },
    ],
    howToUse: [
      "Paste original text in the left pane and modified text in the right pane.",
      "Click 'Compare Diff' to view highlighted changes.",
    ],
  },
  {
    slug: "duplicate-line-remover",
    name: "Duplicate Line Remover",
    title: "Duplicate Line Remover & Line Sorter Online — Free",
    description:
      "Remove duplicate lines from text lists, sort lines alphabetically, trim whitespace, and delete empty lines instantly.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "remove duplicate lines",
      "duplicate line remover",
      "sort lines",
      "deduplicate list",
      "unique lines",
    ],
    icon: "🧹",
    relatedTools: ["text-case-converter", "word-counter"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Duplicate Line Remover deduplicates text lists and arrays, providing options for alphabetical sorting, reverse sorting, and empty line stripping.",
    features: [
      "Removes duplicate lines while preserving original order or sorting alphabetically",
      "Case-insensitive matching option",
      "Trim whitespace and remove empty lines toggle",
      "Count showing lines before and after deduplication",
    ],
    examples: [
      {
        title: "Cleaning a List",
        input: "apple\nbanana\napple\norange\nbanana",
        output: "apple\nbanana\norange (Removed 2 duplicate lines)",
        explanation: "Extracts only unique items.",
      },
    ],
    privacyNote:
      "All list deduplication runs locally.",
    faq: [
      {
        question: "Does it support case-insensitive deduplication?",
        answer:
          "Yes. You can enable case-insensitive matching so that `Apple` and `apple` are recognized as duplicates.",
      },
    ],
    howToUse: [
      "Paste your line list into the editor.",
      "Select your sorting and matching preferences.",
      "Click 'Remove Duplicates' and copy the cleaned list.",
    ],
  },

  // ─── GENERATORS ───────────────────────────────
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    title: "UUID Generator Online — Generate Random UUIDs Free",
    description:
      "Generate random cryptographically secure UUIDs (v4) instantly. Create single or bulk unique identifiers for applications, APIs, and databases.",
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
    relatedTools: ["hash-generator", "password-generator", "timestamp-converter"],
    relatedGuides: ["what-is-uuid", "uuid-v4-explained"],
    whatIs:
      "UUID Generator produces 128-bit Universally Unique Identifiers (RFC 4122 v4) using cryptographically secure random values from the Web Crypto API.",
    features: [
      "Cryptographically secure randomness via `crypto.randomUUID()`",
      "Bulk generation of up to 500 UUIDs at once",
      "Uppercase, lowercase, and hyphen-free formatting toggles",
      "One-click copy all to clipboard",
    ],
    examples: [
      {
        title: "UUID v4 Format",
        input: "Generate 1 UUID",
        output: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        explanation: "32 hex characters grouped as 8-4-4-4-12 with version 4 marker.",
      },
    ],
    privacyNote:
      "UUIDs are generated on your local device via Web Crypto without server communication.",
    faq: [
      {
        question: "Can two generated UUIDs collide?",
        answer:
          "The probability of a UUID v4 collision is approximately 1 in 5.3 undecillion (2^122), making collisions virtually impossible in practice.",
      },
      {
        question: "Is `crypto.randomUUID()` secure?",
        answer:
          "Yes. It uses the operating system's cryptographic entropy source.",
      },
    ],
    howToUse: [
      "Select the number of UUIDs you need.",
      "Choose formatting options (uppercase or remove hyphens).",
      "Click 'Generate' and copy the generated identifiers.",
    ],
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    title: "Hash Generator Online — SHA-256, SHA-512, SHA-1, MD5",
    description:
      "Generate cryptographic hashes (SHA-256, SHA-512, SHA-384, SHA-1, MD5) for text and passwords in real time using the browser Web Crypto API.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "hash generator",
      "sha256 generator",
      "sha512 generator",
      "md5 generator",
      "crypto hash online",
    ],
    icon: "🔑",
    relatedTools: ["uuid-generator", "password-generator", "base64-encoder"],
    relatedGuides: ["hashing-vs-encryption", "base64-vs-encryption"],
    whatIs:
      "Hash Generator calculates fixed-size cryptographic digests (SHA-256, SHA-512, SHA-1, MD5) from arbitrary input strings using native browser cryptography.",
    features: [
      "Generates SHA-256, SHA-512, SHA-384, SHA-1, and MD5 digests simultaneously",
      "Native Web Crypto API hardware acceleration",
      "Uppercase and lowercase hex outputs",
      "Zero network requests for maximum secret security",
    ],
    examples: [
      {
        title: "SHA-256 Hash",
        input: "hello world",
        output: "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9",
        explanation: "Produces a deterministic 256-bit (64 hex character) one-way hash.",
      },
    ],
    privacyNote:
      "Sensitive hashes and passwords are calculated 100% client-side. Nothing is transmitted over the web.",
    faq: [
      {
        question: "Can a cryptographic hash be reversed back to original text?",
        answer:
          "No. Cryptographic hash functions are one-way mathematical algorithms designed to be irreversible.",
      },
      {
        question: "Which hash algorithm is recommended for security?",
        answer:
          "SHA-256 and SHA-512 are modern standards. MD5 and SHA-1 are cryptographically broken and should only be used for legacy checksum verification.",
      },
    ],
    howToUse: [
      "Type or paste your text into the input box.",
      "Review the calculated SHA-256, SHA-512, and MD5 hashes.",
      "Click the copy button beside your desired hash.",
    ],
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    title: "Secure Password Generator Online — Free & Strong",
    description:
      "Generate strong, random, cryptographically secure passwords. Customize length, uppercase, lowercase, numbers, and symbols with an instant entropy meter.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "password generator",
      "secure password generator",
      "random password",
      "strong password generator",
      "password creator",
    ],
    icon: "🛡️",
    relatedTools: ["hash-generator", "uuid-generator"],
    relatedGuides: ["hashing-vs-encryption"],
    whatIs:
      "Password Generator creates high-entropy, unpredictable random passwords using the browser's Web Crypto random number generator.",
    features: [
      "Configurable length from 8 to 64 characters",
      "Toggles for uppercase, lowercase, numbers, and special symbols",
      "Avoid ambiguous characters option (e.g., l, 1, O, 0)",
      "Real-time password strength and entropy score meter",
    ],
    examples: [
      {
        title: "16-Character Strong Password",
        input: "Length: 16, Symbols: ON, Numbers: ON",
        output: "k9#mQ8$vP2!xL4&w",
        explanation: "Provides 95+ bits of entropy against brute force attacks.",
      },
    ],
    privacyNote:
      "Generated passwords exist only in your browser window and are never saved or sent to any server.",
    faq: [
      {
        question: "How long should a strong password be?",
        answer:
          "Security guidelines recommend a minimum of 14 to 16 characters containing a mix of uppercase letters, lowercase letters, numbers, and symbols.",
      },
    ],
    howToUse: [
      "Adjust the password length slider to your desired length.",
      "Select the character sets you want included.",
      "Click 'Generate' and copy your new secure password.",
    ],
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    title: "QR Code Generator Online — Free & Fast",
    description:
      "Generate customizable QR codes for URLs, text, Wi-Fi, and contact details. Download high-resolution PNG or SVG images instantly without sign-up.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "qr code generator",
      "generate qr code",
      "free qr code",
      "qr generator online",
      "url to qr code",
    ],
    icon: "📱",
    relatedTools: ["url-encoder", "url-parser"],
    relatedGuides: ["what-is-url-encoding"],
    whatIs:
      "QR Code Generator encodes text and web URLs into standard 2D matrix barcodes that can be scanned by mobile devices.",
    features: [
      "Instant canvas rendering for URLs and text",
      "Configurable pixel size and error correction",
      "Direct PNG image download",
      "100% browser-based with zero tracking",
    ],
    examples: [
      {
        title: "URL to QR Code",
        input: "https://toolnest.smrityku.workers.dev",
        output: "[Scannable 2D Matrix Barcode]",
        explanation: "Allows smartphones to navigate to the link immediately.",
      },
    ],
    privacyNote:
      "QR codes are drawn locally on an HTML5 canvas. Your encoded text is never sent to third-party APIs.",
    faq: [
      {
        question: "Do these QR codes ever expire?",
        answer:
          "No. These are static QR codes containing direct data. They never expire and do not route through any redirect servers.",
      },
    ],
    howToUse: [
      "Enter a website URL or text string.",
      "The QR code renders immediately on screen.",
      "Click 'Download PNG' to save the image.",
    ],
  },
  {
    slug: "timestamp-converter",
    name: "Unix Timestamp Converter",
    title: "Unix Timestamp Converter Online — Epoch to Date Free",
    description:
      "Convert Unix timestamps (seconds & milliseconds) to human-readable UTC and local dates, and convert dates back to Unix epoch timestamps.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "unix timestamp converter",
      "epoch converter",
      "timestamp to date",
      "date to unix",
      "epoch time",
    ],
    icon: "⏰",
    relatedTools: ["uuid-generator", "jwt-decoder"],
    relatedGuides: ["what-is-unix-timestamp"],
    whatIs:
      "Unix Timestamp Converter translates between seconds elapsed since the Unix Epoch (January 1, 1970 UTC) and human-readable calendar dates in UTC and local time zones.",
    features: [
      "Live current Unix epoch timestamp counter",
      "Two-way conversion: Timestamp to Date & Date to Timestamp",
      "Supports both seconds (10 digits) and milliseconds (13 digits)",
      "Displays ISO 8601, RFC 2822, UTC, and local time representations",
    ],
    examples: [
      {
        title: "Epoch to Date",
        input: "1786963200",
        output: "2026-08-18T10:40:00Z | UTC Date: Tue, 18 Aug 2026",
        explanation: "Translates seconds into formatted calendar timestamps.",
      },
    ],
    privacyNote:
      "Runs locally using browser Date APIs.",
    faq: [
      {
        question: "What is the Unix Epoch?",
        answer:
          "The Unix Epoch is 00:00:00 UTC on January 1, 1970. Unix time is the number of seconds that have elapsed since that point.",
      },
      {
        question: "Why do timestamps differ by 1000x?",
        answer:
          "Standard Unix timestamps count seconds (10 digits), whereas JavaScript `Date.now()` and Java APIs return milliseconds (13 digits).",
      },
    ],
    howToUse: [
      "Enter an epoch timestamp to convert to date format, or select a date/time to calculate its Unix epoch value.",
      "Copy the converted date or timestamp string.",
    ],
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    title: "Lorem Ipsum Generator Online — Placeholder Text Free",
    description:
      "Generate standard Lorem Ipsum placeholder text for mockups, UI designs, and prototypes. Customize paragraphs, sentences, or word counts.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "lorem ipsum generator",
      "placeholder text",
      "dummy text generator",
      "lorem ipsum",
      "mockup text",
    ],
    icon: "📄",
    relatedTools: ["word-counter", "character-counter"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Lorem Ipsum Generator creates standard pseudo-Latin placeholder text for software wireframes, graphic designs, and web layouts.",
    features: [
      "Generate by paragraphs, sentences, or exact word counts",
      "Option to start with classic 'Lorem ipsum dolor sit amet...'",
      "One-click copy to clipboard",
    ],
    examples: [
      {
        title: "Sample Paragraph",
        input: "1 Paragraph",
        output: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        explanation: "Generates realistic text flow for typography testing.",
      },
    ],
    privacyNote:
      "Generated locally in your browser.",
    faq: [
      {
        question: "Why use Lorem Ipsum?",
        answer:
          "It provides a normal distribution of letters and word lengths, allowing reviewers to evaluate typography and layout without being distracted by readable content.",
      },
    ],
    howToUse: [
      "Choose whether you want paragraphs, sentences, or words.",
      "Set the quantity.",
      "Click 'Generate' and copy the placeholder text.",
    ],
  },

  // ─── WEB & DEV TOOLS ──────────────────────────
  {
    slug: "sql-formatter",
    name: "SQL Formatter",
    title: "SQL Formatter & Beautifier Online — Free",
    description:
      "Format, beautify, and indent SQL queries online. Standardize uppercase keywords (SELECT, FROM, WHERE, JOIN) and improve query readability.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "sql formatter",
      "sql beautifier",
      "format sql online",
      "sql pretty print",
      "sql indent",
    ],
    icon: "🗄️",
    relatedTools: ["xml-formatter", "json-formatter", "json-to-csv"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "SQL Formatter cleans up unformatted or nested SQL queries by adding line breaks before major clauses (SELECT, FROM, WHERE, GROUP BY, ORDER BY, JOIN) and standardizing keyword casing.",
    features: [
      "Automatic keyword capitalization (SELECT, INSERT, UPDATE, DELETE, WHERE, JOIN)",
      "Consistent 2-space clause indentation",
      "Supports MySQL, PostgreSQL, SQLite, and standard ANSI SQL",
      "One-click copy and query sample",
    ],
    examples: [
      {
        title: "Formatting Complex SELECT Query",
        input: "select u.id, u.name, o.total from users u join orders o on u.id = o.user_id where o.status = 'completed' order by o.total desc",
        output: "SELECT\n  u.id,\n  u.name,\n  o.total\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE o.status = 'completed'\nORDER BY o.total DESC",
        explanation: "Structures clauses into readable vertical blocks.",
      },
    ],
    privacyNote:
      "Your database queries and schema definitions remain private on your device.",
    faq: [
      {
        question: "Does this execute SQL queries against a database?",
        answer:
          "No. This tool is purely a code formatter and text beautifier. It does not connect to any database.",
      },
    ],
    howToUse: [
      "Paste your raw SQL query into the input box.",
      "Click 'Format SQL'.",
      "Copy the beautified query.",
    ],
  },
  {
    slug: "xml-formatter",
    name: "XML Formatter",
    title: "XML Formatter & Beautifier Online — Free",
    description:
      "Format, beautify, and indent XML documents with clean hierarchical indentation. Free online XML pretty printer.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "xml formatter",
      "xml beautifier",
      "format xml",
      "xml pretty print",
      "xml indent",
    ],
    icon: "📰",
    relatedTools: ["json-formatter", "yaml-formatter", "sql-formatter"],
    relatedGuides: ["json-vs-xml", "what-is-json"],
    whatIs:
      "XML Formatter parses raw XML and SVG strings, applying consistent indentation and line breaks to nested markup elements and attributes.",
    features: [
      "Pretty-prints XML documents with 2-space indentation",
      "Handles XML declarations, closing tags, and self-closing tags",
      "Download formatted XML file directly",
    ],
    examples: [
      {
        title: "XML Pretty Print",
        input: "<catalog><book id=\"1\"><title>Guide</title><price>19.99</price></book></catalog>",
        output: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<catalog>\n  <book id=\"1\">\n    <title>Guide</title>\n    <price>19.99</price>\n  </book>\n</catalog>",
        explanation: "Indents nested child nodes cleanly.",
      },
    ],
    privacyNote:
      "XML parsing is performed in browser memory.",
    faq: [
      {
        question: "Can this format SVG files?",
        answer:
          "Yes. Because SVG is an XML-based graphic format, XML Formatter beautifies SVG markup seamlessly.",
      },
    ],
    howToUse: [
      "Paste your XML or SVG string into the input area.",
      "Click 'Format XML'.",
      "Copy or download the indented output.",
    ],
  },
  {
    slug: "yaml-formatter",
    name: "YAML Formatter & Validator",
    title: "YAML Formatter & Validator Online — Free",
    description:
      "Format, validate, and beautify YAML configurations for Kubernetes, Docker Compose, CI/CD pipelines, and GitHub Actions.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "yaml formatter",
      "yaml validator",
      "format yaml",
      "yaml pretty print",
      "yaml lint",
    ],
    icon: "📜",
    relatedTools: ["xml-formatter", "json-formatter"],
    relatedGuides: ["what-is-json", "json-vs-xml"],
    whatIs:
      "YAML Formatter parses and validates YAML documents, ensuring strict whitespace indentation and structure for CI/CD and deployment files.",
    features: [
      "Validates YAML syntax and nesting rules",
      "Beautifies YAML with standard 2-space indentation",
      "Sample Kubernetes & Docker Compose templates",
    ],
    examples: [
      {
        title: "YAML Config Formatting",
        input: "version: '3.8'\nservices:\n  web:\n    image: nginx\n    ports:\n      - '80:80'",
        output: "version: '3.8'\nservices:\n  web:\n    image: nginx\n    ports:\n      - '80:80'",
        explanation: "Maintains consistent YAML indentation.",
      },
    ],
    privacyNote:
      "Configuration files are parsed locally.",
    faq: [
      {
        question: "Are tabs allowed in YAML?",
        answer:
          "No. The YAML specification strictly forbids tab characters for indentation; spaces must always be used.",
      },
    ],
    howToUse: [
      "Paste your YAML configuration into the input area.",
      "Click 'Format & Validate'.",
      "Copy the cleaned configuration.",
    ],
  },
  {
    slug: "regex-tester",
    name: "Regex Tester",
    title: "Regex Tester & Debugger Online — JavaScript Regular Expressions",
    description:
      "Test and debug regular expressions in real time. Highlight match groups, test regex flags (g, i, m, s), and verify pattern replacements.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "regex tester",
      "regular expression tester",
      "regex debugger",
      "javascript regex",
      "regex test online",
    ],
    icon: "🔍",
    relatedTools: ["text-diff", "word-counter", "url-parser"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Regex Tester evaluates regular expression patterns against test strings in real time, highlighting matching substrings and capture groups.",
    features: [
      "Real-time pattern evaluation with capture group inspection",
      "Configurable flags: global (g), case-insensitive (i), multiline (m), dotAll (s)",
      "Instant match count and match index coordinates",
      "Preloaded common patterns (email, URL, phone number, IP address, UUID)",
    ],
    examples: [
      {
        title: "Matching Email Addresses",
        input: "Pattern: [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\nText: Contact alex@example.com for support",
        output: "Match 1: alex@example.com (Index: 8)",
        explanation: "Finds and extracts valid email structures.",
      },
    ],
    privacyNote:
      "Evaluated locally in your browser engine with ReDoS protection limits.",
    faq: [
      {
        question: "Which regex flavor is used?",
        answer:
          "This tool uses the standard ECMAScript / JavaScript regular expression engine built into modern browsers.",
      },
    ],
    howToUse: [
      "Enter your regular expression pattern in the pattern bar.",
      "Toggle required flags (g, i, m, s).",
      "Paste your test text to see instant match highlights.",
    ],
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    title: "Color Converter Online — HEX, RGB, HSL, RGBA",
    description:
      "Convert colors between HEX, RGB, RGBA, HSL, and HSLA formats with a visual color picker, contrast preview, and CSS snippet copying.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "color converter",
      "hex to rgb",
      "rgb to hex",
      "hex to hsl",
      "css color converter",
    ],
    icon: "🎨",
    relatedTools: ["url-parser", "html-encoder"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Color Converter translates color representations across HEX, RGB, and HSL color models, providing instant CSS values for frontend styling.",
    features: [
      "Two-way conversion between HEX, RGB, RGBA, HSL, and HSLA",
      "Interactive visual color picker preview",
      "One-click copy for CSS color values",
    ],
    examples: [
      {
        title: "Converting Brand Color",
        input: "#3b82f6",
        output: "RGB: rgb(59, 130, 246) | HSL: hsl(217, 91%, 60%)",
        explanation: "Generates equivalent CSS color representations.",
      },
    ],
    privacyNote:
      "Operates 100% in client-side JavaScript.",
    faq: [
      {
        question: "What is the difference between RGB and HSL?",
        answer:
          "RGB defines colors by red, green, and blue light intensity (0-255). HSL defines colors by Hue (0-360 deg), Saturation (0-100%), and Lightness (0-100%), which is often more intuitive for designers.",
      },
    ],
    howToUse: [
      "Enter any valid HEX, RGB, or HSL color code or pick a color using the color picker.",
      "View synchronized values across all color models.",
      "Copy your desired CSS format.",
    ],
  },
  {
    slug: "url-parser",
    name: "URL Parser & Query String Analyzer",
    title: "URL Parser Online — Deconstruct URL & Query Parameters",
    description:
      "Parse and analyze URLs into protocol, hostname, port, pathname, hash, and detailed key-value query parameters.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "url parser",
      "parse url",
      "query string parser",
      "url analyzer",
      "url breakdown",
    ],
    icon: "🌐",
    relatedTools: ["url-encoder", "url-decoder", "jwt-decoder"],
    relatedGuides: ["understanding-url-query-params", "what-is-url-encoding", "url-encoding-vs-decoding"],
    whatIs:
      "URL Parser breaks down complex URLs into protocol, host, port, path, anchor hash, and an interactive table of query parameters.",
    features: [
      "Deconstructs URLs into origin, protocol, hostname, port, pathname, search, and hash",
      "Tabular breakdown of query parameters with decoded values",
      "JSON export of parsed URL structure",
    ],
    examples: [
      {
        title: "Deconstructing API URL",
        input: "https://api.example.com:8080/v2/users?page=1&sort=desc#profile",
        output: "Host: api.example.com:8080 | Path: /v2/users | Params: {page: 1, sort: desc} | Hash: #profile",
        explanation: "Breaks the URL into individual components for debugging.",
      },
    ],
    privacyNote:
      "Parsed entirely inside your browser.",
    faq: [
      {
        question: "Can this parse relative URLs?",
        answer:
          "Relative URLs (such as `/products/item`) are resolved against a dummy base origin (`https://example.com`) for analysis.",
      },
    ],
    howToUse: [
      "Paste any URL into the input field.",
      "Review the parsed components and query parameter table.",
      "Copy specific parameters or the JSON breakdown.",
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
