"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_CSV = `id,name,email,role,isActive
1,Alice Smith,alice@example.com,Engineer,true
2,Bob Johnson,bob@example.com,Designer,false
3,Charlie Brown,charlie@example.com,Product Manager,true`;

export default function CsvToJson() {
  const tool = getToolBySlug("csv-to-json")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [delimiter, setDelimiter] = useState(",");
  const [indent, setIndent] = useState(2);

  const parseCsvLine = (line: string, delim: string): string[] => {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === delim && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  };

  const convertCsvToJson = () => {
    if (!input.trim()) {
      setError("Please paste CSV text to convert.");
      setOutput("");
      return;
    }

    try {
      const lines = input
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter((l) => l.length > 0);

      if (lines.length < 2) {
        setError("CSV must contain at least one header line and one data row.");
        setOutput("");
        return;
      }

      const headers = parseCsvLine(lines[0], delimiter);
      const jsonArray: Record<string, unknown>[] = [];

      for (let i = 1; i < lines.length; i++) {
        const values = parseCsvLine(lines[i], delimiter);
        const item: Record<string, unknown> = {};

        headers.forEach((header, idx) => {
          const rawVal = values[idx] ?? "";
          if (rawVal.toLowerCase() === "true") item[header] = true;
          else if (rawVal.toLowerCase() === "false") item[header] = false;
          else if (rawVal !== "" && !isNaN(Number(rawVal)) && !isNaN(parseFloat(rawVal))) {
            item[header] = Number(rawVal);
          } else {
            item[header] = rawVal;
          }
        });

        jsonArray.push(item);
      }

      setOutput(JSON.stringify(jsonArray, null, indent));
      setError("");
    } catch (e) {
      setError(`Failed to parse CSV: ${(e as Error).message}`);
      setOutput("");
    }
  };

  const handleSample = () => {
    setInput(SAMPLE_CSV);
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
    a.download = "converted.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Input CSV Data</label>
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
              <select
                className="select"
                value={indent}
                onChange={(e) => setIndent(Number(e.target.value))}
              >
                <option value={2}>2 spaces</option>
                <option value={4}>4 spaces</option>
                <option value={0}>Minified</option>
              </select>
            </div>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="id,name,role\n1,Alice,Developer\n2,Bob,Designer"
            spellCheck={false}
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={convertCsvToJson}>
              🔄 Convert to JSON
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
            <label className={styles.label}>JSON Output</label>
            {output && (
              <div className={styles.headerActions}>
                <CopyButton text={output} />
                <button className="btn btn-sm" onClick={handleDownload}>
                  💾 Download .json
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
              Converted JSON array will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
