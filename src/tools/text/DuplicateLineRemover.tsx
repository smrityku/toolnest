"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_LIST = `apple
banana
orange
Apple
grape
banana
watermelon
orange
strawberry
grape`;

export default function DuplicateLineRemover() {
  const tool = getToolBySlug("duplicate-line-remover")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [trimLines, setTrimLines] = useState(true);
  const [removeEmpty, setRemoveEmpty] = useState(true);
  const [sortOption, setSortOption] = useState<"none" | "asc" | "desc">("none");
  const [stats, setStats] = useState<{ orig: number; unique: number; removed: number } | null>(null);

  const processLines = () => {
    if (!input) {
      setOutput("");
      setStats(null);
      return;
    }

    let lines = input.split(/\r?\n/);
    const originalCount = lines.length;

    if (trimLines) {
      lines = lines.map((l) => l.trim());
    }

    if (removeEmpty) {
      lines = lines.filter((l) => l.length > 0);
    }

    const seen = new Set<string>();
    const uniqueLines: string[] = [];

    lines.forEach((line) => {
      const key = caseSensitive ? line : line.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        uniqueLines.push(line);
      }
    });

    if (sortOption === "asc") {
      uniqueLines.sort((a, b) => a.localeCompare(b));
    } else if (sortOption === "desc") {
      uniqueLines.sort((a, b) => b.localeCompare(a));
    }

    setOutput(uniqueLines.join("\n"));
    setStats({
      orig: originalCount,
      unique: uniqueLines.length,
      removed: originalCount - uniqueLines.length,
    });
  };

  const handleSample = () => {
    setInput(SAMPLE_LIST);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setStats(null);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Input Lines / List</label>
            <div className={styles.headerActions}>
              <select
                className="select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as "none" | "asc" | "desc")}
              >
                <option value="none">No Sorting</option>
                <option value="asc">Sort A &rarr; Z</option>
                <option value="desc">Sort Z &rarr; A</option>
              </select>
            </div>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste list of items/lines here..."
            spellCheck={false}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-4)",
              fontSize: "var(--text-xs)",
              color: "var(--text-secondary)",
              margin: "var(--space-2) 0",
            }}
          >
            <label style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={caseSensitive}
                onChange={(e) => setCaseSensitive(e.target.checked)}
              />
              Case sensitive
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={trimLines}
                onChange={(e) => setTrimLines(e.target.checked)}
              />
              Trim whitespace
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={removeEmpty}
                onChange={(e) => setRemoveEmpty(e.target.checked)}
              />
              Remove empty lines
            </label>
          </div>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={processLines}>
              🧹 Remove Duplicates
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
            <label className={styles.label}>Cleaned List</label>
            {output && (
              <div className={styles.headerActions}>
                <CopyButton text={output} />
              </div>
            )}
          </div>
          {stats && (
            <div
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--text-secondary)",
                padding: "var(--space-2) var(--space-3)",
                background: "var(--bg-secondary)",
                borderRadius: "var(--radius-md)",
                marginBottom: "var(--space-2)",
              }}
            >
              Original: <strong>{stats.orig}</strong> | Unique: <strong>{stats.unique}</strong> | Removed:{" "}
              <strong style={{ color: "var(--error)" }}>{stats.removed}</strong> duplicate lines
            </div>
          )}
          {output ? (
            <pre className={styles.outputPre}>
              <code>{output}</code>
            </pre>
          ) : (
            <div className={styles.placeholder}>
              Deduplicated list will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
