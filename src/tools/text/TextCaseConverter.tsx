"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_TEXT = "user account balance status";

export default function TextCaseConverter() {
  const tool = getToolBySlug("text-case-converter")!;
  const [input, setInput] = useState("");

  const toWords = (str: string): string[] => {
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[_\-./\\]+/g, " ")
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 0);
  };

  const toCamelCase = (str: string) => {
    const words = toWords(str);
    return words
      .map((w, i) =>
        i === 0
          ? w.toLowerCase()
          : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
      )
      .join("");
  };

  const toPascalCase = (str: string) => {
    const words = toWords(str);
    return words
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join("");
  };

  const toSnakeCase = (str: string) => {
    const words = toWords(str);
    return words.map((w) => w.toLowerCase()).join("_");
  };

  const toConstantCase = (str: string) => {
    const words = toWords(str);
    return words.map((w) => w.toUpperCase()).join("_");
  };

  const toKebabCase = (str: string) => {
    const words = toWords(str);
    return words.map((w) => w.toLowerCase()).join("-");
  };

  const toTitleCase = (str: string) => {
    return str.replace(/\b\w/g, (txt) => txt.toUpperCase());
  };

  const toSentenceCase = (str: string) => {
    return str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
  };

  const toAlternatingCase = (str: string) => {
    return str
      .split("")
      .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
      .join("");
  };

  const transformations = [
    { label: "camelCase", value: input ? toCamelCase(input) : "" },
    { label: "PascalCase", value: input ? toPascalCase(input) : "" },
    { label: "snake_case", value: input ? toSnakeCase(input) : "" },
    { label: "kebab-case", value: input ? toKebabCase(input) : "" },
    { label: "CONSTANT_CASE", value: input ? toConstantCase(input) : "" },
    { label: "UPPERCASE", value: input ? input.toUpperCase() : "" },
    { label: "lowercase", value: input ? input.toLowerCase() : "" },
    { label: "Title Case", value: input ? toTitleCase(input) : "" },
    { label: "Sentence case", value: input ? toSentenceCase(input) : "" },
    { label: "aLtErNaTiNg", value: input ? toAlternatingCase(input) : "" },
  ];

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Input Text / String</label>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste words, phrases, or code identifiers here..."
            spellCheck={false}
          />
          <div className="btn-group">
            <button className="btn" onClick={() => setInput(SAMPLE_TEXT)}>
              📄 Sample
            </button>
            <button className="btn" onClick={() => setInput("")}>
              🗑️ Clear
            </button>
          </div>
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Converted Case Variants</label>
          </div>
          {input ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {transformations.map((t) => (
                <div
                  key={t.label}
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-primary)",
                    borderRadius: "var(--radius-md)",
                    padding: "var(--space-3) var(--space-4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "var(--space-3)",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span
                      style={{
                        display: "block",
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        color: "var(--text-tertiary)",
                        marginBottom: "2px",
                      }}
                    >
                      {t.label}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-sm)",
                        color: "var(--text-primary)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t.value}
                    </span>
                  </div>
                  <CopyButton text={t.value} />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.placeholder}>
              Case variations will be computed automatically as you type...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
