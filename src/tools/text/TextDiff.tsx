"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_ORIGINAL = `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}`;

const SAMPLE_MODIFIED = `function calculateTotal(items, taxRate = 0.08) {
  let subtotal = 0;
  for (const item of items) {
    subtotal += item.price;
  }
  return subtotal * (1 + taxRate);
}`;

interface DiffLine {
  type: "same" | "add" | "del";
  text: string;
  lineNumOrig?: number;
  lineNumMod?: number;
}

export default function TextDiff() {
  const tool = getToolBySlug("text-diff")!;
  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");
  const [diffResults, setDiffResults] = useState<DiffLine[] | null>(null);

  const computeDiff = () => {
    if (!original && !modified) {
      setDiffResults(null);
      return;
    }

    const origLines = original.split(/\r?\n/);
    const modLines = modified.split(/\r?\n/);
    const diffs: DiffLine[] = [];

    let i = 0;
    let j = 0;
    let lineO = 1;
    let lineM = 1;

    while (i < origLines.length || j < modLines.length) {
      if (i < origLines.length && j < modLines.length && origLines[i] === modLines[j]) {
        diffs.push({
          type: "same",
          text: origLines[i],
          lineNumOrig: lineO++,
          lineNumMod: lineM++,
        });
        i++;
        j++;
      } else if (
        j < modLines.length &&
        (i >= origLines.length || !origLines.slice(i).includes(modLines[j]))
      ) {
        diffs.push({
          type: "add",
          text: modLines[j],
          lineNumMod: lineM++,
        });
        j++;
      } else if (
        i < origLines.length &&
        (j >= modLines.length || !modLines.slice(j).includes(origLines[i]))
      ) {
        diffs.push({
          type: "del",
          text: origLines[i],
          lineNumOrig: lineO++,
        });
        i++;
      } else {
        diffs.push({
          type: "del",
          text: origLines[i],
          lineNumOrig: lineO++,
        });
        diffs.push({
          type: "add",
          text: modLines[j],
          lineNumMod: lineM++,
        });
        i++;
        j++;
      }
    }

    setDiffResults(diffs);
  };

  const handleSample = () => {
    setOriginal(SAMPLE_ORIGINAL);
    setModified(SAMPLE_MODIFIED);
  };

  const handleClear = () => {
    setOriginal("");
    setModified("");
    setDiffResults(null);
  };

  return (
    <ToolLayout tool={tool}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <div className={styles.toolGrid}>
          <div className={styles.inputSection}>
            <div className={styles.sectionHeader}>
              <label className={styles.label}>Original Text</label>
            </div>
            <textarea
              className="textarea"
              rows={8}
              value={original}
              onChange={(e) => setOriginal(e.target.value)}
              placeholder="Paste original revision here..."
              spellCheck={false}
            />
          </div>

          <div className={styles.inputSection}>
            <div className={styles.sectionHeader}>
              <label className={styles.label}>Modified Text</label>
            </div>
            <textarea
              className="textarea"
              rows={8}
              value={modified}
              onChange={(e) => setModified(e.target.value)}
              placeholder="Paste modified revision here..."
              spellCheck={false}
            />
          </div>
        </div>

        <div className="btn-group" style={{ alignSelf: "flex-start" }}>
          <button className="btn btn-primary" onClick={computeDiff}>
            🔀 Compare Diff
          </button>
          <button className="btn" onClick={handleSample}>
            📄 Sample
          </button>
          <button className="btn" onClick={handleClear}>
            🗑️ Clear
          </button>
        </div>

        {diffResults && (
          <div
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-primary)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-4)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              overflowX: "auto",
            }}
          >
            <div style={{ marginBottom: "var(--space-3)", fontWeight: 600, color: "var(--text-secondary)" }}>
              Diff Result:
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {diffResults.map((line, idx) => {
                let bgColor = "transparent";
                let textColor = "var(--text-primary)";
                let prefix = "  ";

                if (line.type === "add") {
                  bgColor = "rgba(34, 197, 94, 0.15)";
                  textColor = "var(--success)";
                  prefix = "+ ";
                } else if (line.type === "del") {
                  bgColor = "rgba(239, 68, 68, 0.15)";
                  textColor = "var(--error)";
                  prefix = "- ";
                }

                return (
                  <div
                    key={idx}
                    style={{
                      background: bgColor,
                      color: textColor,
                      padding: "2px 8px",
                      borderRadius: "2px",
                      whiteSpace: "pre-wrap",
                      display: "flex",
                      gap: "var(--space-3)",
                    }}
                  >
                    <span style={{ userSelect: "none", opacity: 0.6, width: "30px", textAlign: "right" }}>
                      {line.lineNumOrig ?? ""}
                    </span>
                    <span style={{ userSelect: "none", opacity: 0.6, width: "30px", textAlign: "right" }}>
                      {line.lineNumMod ?? ""}
                    </span>
                    <span>
                      {prefix}
                      {line.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
