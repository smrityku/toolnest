import type { ToolDefinition, CategoryInfo } from "@/types/tool";

export const categories: CategoryInfo[] = [
  {
    slug: "json-tools",
    label: "JSON Tools",
    description: "Format, validate, minify, escape, and convert JSON data structures",
    icon: "{ }",
  },
  {
    slug: "encoding-tools",
    label: "Encoding Tools",
    description: "Encode and decode Base64, URLs, HTML entities, and inspect JWT claims",
    icon: "🔐",
  },
  {
    slug: "text-tools",
    label: "Text Tools",
    description: "Count words, compare diffs, convert casing, and deduplicate lines",
    icon: "📝",
  },
  {
    slug: "generators",
    label: "Generators",
    description: "Generate UUIDs, secure passwords, QR codes, hashes, and timestamps",
    icon: "⚡",
  },
  {
    slug: "web-tools",
    label: "Web & Dev Tools",
    description: "Format SQL & XML, parse URLs, convert color codes, and test RegEx",
    icon: "🌐",
  },
];

export const tools: ToolDefinition[] = [
  // ─── 1. JSON FORMATTER ───────────────────────────────
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    title: "JSON Formatter & Beautifier Online — Pretty Print JSON",
    description:
      "Format, beautify, and pretty-print JSON data in your browser. Configure indentation (2 spaces, 4 spaces, tabs), pinpoint syntax errors, and copy or download cleanly structured JSON.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "json formatter",
      "json beautifier",
      "pretty print json",
      "format json online",
      "clean json",
      "json indent",
    ],
    icon: "{ }",
    relatedTools: ["json-validator", "json-minifier", "json-to-csv", "json-escape"],
    relatedGuides: ["what-is-json", "how-to-format-json", "common-json-errors", "json-syntax-explained"],
    whatIs:
      "JSON Formatter is a client-side developer utility designed to transform dense, unformatted, or single-line JSON payloads into clean, hierarchical, and easily readable documents. It applies standard indentation and whitespace rules according to the RFC 8259 specification.",
    howItWorks:
      "The tool takes your raw input string and parses it using the browser's native `JSON.parse()` engine. Once parsed into a structured memory object, it re-serializes the data via `JSON.stringify(object, null, indent)` where the indentation level matches your chosen spacing preference (2 spaces, 4 spaces, or tabs). If any structural syntax errors exist, the parser catches the exact line and position of the error.",
    useCases: [
      "Inspecting unformatted API responses from REST or GraphQL endpoints",
      "Beautifying minified configuration files such as package.json, tsconfig.json, or docker-compose manifests",
      "Preparing clean JSON snippets for technical documentation, pull request reviews, and code examples",
      "Debugging serialization issues between backend services and frontend applications",
    ],
    features: [
      "Configurable indentation: 2 spaces (standard web convention), 4 spaces, or tabs",
      "Precise syntax error detection pinpointing line numbers and tokens",
      "One-click copy to clipboard and `.json` file download",
      "Pre-loaded sample payloads for instant testing and validation",
      "100% private client-side execution with zero network transmission",
    ],
    examples: [
      {
        title: "Beautifying Compact API Response",
        input: '{"status":200,"data":{"user":{"id":101,"username":"dev_alex","roles":["admin","billing"]}}}',
        output: `{\n  "status": 200,\n  "data": {\n    "user": {\n      "id": 101,\n      "username": "dev_alex",\n      "roles": [\n        "admin",\n        "billing"\n      ]\n    }\n  }\n}`,
        explanation: "Transforms a single-line API payload into multi-line indented structure with 2-space nesting.",
      },
    ],
    limitations:
      "Input data must follow valid JSON syntax (RFC 8259). Standard JSON does not allow trailing commas, single quotes around keys, raw unquoted strings, or JavaScript functions.",
    privacyNote:
      "Your JSON payload is processed purely in your browser's local memory. No payload text is sent across any network, logged to servers, or stored in cookies.",
    howToUse: [
      "Paste your raw or minified JSON string into the input editor.",
      "Select your preferred indentation level (2 spaces, 4 spaces, or tabs).",
      "Click 'Format' to beautify your data instantly.",
      "Use 'Copy' to copy the formatted text or 'Download' to save as a file.",
    ],
    faq: [
      {
        question: "What is the difference between JSON formatting and minifying?",
        answer:
          "Formatting adds whitespace and newlines to make JSON human-readable for debugging and editing, whereas minifying removes all unnecessary whitespace to minimize byte size for fast network transmission.",
      },
      {
        question: "Does this formatter change the meaning of my data?",
        answer:
          "No. JSON formatting only modifies whitespace and indentation outside string literals. Object keys, numeric values, boolean flags, arrays, and string contents remain completely unaltered.",
      },
      {
        question: "Why does my JSON fail to format?",
        answer:
          "Common reasons include trailing commas after the last array/object element, single quotes instead of double quotes around property names, or unescaped control characters. Check the error alert for exact line details.",
      },
      {
        question: "Is there a file size limit for formatting JSON?",
        answer:
          "Because processing happens entirely within your browser engine, the tool can format documents up to several megabytes depending on your device's available memory.",
      },
    ],
  },

  // ─── 2. JSON VALIDATOR ───────────────────────────────
  {
    slug: "json-validator",
    name: "JSON Validator",
    title: "JSON Validator Online — Validate JSON Syntax & Detect Errors",
    description:
      "Validate JSON syntax instantly with detailed error diagnostics. Identify unescaped quotes, trailing commas, missing braces, and structural issues in your JSON payloads.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "json validator",
      "validate json online",
      "json syntax checker",
      "json linter",
      "check json errors",
    ],
    icon: "✓",
    relatedTools: ["json-formatter", "json-minifier", "json-escape", "text-diff"],
    relatedGuides: ["how-to-validate-json", "common-json-errors", "json-syntax-explained"],
    whatIs:
      "JSON Validator is an online developer tool that checks whether a data string conforms strictly to the RFC 8259 JSON syntax specification. It inspects grammar, string escaping, bracket matching, and data typing, providing instant diagnostic feedback.",
    howItWorks:
      "The validator evaluates the string against standard JSON grammar rules using client-side JavaScript parser hooks. If the document is valid, it reports structural statistics (type, element count, depth). If invalid, it extracts the exception token and calculates line and column numbers to help you fix errors immediately.",
    useCases: [
      "Verifying webhook payloads before sending requests to external APIs",
      "Validating configuration files in CI/CD build pipelines",
      "Checking data exports from databases before ingestion into downstream data lakes",
      "Troubleshooting malformed JSON strings copied from logs or terminal outputs",
    ],
    features: [
      "Instant pass/fail visual status indicator",
      "Clear error descriptions with line and column markers",
      "Structural inspection showing root type, key count, and nesting depth",
      "One-click formatting of valid payloads",
      "100% browser-based security for private configuration data",
    ],
    examples: [
      {
        title: "Validating Nested Object",
        input: '{\n  "service": "auth",\n  "port": 8080,\n  "enabled": true\n}',
        output: "✓ Valid JSON (Root: Object, 3 properties)",
        explanation: "Passes validation because keys use double quotes and values use standard JSON primitive types.",
      },
      {
        title: "Detecting Trailing Comma Error",
        input: '{\n  "name": "ToolNest",\n  "version": 1.0,\n}',
        output: "✗ SyntaxError: Unexpected token '}' at line 4 column 1",
        explanation: "Trailing commas after the final key-value pair are invalid under RFC 8259.",
      },
    ],
    limitations:
      "Validates JSON syntax according to RFC 8259. It does not validate external JSON Schema ($schema) schemas or semantic business rules.",
    privacyNote:
      "Validation runs purely in browser memory. Sensitive API keys, database credentials, or customer payloads are never transmitted to any server.",
    howToUse: [
      "Paste your JSON document into the validator input box.",
      "Click 'Validate JSON' or begin typing to trigger live validation.",
      "Review the validation banner for success confirmation or error coordinates.",
      "Correct any identified syntax errors and re-validate.",
    ],
    faq: [
      {
        question: "Why does JSON forbid trailing commas?",
        answer:
          "The original JSON specification (RFC 8259) was designed to be a strict, minimal data interchange format. Unlike JavaScript object literals, JSON disallows trailing commas to prevent parsing ambiguities across different language implementations.",
      },
      {
        question: "Can I use single quotes in JSON keys or strings?",
        answer:
          "No. The JSON standard strictly requires double quotes (`\"`) around all property names and string values. Single quotes (`'`) are invalid syntax.",
      },
      {
        question: "How do I fix unexpected token errors in JSON?",
        answer:
          "Look at the line and character position highlighted in the error message. Common culprits include missing closing braces `}`, missing colons `:`, or unescaped quotes inside string values.",
      },
    ],
  },

  // ─── 3. JSON MINIFIER ───────────────────────────────
  {
    slug: "json-minifier",
    name: "JSON Minifier",
    title: "JSON Minifier Online — Compress & Minify JSON Payloads",
    description:
      "Minify and compress JSON data by stripping unnecessary whitespace, line breaks, and indentation. Reduce payload byte size for faster API responses and optimized storage.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "json minifier",
      "minify json online",
      "compress json",
      "json compact",
      "remove json whitespace",
    ],
    icon: "🗜️",
    relatedTools: ["json-formatter", "json-validator", "json-escape"],
    relatedGuides: ["how-to-minify-json", "how-to-format-json", "what-is-json"],
    whatIs:
      "JSON Minifier is a utility that removes all redundant whitespace, tabs, and newline characters from JSON documents without altering the underlying data values or key structures.",
    howItWorks:
      "The tool parses the input with `JSON.parse()` to ensure structural validity and then outputs a single continuous string via `JSON.stringify(parsed)`. All whitespace outside of string literals is stripped, resulting in the smallest possible valid JSON representation.",
    useCases: [
      "Minimizing HTTP request payload sizes for mobile apps and low-bandwidth clients",
      "Optimizing document sizes before storage in Redis caches, NoSQL databases, or S3 buckets",
      "Embedding compact JSON payloads into shell scripts, environment variables, or CI pipelines",
    ],
    features: [
      "Calculates exact byte count reduction and compression percentage",
      "Preserves all whitespace inside string literals while stripping structural whitespace",
      "Instant validation before compression",
      "Fast one-click copy and file download",
    ],
    examples: [
      {
        title: "Minifying Multi-line JSON Document",
        input: `{\n  "appName": "ToolNest",\n  "features": [\n    "formatting",\n    "validation"\n  ]\n}`,
        output: `{"appName":"ToolNest","features":["formatting","validation"]}`,
        explanation: "Removes 5 line breaks and 8 indentation spaces, saving up to 40% byte volume.",
      },
    ],
    privacyNote:
      "All minification executes in your local browser sandbox. No data leaves your machine.",
    howToUse: [
      "Paste your formatted or multi-line JSON into the input editor.",
      "Click 'Minify JSON' to compress the text.",
      "View the byte size reduction statistics.",
      "Copy the compact JSON or save it to disk.",
    ],
    faq: [
      {
        question: "Does minifying JSON lose data precision?",
        answer:
          "No. Minification only strips non-essential whitespace characters between tokens. Numeric values, text content, nested hierarchies, and boolean values remain 100% identical.",
      },
      {
        question: "How much bandwidth does JSON minification save?",
        answer:
          "Depending on indentation depth and property count, minification typically reduces JSON payload sizes by 20% to 50%, speeding up API transmission over mobile networks.",
      },
    ],
  },

  // ─── 4. JSON TO CSV ───────────────────────────────
  {
    slug: "json-to-csv",
    name: "JSON to CSV Converter",
    title: "JSON to CSV Converter Online — Convert JSON Arrays to CSV",
    description:
      "Convert JSON objects and arrays into clean CSV spreadsheets. Automatically extract headers, handle nested fields, escape commas, and export to Excel or Google Sheets.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "json to csv",
      "convert json to csv online",
      "json to excel converter",
      "export json as csv",
    ],
    icon: "📊",
    relatedTools: ["csv-to-json", "json-formatter", "sql-formatter"],
    relatedGuides: ["json-objects-vs-arrays", "what-is-json"],
    whatIs:
      "JSON to CSV Converter is an online conversion utility that transforms arrays of JSON objects into tabular Comma-Separated Values (CSV) format suitable for spreadsheets and database imports.",
    howItWorks:
      "The tool analyzes the keys across all objects in a JSON array to create a unified set of column headers. It then iterates through each record, mapping values to corresponding columns, escaping quotes, and wrapping fields containing commas in standard RFC 4180 quotation marks.",
    useCases: [
      "Exporting REST API data into Microsoft Excel, Apple Numbers, or Google Sheets",
      "Converting analytics log exports for statistical reporting and business intelligence",
      "Preparing data for legacy CSV batch ingestion workflows",
    ],
    features: [
      "Automatic column discovery across irregular JSON objects",
      "Compliant RFC 4180 CSV escaping for quotes, commas, and line breaks",
      "Export directly to `.csv` file format",
      "Real-time preview of formatted CSV table",
    ],
    examples: [
      {
        title: "Converting User Array to CSV",
        input: `[\n  {"id": 1, "name": "Alice", "role": "Engineer"},\n  {"id": 2, "name": "Bob", "role": "Designer"}\n]`,
        output: `id,name,role\n1,Alice,Engineer\n2,Bob,Designer`,
        explanation: "Extracts `id`, `name`, and `role` as header row followed by comma-separated data rows.",
      },
    ],
    limitations:
      "Deeply nested JSON sub-objects are serialized as stringified representations within the CSV cell.",
    privacyNote:
      "Data conversion happens entirely within your web browser. Confidential business data is never uploaded to external servers.",
    howToUse: [
      "Paste your JSON array of objects into the input editor.",
      "Click 'Convert to CSV'.",
      "Review the resulting CSV output and download the `.csv` spreadsheet.",
    ],
    faq: [
      {
        question: "What JSON structure is required for CSV conversion?",
        answer:
          "The input should be an array of JSON objects (e.g. `[{\"col1\": \"val1\"}, {\"col1\": \"val2\"}]`) or a single JSON object.",
      },
      {
        question: "How are commas and quotes handled inside field values?",
        answer:
          "In accordance with RFC 4180, fields containing commas, quotes, or newlines are wrapped in double quotes, and internal quotes are escaped as `\"\"`.",
      },
    ],
  },

  // ─── 5. CSV TO JSON ───────────────────────────────
  {
    slug: "csv-to-json",
    name: "CSV to JSON Converter",
    title: "CSV to JSON Converter Online — Convert Spreadsheets to JSON",
    description:
      "Convert CSV data and spreadsheet tables into clean, structured JSON arrays. Automatically parse headers, detect numeric values, and output formatted JSON.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "csv to json",
      "convert csv to json online",
      "spreadsheet to json",
      "csv parser online",
    ],
    icon: "🔄",
    relatedTools: ["json-to-csv", "json-formatter", "json-validator"],
    relatedGuides: ["json-objects-vs-arrays", "what-is-json"],
    whatIs:
      "CSV to JSON Converter parses tabular comma-separated text and converts each row into a structured JSON object whose properties correspond to the column headers.",
    howItWorks:
      "The parser reads the first row as property keys, then splits subsequent lines into fields while respecting quoted strings and escaped delimiters. It attempts to parse numeric and boolean primitives where appropriate and produces a formatted JSON array.",
    useCases: [
      "Importing exported spreadsheet data into JavaScript, Python, or Node.js applications",
      "Creating mock JSON datasets from Excel or Google Sheets for frontend prototyping",
      "Migrating tabular datasets into document databases like MongoDB or Firestore",
    ],
    features: [
      "Automatic header detection from the first CSV row",
      "Type inference for numbers and booleans",
      "Configurable output formatting with indentation",
      "Handles multiline quoted cells and custom delimiters",
    ],
    examples: [
      {
        title: "Converting Simple CSV Table",
        input: `sku,item,price,inStock\nSKU-10,Keyboard,49.99,true\nSKU-20,Mouse,24.50,false`,
        output: `[\n  {\n    "sku": "SKU-10",\n    "item": "Keyboard",\n    "price": 49.99,\n    "inStock": true\n  },\n  {\n    "sku": "SKU-20",\n    "item": "Mouse",\n    "price": 24.5,\n    "inStock": false\n  }\n]`,
        explanation: "Maps headers to object keys and converts numeric and boolean literals.",
      },
    ],
    privacyNote:
      "Processing runs 100% locally in browser memory with zero network requests.",
    howToUse: [
      "Paste your raw CSV text into the input textarea.",
      "Click 'Convert to JSON'.",
      "Copy the formatted JSON array or download it as a `.json` file.",
    ],
    faq: [
      {
        question: "Does this tool support semicolons or tab delimiters?",
        answer:
          "Yes. The converter automatically detects common delimiters including commas, semicolons, and tabs.",
      },
      {
        question: "Will numbers be parsed as numbers or strings?",
        answer:
          "Valid numeric strings (e.g. `42`, `3.14`) are automatically parsed into numeric JSON types unless quoted explicitly.",
      },
    ],
  },

  // ─── 6. JSON ESCAPE / UNESCAPE ───────────────────────────────
  {
    slug: "json-escape",
    name: "JSON String Escape / Unescape",
    title: "JSON Escape & Unescape Online — Escape Quotes & Slashes",
    description:
      "Escape and unescape JSON strings for safe embedding into code, shell commands, SQL queries, or string literals. Handle double quotes, newlines, and backslashes.",
    category: "json-tools",
    categoryLabel: "JSON Tools",
    keywords: [
      "json escape",
      "json unescape",
      "escape json string online",
      "json stringifier",
      "escape quotes in json",
    ],
    icon: "\\",
    relatedTools: ["json-formatter", "json-validator", "html-encoder"],
    relatedGuides: ["json-syntax-explained", "common-json-errors"],
    whatIs:
      "JSON String Escape is a utility that transforms raw text and quotes into escaped characters (`\\\"`, `\\\\`, `\\n`, `\\t`) so they can be safely embedded as JSON string values, or reverses the process to restore raw text.",
    howItWorks:
      "Escaping replaces control characters, backslashes, and double quotes with their respective RFC 8259 escape sequences. Unescaping removes escape backslashes to reconstruct the original raw string.",
    useCases: [
      "Embedding JSON payloads inside environment variables, `.env` files, or Docker build args",
      "Escaping raw JSON for inclusion inside SQL query strings or bash scripts",
      "Unescaping serialized JSON strings extracted from application logs",
    ],
    features: [
      "Bidirectional: Escape raw text to JSON or Unescape JSON strings back to raw text",
      "Handles quotes, backslashes, newlines, carriage returns, and tabs",
      "Instant copy to clipboard",
    ],
    examples: [
      {
        title: "Escaping JSON with Quotes",
        input: `{"message": "Hello "World""}`,
        output: `{\\"message\\": \\"Hello \\"World\\"\\"}`,
        explanation: "Escapes double quotes and backslashes for safe embedding.",
      },
    ],
    privacyNote:
      "Text escaping executes entirely client-side with zero data transmission.",
    howToUse: [
      "Paste your text into the editor.",
      "Click 'Escape' to add JSON escape sequences or 'Unescape' to remove them.",
      "Copy the escaped result.",
    ],
    faq: [
      {
        question: "What characters need escaping in JSON?",
        answer:
          "Under RFC 8259, double quotes `\"`, backslashes `\\`, and control characters (such as newline `\\n`, tab `\\t`, carriage return `\\r`) must be escaped when placed inside a JSON string.",
      },
    ],
  },

  // ─── 7. BASE64 ENCODER ───────────────────────────────
  {
    slug: "base64-encoder",
    name: "Base64 Encoder",
    title: "Base64 Encoder Online — Convert Text to Base64 (UTF-8 Safe)",
    description:
      "Encode plain text, UTF-8 strings, and special characters into Base64 format online. Fast, secure, and client-side conversion compliant with RFC 4648.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "base64 encoder",
      "encode base64 online",
      "text to base64",
      "utf8 base64 encoder",
      "base64 converter",
    ],
    icon: "📦",
    relatedTools: ["base64-decoder", "url-encoder", "jwt-decoder", "html-encoder"],
    relatedGuides: ["what-is-base64", "base64-vs-encryption", "when-to-use-base64"],
    whatIs:
      "Base64 Encoder is a developer utility that converts binary data or character text into an ASCII string format using a 64-character radix set (A-Z, a-z, 0-9, +, /) as defined in RFC 4648.",
    howItWorks:
      "The encoder breaks binary bytes into 6-bit chunks, where each chunk represents an index (0 to 63) in the Base64 alphabet table. Padding characters (`=`) are appended if the byte length is not divisible by 3. This implementation uses a UTF-8 safe TextEncoder pipeline to prevent character corruption on multibyte characters and emojis.",
    useCases: [
      "Encoding basic authorization credentials (`Authorization: Basic <base64>`) for HTTP headers",
      "Embedding small binary assets, fonts, or SVG icons as data URIs in CSS and HTML",
      "Transmitting binary payloads safely across text-only protocols such as SMTP email and XML",
    ],
    features: [
      "Full UTF-8 support for multilingual text, accented letters, and emojis",
      "RFC 4648 compliant padding (`=`) calculation",
      "Live real-time encoding as you type",
      "Instant copy and clear controls",
    ],
    examples: [
      {
        title: "Encoding Simple String",
        input: "ToolNest Developer Utilities",
        output: "VG9vbE5lc3QgRGV2ZWxvcGVyIFV0aWxpdGllcw==",
        explanation: "Converts text bytes into ASCII-safe Base64 with padding.",
      },
    ],
    securityNotes:
      "Base64 is an encoding format, NOT encryption. Encoded strings can be decoded by anyone without a secret key. Never use Base64 alone to protect confidential passwords or secrets.",
    privacyNote:
      "All encoding executes purely in your browser's local memory with zero network requests.",
    howToUse: [
      "Type or paste your text into the input editor.",
      "Click 'Encode to Base64' or observe real-time output.",
      "Copy the generated Base64 string.",
    ],
    faq: [
      {
        question: "Is Base64 considered secure encryption?",
        answer:
          "No. Base64 is an encoding scheme designed for data transmission across text channels. It offers zero cryptographic confidentiality because it can be trivially decoded by anyone.",
      },
      {
        question: "Why does Base64 increase data size?",
        answer:
          "Base64 represents 3 bytes (24 bits) of data as 4 ASCII characters (32 bits), creating an approximate 33% overhead in data size.",
      },
    ],
  },

  // ─── 8. BASE64 DECODER ───────────────────────────────
  {
    slug: "base64-decoder",
    name: "Base64 Decoder",
    title: "Base64 Decoder Online — Decode Base64 Strings to Text",
    description:
      "Decode Base64 encoded strings back into clean, readable text. Full UTF-8 and multilingual character support with instant error detection for corrupted payloads.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "base64 decoder",
      "decode base64 online",
      "base64 to text",
      "base64 string decoder",
      "read base64",
    ],
    icon: "🔓",
    relatedTools: ["base64-encoder", "url-decoder", "jwt-decoder"],
    relatedGuides: ["what-is-base64", "base64-vs-encryption"],
    whatIs:
      "Base64 Decoder is an online utility that converts RFC 4648 Base64 ASCII strings back into their original plain text or binary representation.",
    howItWorks:
      "The decoder maps 4-character Base64 blocks back into 3 original 8-bit bytes, removing padding characters and reconstructing the original byte sequence via `TextDecoder('utf-8')`.",
    useCases: [
      "Inspecting Basic Auth HTTP request headers during API debugging",
      "Decoding Base64 data chunks from email MIME attachments and webhook payloads",
      "Analyzing obfuscated strings in configuration files and scripts",
    ],
    features: [
      "Full UTF-8 decoding support for international characters and emojis",
      "Identifies invalid characters and malformed padding lengths",
      "One-click copy of decoded text",
    ],
    examples: [
      {
        title: "Decoding Base64 String",
        input: "SGVsbG8sIFdvcmxkIQ==",
        output: "Hello, World!",
        explanation: "Reconstructs the original ASCII/UTF-8 string from Base64.",
      },
    ],
    privacyNote:
      "Decoding runs 100% locally in your web browser. No token or secret is ever sent to our servers.",
    howToUse: [
      "Paste your Base64 string into the input box.",
      "Click 'Decode Base64'.",
      "Copy the decoded plain text.",
    ],
    faq: [
      {
        question: "Why do I get an invalid character error?",
        answer:
          "Base64 strings only contain `A-Z`, `a-z`, `0-9`, `+`, `/`, and `=` padding. Any spaces, line breaks, or special characters outside this set will trigger a decoding error.",
      },
    ],
  },

  // ─── 9. URL ENCODER ───────────────────────────────
  {
    slug: "url-encoder",
    name: "URL Encoder",
    title: "URL Encoder Online — Percent-Encode URLs & Query Parameters",
    description:
      "Encode URLs and query string parameters using standard percent-encoding (RFC 3986). Safely encode spaces, ampersands, slashes, and international characters.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "url encoder",
      "encode url online",
      "percent encoding online",
      "url parameter encoder",
      "uri encoder",
    ],
    icon: "🔗",
    relatedTools: ["url-decoder", "url-parser", "html-encoder", "base64-encoder"],
    relatedGuides: ["what-is-url-encoding", "url-encoding-vs-decoding", "understanding-url-query-params"],
    whatIs:
      "URL Encoder is a developer utility that converts non-ASCII characters and reserved URL delimiters into their percent-encoded (`%XX`) byte representations according to RFC 3986.",
    howItWorks:
      "The tool uses `encodeURIComponent()` to convert reserved characters (such as spaces to `%20`, `&` to `%26`, and `?` to `%3F`) and UTF-8 multibyte characters into valid hexadecimal escape sequences, ensuring strings can be passed safely inside query parameters.",
    useCases: [
      "Encoding search queries and tracking parameters passed in URL query strings",
      "Constructing OAuth redirect URIs and callback URLs",
      "Sanitizing dynamic variables in REST API endpoint paths",
    ],
    features: [
      "RFC 3986 compliant percent-encoding",
      "Full UTF-8 multibyte character encoding support",
      "Real-time instant output calculation",
    ],
    examples: [
      {
        title: "Encoding Query Parameter with Special Characters",
        input: "search term & category=books / tools",
        output: "search%20term%20%26%20category%3Dbooks%20%2F%20tools",
        explanation: "Encodes spaces as `%20`, ampersands as `%26`, equals as `%3D`, and slashes as `%2F`.",
      },
    ],
    privacyNote:
      "All processing runs entirely in your local browser sandbox.",
    howToUse: [
      "Paste your URL or parameter string into the input box.",
      "Click 'Encode URL'.",
      "Copy the percent-encoded URL string.",
    ],
    faq: [
      {
        question: "What is the difference between encodeURI and encodeURIComponent?",
        answer:
          "`encodeURI` preserves full URL structural delimiters (such as `http://`, `:`, `/`, `?`), whereas `encodeURIComponent` encodes all reserved characters so that text can be safely embedded as an isolated parameter value.",
      },
    ],
  },

  // ─── 10. URL DECODER ───────────────────────────────
  {
    slug: "url-decoder",
    name: "URL Decoder",
    title: "URL Decoder Online — Decode Percent-Encoded URLs",
    description:
      "Decode percent-encoded URL strings and query parameters back into human-readable text. Converts %20, %26, %3F, and UTF-8 hex sequences back into characters.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "url decoder",
      "decode url online",
      "percent decoding",
      "url parameter decoder",
      "convert percent encoding",
    ],
    icon: "🔓",
    relatedTools: ["url-encoder", "url-parser", "base64-decoder"],
    relatedGuides: ["what-is-url-encoding", "url-encoding-vs-decoding", "understanding-url-query-params"],
    whatIs:
      "URL Decoder is a utility that parses percent-encoded (`%XX`) URL strings and translates hexadecimal byte sequences back into readable UTF-8 text.",
    howItWorks:
      "The tool replaces `+` signs with spaces where appropriate and utilizes `decodeURIComponent()` to convert hexadecimal escape sequences into standard UTF-8 characters.",
    useCases: [
      "Reading obscure or obfuscated URL tracking links from emails and advertisements",
      "Debugging query parameters received in server web server access logs",
      "Extracting redirect destinations from complex OAuth authorization links",
    ],
    features: [
      "Converts both `%20` and `+` into readable spaces",
      "Full UTF-8 multibyte character decoding",
      "Instant copy to clipboard",
    ],
    examples: [
      {
        title: "Decoding Percent-Encoded Query",
        input: "https%3A%2F%2Ftoolnest.dev%2Fsearch%3Fq%3Ddeveloper%2Btools",
        output: "https://toolnest.dev/search?q=developer+tools",
        explanation: "Translates `%3A`, `%2F`, `%3F`, and `%3D` back to structural URL punctuation.",
      },
    ],
    privacyNote:
      "Processing executes client-side in browser memory with zero network requests.",
    howToUse: [
      "Paste your percent-encoded URL into the input area.",
      "Click 'Decode URL'.",
      "Copy the decoded text.",
    ],
    faq: [
      {
        question: "Why do some URLs use + instead of %20 for spaces?",
        answer:
          "`%20` is the standard RFC 3986 encoding for a space, while `+` is legacy encoding used in `application/x-www-form-urlencoded` HTML form submissions.",
      },
    ],
  },

  // ─── 11. JWT DECODER ───────────────────────────────
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    title: "JWT Decoder Online — Inspect JSON Web Token Claims & Header",
    description:
      "Decode and inspect JSON Web Tokens (JWT) client-side. View header algorithms, payload claims, expiration timestamps, and active status without transmitting tokens.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "jwt decoder",
      "decode jwt online",
      "json web token viewer",
      "jwt payload inspector",
      "jwt token parser",
    ],
    icon: "🪪",
    relatedTools: ["base64-decoder", "json-formatter", "timestamp-converter"],
    relatedGuides: ["what-is-jwt", "jwt-structure-explained", "hashing-vs-encryption"],
    whatIs:
      "JWT Decoder is an online inspection tool that splits JSON Web Tokens (RFC 7519) into their constituent parts—Header, Payload, and Signature—and decodes the Base64URL-encoded JSON claims for debugging.",
    howItWorks:
      "A standard JWT consists of three dot-separated Base64URL strings (`header.payload.signature`). The decoder splits the token on `.` delimiters, decodes the header and payload using standard Base64URL decoding, parses the JSON structures, and checks the numeric `exp` claim against current epoch time to determine expiration status.",
    useCases: [
      "Inspecting OAuth 2.0 / OpenID Connect access tokens and ID tokens",
      "Checking user roles, tenant IDs, and scopes embedded in authorization headers",
      "Verifying token expiration (`exp`) and issued-at (`iat`) timestamps during authentication debugging",
    ],
    features: [
      "Automatic expiration status checker (Active vs Expired) with human-readable UTC timestamp",
      "Clean syntax-highlighted JSON display of Header and Payload claims",
      "Strips `Bearer ` prefixes automatically",
      "100% private browser execution—tokens are never transmitted over the internet",
    ],
    examples: [
      {
        title: "Inspecting JWT Header and Claims",
        input: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyXzQyIiwibmFtZSI6IkFsZXgiLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE5ODcyMzkwMjJ9.4e9g4yWJm7c8VvW24xYQ3iJ7-4pIe8zR9V1s3yWJm7c",
        output: "Header: { alg: 'HS256', typ: 'JWT' }\nPayload: { sub: 'user_42', name: 'Alex', role: 'admin', exp: 1987239022 }",
        explanation: "Extracts cryptographic algorithm and JSON claims client-side.",
      },
    ],
    securityNotes:
      "CRITICAL: Decoding a JWT only parses its visible payload data; it does NOT verify the cryptographic signature. Never trust the claims in an unverified token on your backend server without validating the cryptographic signature against your HMAC secret or RSA/ECDSA public key.",
    privacyNote:
      "Your authentication tokens and secrets never leave your device. All parsing occurs strictly inside local browser memory.",
    howToUse: [
      "Paste your JWT string (or Authorization: Bearer token) into the input box.",
      "Click 'Decode JWT'.",
      "Review the parsed Header, Payload claims, and Expiration status.",
    ],
    faq: [
      {
        question: "Is it safe to paste production JWTs into this tool?",
        answer:
          "Yes. ToolNest runs 100% client-side in JavaScript with zero network calls or server logging. However, as a general security best practice, never share sensitive tokens on untrusted computers.",
      },
      {
        question: "What is the difference between decoding and verifying a JWT?",
        answer:
          "Decoding simply converts the Base64URL string into readable JSON. Verification checks the signature against a secret or public key to ensure the token has not been tampered with.",
      },
      {
        question: "What does the `exp` claim represent?",
        answer:
          "The `exp` claim specifies the expiration timestamp in Unix epoch seconds. If the current time is greater than `exp`, the token is considered expired.",
      },
    ],
  },

  // ─── 12. HTML ENTITY ENCODER ───────────────────────────────
  {
    slug: "html-encoder",
    name: "HTML Entity Encoder",
    title: "HTML Entity Encoder & Decoder Online — Escape Special Characters",
    description:
      "Encode and decode HTML entities online. Convert &, <, >, \", and ' into named or numeric HTML entities (&amp;, &lt;, &gt;, &quot;) to prevent XSS vulnerabilities.",
    category: "encoding-tools",
    categoryLabel: "Encoding Tools",
    keywords: [
      "html encoder",
      "html entity encoder",
      "escape html online",
      "html entity decoder",
      "xss prevention encoding",
    ],
    icon: "<>",
    relatedTools: ["url-encoder", "json-escape", "base64-encoder"],
    relatedGuides: ["what-is-url-encoding", "json-syntax-explained"],
    whatIs:
      "HTML Entity Encoder converts reserved HTML characters into their corresponding named entity codes (such as `<` to `&lt;` and `&` to `&amp;`) to ensure code snippets display as literal text without being executed by browsers.",
    howItWorks:
      "The tool scans input strings for reserved markup characters and substitutes them with standard W3C HTML named entities or decimal numeric entities.",
    useCases: [
      "Sanitizing raw user inputs before rendering them inside HTML templates to prevent Cross-Site Scripting (XSS)",
      "Displaying source code snippets inside `<pre><code>` blocks on documentation websites",
      "Decoding escaped HTML entity text copied from web pages or CMS databases",
    ],
    features: [
      "Bidirectional: Encode raw markup or Decode HTML entities",
      "Escapes `&`, `<`, `>`, `\"`, and `'`",
      "One-click copy to clipboard",
    ],
    examples: [
      {
        title: "Escaping HTML Tags",
        input: `<div class="alert">Hello & Welcome!</div>`,
        output: `&lt;div class=&quot;alert&quot;&gt;Hello &amp; Welcome!&lt;/div&gt;`,
        explanation: "Replaces `<` with `&lt;`, `>` with `&gt;`, `\"` with `&quot;`, and `&` with `&amp;`.",
      },
    ],
    privacyNote:
      "Processing executes entirely in your browser with zero network requests.",
    howToUse: [
      "Paste your text or HTML snippet into the editor.",
      "Click 'Encode HTML' or 'Decode HTML'.",
      "Copy the converted output.",
    ],
    faq: [
      {
        question: "Why must special characters be encoded in HTML?",
        answer:
          "Characters like `<` and `>` are interpreted by web browsers as HTML tag boundaries. Failing to encode them can corrupt page layout or create Cross-Site Scripting (XSS) security vulnerabilities.",
      },
    ],
  },

  // ─── 13. WORD COUNTER ───────────────────────────────
  {
    slug: "word-counter",
    name: "Word & Character Counter",
    title: "Word Counter Online — Count Words, Characters, Lines & Sentences",
    description:
      "Free online word counter and text statistics analyzer. Calculate word count, character count (with/without spaces), sentences, paragraphs, and reading time in real time.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "word counter",
      "character counter online",
      "count words in text",
      "reading time calculator",
      "text statistics",
    ],
    icon: "📝",
    relatedTools: ["character-counter", "text-case-converter", "duplicate-line-remover"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Word & Character Counter is an online text analysis tool that provides real-time statistical metrics on written content, including word counts, character lengths, sentence density, and estimated reading time.",
    howItWorks:
      "The tool tokenizes text using regular expressions to accurately count words across whitespace boundaries, counts unicode code points for character volume, and estimates reading time based on standard reading speeds (200 words per minute).",
    useCases: [
      "Checking word counts for blog posts, essays, and technical documentation",
      "Measuring character limits for social media posts, meta descriptions, and ad copy",
      "Estimating user reading and speaking times for scripts and presentations",
    ],
    features: [
      "Live metrics updated with zero latency as you type",
      "Calculates words, characters with spaces, characters without spaces, sentences, and paragraphs",
      "Estimated reading time and speaking time calculations",
    ],
    examples: [
      {
        title: "Analyzing Sample Paragraph",
        input: "ToolNest provides fast, free, and privacy-first online developer tools. Everything runs locally in your browser.",
        output: "Words: 16 | Characters: 114 | Sentences: 2 | Reading Time: ~5 sec",
        explanation: "Provides instant quantitative metrics for editorial review.",
      },
    ],
    privacyNote:
      "Your text is processed strictly in your local browser memory. No text is ever uploaded or stored.",
    howToUse: [
      "Type or paste your text into the editor box.",
      "Review the live statistical dashboard above the editor.",
      "Copy or clear your text with one click.",
    ],
    faq: [
      {
        question: "How is reading time calculated?",
        answer:
          "Reading time is calculated based on an average adult reading speed of 200 to 225 words per minute (WPM).",
      },
    ],
  },

  // ─── 14. CHARACTER COUNTER ───────────────────────────────
  {
    slug: "character-counter",
    name: "Character Counter",
    title: "Character Counter Online — Exact Letter & Byte Counter",
    description:
      "Count exact characters, letters, digits, spaces, and byte lengths in real time. Ideal for SEO meta descriptions, social media character limits, and string validation.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "character counter",
      "count characters online",
      "letter counter",
      "length counter",
      "meta description character count",
    ],
    icon: "🔤",
    relatedTools: ["word-counter", "text-case-converter"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Character Counter provides precise letter, digit, whitespace, and byte metrics for any text string to help developers and writers adhere to strict length limits.",
    howItWorks:
      "The tool calculates total Unicode code units, distinguishes alphabetic letters from numbers and symbols, and evaluates UTF-8 byte volume via byte array calculations.",
    useCases: [
      "Optimizing SEO `<title>` (50–60 chars) and `<meta description>` (150–160 chars) lengths",
      "Verifying length constraints for database `VARCHAR` fields and API validation schemas",
      "Monitoring character limits for SMS messages (160 chars) and tweets (280 chars)",
    ],
    features: [
      "Breakdown by Letters, Digits, Spaces, Symbols, and Total Bytes",
      "Real-time reactive counter",
      "Support for multibyte UTF-8 characters and emojis",
    ],
    examples: [
      {
        title: "Checking Meta Description Length",
        input: "Format and pretty-print JSON online with ToolNest. Fast and private.",
        output: "Total Characters: 68 | Letters: 58 | Spaces: 9 | Bytes: 68",
        explanation: "Ensures text stays within optimal search snippet bounds.",
      },
    ],
    privacyNote:
      "All text processing executes locally with zero network requests.",
    howToUse: [
      "Enter your text in the input box.",
      "Read character, space, and byte statistics instantaneously.",
    ],
    faq: [
      {
        question: "Do emojis count as one character or multiple bytes?",
        answer:
          "In standard UTF-8, an emoji typically occupies 1 visible grapheme character but takes 4 bytes of memory.",
      },
    ],
  },

  // ─── 15. TEXT CASE CONVERTER ───────────────────────────────
  {
    slug: "text-case-converter",
    name: "Text Case Converter",
    title: "Text Case Converter Online — camelCase, snake_case, PascalCase & kebab-case",
    description:
      "Convert text between camelCase, PascalCase, snake_case, kebab-case, UPPERCASE, lowercase, and Title Case. Clean and normalize variable names and headlines.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "case converter",
      "camelcase converter",
      "snake case converter",
      "kebab case converter",
      "pascalcase online",
      "title case converter",
    ],
    icon: "Aa",
    relatedTools: ["word-counter", "duplicate-line-remover"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Text Case Converter is a programming and writing utility that transforms string naming conventions between standard developer formats (camelCase, snake_case, kebab-case) and editorial formats (Title Case, UPPERCASE, lowercase).",
    howItWorks:
      "The tool tokenizes words based on whitespace, underscores, hyphens, and uppercase transitions, then reassembles them using the capitalization and delimiter rules of the selected casing format.",
    useCases: [
      "Converting database column names (snake_case) to JavaScript variables (camelCase)",
      "Normalizing CSS class names (kebab-case) to React components (PascalCase)",
      "Formatting article headings into standardized Title Case",
    ],
    features: [
      "Supports 8 casing styles: camelCase, PascalCase, snake_case, kebab_case, CONSTANT_CASE, Title Case, lowercase, UPPERCASE",
      "One-click transform buttons with immediate preview",
      "Preserves numbers and clean word boundaries",
    ],
    examples: [
      {
        title: "Converting Heading to Variable Formats",
        input: "user profile settings",
        output: "camelCase: userProfileSettings | snake_case: user_profile_settings | kebab-case: user-profile-settings",
        explanation: "Transforms raw phrases into standardized programming identifiers.",
      },
    ],
    privacyNote:
      "Conversion executes entirely within your browser memory.",
    howToUse: [
      "Paste your text into the input field.",
      "Click on your desired casing format button.",
      "Copy the converted output with one click.",
    ],
    faq: [
      {
        question: "What is the difference between camelCase and PascalCase?",
        answer:
          "In camelCase, the first word begins with a lowercase letter (`userAccount`), while in PascalCase, every word begins with an uppercase letter (`UserAccount`).",
      },
    ],
  },

  // ─── 16. TEXT DIFF CHECKER ───────────────────────────────
  {
    slug: "text-diff",
    name: "Text Diff Checker",
    title: "Text Diff Checker Online — Compare Text & Find Differences",
    description:
      "Compare two text snippets or code blocks side by side. Highlight additions, deletions, and inline differences with color-coded visual diffing.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "text diff",
      "diff checker online",
      "compare text online",
      "code difference checker",
      "text comparison tool",
    ],
    icon: "↔️",
    relatedTools: ["word-counter", "json-validator", "duplicate-line-remover"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Text Diff Checker is a visual comparison utility that computes differences between two versions of text or code, highlighting inserted, deleted, and modified lines.",
    howItWorks:
      "The tool implements a line-by-line longest common subsequence (LCS) diffing algorithm in client JavaScript, generating structured change operations and rendering side-by-side color-coded blocks.",
    useCases: [
      "Comparing code revisions before committing changes",
      "Verifying changes between two versions of a configuration file or contract",
      "Troubleshooting subtle differences in API responses or database output",
    ],
    features: [
      "Side-by-side and line-by-line visual comparison",
      "Distinct color coding: green for additions, red for deletions",
      "Line numbers for rapid navigation",
      "Mobile-friendly stacked view on small screens",
    ],
    examples: [
      {
        title: "Comparing Config Changes",
        input: "Original: port = 8080\nModified: port = 9000",
        output: "Line 1: - port = 8080 | + port = 9000",
        explanation: "Highlights exact line changes between versions.",
      },
    ],
    privacyNote:
      "Comparisons run 100% locally in your browser. Sensitive code snippets are never transmitted to any server.",
    howToUse: [
      "Paste your original text on the left and modified text on the right.",
      "Click 'Compare Diff'.",
      "Review the visual additions (green) and deletions (red).",
    ],
    faq: [
      {
        question: "Is this diff checker suitable for code and configuration files?",
        answer:
          "Yes. It compares any plain text format, including JavaScript, Python, JSON, YAML, SQL, and markdown.",
      },
    ],
  },

  // ─── 17. DUPLICATE LINE REMOVER ───────────────────────────────
  {
    slug: "duplicate-line-remover",
    name: "Duplicate Line Remover",
    title: "Duplicate Line Remover Online — Deduplicate & Clean Lists",
    description:
      "Remove duplicate lines from text lists, CSV records, and logs. Options for case-sensitive deduplication, sorting alphabetically, and stripping empty lines.",
    category: "text-tools",
    categoryLabel: "Text Tools",
    keywords: [
      "duplicate line remover",
      "remove duplicates online",
      "deduplicate text list",
      "unique lines filter",
      "clean duplicate lines",
    ],
    icon: "📑",
    relatedTools: ["text-case-converter", "word-counter"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Duplicate Line Remover is a data-cleaning utility that filters out repetitive lines from lists, log files, email rosters, and keyword collections.",
    howItWorks:
      "The tool splits input into lines, passes them through a JavaScript `Set` data structure for O(N) deduplication, and optionally trims whitespace, filters empty rows, and sorts the output alphabetically.",
    useCases: [
      "Cleaning email marketing lists and customer rosters",
      "Deduplicating IP addresses, error codes, and query strings from web server logs",
      "Sorting and cleaning SEO keyword lists",
    ],
    features: [
      "Instant count of original vs unique lines remaining",
      "Optional alphabetical A-Z sorting",
      "Case-insensitive matching toggle",
      "Empty line removal option",
    ],
    examples: [
      {
        title: "Deduplicating Email List",
        input: "alex@example.com\nsam@example.com\nalex@example.com\nchris@example.com",
        output: "alex@example.com\nsam@example.com\nchris@example.com (Removed 1 duplicate)",
        explanation: "Extracts unique items while preserving list order.",
      },
    ],
    privacyNote:
      "List deduplication runs 100% locally in browser memory.",
    howToUse: [
      "Paste your multi-line list into the input box.",
      "Configure deduplication options (case sensitivity, sorting).",
      "Click 'Remove Duplicates' and copy your clean list.",
    ],
    faq: [
      {
        question: "Can I keep the original line order?",
        answer:
          "Yes. By default, the tool preserves the original order of the first occurrence of each unique line.",
      },
    ],
  },

  // ─── 18. UUID GENERATOR ───────────────────────────────
  {
    slug: "uuid-generator",
    name: "UUID / GUID Generator",
    title: "UUID Generator Online — Generate Version 4 (v4) UUIDs & GUIDs",
    description:
      "Generate cryptographically secure Version 4 (v4) UUIDs and GUIDs using the browser's Web Crypto API. Batch generate single or bulk unique identifiers.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "uuid generator",
      "guid generator",
      "uuid v4 online",
      "generate random uuid",
      "cryptographic uuid generator",
    ],
    icon: "⚡",
    relatedTools: ["hash-generator", "password-generator", "timestamp-converter"],
    relatedGuides: ["what-is-uuid", "uuid-v4-explained", "what-is-unix-timestamp"],
    whatIs:
      "UUID Generator is an online utility that creates Universally Unique Identifiers (UUID Version 4) according to RFC 4122 specifications, providing 122 bits of cryptographic entropy.",
    howItWorks:
      "The tool uses `crypto.randomUUID()` (or 128-bit `crypto.getRandomValues()` with RFC 4122 variant and version bit-masking) to generate random 36-character hexadecimal identifiers with near-zero collision probability.",
    useCases: [
      "Generating primary keys for distributed databases (PostgreSQL, MongoDB, DynamoDB)",
      "Assigning unique transaction tracking IDs and request IDs in microservices",
      "Creating unique session identifiers and API key tokens",
    ],
    features: [
      "Cryptographically random generation powered by browser Web Crypto API",
      "Batch generation support (1 to 100 UUIDs at once)",
      "Optional uppercase or hyphen-free formatting",
      "One-click copy of individual or bulk UUIDs",
    ],
    examples: [
      {
        title: "Standard RFC 4122 v4 UUID",
        input: "Generate 1 UUID (lowercase with hyphens)",
        output: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        explanation: "Contains version 4 indicator ('4' at digit 13) and RFC 4122 variant bits ('8', '9', 'a', or 'b' at digit 17).",
      },
    ],
    privacyNote:
      "UUIDs are generated entirely in local client memory via the Web Crypto API. No generated UUIDs are stored or transmitted.",
    howToUse: [
      "Select the number of UUIDs you wish to generate.",
      "Choose formatting options (uppercase, remove hyphens).",
      "Click 'Generate UUIDs'.",
      "Copy single UUIDs or the entire batch with one click.",
    ],
    faq: [
      {
        question: "What are the odds of a UUID v4 collision?",
        answer:
          "With 122 bits of random entropy, the probability of generating a duplicate UUID is approximately 1 in 2.71 × 10^18 after creating one billion UUIDs—an astronomically negligible probability.",
      },
      {
        question: "Are UUIDs generated by this tool cryptographically secure?",
        answer:
          "Yes. Generation is backed by the browser's hardware-seeded Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) via the Web Crypto API.",
      },
    ],
  },

  // ─── 19. HASH GENERATOR ───────────────────────────────
  {
    slug: "hash-generator",
    name: "Cryptographic Hash Generator",
    title: "Hash Generator Online — Compute SHA-256, SHA-512, MD5 & SHA-1",
    description:
      "Compute cryptographic hashes (SHA-256, SHA-512, SHA-384, SHA-1, MD5) in real time using the native Web Crypto API. 100% private client-side execution.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "hash generator",
      "sha256 generator online",
      "sha512 online",
      "md5 generator",
      "cryptographic hash calculator",
      "sha1 hash",
    ],
    icon: "#",
    relatedTools: ["uuid-generator", "password-generator", "base64-encoder"],
    relatedGuides: ["hashing-vs-encryption", "base64-vs-encryption", "what-is-jwt"],
    whatIs:
      "Cryptographic Hash Generator calculates one-way cryptographic message digests (SHA-256, SHA-512, SHA-384, SHA-1, MD5) for any text string in real time.",
    howItWorks:
      "The tool uses the browser's native `crypto.subtle.digest()` Web Crypto API to compute SHA family hashes directly in hardware-accelerated CPU instructions, and a client-side algorithm for MD5.",
    useCases: [
      "Verifying file and message data integrity against published checksums",
      "Generating digest values for password verification architectures",
      "Creating deterministic cache keys and hash map identifiers",
    ],
    features: [
      "Simultaneous calculation of SHA-256, SHA-512, SHA-384, SHA-1, and MD5",
      "Hardware-accelerated execution via Web Crypto `SubtleCrypto`",
      "Zero network transmission—sensitive strings and passwords never leave your device",
      "One-click copy for each calculated hash",
    ],
    examples: [
      {
        title: "Calculating SHA-256 Hash",
        input: "Hello, ToolNest!",
        output: "SHA-256: 4e9a65f95b54d35c249a5b3a362bf21e784534ef03d42bc9a9bb5f76b509ef48",
        explanation: "Generates a fixed 256-bit (64 hex character) irreversible digest.",
      },
    ],
    securityNotes:
      "Hashing is NOT encryption. Cryptographic hashes are one-way mathematical functions and cannot be decrypted back into plaintext. Note that MD5 and SHA-1 are cryptographically broken and should not be used for security-critical authentication.",
    privacyNote:
      "Hashes are computed 100% client-side in browser memory. Your input string is never sent over any network.",
    howToUse: [
      "Type or paste your text into the input box.",
      "Review the calculated SHA-256, SHA-512, and MD5 digests generated in real time.",
      "Click the copy button next to the desired hash.",
    ],
    faq: [
      {
        question: "Can a SHA-256 hash be reversed to recover the original string?",
        answer:
          "No. Cryptographic hashes are mathematically irreversible one-way functions. Plaintext cannot be computed from the hash.",
      },
      {
        question: "Why are MD5 and SHA-1 discouraged for security?",
        answer:
          "MD5 and SHA-1 suffer from known collision vulnerabilities, meaning attackers can generate different inputs that produce identical hashes. Use SHA-256 or SHA-512 for security applications.",
      },
    ],
  },

  // ─── 20. PASSWORD GENERATOR ───────────────────────────────
  {
    slug: "password-generator",
    name: "Secure Password Generator",
    title: "Secure Password Generator Online — Cryptographically Strong Passwords",
    description:
      "Generate random, cryptographically strong passwords using browser CSPRNG (Web Crypto API). Configure length, numbers, symbols, and view entropy strength.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "password generator",
      "secure password generator online",
      "random password creator",
      "strong password generator",
      "csprng password generator",
    ],
    icon: "🔑",
    relatedTools: ["hash-generator", "uuid-generator"],
    relatedGuides: ["hashing-vs-encryption"],
    whatIs:
      "Secure Password Generator creates high-entropy random passwords using the browser's hardware-backed Cryptographically Secure Pseudo-Random Number Generator (Web Crypto API).",
    howItWorks:
      "The generator samples uniformly across chosen character sets (uppercase, lowercase, digits, symbols) using `crypto.getRandomValues()` with unbiased rejection sampling. It calculates entropy in bits using Shannon information theory (`bits = length * log2(charset_size)`).",
    useCases: [
      "Generating strong master passwords for password managers (1Password, Bitwarden, KeePass)",
      "Creating random API secret keys and database administrator passwords",
      "Generating temporary one-time passwords (OTPs) and setup credentials",
    ],
    features: [
      "Cryptographically secure: 100% powered by Web Crypto CSPRNG with rejection sampling",
      "Customizable length (8 to 64 characters) and character filters",
      "Option to exclude ambiguous characters (`1`, `l`, `I`, `0`, `O`)",
      "Live entropy (bits) calculation and visual strength indicator",
      "Zero server interaction or storage",
    ],
    examples: [
      {
        title: "16-Character Strong Password",
        input: "Length: 16 | Upper, Lower, Numbers, Symbols",
        output: "k9#mP$2vL!8xQ@5w (Entropy: ~105 bits | Very Strong)",
        explanation: "Provides over 100 bits of entropy, mathematically impervious to brute-force cracking.",
      },
    ],
    securityNotes:
      "Generated passwords exist only in your browser's temporary memory. Store your generated credentials securely in a dedicated password manager.",
    privacyNote:
      "Passwords are created locally via `crypto.getRandomValues()`. Zero network requests are made.",
    howToUse: [
      "Adjust the password length slider (recommended: 16+ characters).",
      "Select desired character types (uppercase, lowercase, numbers, symbols).",
      "Click 'Generate New Password' or copy the generated password immediately.",
    ],
    faq: [
      {
        question: "How does this tool guarantee true randomness?",
        answer:
          "Instead of predictable pseudo-random functions like `Math.random()`, this tool exclusively uses the browser's native `crypto.getRandomValues()` API, which draws entropy directly from underlying operating system hardware noise.",
      },
      {
        question: "What is considered a strong password entropy?",
        answer:
          "Passwords with 60–80 bits of entropy are considered strong, while passwords with 80+ bits are considered very strong and computationally infeasible to brute-force.",
      },
    ],
  },

  // ─── 21. QR CODE GENERATOR ───────────────────────────────
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    title: "QR Code Generator Online — Create Custom QR Codes for URLs & Text",
    description:
      "Generate custom QR codes online for URLs, text, Wi-Fi networks, and contact info. Download high-resolution PNG QR codes instantly with zero tracking.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "qr code generator",
      "create qr code online",
      "url to qr code",
      "free qr generator",
      "download qr code png",
    ],
    icon: "📱",
    relatedTools: ["url-encoder", "url-parser"],
    relatedGuides: ["what-is-url-encoding"],
    whatIs:
      "QR Code Generator is an online utility that converts text, URLs, and contact strings into standardized two-dimensional Quick Response (QR) matrix barcodes.",
    howItWorks:
      "The tool encodes input data into binary Reed-Solomon error correction blocks and draws the resulting pixel grid directly onto an HTML5 `<canvas>` element in client memory.",
    useCases: [
      "Generating printable QR codes for website links, menus, and marketing collateral",
      "Sharing Wi-Fi network credentials and mobile app download links",
      "Testing mobile barcode scanning workflows during web development",
    ],
    features: [
      "High-resolution PNG download with one click",
      "Real-time visual preview as you type",
      "Configurable pixel sizes and high error correction levels",
      "Zero tracking or redirect intermediaries",
    ],
    examples: [
      {
        title: "Generating Website Link QR Code",
        input: "https://toolnest.dev",
        output: "Rendered 256x256 pixel QR barcode canvas",
        explanation: "Generates direct, clean QR code linking directly to destination URL.",
      },
    ],
    privacyNote:
      "QR codes are generated locally on an HTML5 canvas. Your destination URLs are never logged.",
    howToUse: [
      "Enter your target URL or text into the input field.",
      "Adjust size options if desired.",
      "Click 'Download PNG' to save the generated QR code image.",
    ],
    faq: [
      {
        question: "Do these QR codes expire?",
        answer:
          "No. These are static QR codes that encode your text directly into the barcode pattern. They never expire and contain no third-party redirect links.",
      },
    ],
  },

  // ─── 22. TIMESTAMP CONVERTER ───────────────────────────────
  {
    slug: "timestamp-converter",
    name: "Unix Timestamp Converter",
    title: "Unix Timestamp Converter Online — Epoch to Human Date & Time",
    description:
      "Convert Unix epoch timestamps (seconds and milliseconds) to human-readable UTC and local date formats, or convert dates into Unix epoch seconds.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "unix timestamp converter",
      "epoch converter online",
      "timestamp to date",
      "date to epoch",
      "unix time converter",
    ],
    icon: "⏱️",
    relatedTools: ["uuid-generator", "jwt-decoder"],
    relatedGuides: ["what-is-unix-timestamp", "what-is-uuid"],
    whatIs:
      "Unix Timestamp Converter translates between Unix epoch time (the number of seconds elapsed since 00:00:00 UTC on January 1, 1970) and standardized human-readable date strings (ISO 8601, UTC, and local time).",
    howItWorks:
      "The tool uses JavaScript's `Date` object and UTC getters to convert integer epoch seconds or milliseconds into formatted calendar dates, RFC 2822 strings, and ISO 8601 timestamps, or parses date inputs back into numeric epoch integers.",
    useCases: [
      "Debugging database timestamps and API expiration values (e.g. `exp` in JWTs)",
      "Analyzing server access logs and telemetry data recorded in epoch seconds",
      "Converting scheduled job cron times and distributed event timestamps",
    ],
    features: [
      "Real-time live current Unix epoch clock",
      "Bidirectional: Timestamp to Date AND Date to Timestamp",
      "Supports both 10-digit seconds and 13-digit milliseconds",
      "Shows UTC, ISO 8601, and Local Timezone breakdowns",
    ],
    examples: [
      {
        title: "Converting Epoch Seconds to UTC Date",
        input: "1700000000",
        output: "UTC: Wed, 15 Nov 2023 22:13:20 GMT | ISO: 2023-11-15T22:13:20.000Z",
        explanation: "Converts 10-digit Unix timestamp to international calendar formats.",
      },
    ],
    privacyNote:
      "All date conversions are executed in local browser memory.",
    howToUse: [
      "Paste an epoch timestamp or select a calendar date.",
      "Click 'Convert'.",
      "View the corresponding UTC, ISO 8601, and local date equivalents.",
    ],
    faq: [
      {
        question: "What is the Year 2038 problem?",
        answer:
          "Systems storing Unix time as signed 32-bit integers will overflow on January 19, 2038. Modern 64-bit systems and JavaScript numbers prevent this overflow for billions of years.",
      },
    ],
  },

  // ─── 23. LOREM IPSUM GENERATOR ───────────────────────────────
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Placeholder Generator",
    title: "Lorem Ipsum Generator Online — Dummy Placeholder Text",
    description:
      "Generate custom Lorem Ipsum dummy text for design mockups, wireframes, and website prototypes. Generate paragraphs, sentences, or word counts instantly.",
    category: "generators",
    categoryLabel: "Generators",
    keywords: [
      "lorem ipsum generator",
      "dummy text generator",
      "placeholder text generator",
      "lorem ipsum online",
    ],
    icon: "📄",
    relatedTools: ["word-counter", "character-counter"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Lorem Ipsum Generator creates standard pseudo-Latin placeholder text used by graphic designers, web developers, and typesetters to mock up visual layouts before actual copy is ready.",
    howItWorks:
      "The tool algorithmically constructs grammatically balanced sentences and paragraphs from classical passages of Cicero's 'De Finibus Bonorum et Malorum'.",
    useCases: [
      "Filling layout mockups in Figma, Sketch, or HTML templates with realistic placeholder text",
      "Testing typography, font hierarchy, and responsive text wrapping",
      "Benchmarking database text fields and search index throughput",
    ],
    features: [
      "Generate by paragraphs, sentences, or word counts",
      "Option to start with traditional 'Lorem ipsum dolor sit amet...'",
      "Fast one-click copy to clipboard",
    ],
    examples: [
      {
        title: "1-Paragraph Dummy Text",
        input: "Paragraphs: 1 | Start with 'Lorem ipsum'",
        output: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        explanation: "Generates natural text blocks for layout prototyping.",
      },
    ],
    privacyNote:
      "Text generation executes entirely client-side.",
    howToUse: [
      "Select whether to generate paragraphs, sentences, or words.",
      "Specify the desired count.",
      "Click 'Generate' and copy the placeholder text.",
    ],
    faq: [
      {
        question: "Where does Lorem Ipsum originate?",
        answer:
          "Lorem Ipsum originates from a 1st-century BC Latin treatise on ethics written by Cicero, popularized by 16th-century printers as standard filler text.",
      },
    ],
  },

  // ─── 24. SQL FORMATTER ───────────────────────────────
  {
    slug: "sql-formatter",
    name: "SQL Formatter & Beautifier",
    title: "SQL Formatter Online — Beautify & Indent SQL Queries",
    description:
      "Beautify, format, and indent SQL queries online. Standardize SELECT, INSERT, UPDATE, JOINs, and subqueries with clean uppercase keywords and indentation.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "sql formatter",
      "format sql online",
      "sql beautifier",
      "indent sql query",
      "clean sql queries",
    ],
    icon: "🗄️",
    relatedTools: ["xml-formatter", "json-formatter", "json-to-csv"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "SQL Formatter is a developer tool that turns unformatted, single-line SQL queries into clean, structured statements with uppercase keywords, indentation, and aligned clauses.",
    howItWorks:
      "The tool tokenizes SQL statements, uppercase-normalizes reserved keywords (`SELECT`, `FROM`, `WHERE`, `JOIN`, `GROUP BY`, `ORDER BY`), and applies hierarchical indentation for subqueries and conditional clauses.",
    useCases: [
      "Beautifying complex raw SQL queries copied from ORM logs (Prisma, Hibernate, Dapper)",
      "Formatting database migration scripts and stored procedures for code reviews",
      "Troubleshooting nested JOINs and subquery logic in analytical SQL queries",
    ],
    features: [
      "Uppercase standard keywords automatically",
      "Indents nested subqueries and JOIN conditions",
      "Compatible with PostgreSQL, MySQL, SQLite, Oracle, and SQL Server syntax",
      "One-click copy to clipboard",
    ],
    examples: [
      {
        title: "Formatting Unformatted SELECT Query",
        input: "select u.id, u.name, count(o.id) as orders from users u left join orders o on u.id = o.user_id where u.active = 1 group by u.id order by orders desc",
        output: "SELECT\n  u.id,\n  u.name,\n  COUNT(o.id) AS orders\nFROM\n  users u\n  LEFT JOIN orders o ON u.id = o.user_id\nWHERE\n  u.active = 1\nGROUP BY\n  u.id\nORDER BY\n  orders DESC;",
        explanation: "Formats clauses onto dedicated lines with 2-space indentation.",
      },
    ],
    limitations:
      "Formatting is designed for standard ANSI SQL and common relational dialects. Proprietary procedural language extensions (PL/pgSQL, T-SQL control flow) are formatted as best-effort text.",
    privacyNote:
      "Your database queries and schema definitions run 100% locally in your browser. No queries are transmitted to our servers.",
    howToUse: [
      "Paste your raw SQL query into the editor.",
      "Click 'Format SQL'.",
      "Copy the beautified SQL query.",
    ],
    faq: [
      {
        question: "Does this formatter execute or test my query against a database?",
        answer:
          "No. The formatter only reorganizes whitespace and capitalizes keywords in client memory. It never connects to any database.",
      },
    ],
  },

  // ─── 25. XML FORMATTER ───────────────────────────────
  {
    slug: "xml-formatter",
    name: "XML Formatter & Beautifier",
    title: "XML Formatter Online — Beautify, Indent & Minify XML",
    description:
      "Format, pretty-print, and indent XML documents online. Check tag nesting, clean whitespace, and beautify RSS feeds, SOAP payloads, and SVG files.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "xml formatter",
      "format xml online",
      "xml beautifier",
      "pretty print xml",
      "indent xml",
    ],
    icon: "📰",
    relatedTools: ["yaml-formatter", "json-formatter", "sql-formatter"],
    relatedGuides: ["json-vs-xml", "what-is-json"],
    whatIs:
      "XML Formatter is a developer utility that converts dense or unformatted XML strings into cleanly indented hierarchical documents, highlighting opening and closing tags.",
    howItWorks:
      "The tool parses the XML string using the browser's native `DOMParser`, validates tag balance, and serializes the DOM nodes back into formatted text with configured indentation levels.",
    useCases: [
      "Beautifying SOAP API request and response payloads",
      "Formatting RSS/Atom XML feeds and sitemap files",
      "Inspecting complex SVG markup and Android resource files",
    ],
    features: [
      "Configurable 2-space, 4-space, or tab indentation",
      "Detects unclosed tags and XML syntax errors",
      "One-click copy and file download",
    ],
    examples: [
      {
        title: "Formatting Single-line XML",
        input: `<catalog><book id="1"><title>Clean Code</title><author>Robert Martin</author></book></catalog>`,
        output: `<catalog>\n  <book id="1">\n    <title>Clean Code</title>\n    <author>Robert Martin</author>\n  </book>\n</catalog>`,
        explanation: "Adds structured nesting and line breaks for tags.",
      },
    ],
    privacyNote:
      "XML parsing occurs strictly in your browser via DOMParser with zero network requests.",
    howToUse: [
      "Paste your XML string into the editor.",
      "Click 'Format XML'.",
      "Copy or download the beautified XML document.",
    ],
    faq: [
      {
        question: "Can this tool format SVG or RSS feeds?",
        answer:
          "Yes. SVG, RSS, Atom, and SOAP are all valid XML formats and can be beautified with this tool.",
      },
    ],
  },

  // ─── 26. YAML FORMATTER ───────────────────────────────
  {
    slug: "yaml-formatter",
    name: "YAML Formatter & Validator",
    title: "YAML Formatter Online — Format, Validate & Clean YAML",
    description:
      "Format, clean, and validate YAML configurations online. Standardize indentation for Docker Compose, Kubernetes manifests, and GitHub Actions workflows.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "yaml formatter",
      "format yaml online",
      "yaml validator",
      "yaml beautifier",
      "clean docker compose yaml",
    ],
    icon: "📄",
    relatedTools: ["xml-formatter", "json-formatter"],
    relatedGuides: ["what-is-json", "json-vs-xml"],
    whatIs:
      "YAML Formatter is a developer utility that normalizes indentation and verifies structure in YAML (YAML Ain't Markup Language) documents commonly used for application configuration.",
    howItWorks:
      "The tool analyzes line indentations, colon key-value separators, list hyphens, and block scalars, ensuring consistent spacing rules required by YAML specification parsers.",
    useCases: [
      "Fixing indentation errors in `docker-compose.yml` and Kubernetes manifests",
      "Validating GitHub Actions workflow configuration files (`.github/workflows/*.yml`)",
      "Formatting Ansible playbooks and OpenAPI / Swagger specifications",
    ],
    features: [
      "Identifies invalid tabs (YAML strictly requires space indentation)",
      "Standardizes 2-space indentation hierarchy",
      "One-click copy to clipboard",
    ],
    examples: [
      {
        title: "Normalizing Docker Compose YAML",
        input: `version: '3'\nservices:\n  web:\n    image: nginx\n    ports:\n      - "80:80"`,
        output: `version: "3"\nservices:\n  web:\n    image: nginx\n    ports:\n      - "80:80"`,
        explanation: "Standardizes YAML hierarchy and quotes.",
      },
    ],
    limitations:
      "YAML relies strictly on spaces for indentation; tabs are forbidden by the YAML specification and will trigger a warning.",
    privacyNote:
      "All YAML processing is executed in local browser memory.",
    howToUse: [
      "Paste your YAML content into the input editor.",
      "Click 'Format YAML'.",
      "Copy the cleaned configuration.",
    ],
    faq: [
      {
        question: "Why does YAML forbid tab characters?",
        answer:
          "The YAML specification forbids tab characters for indentation because different editors display tabs with varying column widths, leading to ambiguous document hierarchies.",
      },
    ],
  },

  // ─── 27. REGEX TESTER ───────────────────────────────
  {
    slug: "regex-tester",
    name: "RegEx Tester & Debugger",
    title: "RegEx Tester Online — Test Regular Expressions in Real Time",
    description:
      "Test and debug regular expressions online in real time. Highlight match groups, test flags (g, i, m, s), and validate regex patterns with JavaScript engine accuracy.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "regex tester",
      "test regex online",
      "regular expression tester",
      "javascript regex debugger",
      "regex match highlighter",
    ],
    icon: ".*",
    relatedTools: ["text-diff", "word-counter", "url-parser"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "RegEx Tester is an interactive developer tool that tests regular expression patterns against test strings, displaying match indexes, capture groups, and flag combinations.",
    howItWorks:
      "The tool compiles your pattern and flags using the browser's native JavaScript `RegExp` engine, executing `RegExp.exec()` in a loop to extract matches and capture groups with exact string offsets.",
    useCases: [
      "Prototyping data validation patterns (emails, phone numbers, UUIDs, postal codes)",
      "Testing capture groups for log parsing and text extraction scripts",
      "Debugging regex flags such as global (`g`), case-insensitive (`i`), and multiline (`m`)",
    ],
    features: [
      "Real-time match highlights with match count badges",
      "Support for standard JS flags: `g` (global), `i` (ignore case), `m` (multiline), `s` (dotAll)",
      "Detailed capture group inspection table",
      "Syntax error detection for invalid regex tokens",
    ],
    examples: [
      {
        title: "Matching Email Addresses",
        input: "Pattern: [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}\nTest String: Contact us at support@toolnest.dev for help.",
        output: "Match 1: support@toolnest.dev (Index: 14 to 34)",
        explanation: "Captures valid RFC 5322 email patterns.",
      },
    ],
    limitations:
      "Runs using the browser's native JavaScript ECMAScript RegEx flavor. Advanced features unique to PCRE or Python (such as atomic groups or possessive quantifiers) are not supported by standard JavaScript engines.",
    privacyNote:
      "Patterns and test strings remain 100% client-side.",
    howToUse: [
      "Enter your regular expression pattern and select active flags.",
      "Paste your test text into the test area.",
      "Review highlighted matches and capture groups in real time.",
    ],
    faq: [
      {
        question: "Which regular expression flavor does this tool use?",
        answer:
          "This tool uses the standard ECMAScript (JavaScript) regular expression engine built into modern web browsers.",
      },
    ],
  },

  // ─── 28. COLOR CONVERTER ───────────────────────────────
  {
    slug: "color-converter",
    name: "Color Code Converter",
    title: "Color Code Converter Online — HEX to RGB, HSL, HSV & CMYK",
    description:
      "Convert color codes instantly between HEX, RGB, HSL, HSV, and CMYK. Preview color palettes, copy CSS color values, and adjust alpha transparency.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "color converter",
      "hex to rgb",
      "rgb to hex online",
      "hex to hsl",
      "css color converter",
      "color code picker",
    ],
    icon: "🎨",
    relatedTools: ["url-parser", "html-encoder"],
    relatedGuides: ["what-is-json"],
    whatIs:
      "Color Code Converter is a web design utility that translates color representations between common digital formats including HEX, RGB, HSL, HSV, and CMYK.",
    howItWorks:
      "The tool mathematically converts values across standard color spaces, transforming hexadecimal RGB bytes into angular HSL/HSV representations and subtractive CMYK percentage models.",
    useCases: [
      "Converting design mockup HEX codes into CSS `rgba()` or `hsl()` variables",
      "Translating digital screen RGB values into print CMYK models",
      "Generating alpha-transparent CSS color rules",
    ],
    features: [
      "Live visual color swatch preview and color picker input",
      "Simultaneous conversion to HEX, RGB, RGBA, HSL, HSLA, HSV, and CMYK",
      "One-click copy for all CSS color strings",
    ],
    examples: [
      {
        title: "Converting Brand Purple HEX",
        input: "#6366f1",
        output: "RGB: rgb(99, 102, 241) | HSL: hsl(239, 84%, 67%) | CMYK: 59%, 58%, 0%, 5%",
        explanation: "Calculates equivalent coordinates across all digital color spaces.",
      },
    ],
    privacyNote:
      "All color conversions occur in your local browser sandbox.",
    howToUse: [
      "Enter a HEX, RGB, or HSL color value, or select a color using the color picker.",
      "Copy your desired CSS color format with one click.",
    ],
    faq: [
      {
        question: "Why use HSL over HEX or RGB in modern CSS?",
        answer:
          "HSL (Hue, Saturation, Lightness) makes it much easier for developers to programmatically create color shades, hover states, and dark mode variations by adjusting only the lightness parameter.",
      },
    ],
  },

  // ─── 29. URL PARSER ───────────────────────────────
  {
    slug: "url-parser",
    name: "URL & Query String Parser",
    title: "URL Parser Online — Parse URLs, Hostnames, Paths & Query Params",
    description:
      "Parse and break down URLs into protocol, hostname, port, path, query parameters, and hash fragments. Inspect and debug URL query string keys and values.",
    category: "web-tools",
    categoryLabel: "Web & Dev Tools",
    keywords: [
      "url parser",
      "parse url online",
      "query string parser",
      "url breakdown tool",
      "url component inspector",
    ],
    icon: "🌐",
    relatedTools: ["url-encoder", "url-decoder", "jwt-decoder"],
    relatedGuides: ["understanding-url-query-params", "what-is-url-encoding", "url-encoding-vs-decoding"],
    whatIs:
      "URL & Query String Parser decomposes complex URLs into structured components—Protocol, Subdomain, Domain, Port, Path, Query Parameters, and Hash Fragment—according to the WHATWG URL Standard.",
    howItWorks:
      "The tool initializes a native browser `URL` object to extract standardized components and iterates through `URLSearchParams` to format all query parameters into an organized key-value inspection table.",
    useCases: [
      "Inspecting deep links, OAuth redirect URLs, and campaign UTM tracking tags",
      "Debugging URL routing patterns in frontend single-page apps and backend APIs",
      "Extracting and verifying query parameters from web analytics log URLs",
    ],
    features: [
      "Visual breakdown of Protocol, Hostname, Pathname, Port, and Hash",
      "Organized Key-Value table of all query parameters with percent-decoding",
      "One-click copy of individual components",
    ],
    examples: [
      {
        title: "Parsing Campaign Tracking URL",
        input: "https://toolnest.dev:8080/tools/json-formatter/?utm_source=github&utm_medium=readme#features",
        output: "Host: toolnest.dev | Port: 8080 | Path: /tools/json-formatter/ | Params: { utm_source: 'github', utm_medium: 'readme' } | Hash: #features",
        explanation: "Separates protocol, host, port, path, parameters, and fragment.",
      },
    ],
    privacyNote:
      "URLs and parameters are parsed client-side using standard Web APIs. No URLs are logged or transmitted.",
    howToUse: [
      "Paste any valid URL into the input field.",
      "Review the parsed component cards and query parameter table.",
      "Copy any component value with one click.",
    ],
    faq: [
      {
        question: "What is the difference between hostname and host?",
        answer:
          "The `hostname` contains only the domain name (e.g. `toolnest.dev`), while `host` includes the port number if a custom port is specified (e.g. `toolnest.dev:8080`).",
      },
    ],
  },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): ToolDefinition[] {
  return tools.filter((t) => t.category === category);
}

export function getAllSlugs(): { category: string; tool: string }[] {
  return tools.map((t) => ({
    category: t.category,
    tool: t.slug,
  }));
}
