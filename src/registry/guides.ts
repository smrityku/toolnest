import type { GuideDefinition } from "@/types/tool";

export const guides: GuideDefinition[] = [
  // ─── 1. WHAT IS JSON? ───────────────────────────────
  {
    slug: "what-is-json",
    title: "What Is JSON? The Complete Guide to JavaScript Object Notation",
    description:
      "A comprehensive guide to JSON (JavaScript Object Notation). Learn JSON syntax, data types, objects, arrays, practical API examples, and standard serialization practices.",
    category: "json",
    categoryLabel: "JSON Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "6 min read",
    keywords: [
      "what is json",
      "json tutorial",
      "json data types",
      "javascript object notation",
      "json syntax rules",
      "json api format",
    ],
    relatedTools: ["json-formatter", "json-validator", "json-minifier"],
    relatedGuides: ["json-syntax-explained", "how-to-validate-json", "json-objects-vs-arrays"],
    summary:
      "JSON (JavaScript Object Notation) is the ubiquitous data interchange format powering modern web APIs, configuration files, and distributed microservices.",
    faq: [
      {
        question: "Is JSON dependent on JavaScript?",
        answer:
          "No. Despite its name and heritage in JavaScript, JSON is completely language-agnostic. Native or third-party parsers exist for virtually every programming language, including Python, Go, Rust, Java, and C#.",
      },
      {
        question: "What is the official MIME type for JSON?",
        answer:
          "The official MIME media type registered with IANA is `application/json` (RFC 8259).",
      },
      {
        question: "Can JSON store functions or binary data?",
        answer:
          "No. JSON strictly stores text-based data primitives (strings, numbers, booleans, null, arrays, objects). Binary data must be encoded (e.g. as Base64 strings) before placing it in JSON.",
      },
    ],
    contentHtml: `
<h2>Introduction to JSON</h2>
<p>
  <strong>JSON (JavaScript Object Notation)</strong> is a lightweight, text-based, language-independent data interchange format standardized under <strong>RFC 8259</strong> and <strong>ECMA-404</strong>. Originally popularized in the early 2000s as a simpler alternative to XML, JSON has become the universal standard for web API payloads, microservice messaging, and application configuration.
</p>

<h2>Core JSON Data Types</h2>
<p>JSON supports six fundamental data types:</p>
<ul>
  <li><strong>String:</strong> A sequence of Unicode characters wrapped in double quotes (e.g. <code>"ToolNest"</code>).</li>
  <li><strong>Number:</strong> Double-precision floating-point numbers, including integers and decimals (e.g. <code>42</code>, <code>3.14159</code>, <code>-10</code>, <code>1.5e3</code>). Octal and hexadecimal literals are forbidden.</li>
  <li><strong>Boolean:</strong> Literal <code>true</code> or <code>false</code> (case-sensitive, lowercase only).</li>
  <li><strong>Null:</strong> Literal <code>null</code> representing an empty or non-existent value.</li>
  <li><strong>Object:</strong> An unordered collection of zero or more key/value pairs enclosed in curly braces <code>{}</code>. Keys must be strings wrapped in double quotes.</li>
  <li><strong>Array:</strong> An ordered sequence of zero or more values enclosed in square brackets <code>[]</code>.</li>
</ul>

<h2>Valid JSON Structure Example</h2>
<p>Here is an example representing a user profile and application settings:</p>
<pre><code>{
  "userId": 10482,
  "username": "sarah_dev",
  "email": "sarah@example.com",
  "isActive": true,
  "profile": {
    "title": "Senior Cloud Architect",
    "department": "Engineering"
  },
  "roles": ["admin", "developer", "reviewer"],
  "lastLogin": null
}</code></pre>

<h2>Why JSON Dominates Modern Web APIs</h2>
<p>
  JSON became the default choice for modern web architectures for several decisive reasons:
</p>
<ol>
  <li><strong>Human Readability:</strong> JSON mirrors the key-value map and list structures native to modern programming languages, making payloads straightforward to inspect and debug.</li>
  <li><strong>Native Browser Support:</strong> Web browsers parse and serialize JSON natively at C++ engine speeds using <code>JSON.parse()</code> and <code>JSON.stringify()</code>.</li>
  <li><strong>Compact Overhead:</strong> Unlike XML, JSON does not require verbose closing tags, significantly reducing bandwidth consumption across mobile and IoT networks.</li>
</ol>

<h2>Common Syntax Mistakes to Avoid</h2>
<ul>
  <li><strong>Single Quotes:</strong> Using single quotes like <code>'name': 'value'</code> is invalid in JSON. Double quotes are mandatory.</li>
  <li><strong>Trailing Commas:</strong> Adding a comma after the final item in an object or array (e.g. <code>{"a": 1,}</code>) violates RFC 8259.</li>
  <li><strong>Comments:</strong> Standard JSON does not permit comments (<code>//</code> or <code>/* */</code>).</li>
  <li><strong>Unquoted Keys:</strong> Keys must always be enclosed in double quotes (e.g. <code>"id": 1</code>, not <code>id: 1</code>).</li>
</ul>
    `,
  },

  // ─── 2. JSON SYNTAX EXPLAINED ───────────────────────────────
  {
    slug: "json-syntax-explained",
    title: "JSON Syntax Explained: Grammar, Types & RFC 8259 Rules",
    description:
      "Deep dive into RFC 8259 JSON syntax rules. Learn precise escaping sequences, string encoding, number formatting, and bracket balancing to write valid JSON.",
    category: "json",
    categoryLabel: "JSON Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "7 min read",
    keywords: [
      "json syntax",
      "rfc 8259 rules",
      "json escape characters",
      "json grammar",
      "valid json formatting",
    ],
    relatedTools: ["json-formatter", "json-validator", "json-escape"],
    relatedGuides: ["what-is-json", "common-json-errors", "how-to-validate-json"],
    summary:
      "Explore the strict grammar rules of the RFC 8259 JSON standard, including escape characters, number precision, and token boundaries.",
    faq: [
      {
        question: "How do you escape a double quote inside a JSON string?",
        answer:
          "Use a backslash before the quote: `\\\"`. For example: `{\"quote\": \"He said, \\\"Hello\\\"\"}`.",
      },
      {
        question: "Can JSON numbers have leading zeros?",
        answer:
          "No. Numbers like `05` or `0123` are strictly invalid in JSON. Only a solitary `0` or numbers without leading zeros (e.g. `5`, `123`) are valid.",
      },
    ],
    contentHtml: `
<h2>The RFC 8259 Grammar Specification</h2>
<p>
  The Internet Engineering Task Force (IETF) defines the JSON standard in <strong>RFC 8259</strong>. Unlike flexible scripting languages like JavaScript, JSON is a strict data representation format with deterministic grammar rules.
</p>

<h2>String Escaping Rules</h2>
<p>
  Strings in JSON must be wrapped in double quotes and encoded in UTF-8. Certain characters must be escaped with a preceding backslash (<code>\\</code>):
</p>
<table>
  <thead>
    <tr><th>Character</th><th>Escape Sequence</th><th>Meaning</th></tr>
  </thead>
  <tbody>
    <tr><td><code>"</code></td><td><code>\\"</code></td><td>Quotation mark</td></tr>
    <tr><td><code>\\</code></td><td><code>\\\\</code></td><td>Reverse solidus (Backslash)</td></tr>
    <tr><td><code>/</code></td><td><code>\\/</code></td><td>Solidus (Forward slash - optional)</td></tr>
    <tr><td><code>Backspace</code></td><td><code>\\b</code></td><td>Backspace control code</td></tr>
    <tr><td><code>Form feed</code></td><td><code>\\f</code></td><td>Form feed control code</td></tr>
    <tr><td><code>Newline</code></td><td><code>\\n</code></td><td>Line feed (LF)</td></tr>
    <tr><td><code>Carriage return</code></td><td><code>\\r</code></td><td>Carriage return (CR)</td></tr>
    <tr><td><code>Tab</code></td><td><code>\\t</code></td><td>Horizontal tab</td></tr>
    <tr><td>Unicode</td><td><code>\\uXXXX</code></td><td>4-digit hexadecimal Unicode point</td></tr>
  </tbody>
</table>

<h2>Number Representation Rules</h2>
<p>
  JSON numbers adhere to standard mathematical notations with strict constraints:
</p>
<pre><code>{
  "integer": 42,
  "negative": -100,
  "fraction": 3.14159265,
  "scientific_positive": 1.25e6,
  "scientific_negative": 4.8e-3
}</code></pre>
<p>
  <em>Disallowed:</em> <code>NaN</code>, <code>Infinity</code>, <code>-Infinity</code>, hexadecimal numbers (<code>0xFF</code>), and octal numbers (<code>077</code>) are invalid in JSON.
</p>

<h2>Objects vs. Dictionaries</h2>
<p>
  A JSON object represents a key-value map where each key is a unique string. While the specification allows duplicate keys, RFC 8259 warns that behavior is unpredictable across parsers. Always ensure object keys are distinct:
</p>
<pre><code>// Correct:
{
  "hostname": "api.toolnest.dev",
  "port": 443,
  "tlsEnabled": true
}</code></pre>
    `,
  },

  // ─── 3. HOW TO VALIDATE JSON ───────────────────────────────
  {
    slug: "how-to-validate-json",
    title: "How to Validate JSON: Syntax Checking & Schema Strategies",
    description:
      "Learn how to validate JSON data online, programmatically in JavaScript, Python, and Go, and using JSON Schema ($schema) for robust API contracts.",
    category: "json",
    categoryLabel: "JSON Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "6 min read",
    keywords: [
      "validate json",
      "json schema validation",
      "json linter guide",
      "check valid json",
      "json parse error troubleshooting",
    ],
    relatedTools: ["json-validator", "json-formatter", "text-diff"],
    relatedGuides: ["common-json-errors", "json-syntax-explained"],
    summary:
      "Master JSON validation techniques across client tools, command-line utilities, and programmatic backend parsers.",
    faq: [
      {
        question: "How do I validate JSON in the terminal?",
        answer:
          "You can validate JSON files using `jq`: `jq . config.json` will return exit code 0 if valid or print line-specific syntax errors if invalid.",
      },
    ],
    contentHtml: `
<h2>Why JSON Validation Is Critical</h2>
<p>
  Malformed JSON payloads cause runtime exceptions, broken API integrations, and failed deployments. Validating JSON ensures structural correctness before data enters mission-critical pipelines.
</p>

<h2>Programmatic Validation Examples</h2>
<h3>1. JavaScript / Node.js</h3>
<pre><code>function isValidJson(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    console.error("Syntax Error at:", error.message);
    return false;
  }
}</code></pre>

<h3>2. Python 3</h3>
<pre><code>import json

def validate_payload(raw_text):
    try:
        data = json.loads(raw_text)
        return True, data
    except json.JSONDecodeError as err:
        return False, f"Error on line {err.lineno}, col {err.colno}: {err.msg}"</code></pre>

<h2>Syntax Validation vs. Schema Validation</h2>
<p>
  <strong>Syntax Validation</strong> checks whether the text follows RFC 8259 syntax rules (matching braces, valid quotes, proper commas).
</p>
<p>
  <strong>Schema Validation</strong> (using <em>JSON Schema</em>) checks semantic data types, required fields, minimum/maximum numeric ranges, and regex string patterns:
</p>
<pre><code>{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "userId": { "type": "integer" },
    "email": { "type": "string", "format": "email" }
  },
  "required": ["userId", "email"]
}</code></pre>
    `,
  },

  // ─── 4. HOW TO FORMAT JSON ───────────────────────────────
  {
    slug: "how-to-format-json",
    title: "How to Format & Pretty-Print JSON: Tools & Code Techniques",
    description:
      "Learn how to format and pretty-print JSON online, in VS Code, with CLI tools like jq, and programmatically in Python and JavaScript.",
    category: "json",
    categoryLabel: "JSON Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "5 min read",
    keywords: [
      "how to format json",
      "pretty print json",
      "json stringify indent",
      "format json in python",
      "format json jq",
    ],
    relatedTools: ["json-formatter", "json-minifier"],
    relatedGuides: ["what-is-json", "how-to-minify-json"],
    summary:
      "A practical guide to beautifying JSON for improved readability, code reviews, and debugging.",
    contentHtml: `
<h2>Why Format JSON?</h2>
<p>
  Raw API responses and log streams are typically compressed into dense single-line strings. Formatting adds indentation and line breaks, turning unreadable payloads into structured, reviewable code.
</p>

<h2>Programmatic Pretty-Printing</h2>
<h3>JavaScript (Node.js & Browser)</h3>
<p>Use the third argument of <code>JSON.stringify</code> to specify indentation spacing:</p>
<pre><code>const user = { id: 1, name: "Alice", active: true };

// Format with 2 spaces:
const pretty2 = JSON.stringify(user, null, 2);

// Format with 4 spaces:
const pretty4 = JSON.stringify(user, null, 4);

// Format with tabs:
const prettyTab = JSON.stringify(user, null, "\\t");</code></pre>

<h3>Python</h3>
<p>Pass the <code>indent</code> parameter to <code>json.dumps()</code>:</p>
<pre><code>import json

payload = {"status": "ok", "count": 42}
formatted = json.dumps(payload, indent=2)
print(formatted)</code></pre>

<h3>Command Line (jq)</h3>
<pre><code># Pretty print a file
cat payload.json | jq .

# Pretty print API curl response
curl -s https://api.example.com/data | jq .</code></pre>
    `,
  },

  // ─── 5. HOW TO MINIFY JSON ───────────────────────────────
  {
    slug: "how-to-minify-json",
    title: "How to Minify JSON: Reduce Payload Size for Production APIs",
    description:
      "Learn how to minify JSON strings by removing whitespace, tabs, and newlines. Discover bandwidth savings and programmatic minification techniques.",
    category: "json",
    categoryLabel: "JSON Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "5 min read",
    keywords: [
      "minify json",
      "compress json",
      "json compact string",
      "reduce api payload size",
      "json minify python node",
    ],
    relatedTools: ["json-minifier", "json-formatter"],
    relatedGuides: ["how-to-format-json", "what-is-json"],
    summary:
      "Optimize data payloads and cache storage by minifying JSON documents without losing data fidelity.",
    contentHtml: `
<h2>What Is JSON Minification?</h2>
<p>
  Minification is the process of removing all non-essential whitespace characters (spaces, line feeds, carriage returns, and tabs) from a JSON document. Because whitespace outside of string literals has no semantic meaning in RFC 8259, minification preserves 100% of the data structure while reducing raw byte size.
</p>

<h2>Bandwidth & Performance Impact</h2>
<ul>
  <li><strong>20% to 50% Size Reduction:</strong> Indented JSON files with deep nesting often reduce in size by up to half when minified.</li>
  <li><strong>Lower Memory Consumption:</strong> Minified payloads consume less memory when cached in Redis or passed over WebSocket connections.</li>
  <li><strong>Faster Network Transfer:</strong> Essential for mobile apps operating in low-connectivity environments.</li>
</ul>

<h2>How to Minify Programmatically</h2>
<pre><code>// JavaScript
const minified = JSON.stringify(JSON.parse(rawJson));

# Python
import json
minified = json.dumps(json.loads(raw_json), separators=(',', ':'))</code></pre>
    `,
  },

  // ─── 6. COMMON JSON ERRORS ───────────────────────────────
  {
    slug: "common-json-errors",
    title: "Top 7 Common JSON Syntax Errors & How to Fix Them",
    description:
      "Discover the most frequent JSON syntax errors: trailing commas, single quotes, unescaped newlines, comments, and BigInt precision pitfalls with actionable fixes.",
    category: "json",
    categoryLabel: "JSON Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "7 min read",
    keywords: [
      "json syntax errors",
      "fix json errors",
      "json trailing comma error",
      "unexpected token json",
      "json single quotes invalid",
    ],
    relatedTools: ["json-validator", "json-formatter", "json-escape"],
    relatedGuides: ["json-syntax-explained", "how-to-validate-json"],
    summary:
      "A practical troubleshooting reference for diagnosing and resolving the most common JSON syntax and parsing errors.",
    contentHtml: `
<h2>1. Trailing Commas</h2>
<p>
  <strong>The Error:</strong> Adding a comma after the final property in an object or element in an array.
</p>
<pre><code>// INVALID:
{
  "name": "ToolNest",
  "version": 1.0,
}

// FIXED:
{
  "name": "ToolNest",
  "version": 1.0
}</code></pre>

<h2>2. Single Quotes Instead of Double Quotes</h2>
<p>
  <strong>The Error:</strong> Using single quotes (<code>'</code>) for strings or keys.
</p>
<pre><code>// INVALID:
{'status': 'success'}

// FIXED:
{"status": "success"}</code></pre>

<h2>3. Comments Inside JSON</h2>
<p>
  Standard RFC 8259 JSON does not support comments. If your configuration requires comments, consider JSONC (JSON with Comments) or YAML.
</p>

<h2>4. Unescaped Control Characters</h2>
<p>
  Raw unescaped newline characters inside string literals will break the parser. Always use <code>\\n</code> inside JSON strings.
</p>
    `,
  },

  // ─── 7. JSON OBJECTS VS ARRAYS ───────────────────────────────
  {
    slug: "json-objects-vs-arrays",
    title: "JSON Objects vs. Arrays: Structure, Differences & When to Use",
    description:
      "Learn the core structural differences between JSON Objects ({}) and Arrays ([]). Understand data modeling patterns, lookup complexity, and conversion workflows.",
    category: "json",
    categoryLabel: "JSON Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "6 min read",
    keywords: [
      "json object vs array",
      "json array structure",
      "json key value pairs",
      "json list modeling",
      "convert json array to csv",
    ],
    relatedTools: ["json-formatter", "json-to-csv", "csv-to-json"],
    relatedGuides: ["what-is-json", "json-syntax-explained"],
    summary:
      "Understand when to structure JSON data as key-value objects vs ordered arrays for optimal API performance and schema design.",
    contentHtml: `
<h2>Core Comparison: Objects vs. Arrays</h2>
<table>
  <thead>
    <tr><th>Feature</th><th>JSON Object (<code>{}</code>)</th><th>JSON Array (<code>[]</code>)</th></tr>
  </thead>
  <tbody>
    <tr><td>Structure</td><td>Unordered Key-Value Map</td><td>Ordered Sequence of Values</td></tr>
    <tr><td>Access Method</td><td>Key lookup (e.g. <code>data.username</code>)</td><td>Numeric Index (e.g. <code>items[0]</code>)</td></tr>
    <tr><td>Keys Required?</td><td>Yes (Strings in double quotes)</td><td>No (Values only)</td></tr>
    <tr><td>Typical Use Case</td><td>Entities, configurations, records</td><td>Collections, lists, time-series data</td></tr>
  </tbody>
</table>

<h2>Nesting Arrays Inside Objects</h2>
<pre><code>{
  "company": "ToolNest Utilities",
  "activeServices": ["JSON Formatter", "JWT Decoder", "UUID Generator"],
  "metrics": {
    "uptime": 99.99,
    "latencyMs": 12
  }
}</code></pre>
    `,
  },

  // ─── 8. JSON VS XML ───────────────────────────────
  {
    slug: "json-vs-xml",
    title: "JSON vs. XML: Architectural Comparison for Modern Web APIs",
    description:
      "Comprehensive architectural comparison between JSON and XML. Compare payload size, schema validation (XSD vs JSON Schema), parsing speed, and REST vs SOAP.",
    category: "json",
    categoryLabel: "Data Formats",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "8 min read",
    keywords: [
      "json vs xml",
      "difference between json and xml",
      "rest vs soap data format",
      "xml to json comparison",
    ],
    relatedTools: ["json-formatter", "xml-formatter", "yaml-formatter"],
    relatedGuides: ["what-is-json", "json-syntax-explained"],
    summary:
      "Compare JSON and XML across performance, data models, schema complexity, and modern API protocols.",
    contentHtml: `
<h2>Historical Context: The Shift from XML to JSON</h2>
<p>
  In the early web era (1998–2005), XML (Extensible Markup Language) was the standard format for enterprise messaging and SOAP web services. However, XML's verbose closing tags, complex document object model (DOM), and parsing overhead paved the way for JSON's ascendancy with RESTful APIs.
</p>

<h2>Feature Matrix</h2>
<table>
  <thead>
    <tr><th>Capability</th><th>JSON</th><th>XML</th></tr>
  </thead>
  <tbody>
    <tr><td>Data Types</td><td>Native (Strings, Numbers, Booleans, Null)</td><td>Strings only (requires schema for typing)</td></tr>
    <tr><td>Attributes</td><td>No (Key-Value only)</td><td>Yes (Element attributes supported)</td></tr>
    <tr><td>Payload Overhead</td><td>Minimal (No closing tags)</td><td>Higher (Repeated tag names)</td></tr>
    <tr><td>Parsing Performance</td><td>Extremely Fast (Native C++ engines)</td><td>Moderate to Slow (Complex DOM parsing)</td></tr>
    <tr><td>Schema Support</td><td>JSON Schema</td><td>XSD (XML Schema Definition), DTD</td></tr>
  </tbody>
</table>
    `,
  },

  // ─── 9. WHAT IS BASE64? ───────────────────────────────
  {
    slug: "what-is-base64",
    title: "What Is Base64 Encoding? The Complete Guide to RFC 4648",
    description:
      "Learn what Base64 encoding is, how the 6-bit chunking algorithm works, padding (=) calculation, and practical applications in HTTP headers and Data URIs.",
    category: "encoding",
    categoryLabel: "Encoding Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "7 min read",
    keywords: [
      "what is base64",
      "base64 encoding explained",
      "rfc 4648 base64",
      "base64 padding calculation",
      "base64 data uri tutorial",
    ],
    relatedTools: ["base64-encoder", "base64-decoder", "jwt-decoder"],
    relatedGuides: ["base64-vs-encryption", "when-to-use-base64"],
    summary:
      "Understand the mechanics of Base64 binary-to-text encoding, bit conversion, padding calculations, and real-world web implementations.",
    contentHtml: `
<h2>What Is Base64?</h2>
<p>
  <strong>Base64</strong> is a binary-to-text encoding scheme defined in <strong>RFC 4648</strong>. It converts arbitrary binary data or text into an ASCII string format using a 64-character alphabet:
</p>
<pre><code>Alphabet: A-Z (26), a-z (26), 0-9 (10), + (1), / (1) = 64 characters</code></pre>

<h2>How the 6-Bit Algorithm Works</h2>
<ol>
  <li>The encoder takes 3 bytes of input data (3 × 8 = 24 bits).</li>
  <li>It divides the 24 bits into 4 groups of 6 bits each (4 × 6 = 24 bits).</li>
  <li>Each 6-bit group represents a number from 0 to 63, which maps directly to an ASCII character in the Base64 index table.</li>
</ol>

<h2>Padding (=) Explained</h2>
<p>
  If the input byte count is not evenly divisible by 3, padding characters (<code>=</code>) are appended:
</p>
<ul>
  <li>If 1 byte remains (8 bits): Produces 2 Base64 characters and <code>==</code> padding.</li>
  <li>If 2 bytes remain (16 bits): Produces 3 Base64 characters and <code>=</code> padding.</li>
</ul>
    `,
  },

  // ─── 10. BASE64 VS ENCRYPTION ───────────────────────────────
  {
    slug: "base64-vs-encryption",
    title: "Base64 vs. Encryption vs. Hashing: Key Differences Explained",
    description:
      "Understand why Base64 is NOT encryption. Compare encoding, symmetric/asymmetric encryption (AES, RSA), and one-way cryptographic hashing (SHA-256).",
    category: "encoding",
    categoryLabel: "Cryptography & Security",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "7 min read",
    keywords: [
      "base64 vs encryption",
      "encoding vs encryption vs hashing",
      "is base64 secure",
      "difference between hashing and encoding",
    ],
    relatedTools: ["base64-encoder", "hash-generator", "password-generator"],
    relatedGuides: ["what-is-base64", "hashing-vs-encryption"],
    summary:
      "A vital security breakdown explaining the crucial differences between data encoding, two-way encryption, and one-way hashing.",
    contentHtml: `
<h2>The Three Pillars of Data Transformation</h2>
<table>
  <thead>
    <tr><th>Concept</th><th>Primary Goal</th><th>Reversible?</th><th>Secret Key Required?</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Encoding (Base64)</strong></td><td>Data compatibility across text channels</td><td>Yes (Trivial)</td><td>No (Public algorithm)</td></tr>
    <tr><td><strong>Encryption (AES, RSA)</strong></td><td>Confidentiality & privacy</td><td>Yes (With key)</td><td>Yes (Secret/Private Key)</td></tr>
    <tr><td><strong>Hashing (SHA-256)</strong></td><td>Data integrity & fingerprinting</td><td>No (One-way)</td><td>No (Deterministic digest)</td></tr>
  </tbody>
</table>

<h2>Why Base64 Is Not Secure</h2>
<p>
  Base64 does not protect sensitive data. Any attacker or observer who intercepts a Base64 string can decode it back to plaintext instantaneously without needing a password or cryptographic key. Never store passwords or private secrets using Base64 alone.
</p>
    `,
  },

  // ─── 11. WHEN TO USE BASE64 ───────────────────────────────
  {
    slug: "when-to-use-base64",
    title: "When to Use Base64: Best Practices & Common Use Cases",
    description:
      "Explore real-world use cases for Base64 encoding: HTTP Basic Auth, Data URIs in CSS, email attachments (MIME), and JWT tokens, with performance considerations.",
    category: "encoding",
    categoryLabel: "Encoding Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "6 min read",
    keywords: [
      "when to use base64",
      "base64 data uri css",
      "http basic auth base64",
      "base64 overhead trade-offs",
    ],
    relatedTools: ["base64-encoder", "jwt-decoder"],
    relatedGuides: ["what-is-base64", "what-is-jwt"],
    summary:
      "Discover the optimal scenarios for Base64 encoding alongside practical performance and caching trade-offs.",
    contentHtml: `
<h2>Common Real-World Applications</h2>
<h3>1. Data URIs in CSS and HTML</h3>
<p>
  Small SVG icons, fonts, and 1px placeholder images can be embedded directly into CSS stylesheets or HTML documents to eliminate extra HTTP requests:
</p>
<pre><code>.logo {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci...==");
}</code></pre>

<h3>2. HTTP Basic Authentication</h3>
<p>
  The HTTP Basic Authentication standard (RFC 7617) concatenates <code>username:password</code> and encodes the result in Base64 within the <code>Authorization</code> header:
</p>
<pre><code>Authorization: Basic YWRtaW46c2VjcmV0cGFzc3dvcmQ=</code></pre>

<h3>3. JSON Web Tokens (JWT)</h3>
<p>
  JWTs encode JSON headers and payload claims using Base64URL encoding so that authentication tokens can be passed safely in URL parameters and HTTP headers.
</p>
    `,
  },

  // ─── 12. WHAT IS URL ENCODING? ───────────────────────────────
  {
    slug: "what-is-url-encoding",
    title: "What Is URL Encoding? Percent-Encoding & RFC 3986 Explained",
    description:
      "Learn what URL encoding (percent-encoding) is, why URLs require character escaping, reserved vs unreserved characters, and how query strings are safely transmitted.",
    category: "encoding",
    categoryLabel: "Web Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "7 min read",
    keywords: [
      "what is url encoding",
      "percent encoding explained",
      "rfc 3986 url rules",
      "url reserved characters",
      "url encoding query string",
    ],
    relatedTools: ["url-encoder", "url-decoder", "url-parser"],
    relatedGuides: ["url-encoding-vs-decoding", "understanding-url-query-params"],
    summary:
      "Master the principles of RFC 3986 percent-encoding to ensure URLs and query parameters remain robust and unambiguous.",
    contentHtml: `
<h2>Why Do URLs Require Encoding?</h2>
<p>
  A Uniform Resource Identifier (URI) defined under <strong>RFC 3986</strong> can only contain a limited set of ASCII characters. Characters like spaces, quotation marks, ampersands, and non-ASCII Unicode letters can corrupt URL routing or clash with structural delimiters (like <code>?</code>, <code>&</code>, and <code>/</code>).
</p>

<h2>Reserved vs. Unreserved Characters</h2>
<ul>
  <li><strong>Unreserved Characters (Never Encoded):</strong> <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code>, <code>_</code>, <code>.</code>, <code>~</code></li>
  <li><strong>Reserved Characters (Delimiters):</strong> <code>:</code>, <code>/</code>, <code>?</code>, <code>#</code>, <code>[</code>, <code>]</code>, <code>@</code>, <code>!</code>, <code>$</code>, <code>&</code>, <code>'</code>, <code>(</code>, <code>)</code>, <code>*</code>, <code>+</code>, <code>,</code>, <code>;</code>, <code>=</code></li>
</ul>

<h2>The Percent-Encoding Mechanism</h2>
<p>
  Each forbidden character is converted to its UTF-8 byte representation, followed by a percent sign (<code>%</code>) and the two-digit hexadecimal byte value. For example, a space (ASCII 32, hex 20) becomes <code>%20</code>.
</p>
    `,
  },

  // ─── 13. URL ENCODING VS DECODING ───────────────────────────────
  {
    slug: "url-encoding-vs-decoding",
    title: "URL Encoding vs. Decoding: JavaScript encodeURI vs encodeURIComponent",
    description:
      "Understand the difference between URL encoding and decoding, compare encodeURI vs encodeURIComponent in JavaScript, and avoid double-encoding pitfalls.",
    category: "encoding",
    categoryLabel: "Web Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "6 min read",
    keywords: [
      "url encoding vs decoding",
      "encodeuri vs encodeuricomponent",
      "decodeuricomponent javascript",
      "url double encoding fix",
    ],
    relatedTools: ["url-encoder", "url-decoder", "url-parser"],
    relatedGuides: ["what-is-url-encoding", "understanding-url-query-params"],
    summary:
      "A developer guide to choosing the correct URL encoding functions and avoiding double-encoding errors.",
    contentHtml: `
<h2>encodeURI vs. encodeURIComponent</h2>
<p>
  JavaScript provides two distinct encoding functions with different scopes:
</p>
<ul>
  <li><strong>encodeURI():</strong> Intended for complete URLs. It preserves structural delimiters like <code>http://</code>, <code>/</code>, <code>?</code>, and <code>&</code>.</li>
  <li><strong>encodeURIComponent():</strong> Intended for individual query parameter values. It encodes all delimiters (e.g. <code>&</code> becomes <code>%26</code>, <code>/</code> becomes <code>%2F</code>) so parameter values do not corrupt URL parsing.</li>
</ul>

<h2>Code Example: Proper Parameter Encoding</h2>
<pre><code>const baseUrl = "https://api.toolnest.dev/search";
const query = "developer tools & utilities / 2026";

// INCORRECT (breaks query delimiter):
const badUrl = \`\${baseUrl}?q=\${query}\`;

// CORRECT:
const goodUrl = \`\${baseUrl}?q=\${encodeURIComponent(query)}\`;
// Output: https://api.toolnest.dev/search?q=developer%20tools%20%26%20utilities%20%2F%202026</code></pre>
    `,
  },

  // ─── 14. UNDERSTANDING URL QUERY PARAMS ───────────────────────────────
  {
    slug: "understanding-url-query-params",
    title: "Understanding URL Query Parameters: Structure, Parsing & Security",
    description:
      "Deep dive into URL query strings. Learn parameter syntax, array handling, URLSearchParams API in JavaScript, and security practices against open redirects.",
    category: "web",
    categoryLabel: "Web Standards",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "7 min read",
    keywords: [
      "url query parameters",
      "urlsearchparams javascript",
      "parse query string",
      "utm parameter guide",
      "query parameter security",
    ],
    relatedTools: ["url-parser", "url-encoder", "url-decoder"],
    relatedGuides: ["what-is-url-encoding", "url-encoding-vs-decoding"],
    summary:
      "Master the structure and programmatic manipulation of URL query strings using modern browser APIs.",
    contentHtml: `
<h2>Anatomy of a URL Query String</h2>
<p>
  A query string begins with a question mark (<code>?</code>) and contains key-value pairs joined by ampersands (<code>&</code>):
</p>
<pre><code>https://toolnest.dev/tools/?category=json-tools&sort=popular&page=2</code></pre>

<h2>Modern Parsing with URLSearchParams</h2>
<pre><code>const url = new URL("https://toolnest.dev/search?q=json&page=1");
const params = url.searchParams;

// Read parameters:
console.log(params.get("q")); // "json"

// Set/update parameters:
params.set("page", "2");
params.append("filter", "free");

console.log(url.toString());
// "https://toolnest.dev/search?q=json&page=2&filter=free"</code></pre>
    `,
  },

  // ─── 15. WHAT IS A UUID? ───────────────────────────────
  {
    slug: "what-is-uuid",
    title: "What Is a UUID? Understanding UUID Versions (v1, v4, v5, v7)",
    description:
      "Comprehensive guide to Universally Unique Identifiers (UUID / GUID). Compare UUID v1 (timestamp), v4 (random), v5 (namespace), and v7 (time-ordered).",
    category: "generators",
    categoryLabel: "Architecture & Identifiers",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "8 min read",
    keywords: [
      "what is uuid",
      "uuid versions comparison",
      "uuid v4 vs v7",
      "rfc 4122 uuid guide",
      "guid vs uuid",
    ],
    relatedTools: ["uuid-generator", "timestamp-converter"],
    relatedGuides: ["uuid-v4-explained", "what-is-unix-timestamp"],
    summary:
      "Understand the RFC 4122 standard, 128-bit identifier layouts, and the evolution of UUID versions from v1 to modern v7.",
    contentHtml: `
<h2>What Is a UUID?</h2>
<p>
  A <strong>UUID (Universally Unique Identifier)</strong>—also referred to as a <strong>GUID (Globally Unique Identifier)</strong> in Microsoft ecosystems—is a 128-bit number standardized under <strong>RFC 4122</strong>. UUIDs enable distributed systems to generate unique identifiers independently without central coordination.
</p>

<h2>UUID String Format</h2>
<p>
  A UUID is represented as 32 hexadecimal digits separated by hyphens into five groups:
</p>
<pre><code>xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
Example: f47ac10b-58cc-4372-a567-0e02b2c3d479</code></pre>
<ul>
  <li><code>M</code> (digit 13): Specifies the <strong>UUID Version</strong> (e.g. <code>4</code>).</li>
  <li><code>N</code> (digit 17): Specifies the <strong>RFC 4122 Variant</strong> (<code>8</code>, <code>9</code>, <code>a</code>, or <code>b</code>).</li>
</ul>

<h2>Comparison of UUID Versions</h2>
<ul>
  <li><strong>UUID v1:</strong> Generated from host MAC address and 60-bit timestamp. (Leaks hardware MAC address).</li>
  <li><strong>UUID v4:</strong> Generated purely from 122 bits of cryptographic pseudo-randomness. (Most popular).</li>
  <li><strong>UUID v5:</strong> Generated using SHA-1 hashing over a namespace and name string.</li>
  <li><strong>UUID v7:</strong> Modern standard encoding a Unix timestamp with random bits for optimal B-Tree database indexing.</li>
</ul>
    `,
  },

  // ─── 16. UUID V4 EXPLAINED ───────────────────────────────
  {
    slug: "uuid-v4-explained",
    title: "UUID v4 Explained: Randomness, Collisions & Cryptography",
    description:
      "Explore the mathematics behind UUID Version 4 randomness. Learn why collision odds are negligible (1 in 2.71 quintillion) and how CSPRNG generates secure UUIDs.",
    category: "generators",
    categoryLabel: "Architecture & Identifiers",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "7 min read",
    keywords: [
      "uuid v4 collision probability",
      "how random is uuid v4",
      "uuid v4 entropy",
      "crypto randomuuid web api",
    ],
    relatedTools: ["uuid-generator", "password-generator"],
    relatedGuides: ["what-is-uuid"],
    summary:
      "A deep dive into UUID v4 collision mathematics, entropy calculations, and hardware-seeded Web Crypto implementations.",
    contentHtml: `
<h2>The Mathematics of UUID v4 Entropy</h2>
<p>
  A Version 4 UUID reserves 6 bits for metadata (4 bits for the version and 2 bits for the variant), leaving <strong>122 bits of pure random entropy</strong>. The total number of possible UUID v4 values is:
</p>
<pre><code>2^122 = 5,316,911,983,139,663,491,615,158,242,912,234,496 (~5.3 × 10^36)</code></pre>

<h2>Collision Probability & Birthday Paradox</h2>
<p>
  Even if you generated <strong>1 billion UUIDs per second for 100 years</strong>, the probability of creating a single collision remains less than 50%. In real-world application databases generating millions of records daily, the collision risk is practically zero.
</p>

<h2>Generating UUID v4 in Modern JavaScript</h2>
<pre><code>// Native browser and Node.js 16+
const id = crypto.randomUUID();
console.log(id); // "c9a646d3-9c61-4cd7-893e-8b47f32f3f98"</code></pre>
    `,
  },

  // ─── 17. WHAT IS A UNIX TIMESTAMP? ───────────────────────────────
  {
    slug: "what-is-unix-timestamp",
    title: "What Is a Unix Timestamp? Epoch Time & Year 2038 Problem",
    description:
      "Learn what Unix epoch timestamps are, how seconds/milliseconds are converted to UTC and ISO 8601 dates, and why the Year 2038 32-bit overflow occurs.",
    category: "generators",
    categoryLabel: "Architecture & Time",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "6 min read",
    keywords: [
      "what is unix timestamp",
      "epoch time explained",
      "year 2038 problem",
      "convert timestamp to date javascript",
    ],
    relatedTools: ["timestamp-converter", "jwt-decoder"],
    relatedGuides: ["what-is-uuid"],
    summary:
      "Understand the mechanics of Unix epoch time, timezone synchronization, and 64-bit timestamp architectures.",
    contentHtml: `
<h2>The Unix Epoch Standard</h2>
<p>
  <strong>Unix Time</strong> (POSIX time) is defined as the number of seconds that have elapsed since <strong>00:00:00 UTC on January 1, 1970</strong> (excluding leap seconds). It is the universal standard for timestamping events across operating systems, distributed databases, and network protocols.
</p>

<h2>Seconds vs. Milliseconds</h2>
<ul>
  <li><strong>10-Digit Timestamp:</strong> Represents seconds (e.g. <code>1700000000</code>). Standard in Unix shell, Python, Go, and C.</li>
  <li><strong>13-Digit Timestamp:</strong> Represents milliseconds (e.g. <code>1700000000000</code>). Standard in JavaScript (<code>Date.now()</code>) and Java.</li>
</ul>

<h2>The Year 2038 Problem</h2>
<p>
  Systems storing Unix time as a signed 32-bit integer will overflow when reaching <code>2,147,483,647</code> seconds on <strong>January 19, 2038 at 03:14:07 UTC</strong>, wrapping around to negative numbers (December 13, 1901). Modern 64-bit systems resolve this overflow for hundreds of billions of years.
</p>
    `,
  },

  // ─── 18. WHAT IS A JWT? ───────────────────────────────
  {
    slug: "what-is-jwt",
    title: "What Is a JWT? JSON Web Tokens & Stateless Authentication",
    description:
      "Learn what JSON Web Tokens (JWT / RFC 7519) are. Understand stateless authentication, Bearer tokens, token anatomy, and client-side decoding vs verification.",
    category: "encoding",
    categoryLabel: "Security & Auth",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "8 min read",
    keywords: [
      "what is jwt",
      "json web token tutorial",
      "jwt authentication explained",
      "stateless auth bearer token",
      "jwt structure rfc 7519",
    ],
    relatedTools: ["jwt-decoder", "base64-decoder"],
    relatedGuides: ["jwt-structure-explained", "hashing-vs-encryption"],
    summary:
      "A complete technical guide to JSON Web Tokens, OAuth 2.0 authorization flows, and token security best practices.",
    contentHtml: `
<h2>What Is a JSON Web Token?</h2>
<p>
  A <strong>JSON Web Token (JWT)</strong> is an open standard (<strong>RFC 7519</strong>) that defines a compact, self-contained way for securely transmitting information between parties as a JSON object. JWTs are commonly used for stateless user authentication and OAuth 2.0 authorization.
</p>

<h2>The 3 Parts of a JWT</h2>
<p>A JWT string consists of three dot-separated Base64URL-encoded parts:</p>
<pre><code>header.payload.signature
Example: eyJhbGciOiJIUzI1Ni... . eyJzdWIiOiIxMjM0NT... . 4e9g4yWJm7c8VvW2...</code></pre>
<ol>
  <li><strong>Header:</strong> Specifies the cryptographic algorithm (e.g. <code>HS256</code>, <code>RS256</code>) and token type (<code>JWT</code>).</li>
  <li><strong>Payload:</strong> Contains claims (user ID, roles, expiration time).</li>
  <li><strong>Signature:</strong> Cryptographic hash or signature verifying that the token was not altered in transit.</li>
</ol>
    `,
  },

  // ─── 19. JWT STRUCTURE EXPLAINED ───────────────────────────────
  {
    slug: "jwt-structure-explained",
    title: "JWT Structure Explained: Header, Claims, and Signatures",
    description:
      "Deep dive into JSON Web Token internals. Learn standard registered claims (iss, sub, exp, iat, aud), HMAC vs RSA signatures, and security pitfalls.",
    category: "encoding",
    categoryLabel: "Security & Auth",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "8 min read",
    keywords: [
      "jwt structure",
      "jwt registered claims",
      "jwt exp claim",
      "jwt signature verification",
      "jwt algorithm hs256 rs256",
    ],
    relatedTools: ["jwt-decoder", "base64-decoder", "timestamp-converter"],
    relatedGuides: ["what-is-jwt", "hashing-vs-encryption"],
    summary:
      "An in-depth breakdown of JWT claims, JOSE headers, asymmetric vs symmetric signing algorithms, and common security vulnerabilities.",
    contentHtml: `
<h2>Registered Standard Claims</h2>
<p>RFC 7519 defines recommended standard claims in the JWT payload:</p>
<ul>
  <li><code>iss</code> (Issuer): Identifies the authorization server that issued the token.</li>
  <li><code>sub</code> (Subject): The principal identifier (e.g. unique User ID).</li>
  <li><code>aud</code> (Audience): The target resource server or API client.</li>
  <li><code>exp</code> (Expiration Time): Unix epoch timestamp identifying when token expires.</li>
  <li><code>iat</code> (Issued At): Unix epoch timestamp when token was created.</li>
  <li><code>nbf</code> (Not Before): Unix timestamp before which token must not be accepted.</li>
</ul>

<h2>Symmetric vs. Asymmetric Signing</h2>
<ul>
  <li><strong>HMAC (e.g. HS256):</strong> Uses a shared secret key for both signing and verification. Ideal for internal microservices sharing a secure config.</li>
  <li><strong>RSA / ECDSA (e.g. RS256, ES256):</strong> Uses a private key to sign the token and a public key (JWKS) to verify signatures. Standard for multi-tenant OAuth/OIDC providers (Auth0, Okta, Google).</li>
</ul>
    `,
  },

  // ─── 20. HASHING VS ENCRYPTION ───────────────────────────────
  {
    slug: "hashing-vs-encryption",
    title: "Hashing vs. Encryption: When to Use SHA-256 vs. AES vs. Argon2",
    description:
      "Learn the vital differences between cryptographic hashing and encryption. Explore SHA-256 for data integrity, AES for data confidentiality, and Argon2/bcrypt for passwords.",
    category: "generators",
    categoryLabel: "Cryptography & Security",
    publishedAt: "2026-08-15",
    updatedAt: "2026-08-19",
    readTime: "8 min read",
    keywords: [
      "hashing vs encryption",
      "difference between sha256 and aes",
      "password hashing best practices",
      "cryptographic hash function guide",
    ],
    relatedTools: ["hash-generator", "password-generator", "base64-encoder"],
    relatedGuides: ["base64-vs-encryption", "what-is-jwt"],
    summary:
      "A security guide to choosing between one-way hash algorithms, two-way encryption ciphers, and salted key-derivation password functions.",
    contentHtml: `
<h2>Core Differences at a Glance</h2>
<table>
  <thead>
    <tr><th>Feature</th><th>Hashing (SHA-256, MD5)</th><th>Encryption (AES-256, RSA)</th><th>Password Hashing (Argon2, bcrypt)</th></tr>
  </thead>
  <tbody>
    <tr><td>Purpose</td><td>Data integrity & checksums</td><td>Confidential data storage & transit</td><td>Secure password storage against GPUs</td></tr>
    <tr><td>Reversibility</td><td>Irreversible (One-way)</td><td>Reversible (with decryption key)</td><td>Irreversible (Slow with work factor)</td></tr>
    <tr><td>Output Size</td><td>Fixed (e.g. 256 bits for SHA-256)</td><td>Proportional to input size</td><td>Fixed string with salt + hash parameters</td></tr>
    <tr><td>Speed</td><td>Fast (Hardware accelerated)</td><td>Fast (AES-NI accelerated)</td><td>Intentionally Slow (Resistant to brute force)</td></tr>
  </tbody>
</table>

<h2>Why SHA-256 Should Not Be Used Directly for Passwords</h2>
<p>
  SHA-256 is designed to compute digests extremely quickly (billions of hashes per second on modern GPUs). Fast hashes make brute-force cracking trivially fast. For storing user passwords, always use slow, salted, memory-hard key derivation algorithms such as <strong>Argon2id</strong>, <strong>bcrypt</strong>, or <strong>PBKDF2</strong>.
</p>
    `,
  },
];

export function getGuideBySlug(slug: string): GuideDefinition | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): { slug: string }[] {
  return guides.map((g) => ({
    slug: g.slug,
  }));
}
