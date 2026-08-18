"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_JSON = `[
  {
    "id": 1,
    "name": "Alice Smith",
    "email": "alice@example.com",
    "role": "Engineer",
    "city": "San Francisco"
  },
  {
    "id": 2,
    "name": "Bob Johnson",
    "email": "bob@example.com",
    "role": "Designer",
    "city": "New York"
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "email": "charlie@example.com",
    "role": "Product Manager",
    "city": "Austin"
  }
]`;

export default function JsonToCsv() {
  const tool = getToolBySlug("json-to-csv")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [delimiter, setDelimiter] = useState(",");

  const convertJsonToCsv = () => {
    if (!input.trim()) {
      setError("Please paste a JSON array to convert.");
      setOutput("");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const array = Array.isArray(parsed) ? parsed : [parsed];

      if (array.length === 0) {
        setError("JSON array is empty.");
        setOutput("");
        return;
      }

      // Collect all unique keys across all objects
      const headersSet = new Set<string>();
      array.forEach((item) => {
        if (item && typeof item === "object") {
          Object.keys(item).forEach((k) => headersSet.add(k));
        }
      });

      const headers = Array.from(headersSet);
      if (headers.length === 0) {
        setError("Could not extract any properties from the provided JSON.");
        setOutput("");
        return;
      }

      const escapeField = (val: unknown): string => {
        if (val === null || val === undefined) return "";
        let str = typeof val === "object" ? JSON.stringify(val) : String(val);
        if (str.includes(delimiter) || str.includes('"') || str.includes("\n") || str.includes("\r")) {
          str = `"${str.replace(/"/g, '""')}"`;
        }
        return str;
      };

      const csvRows: string[] = [];
      csvRows.push(headers.map(escapeField).join(delimiter));

      array.forEach((item) => {
        if (item && typeof item === "object") {
          const row = headers.map((header) =>
            escapeField((item as Record<string, unknown>)[header])
          );
          csvRows.push(row.join(delimiter));
        }
      });

      setOutput(csvRows.join("\n"));
      setError("");
    } catch (e) {
      setError(`Invalid JSON: ${(e as Error).message}`);
      setOutput("");
    }
  };

  const handleSample = () => {
    setInput(SAMPLE_JSON);
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
    const blob = new Blob([output], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "export.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Input JSON Array</label>
            <div className={styles.headerActions}>
              <select
                className="select"
                value={delimiter}
                onChange={(e) => setDelimiter(e.target.value)}
              >
                <option value=",">Comma (,)</option>
                <option value=";">Semicolon (;)</option>
                <option value="&#9;">Tab (\t)</option>
              </select>
            </div>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste JSON array here...\n\nExample: [{"id": 1, "name": "Item"}]'
            spellCheck={false}
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={convertJsonToCsv}>
              📑 Convert to CSV
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
            <label className={styles.label}>CSV Output</label>
            {output && (
              <div className={styles.headerActions}>
                <CopyButton text={output} />
                <button className="btn btn-sm" onClick={handleDownload}>
                  💾 Download .csv
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
              CSV spreadsheet data will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
