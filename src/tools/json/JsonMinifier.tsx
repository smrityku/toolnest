"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

export default function JsonMinifier() {
  const tool = getToolBySlug("json-minifier")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [savings, setSavings] = useState<{ original: number; minified: number } | null>(null);

  const handleMinify = () => {
    if (!input.trim()) {
      setError("Please enter some JSON to minify.");
      setOutput("");
      setSavings(null);
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError("");
      setSavings({
        original: new Blob([input]).size,
        minified: new Blob([minified]).size,
      });
    } catch (e) {
      setError(`Invalid JSON: ${(e as Error).message}`);
      setOutput("");
      setSavings(null);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
    setSavings(null);
  };

  const savingsPercent = savings
    ? Math.round((1 - savings.minified / savings.original) * 100)
    : 0;

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Input JSON</label>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste formatted JSON here to minify..."
            spellCheck={false}
            id="json-minify-input"
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={handleMinify} id="minify-btn">
              ▪ Minify
            </button>
            <button className="btn" onClick={handleClear}>
              🗑️ Clear
            </button>
          </div>
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Minified Output</label>
            {output && <CopyButton text={output} />}
          </div>
          {error && <div className={styles.errorBox}>{error}</div>}
          {savings && (
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{savings.original}B</div>
                <div className={styles.statLabel}>Original</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{savings.minified}B</div>
                <div className={styles.statLabel}>Minified</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{savingsPercent}%</div>
                <div className={styles.statLabel}>Saved</div>
              </div>
            </div>
          )}
          {output && (
            <pre className={styles.outputPre}>
              <code>{output}</code>
            </pre>
          )}
          {!output && !error && (
            <div className={styles.placeholder}>
              Minified JSON will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
