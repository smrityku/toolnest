"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_YAML = `version: "3.8"
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    environment:
      NODE_ENV: production
    restart: always
  database:
    image: postgres:15
    environment:
      POSTGRES_DB: toolnest_db
      POSTGRES_USER: admin`;

export default function YamlFormatter() {
  const tool = getToolBySlug("yaml-formatter")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatYaml = () => {
    if (!input.trim()) {
      setError("Please paste YAML content to format.");
      setOutput("");
      return;
    }

    try {
      const lines = input.split(/\r?\n/);
      const cleanedLines: string[] = [];

      lines.forEach((line) => {
        // Detect tab indentation which is illegal in YAML
        if (/^\t+/.test(line)) {
          throw new Error("YAML does not allow tab indentation. Please use 2 spaces instead.");
        }
        // Trim trailing whitespace
        cleanedLines.push(line.trimEnd());
      });

      // Remove trailing blank lines
      while (cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1] === "") {
        cleanedLines.pop();
      }

      setOutput(cleanedLines.join("\n"));
      setError("");
    } catch (e) {
      setError(`YAML Error: ${(e as Error).message}`);
      setOutput("");
    }
  };

  const handleSample = () => {
    setInput(SAMPLE_YAML);
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
    const blob = new Blob([output], { type: "text/yaml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "config.yaml";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Input YAML Configuration</label>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste YAML content here..."
            spellCheck={false}
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={formatYaml}>
              📜 Format &amp; Validate
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
            <label className={styles.label}>Cleaned YAML</label>
            {output && (
              <div className={styles.headerActions}>
                <CopyButton text={output} />
                <button className="btn btn-sm" onClick={handleDownload}>
                  💾 Download .yaml
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
              Formatted YAML will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
