"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_JSON = `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001"
  },
  "hobbies": ["reading", "coding", "hiking"],
  "isActive": true,
  "scores": [95, 87, 92, 78, 100]
}`;

export default function JsonFormatter() {
  const tool = getToolBySlug("json-formatter")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);

  const handleFormat = () => {
    if (!input.trim()) {
      setError("Please enter some JSON to format.");
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indent);
      setOutput(formatted);
      setError("");
    } catch (e) {
      setError(`Invalid JSON: ${(e as Error).message}`);
      setOutput("");
    }
  };

  const handleSample = () => {
    setInput(JSON.stringify(JSON.parse(SAMPLE_JSON)));
    setError("");
    setOutput("");
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Input JSON</label>
            <div className={styles.headerActions}>
              <select
                className="select"
                value={indent}
                onChange={(e) => setIndent(Number(e.target.value))}
              >
                <option value={2}>2 spaces</option>
                <option value={4}>4 spaces</option>
                <option value={8}>Tab (8)</option>
              </select>
            </div>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste your JSON here...\n\nExample: {"name": "John", "age": 30}'
            spellCheck={false}
            id="json-input"
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={handleFormat} id="format-btn">
              ✨ Format
            </button>
            <button className="btn" onClick={handleSample} id="sample-btn">
              📄 Sample
            </button>
            <button className="btn" onClick={handleClear} id="clear-btn">
              🗑️ Clear
            </button>
          </div>
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Formatted Output</label>
            {output && (
              <div className={styles.headerActions}>
                <CopyButton text={output} />
                <button className="btn btn-sm" onClick={handleDownload}>
                  💾 Download
                </button>
              </div>
            )}
          </div>
          {error && <div className={styles.errorBox}>{error}</div>}
          {output && (
            <pre className={styles.outputPre}>
              <code>{output}</code>
            </pre>
          )}
          {!output && !error && (
            <div className={styles.placeholder}>
              Formatted JSON will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
