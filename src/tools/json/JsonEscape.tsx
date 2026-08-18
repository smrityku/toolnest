"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_TEXT = `Line 1: "Hello World"
Line 2: Special chars: / \\ \t
JSON snippet: {"user": "Alice", "active": true}`;

export default function JsonEscape() {
  const tool = getToolBySlug("json-escape")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"escape" | "unescape">("escape");

  const handleEscape = () => {
    if (!input) {
      setOutput("");
      return;
    }
    // Stringify wraps in quotes and escapes internal quotes, newlines, tabs, and backslashes
    const escaped = JSON.stringify(input);
    setOutput(escaped);
  };

  const handleUnescape = () => {
    if (!input.trim()) {
      setOutput("");
      return;
    }
    try {
      let toParse = input.trim();
      if (!toParse.startsWith('"')) toParse = `"${toParse}"`;
      const unescaped = JSON.parse(toParse);
      setOutput(unescaped);
    } catch {
      // Manual fallback unescaping
      const unescaped = input
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, "\\")
        .replace(/\\n/g, "\n")
        .replace(/\\r/g, "\r")
        .replace(/\\t/g, "\t");
      setOutput(unescaped);
    }
  };

  const handleProcess = () => {
    if (mode === "escape") {
      handleEscape();
    } else {
      handleUnescape();
    }
  };

  const handleSample = () => {
    if (mode === "escape") {
      setInput(SAMPLE_TEXT);
    } else {
      setInput('"Line 1: \\"Hello World\\"\\nLine 2: Special chars: / \\\\ \\t\\nJSON snippet: {\\"user\\": \\"Alice\\", \\"active\\": true}"');
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
              {mode === "escape" ? "Raw Text / String" : "Escaped JSON String"}
            </label>
            <div className={styles.headerActions}>
              <button
                className={`btn btn-sm ${mode === "escape" ? "btn-primary" : ""}`}
                onClick={() => setMode("escape")}
              >
                Escape
              </button>
              <button
                className={`btn btn-sm ${mode === "unescape" ? "btn-primary" : ""}`}
                onClick={() => setMode("unescape")}
              >
                Unescape
              </button>
            </div>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "escape"
                ? 'Type text with "quotes", newlines, and special characters...'
                : 'Paste escaped JSON string like "Hello \\"World\\"\\nNext line"...'
            }
            spellCheck={false}
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={handleProcess}>
              {mode === "escape" ? "🔣 Escape String" : "🔓 Unescape String"}
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
            <label className={styles.label}>
              {mode === "escape" ? "Escaped Output" : "Unescaped Output"}
            </label>
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
              Result will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
