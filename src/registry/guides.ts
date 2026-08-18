import type { GuideDefinition } from "@/types/tool";

export const guides: GuideDefinition[] = [
  // ─── JSON GUIDES ─────────────────────────────
  {
    slug: "what-is-json",
    title: "What Is JSON? A Practical Beginner's Guide",
    description:
      "Learn what JSON (JavaScript Object Notation) is, why it is the standard data interchange format on the web, and how to read and write JSON data.",
    category: "json",
    categoryLabel: "JSON",
    publishedAt: "2026-01-10",
    updatedAt: "2026-08-15",
    readTime: "5 min read",
    keywords: ["what is json", "json beginner guide", "javascript object notation", "json basics", "json format"],
    relatedTools: ["json-formatter", "json-validator", "json-minifier"],
    relatedGuides: ["json-syntax-explained", "how-to-validate-json", "json-objects-vs-arrays"],
    summary:
      "JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format that is easy for humans to read and write, and simple for machines to parse and generate.",
    contentHtml: `
      <h2>Introduction to JSON</h2>
      <p>JSON stands for <strong>JavaScript Object Notation</strong>. Despite being derived from the JavaScript programming language syntax, JSON is completely language-independent. Today, virtually every programming language (including Python, Java, C#, Go, PHP, and Ruby) provides built-in or standard library support for creating and reading JSON data.</p>
      
      <h2>Why Is JSON So Popular?</h2>
      <ul>
        <li><strong>Human-Readable:</strong> JSON structures data using simple key-value pairs and ordered lists, making it easy to inspect and debug.</li>
        <li><strong>Lightweight:</strong> Unlike XML, JSON does not require verbose opening and closing tags, minimizing network payload sizes.</li>
        <li><strong>Native to Web Browsers:</strong> Browsers natively parse JSON using the fast <code>JSON.parse()</code> and serialize objects using <code>JSON.stringify()</code>.</li>
        <li><strong>Universal Standard:</strong> REST APIs, configuration files (such as <code>package.json</code> or <code>tsconfig.json</code>), and NoSQL databases (like MongoDB) rely extensively on JSON.</li>
      </ul>

      <h2>A Simple JSON Example</h2>
      <pre><code class="language-json">{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "pages": 464,
  "inStock": true,
  "tags": ["programming", "software engineering", "best practices"]
}</code></pre>

      <h2>The Six JSON Data Types</h2>
      <p>JSON supports six basic data types:</p>
      <ol>
        <li><strong>String:</strong> Unicode characters wrapped in double quotes (e.g., <code>"Hello, World"</code>).</li>
        <li><strong>Number:</strong> Integers or floating-point numbers (e.g., <code>42</code>, <code>3.1415</code>). No octal or hexadecimal formats.</li>
        <li><strong>Boolean:</strong> Either <code>true</code> or <code>false</code>.</li>
        <li><strong>Null:</strong> Represents an empty or nonexistent value (<code>null</code>).</li>
        <li><strong>Object:</strong> An unordered collection of key-value pairs wrapped in curly braces (<code>{ }</code>).</li>
        <li><strong>Array:</strong> An ordered list of zero or more values wrapped in square brackets (<code>[ ]</code>).</li>
      </ol>

      <h2>JSON vs JavaScript Objects</h2>
      <p>While JSON syntax looks very similar to JavaScript object literals, strict rules apply to JSON:</p>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>JSON</th>
            <th>JavaScript Object Literal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Key Quotes</td>
            <td><strong>Must</strong> be double quotes (<code>"key"</code>)</td>
            <td>Optional or single/double quotes</td>
          </tr>
          <tr>
            <td>String Values</td>
            <td><strong>Must</strong> be double quotes (<code>"value"</code>)</td>
            <td>Single quotes, double quotes, or backticks</td>
          </tr>
          <tr>
            <td>Trailing Commas</td>
            <td><strong>Not allowed</strong></td>
            <td>Allowed and common</td>
          </tr>
          <tr>
            <td>Functions / Undefined</td>
            <td><strong>Not supported</strong></td>
            <td>Supported</td>
          </tr>
        </tbody>
      </table>
    `,
    faq: [
      {
        question: "Can JSON store functions or methods?",
        answer:
          "No. JSON is strictly a data-only serialization format. It cannot store functions, comments, undefined, or symbols.",
      },
      {
        question: "Are comments allowed in JSON?",
        answer:
          "Standard JSON specification (RFC 8259) does not allow comments. If you need comments in configuration files, formats like JSONC, JSON5, or YAML are often used instead.",
      },
    ],
  },
  {
    slug: "json-syntax-explained",
    title: "JSON Syntax Explained With Examples",
    description:
      "A complete guide to JSON syntax rules, character escaping, formatting constraints, and data structure requirements.",
    category: "json",
    categoryLabel: "JSON",
    publishedAt: "2026-01-14",
    updatedAt: "2026-08-15",
    readTime: "6 min read",
    keywords: ["json syntax", "json syntax rules", "json formatting rules", "json examples", "json escaping"],
    relatedTools: ["json-formatter", "json-validator", "json-escape"],
    relatedGuides: ["what-is-json", "common-json-errors", "how-to-validate-json"],
    summary:
      "Understand the strict syntax rules that govern valid JSON, including quotes, delimiters, escape sequences, and structural nesting.",
    contentHtml: `
      <h2>The Core Syntax Rules of JSON</h2>
      <p>JSON has a strict and minimalist specification governed by <a href="https://www.rfc-editor.org/rfc/rfc8259" target="_blank" rel="noopener noreferrer">RFC 8259</a>. Because JSON is designed for machine interchange, parsers will fail immediately if a single syntax rule is violated.</p>

      <h2>1. Keys Must Be Double-Quoted Strings</h2>
      <p>In JSON, every object key must be wrapped in standard ASCII double quotes (<code>"</code>). Single quotes (<code>'</code>) or unquoted identifiers are invalid.</p>
      <pre><code class="language-json">// Valid JSON
{ "username": "alex", "id": 101 }

// INVALID JSON: Single quotes or missing quotes
{ 'username': 'alex', id: 101 }</code></pre>

      <h2>2. Escaping Special Characters</h2>
      <p>Strings in JSON must escape certain characters using a backslash (<code>\\</code>):</p>
      <ul>
        <li><code>\\"</code> — Double quote</li>
        <li><code>\\\\</code> — Reverse solidus (backslash)</li>
        <li><code>\\/</code> — Solidus (slash)</li>
        <li><code>\\b</code> — Backspace</li>
        <li><code>\\f</code> — Formfeed</li>
        <li><code>\\n</code> — Newline</li>
        <li><code>\\r</code> — Carriage return</li>
        <li><code>\\t</code> — Horizontal tab</li>
        <li><code>\\uXXXX</code> — 4-hex-digit Unicode character code point (e.g. <code>\\u00A9</code> for ©)</li>
      </ul>

      <h2>3. No Trailing Commas</h2>
      <p>One of the most frequent errors in JSON is leaving a trailing comma after the last property of an object or the last item of an array.</p>
      <pre><code class="language-json">// Valid: No trailing comma
{
  "name": "Widget",
  "price": 19.99
}

// INVALID: Trailing comma after price
{
  "name": "Widget",
  "price": 19.99,
}</code></pre>

      <h2>4. Numbers in JSON</h2>
      <p>JSON numbers follow standard mathematical representation. However:</p>
      <ul>
        <li>Leading zeroes are forbidden (e.g., <code>05</code> is invalid; use <code>5</code>).</li>
        <li>Hexadecimal (<code>0xFF</code>) or binary representations are not supported.</li>
        <li>Values like <code>NaN</code>, <code>Infinity</code>, or <code>-Infinity</code> are not valid in JSON.</li>
      </ul>
    `,
    faq: [
      {
        question: "Why does JSON reject trailing commas?",
        answer:
          "The original JSON grammar was designed to be as minimal and unambiguous as possible for C-like and JavaScript parsers. Trailing commas were omitted from the formal specification to prevent parser ambiguities.",
      },
    ],
  },
  {
    slug: "how-to-validate-json",
    title: "How to Validate JSON and Fix Syntax Errors",
    description:
      "Step-by-step techniques and tools to validate JSON payloads, inspect line-by-line syntax errors, and debug API responses.",
    category: "json",
    categoryLabel: "JSON",
    publishedAt: "2026-01-20",
    updatedAt: "2026-08-15",
    readTime: "4 min read",
    keywords: ["validate json", "how to validate json", "json syntax validator", "debug json error", "json lint"],
    relatedTools: ["json-validator", "json-formatter"],
    relatedGuides: ["common-json-errors", "json-syntax-explained"],
    summary:
      "Learn how to quickly validate JSON files and API payloads, identify parser error offsets, and fix malformed data.",
    contentHtml: `
      <h2>Why JSON Validation Is Essential</h2>
      <p>When web services exchange data via REST or GraphQL APIs, invalid JSON causes silent payload rejections or HTTP 400 Bad Request responses. Validating your JSON before sending it ensures reliable communication between client applications and backend servers.</p>

      <h2>Methods to Validate JSON</h2>
      <h3>1. Use ToolNest's Browser-Based JSON Validator</h3>
      <p>Our <a href="/json-tools/json-validator/">JSON Validator</a> runs directly in your web browser. It parses the document, catches syntax anomalies, and pinpoints the exact line and character column where parsing broke down.</p>

      <h3>2. Validating in JavaScript / Node.js</h3>
      <p>You can test JSON validity programmatically with a <code>try...catch</code> block:</p>
      <pre><code class="language-javascript">function isValidJson(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    console.error("Syntax error:", error.message);
    return false;
  }
}</code></pre>

      <h3>3. Validating in Python</h3>
      <pre><code class="language-python">import json

def check_json(data_str):
    try:
        json.loads(data_str)
        return True, "Valid JSON"
    except json.JSONDecodeError as err:
        return False, f"Error at line {err.lineno}, col {err.colno}: {err.msg}"</code></pre>
    `,
  },
  {
    slug: "how-to-format-json",
    title: "How to Format and Pretty Print JSON",
    description:
      "Master JSON formatting: indentation styles, beautification tools, command-line tricks with jq, and IDE workflows.",
    category: "json",
    categoryLabel: "JSON",
    publishedAt: "2026-01-25",
    updatedAt: "2026-08-15",
    readTime: "5 min read",
    keywords: ["format json", "pretty print json", "beautify json", "json indentation", "jq pretty print"],
    relatedTools: ["json-formatter", "json-minifier"],
    relatedGuides: ["what-is-json", "how-to-minify-json"],
    summary:
      "Formatting or pretty-printing JSON adds indentation, line breaks, and whitespace to turn dense single-line strings into clear, readable documents.",
    contentHtml: `
      <h2>What Is JSON Formatting?</h2>
      <p>APIs and web services frequently send minified JSON over the wire to conserve bandwidth. While machines parse minified JSON effortlessly, human developers need clean visual hierarchy to inspect fields, check array elements, and debug nested payloads.</p>

      <h2>Indentation Options (2 Spaces vs 4 Spaces vs Tabs)</h2>
      <ul>
        <li><strong>2 Spaces:</strong> The de-facto modern industry standard for web development, Node.js configurations, and GitHub repositories.</li>
        <li><strong>4 Spaces:</strong> Traditional standard common in Python, Java, and C# environments.</li>
        <li><strong>Tabs:</strong> Accessible indentation preferred by developers who customize visual tab widths in their local editors.</li>
      </ul>

      <h2>Formatting JSON with CLI (jq)</h2>
      <p>If you work in Linux or macOS terminals, the <code>jq</code> utility is the most popular CLI formatter:</p>
      <pre><code class="language-bash"># Format a JSON file to stdout
cat payload.json | jq .

# Format and write to a new file
jq . payload.json > formatted.json</code></pre>
    `,
  },
  {
    slug: "how-to-minify-json",
    title: "Why and How to Minify JSON",
    description:
      "Understand the benefits of JSON minification for network performance, storage reduction, and API payload optimization.",
    category: "json",
    categoryLabel: "JSON",
    publishedAt: "2026-02-01",
    updatedAt: "2026-08-15",
    readTime: "4 min read",
    keywords: ["minify json", "compress json", "json minification", "reduce json size", "json compressor"],
    relatedTools: ["json-minifier", "json-formatter"],
    relatedGuides: ["how-to-format-json", "what-is-json"],
    summary:
      "Minifying JSON strips out non-functional spaces, line feeds, and indentation to produce the most compact representation possible.",
    contentHtml: `
      <h2>The Purpose of JSON Minification</h2>
      <p>In high-throughput microservices, mobile applications, and database storage, every byte counts. In deeply nested JSON documents, whitespace and line breaks can account for <strong>15% to 40%</strong> of the total payload size.</p>

      <h2>How Minification Works</h2>
      <p>Minification does not alter the underlying data or property names. It simply eliminates whitespace between tokens (such as around colons, commas, braces, and brackets) without modifying string literal values.</p>
      
      <h3>Before Minification (Formatted)</h3>
      <pre><code class="language-json">{
  "status": "success",
  "code": 200,
  "data": [
    { "id": 1, "active": true }
  ]
}</code></pre>

      <h3>After Minification</h3>
      <pre><code class="language-json">{"status":"success","code":200,"data":[{"id":1,"active":true}]}</code></pre>
    `,
  },
  {
    slug: "common-json-errors",
    title: "Common JSON Syntax Errors and How to Fix Them",
    description:
      "A diagnostic handbook to identify and resolve the 7 most frequent JSON syntax mistakes developers encounter.",
    category: "json",
    categoryLabel: "JSON",
    publishedAt: "2026-02-08",
    updatedAt: "2026-08-15",
    readTime: "7 min read",
    keywords: ["json syntax errors", "fix json error", "unexpected token in json", "json trailing comma", "invalid json"],
    relatedTools: ["json-validator", "json-formatter", "json-escape"],
    relatedGuides: ["json-syntax-explained", "how-to-validate-json"],
    summary:
      "Learn how to diagnose common errors like 'Unexpected token', unquoted keys, single quotes, unescaped line breaks, and trailing commas.",
    contentHtml: `
      <h2>1. Single Quotes Instead of Double Quotes</h2>
      <p>JavaScript allows single quotes (<code>'</code>) for strings, but JSON strictly forbids them.</p>
      <p><strong>Error message:</strong> <code>JSON.parse: expected property name or '}' at line 1 column 2</code></p>
      <pre><code class="language-json">// Wrong
{ 'name': 'Alice' }

// Correct
{ "name": "Alice" }</code></pre>

      <h2>2. Trailing Commas After the Last Property</h2>
      <p>Modern ECMAScript supports trailing commas in objects and arrays, but standard JSON parser specifications throw errors if a comma appears without a following element.</p>
      <pre><code class="language-json">// Wrong
{ "item": "laptop", "quantity": 1, }

// Correct
{ "item": "laptop", "quantity": 1 }</code></pre>

      <h2>3. Unquoted Keys</h2>
      <p>In JavaScript, <code>{ name: "John" }</code> is valid. In JSON, object keys must always be enclosed in double quotes.</p>

      <h2>4. Unescaped Control Characters in Strings</h2>
      <p>Literal newlines or tabs inside double-quoted string values violate JSON syntax. They must be escaped as <code>\\n</code> or <code>\\t</code>.</p>
    `,
  },
  {
    slug: "json-objects-vs-arrays",
    title: "JSON Objects vs Arrays: Structure and Key Differences",
    description:
      "Deep dive into the structural differences between JSON Objects (keyed maps) and JSON Arrays (ordered lists).",
    category: "json",
    categoryLabel: "JSON",
    publishedAt: "2026-02-15",
    updatedAt: "2026-08-15",
    readTime: "5 min read",
    keywords: ["json objects vs arrays", "json array", "json object", "json data structures"],
    relatedTools: ["json-formatter", "json-to-csv", "csv-to-json"],
    relatedGuides: ["what-is-json", "json-syntax-explained"],
    summary:
      "Compare JSON Objects (enclosed in curly braces) and JSON Arrays (enclosed in square brackets) and learn when to choose each for your data model.",
    contentHtml: `
      <h2>Core Differences</h2>
      <p>JSON provides two composite data structures to organize multiple values: <strong>Objects</strong> and <strong>Arrays</strong>.</p>

      <table>
        <thead>
          <tr>
            <th>Characteristic</th>
            <th>JSON Object (<code>{ }</code>)</th>
            <th>JSON Array (<code>[ ]</code>)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Syntax Delimiters</td>
            <td>Curly braces <code>{ ... }</code></td>
            <td>Square brackets <code>[ ... ]</code></td>
          </tr>
          <tr>
            <td>Element Structure</td>
            <td>Key-value pairs (<code>"key": value</code>)</td>
            <td>Sequential values (<code>value1, value2</code>)</td>
          </tr>
          <tr>
            <td>Ordering</td>
            <td>Unordered collection</td>
            <td>Strictly ordered sequence (0-indexed)</td>
          </tr>
          <tr>
            <td>Access Pattern</td>
            <td>Access by unique string key</td>
            <td>Access by integer index</td>
          </tr>
        </tbody>
      </table>

      <h2>Nesting Objects and Arrays</h2>
      <p>Real-world API payloads combine both structures. For instance, a list of user profiles is typically modeled as an array of JSON objects.</p>
    `,
  },
  {
    slug: "json-vs-xml",
    title: "JSON vs XML: Differences, Pros, and When to Use Which",
    description:
      "A comprehensive technical comparison between JSON and XML covering parsing performance, schema validation, data types, and use cases.",
    category: "json",
    categoryLabel: "JSON",
    publishedAt: "2026-02-22",
    updatedAt: "2026-08-15",
    readTime: "7 min read",
    keywords: ["json vs xml", "xml vs json", "compare json and xml", "rest vs soap", "data serialization"],
    relatedTools: ["json-formatter", "xml-formatter"],
    relatedGuides: ["what-is-json", "json-syntax-explained"],
    summary:
      "Explore the architectural trade-offs between JSON (lightweight, native data types) and XML (extensible, schema-validated, metadata-rich).",
    contentHtml: `
      <h2>The Shift from XML to JSON</h2>
      <p>During the early 2000s, XML (Extensible Markup Language) was the foundation of web services and SOAP protocols. However, with the rise of modern Single Page Applications (SPAs) and REST APIs, JSON emerged as the dominant format for data transmission.</p>

      <h2>Comparison Table</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>JSON</th>
            <th>XML</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Syntax Verbosity</td>
            <td>Compact, minimal overhead</td>
            <td>Verbose with repetitive closing tags</td>
          </tr>
          <tr>
            <td>Data Types</td>
            <td>Native support (String, Number, Boolean, Array, Object)</td>
            <td>All data is inherently text; requires schemas for typing</td>
          </tr>
          <tr>
            <td>Browser Parsing</td>
            <td>Extremely fast native parsing (<code>JSON.parse</code>)</td>
            <td>Requires DOMParser or XPath queries</td>
          </tr>
          <tr>
            <td>Schema Validation</td>
            <td>JSON Schema</td>
            <td>XSD (XML Schema Definition), DTD</td>
          </tr>
          <tr>
            <td>Comments</td>
            <td>Not supported</td>
            <td>Supported (<code>&lt;!-- comment --&gt;</code>)</td>
          </tr>
        </tbody>
      </table>

      <h2>When to Still Use XML</h2>
      <p>XML remains the standard in document-centric workflows (such as Microsoft Office DOCX/XLSX formats, SVG graphics, and Android layouts) and enterprise systems requiring complex XML namespaces and transformations (XSLT).</p>
    `,
  },

  // ─── ENCODING & BASE64 GUIDES ─────────────────
  {
    slug: "what-is-base64",
    title: "What Is Base64 Encoding & How Does It Work?",
    description:
      "Understand the mechanics of Base64 binary-to-text encoding, the 64-character alphabet, padding characters, and data size increases.",
    category: "encoding",
    categoryLabel: "Encoding",
    publishedAt: "2026-03-01",
    updatedAt: "2026-08-15",
    readTime: "6 min read",
    keywords: ["what is base64", "base64 encoding", "binary to text encoding", "base64 alphabet", "base64 padding"],
    relatedTools: ["base64-encoder", "base64-decoder"],
    relatedGuides: ["base64-vs-encryption", "when-to-use-base64"],
    summary:
      "Base64 is an encoding algorithm designed to represent arbitrary binary data using a set of 64 ASCII-safe characters.",
    contentHtml: `
      <h2>The Need for Base64</h2>
      <p>Legacy communication channels (like email protocols such as SMTP) were originally engineered to transfer 7-bit US-ASCII text. When transferring raw 8-bit binary streams (images, audio files, executable binaries), older network gateways would corrupt or strip non-printable characters. Base64 was standardized in RFC 4648 to safely transport binary data across text-only protocols.</p>

      <h2>The Base64 Index Table (64 Characters)</h2>
      <p>The standard Base64 character set consists of:</p>
      <ul>
        <li><code>A–Z</code> (Indices 0–25)</li>
        <li><code>a–z</code> (Indices 26–51)</li>
        <li><code>0–9</code> (Indices 52–61)</li>
        <li><code>+</code> (Index 62) and <code>/</code> (Index 63)</li>
        <li><code>=</code> (Used as a padding character at the end)</li>
      </ul>

      <h2>The Mathematics: 3 Bytes into 4 Characters</h2>
      <p>Base64 groups binary data into 24-bit chunks (3 bytes of 8 bits each). It divides those 24 bits into four 6-bit groups (since 2<sup>6</sup> = 64). Each 6-bit integer is mapped to its corresponding character in the 64-character alphabet.</p>
      <p>Because 3 bytes turn into 4 characters, Base64 increases the data size by approximately <strong>33.3%</strong>.</p>
    `,
  },
  {
    slug: "base64-vs-encryption",
    title: "Base64 Encoding vs Encryption: Key Differences",
    description:
      "Clarifying a common misconception: why Base64 encoding is not encryption and why it provides zero cryptographic security.",
    category: "encoding",
    categoryLabel: "Encoding",
    publishedAt: "2026-03-08",
    updatedAt: "2026-08-15",
    readTime: "5 min read",
    keywords: ["base64 vs encryption", "is base64 secure", "encoding vs encryption", "cryptography basics"],
    relatedTools: ["base64-encoder", "base64-decoder", "hash-generator"],
    relatedGuides: ["what-is-base64", "hashing-vs-encryption"],
    summary:
      "Encoding transforms data formats for compatibility; encryption transforms data with secret keys to ensure confidentiality.",
    contentHtml: `
      <h2>The Fundamental Distinction</h2>
      <p>A frequent mistake in beginner web development is assuming that converting a string or password to Base64 makes it secure. It does not.</p>

      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Base64 Encoding</th>
            <th>Encryption (e.g., AES-256)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary Goal</td>
            <td>Data format compatibility</td>
            <td>Data confidentiality & security</td>
          </tr>
          <tr>
            <td>Secret Key Required?</td>
            <td><strong>No.</strong> Anyone can decode it.</td>
            <td><strong>Yes.</strong> Only key holders can decrypt it.</td>
          </tr>
          <tr>
            <td>Reversibility</td>
            <td>Freely reversible by any standard parser</td>
            <td>Mathematically impossible to reverse without the key</td>
          </tr>
        </tbody>
      </table>

      <h2>Never Use Base64 for Passwords</h2>
      <p>Storing or transmitting passwords merely encoded in Base64 is equivalent to storing them in plain text. Always use salted cryptographic hashing (such as Argon2, bcrypt, or PBKDF2) or authenticated encryption (such as AES-GCM) for sensitive credentials.</p>
    `,
  },
  {
    slug: "when-to-use-base64",
    title: "When and Why Should You Use Base64 Encoding?",
    description:
      "Practical engineering use cases for Base64: Data URIs in CSS/HTML, email attachments, JWT payloads, and cryptographic signatures.",
    category: "encoding",
    categoryLabel: "Encoding",
    publishedAt: "2026-03-15",
    updatedAt: "2026-08-15",
    readTime: "5 min read",
    keywords: ["when to use base64", "base64 data uri", "base64 images in css", "base64 use cases"],
    relatedTools: ["base64-encoder", "jwt-decoder"],
    relatedGuides: ["what-is-base64", "what-is-jwt"],
    summary:
      "Discover the scenarios where Base64 encoding is the right tool and when direct binary transmission or external hosting is preferable.",
    contentHtml: `
      <h2>Legitimate Use Cases for Base64</h2>
      
      <h3>1. Small Inline Data URIs (Images and Fonts)</h3>
      <p>You can embed small icons, logos, or fonts directly into CSS or HTML to prevent extra HTTP round trips:</p>
      <pre><code class="language-html">&lt;img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..." alt="Logo" /&gt;</code></pre>
      <p><em>Best practice:</em> Only inline assets smaller than 2-3 KB. For larger files, external caching delivers superior page load speeds.</p>

      <h3>2. JSON Web Tokens (JWT)</h3>
      <p>JWTs use Base64URL encoding to pack metadata headers and claims payloads into compact, URL-safe strings separated by periods.</p>

      <h3>3. API Transmission of Binary Buffers</h3>
      <p>When sending binary files (such as PDF receipts or audio samples) inside a JSON REST request body, Base64 provides an interoperable bridge.</p>
    `,
  },

  // ─── URL & WEB GUIDES ─────────────────────────
  {
    slug: "what-is-url-encoding",
    title: "What Is URL Percent-Encoding and Why Is It Necessary?",
    description:
      "Learn how URL percent-encoding works, reserved vs unreserved characters according to RFC 3986, and why spaces become %20 or +.",
    category: "web",
    categoryLabel: "Web & URLs",
    publishedAt: "2026-03-22",
    updatedAt: "2026-08-15",
    readTime: "5 min read",
    keywords: ["what is url encoding", "percent encoding", "rfc 3986", "url reserved characters", "encode uri"],
    relatedTools: ["url-encoder", "url-decoder", "url-parser"],
    relatedGuides: ["url-encoding-vs-decoding", "understanding-url-query-params"],
    summary:
      "URL encoding converts reserved or non-ASCII characters into safe triplets (%XX) so browsers and servers can parse addresses without ambiguity.",
    contentHtml: `
      <h2>The Anatomy of URL Encoding</h2>
      <p>URLs are restricted to a subset of ASCII characters. Characters outside this character set (including spaces, accented letters, emojis, and symbols like <code>#</code>, <code>?</code>, <code>&</code>) have special grammatical meaning or cannot be safely transmitted without encoding.</p>

      <h2>Reserved vs Unreserved Characters</h2>
      <ul>
        <li><strong>Unreserved Characters:</strong> Letters (<code>A-Z</code>, <code>a-z</code>), digits (<code>0-9</code>), and four safe symbols (<code>-</code>, <code>_</code>, <code>.</code>, <code>~</code>). These never require encoding.</li>
        <li><strong>Reserved Characters:</strong> Characters that have syntactic meaning in URLs (<code>:</code>, <code>/</code>, <code>?</code>, <code>#</code>, <code>[</code>, <code>]</code>, <code>@</code>, <code>!</code>, <code>$</code>, <code>&</code>, <code>'</code>, <code>(</code>, <code>)</code>, <code>*</code>, <code>+</code>, <code>,</code>, <code>;</code>, <code>=</code>).</li>
      </ul>

      <h2>Common Percent-Encoded Values</h2>
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Percent-Encoded</th>
            <th>Description / Meaning in URLs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Space</td>
            <td><code>%20</code> (or <code>+</code> in query strings)</td>
            <td>Whitespace separator</td>
          </tr>
          <tr>
            <td><code>?</code></td>
            <td><code>%3F</code></td>
            <td>Query string delimiter</td>
          </tr>
          <tr>
            <td><code>&</code></td>
            <td><code>%26</code></td>
            <td>Query parameter separator</td>
          </tr>
          <tr>
            <td><code>=</code></td>
            <td><code>%3D</code></td>
            <td>Query key-value separator</td>
          </tr>
          <tr>
            <td><code>#</code></td>
            <td><code>%23</code></td>
            <td>Fragment / anchor identifier</td>
          </tr>
        </tbody>
      </table>
    `,
  },
  {
    slug: "url-encoding-vs-decoding",
    title: "URL Encoding vs URL Decoding Explained",
    description:
      "Understand the two-way transformation of URL components and avoid common bugs like double-encoding query parameters.",
    category: "web",
    categoryLabel: "Web & URLs",
    publishedAt: "2026-03-29",
    updatedAt: "2026-08-15",
    readTime: "4 min read",
    keywords: ["url encoding vs decoding", "encodeuricomponent", "decodeuricomponent", "url double encoding"],
    relatedTools: ["url-encoder", "url-decoder", "url-parser"],
    relatedGuides: ["what-is-url-encoding", "understanding-url-query-params"],
    summary:
      "Explore how client applications encode parameters and servers decode them, including best practices with encodeURIComponent and decodeURIComponent.",
    contentHtml: `
      <h2>The Two-Way Lifecycle</h2>
      <p>URL encoding takes raw user strings and sanitizes them for safe URL transmission. URL decoding converts those percent-encoded triplets back into human-readable strings on the receiving server.</p>

      <h2>JavaScript Encoding Functions Compared</h2>
      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Encodes</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>encodeURI()</code></td>
            <td>Non-ASCII and spaces, but <strong>preserves</strong> <code>/ ? : & = +</code></td>
            <td>Encoding a full URL where structure must remain intact</td>
          </tr>
          <tr>
            <td><code>encodeURIComponent()</code></td>
            <td>All special characters including <code>/ ? & = +</code></td>
            <td>Encoding individual query parameter values</td>
          </tr>
        </tbody>
      </table>

      <h2>The 'Double Encoding' Trap</h2>
      <p>If you encode an already encoded string, <code>%20</code> becomes <code>%2520</code>. When decoded once by a web server, it resolves to <code>%20</code> instead of a space. Always encode raw strings exactly once right before appending them to the query string.</p>
    `,
  },
  {
    slug: "understanding-url-query-params",
    title: "Understanding URL Query Parameters and Query Strings",
    description:
      "A complete guide to query string structure, key-value pairs, arrays in URLs, and working with the modern URLSearchParams API.",
    category: "web",
    categoryLabel: "Web & URLs",
    publishedAt: "2026-04-05",
    updatedAt: "2026-08-15",
    readTime: "5 min read",
    keywords: ["url query parameters", "query string", "urlsearchparams", "parse url parameters"],
    relatedTools: ["url-parser", "url-encoder", "url-decoder"],
    relatedGuides: ["what-is-url-encoding", "url-encoding-vs-decoding"],
    summary:
      "Learn how URLs pass state, filters, and tracking parameters using query strings, and how to manipulate them in modern JavaScript.",
    contentHtml: `
      <h2>Anatomy of a Query String</h2>
      <p>A query string begins with a question mark (<code>?</code>) following the path. Parameters are structured as <code>key=value</code> pairs delimited by ampersands (<code>&</code>):</p>
      <pre><code>https://example.com/products?category=electronics&sort=price_asc&page=2</code></pre>

      <h2>Manipulating Query Parameters with URLSearchParams</h2>
      <p>Modern browsers and Node.js provide the built-in <code>URLSearchParams</code> interface:</p>
      <pre><code class="language-javascript">const url = new URL("https://example.com/search?q=developer+tools&lang=en");

// Read a parameter
console.log(url.searchParams.get("q")); // "developer tools"

// Add or update parameters
url.searchParams.set("page", "3");
url.searchParams.append("filter", "free");

console.log(url.toString());
// "https://example.com/search?q=developer+tools&lang=en&page=3&filter=free"</code></pre>
    `,
  },

  // ─── IDENTIFIERS & TIMESTAMPS ────────────────
  {
    slug: "what-is-uuid",
    title: "What Is a UUID? Universally Unique Identifiers Explained",
    description:
      "Learn what UUIDs (GUIDs) are, their 128-bit structure, canonical hyphenated hexadecimal format, and why distributed systems use them.",
    category: "identifiers",
    categoryLabel: "Identifiers",
    publishedAt: "2026-04-12",
    updatedAt: "2026-08-15",
    readTime: "6 min read",
    keywords: ["what is a uuid", "guid vs uuid", "universally unique identifier", "uuid format", "distributed ids"],
    relatedTools: ["uuid-generator"],
    relatedGuides: ["uuid-v4-explained", "what-is-unix-timestamp"],
    summary:
      "A UUID is a standardized 128-bit identifier designed to be globally unique without requiring a central registration authority.",
    contentHtml: `
      <h2>What Does UUID Stand For?</h2>
      <p>UUID stands for <strong>Universally Unique Identifier</strong> (often called GUID or Globally Unique Identifier in Microsoft ecosystems). Defined by RFC 4122 / RFC 9562, a UUID provides a guaranteed mechanism for distributed databases and microservices to generate unique keys independently without collision risks.</p>

      <h2>The Structure of a UUID</h2>
      <p>A UUID consists of 128 bits represented as 32 hexadecimal characters divided into five groups separated by hyphens:</p>
      <pre><code>xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
  8-4-4-4-12 characters (total 36 characters including hyphens)</code></pre>
      <ul>
        <li><strong>M (Digit 13):</strong> The UUID Version (e.g. <code>4</code> for random, <code>1</code> for timestamp-based, <code>7</code> for time-ordered).</li>
        <li><strong>N (Digit 17):</strong> The UUID Variant (typically <code>8</code>, <code>9</code>, <code>a</code>, or <code>b</code> representing the RFC standard variant).</li>
      </ul>
    `,
  },
  {
    slug: "uuid-v4-explained",
    title: "UUID v4 Explained: Randomness, Format, and Collision Odds",
    description:
      "Why UUID version 4 is the most popular unique identifier in modern software, and the mathematics behind its collision probability.",
    category: "identifiers",
    categoryLabel: "Identifiers",
    publishedAt: "2026-04-19",
    updatedAt: "2026-08-15",
    readTime: "5 min read",
    keywords: ["uuid v4", "uuid v4 collision probability", "random uuid generator", "cryptographically secure uuid"],
    relatedTools: ["uuid-generator"],
    relatedGuides: ["what-is-uuid"],
    summary:
      "Discover how UUID v4 uses 122 bits of pseudo-random entropy to make identifier collisions practically impossible.",
    contentHtml: `
      <h2>How UUID Version 4 Works</h2>
      <p>Unlike UUID v1 (which uses the host MAC address and timestamp) or UUID v5 (which uses SHA-1 namespace hashing), UUID v4 is generated entirely from random or pseudo-random bits.</p>
      <p>Out of the 128 total bits, 6 bits are reserved for the version (<code>0100</code>) and variant (<code>10xx</code>), leaving <strong>122 bits of pure randomness</strong>.</p>

      <h2>Can Two UUID v4 Identifiers Collide?</h2>
      <p>The total number of possible UUID v4 values is 2<sup>122</sup>, which is roughly <strong>5.3 x 10<sup>36</sup></strong> (5.3 undecillion).</p>
      <p>To have a one-in-a-billion chance of a duplicate ID collision, you would need to generate 103 trillion UUIDs in a single system. In practical terms, UUID v4 collisions never occur when using a cryptographically secure random number generator (such as <code>crypto.randomUUID()</code>).</p>

      <h2>Generating UUID v4 in Modern JavaScript</h2>
      <pre><code class="language-javascript">// Built into modern browsers and Node.js v16.7+
const id = crypto.randomUUID();
console.log(id); // e.g. "f47ac10b-58cc-4372-a567-0e02b2c3d479"</code></pre>
    `,
  },
  {
    slug: "what-is-unix-timestamp",
    title: "What Is a Unix Timestamp & Epoch Time?",
    description:
      "Understand Unix Epoch time (seconds since January 1, 1970 UTC), time zones, milliseconds vs seconds, and the Year 2038 problem.",
    category: "time",
    categoryLabel: "Time & Dates",
    publishedAt: "2026-04-26",
    updatedAt: "2026-08-15",
    readTime: "5 min read",
    keywords: ["what is unix timestamp", "epoch time", "unix time converter", "year 2038 problem", "milliseconds to date"],
    relatedTools: ["timestamp-converter"],
    relatedGuides: ["what-is-uuid"],
    summary:
      "A Unix timestamp is an integer tracking the elapsed seconds since 00:00:00 UTC on January 1, 1970, independent of local time zones.",
    contentHtml: `
      <h2>What Is the Unix Epoch?</h2>
      <p>The <strong>Unix Epoch</strong> is the reference time set to <strong>00:00:00 Coordinated Universal Time (UTC) on Thursday, January 1, 1970</strong>. A Unix timestamp simply counts the total number of non-leap seconds elapsed since that milestone.</p>

      <h2>Key Advantages of Unix Timestamps</h2>
      <ul>
        <li><strong>Time Zone Agnostic:</strong> Because it is defined relative to UTC, a Unix timestamp represents the exact same moment everywhere on Earth.</li>
        <li><strong>Compact Storage:</strong> Stored as a simple 32-bit or 64-bit integer in databases.</li>
        <li><strong>Trivial Comparisons:</strong> Calculating time differences (such as duration or expiration) requires straightforward integer subtraction.</li>
      </ul>

      <h2>Seconds vs Milliseconds</h2>
      <p>Always verify whether an API expects seconds (10 digits, e.g. <code>1786963200</code>) or milliseconds (13 digits, e.g. <code>1786963200000</code>). JavaScript's <code>Date.now()</code> natively returns milliseconds.</p>
    `,
  },

  // ─── SECURITY & TOKENS ────────────────────────
  {
    slug: "what-is-jwt",
    title: "What Is a JSON Web Token (JWT) and How Does It Work?",
    description:
      "Learn what JSON Web Tokens are, how stateless authentication works, and when to use JWTs for API authorization.",
    category: "security",
    categoryLabel: "Security & Auth",
    publishedAt: "2026-05-03",
    updatedAt: "2026-08-15",
    readTime: "6 min read",
    keywords: ["what is jwt", "json web token", "jwt authentication", "how jwt works", "stateless auth"],
    relatedTools: ["jwt-decoder", "base64-decoder"],
    relatedGuides: ["jwt-structure-explained", "hashing-vs-encryption"],
    summary:
      "JWT is an open standard (RFC 7519) that defines a compact and self-contained way to securely transmit information between parties as a JSON object.",
    contentHtml: `
      <h2>The Rise of Stateless Authentication</h2>
      <p>In traditional session-based authentication, a server stores session IDs in memory or a database (like Redis) and gives the client a session cookie. In distributed microservice architectures, managing centralized session state becomes a bottleneck.</p>
      <p>A <strong>JSON Web Token (JWT)</strong> is <em>stateless</em> and <em>self-contained</em>. The token itself carries the user ID, roles, and expiration date. Any backend service holding the secret verification key can authenticate the request without querying a session database.</p>

      <h2>How JWTs Are Transmitted</h2>
      <p>Clients typically send JWTs in the HTTP <code>Authorization</code> header using the Bearer scheme:</p>
      <pre><code>Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...</code></pre>
    `,
  },
  {
    slug: "jwt-structure-explained",
    title: "JWT Structure Explained: Header, Payload, and Signature",
    description:
      "Dissect the three parts of a JSON Web Token: JOSE Header, Claims Payload, and Cryptographic Signature.",
    category: "security",
    categoryLabel: "Security & Auth",
    publishedAt: "2026-05-10",
    updatedAt: "2026-08-15",
    readTime: "6 min read",
    keywords: ["jwt structure", "jwt header payload signature", "jwt claims", "decode jwt", "jwt signature verification"],
    relatedTools: ["jwt-decoder", "base64-decoder"],
    relatedGuides: ["what-is-jwt", "hashing-vs-encryption"],
    summary:
      "A JWT consists of three Base64URL-encoded parts separated by dots: Header.Payload.Signature.",
    contentHtml: `
      <h2>The Three Dot-Separated Segments</h2>
      <p>A JWT appears as a single string composed of three distinct segments separated by periods (<code>.</code>):</p>
      <pre><code>[Header].[Payload].[Signature]</code></pre>

      <h3>1. Header</h3>
      <p>Identifies the signing algorithm (e.g. <code>HS256</code> or <code>RS256</code>) and token type:</p>
      <pre><code class="language-json">{
  "alg": "HS256",
  "typ": "JWT"
}</code></pre>

      <h3>2. Payload (Claims)</h3>
      <p>Contains registered claims (<code>sub</code>, <code>iat</code>, <code>exp</code>) and custom application data (e.g., <code>role</code>, <code>email</code>):</p>
      <pre><code class="language-json">{
  "sub": "user_9872",
  "name": "Jane Doe",
  "role": "admin",
  "exp": 1787049600
}</code></pre>

      <h3>3. Signature</h3>
      <p>Created by taking the encoded header, encoded payload, and a secret key, and hashing them using the specified algorithm. The signature prevents tampering.</p>
    `,
  },
  {
    slug: "hashing-vs-encryption",
    title: "Hashing vs Encryption vs Encoding: A Developer's Guide",
    description:
      "Demystifying three core computer science transformations: when to hash (passwords), when to encrypt (secrets), and when to encode (data transport).",
    category: "security",
    categoryLabel: "Security & Auth",
    publishedAt: "2026-05-17",
    updatedAt: "2026-08-15",
    readTime: "7 min read",
    keywords: ["hashing vs encryption", "encoding vs hashing", "sha256 vs aes", "cryptography guide for developers"],
    relatedTools: ["hash-generator", "base64-encoder", "password-generator"],
    relatedGuides: ["base64-vs-encryption", "what-is-jwt"],
    summary:
      "Learn the fundamental differences between one-way cryptographic hashing, two-way secret-key encryption, and non-secret data encoding.",
    contentHtml: `
      <h2>Quick Reference Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Type</th>
            <th>Reversible?</th>
            <th>Primary Purpose</th>
            <th>Common Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Encoding</strong></td>
            <td>Format Translation</td>
            <td>Yes (No Key)</td>
            <td>Data transmission compatibility</td>
            <td>Base64, URL percent-encoding, Hex</td>
          </tr>
          <tr>
            <td><strong>Hashing</strong></td>
            <td>One-Way Digest</td>
            <td><strong>No</strong> (Irreversible)</td>
            <td>Integrity verification & passwords</td>
            <td>SHA-256, SHA-512, bcrypt, Argon2</td>
          </tr>
          <tr>
            <td><strong>Encryption</strong></td>
            <td>Two-Way Cipher</td>
            <td>Yes (With Secret Key)</td>
            <td>Data confidentiality & privacy</td>
            <td>AES-256-GCM, RSA, ChaCha20</td>
          </tr>
        </tbody>
      </table>

      <h2>Rule of Thumb</h2>
      <ul>
        <li>Use <strong>Encoding</strong> when a protocol requires printable ASCII text.</li>
        <li>Use <strong>Hashing</strong> when you want to verify data has not been modified or when storing user passwords.</li>
        <li>Use <strong>Encryption</strong> when you must protect private data but need to retrieve the original plaintext later.</li>
      </ul>
    `,
  },
];

export function getGuideBySlug(slug: string): GuideDefinition | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: string): GuideDefinition[] {
  return guides.filter((g) => g.category === category);
}

export function getAllGuideSlugs(): { slug: string }[] {
  return guides.map((g) => ({ slug: g.slug }));
}
