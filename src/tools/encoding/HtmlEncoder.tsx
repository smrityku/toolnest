"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_HTML = `<div class="card" id="user-123">
  <h1>Welcome & Congratulations!</h1>
  <p>Cost: <span class="price">$19.99</span> & Special Offer > 50% off</p>
  <script>alert("Security verification");</script>
</div>`;

export default function HtmlEncoder() {
  const tool = getToolBySlug("html-encoder")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const encodeHtml = (str: string) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  const decodeHtml = (str: string) => {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.documentElement.textContent || "";
  };

  const handleProcess = () => {
    if (!input) {
      setOutput("");
      return;
    }
    if (mode === "encode") {
      setOutput(encodeHtml(input));
    } else {
      setOutput(decodeHtml(input));
    }
  };

  const handleSample = () => {
    if (mode === "encode") {
      setInput(SAMPLE_HTML);
    } else {
      setInput("&lt;div class=&quot;card&quot;&gt;\n  &lt;h1&gt;Welcome &amp; Congratulations!&lt;/h1&gt;\n&lt;/div&gt;");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>
              {mode === "encode" ? "Raw HTML / Text" : "HTML Entities Text"}
            </label>
            <div className={styles.headerActions}>
              <button
                className={`btn btn-sm ${mode === "encode" ? "btn-primary" : ""}`}
                onClick={() => setMode("encode")}
              >
                Encode
              </button>
              <button
                className={`btn btn-sm ${mode === "decode" ? "btn-primary" : ""}`}
                onClick={() => setMode("decode")}
              >
                Decode
              </button>
            </div>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "encode"
                ? "Type or paste HTML code to escape (&lt;, &gt;, &amp;, &quot;)..."
                : "Paste HTML entities (e.g. &amp;lt;div&amp;gt;)..."
            }
            spellCheck={false}
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={handleProcess}>
              {mode === "encode" ? "🏷️ Encode Entities" : "🔓 Decode Entities"}
            </button>
            <button className="btn" onClick={handleSample}>
              📄 Sample
            </button>
            <button className="btn" onClick={handleClear}>
              🗑️ Clear
            </button>
          </div>
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Converted Output</label>
            {output && (
              <div className={styles.headerActions}>
                <CopyButton text={output} />
              </div>
            )}
          </div>
          {output ? (
            <pre className={styles.outputPre}>
              <code>{output}</code>
            </pre>
          ) : (
            <div className={styles.placeholder}>
              Converted output will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
