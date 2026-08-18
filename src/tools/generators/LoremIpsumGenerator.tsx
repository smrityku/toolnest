"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum"
];

function generateSentence(): string {
  const len = Math.floor(Math.random() * 10) + 8;
  const words: string[] = [];
  for (let i = 0; i < len; i++) {
    const w = LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
    words.push(i === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w);
  }
  return words.join(" ") + ".";
}

function generateParagraph(): string {
  const sentenceCount = Math.floor(Math.random() * 4) + 4;
  const sentences: string[] = [];
  for (let i = 0; i < sentenceCount; i++) {
    sentences.push(generateSentence());
  }
  return sentences.join(" ");
}

export default function LoremIpsumGenerator() {
  const tool = getToolBySlug("lorem-ipsum-generator")!;
  const [count, setCount] = useState(3);
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [startWithClassic, setStartWithClassic] = useState(true);
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    let result = "";
    if (type === "paragraphs") {
      const paras: string[] = [];
      for (let i = 0; i < count; i++) {
        let p = generateParagraph();
        if (i === 0 && startWithClassic) {
          p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " + p;
        }
        paras.push(p);
      }
      result = paras.join("\n\n");
    } else if (type === "sentences") {
      const sentences: string[] = [];
      for (let i = 0; i < count; i++) {
        sentences.push(generateSentence());
      }
      if (startWithClassic && sentences.length > 0) {
        sentences[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      }
      result = sentences.join(" ");
    } else {
      const words: string[] = [];
      for (let i = 0; i < count; i++) {
        words.push(LOREM_WORDS[i % LOREM_WORDS.length]);
      }
      result = words.join(" ");
    }
    setOutput(result);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Generation Settings</label>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <div style={{ display: "flex", gap: "var(--space-3)" }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)", display: "block", marginBottom: "4px" }}>
                  Unit
                </label>
                <select
                  className="select"
                  value={type}
                  onChange={(e) => setType(e.target.value as "paragraphs" | "sentences" | "words")}
                >
                  <option value="paragraphs">Paragraphs</option>
                  <option value="sentences">Sentences</option>
                  <option value="words">Words</option>
                </select>
              </div>

              <div style={{ width: "100px" }}>
                <label style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)", display: "block", marginBottom: "4px" }}>
                  Quantity
                </label>
                <input
                  type="number"
                  min={1}
                  max={100}
                  className="input"
                  value={count}
                  onChange={(e) => setCount(Math.max(1, Math.min(100, Number(e.target.value))))}
                />
              </div>
            </div>

            <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-xs)", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={startWithClassic}
                onChange={(e) => setStartWithClassic(e.target.checked)}
              />
              Start with &quot;Lorem ipsum dolor sit amet...&quot;
            </label>

            <button className="btn btn-primary" onClick={handleGenerate} style={{ alignSelf: "flex-start" }}>
              📄 Generate Lorem Ipsum
            </button>
          </div>
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Generated Placeholder Text</label>
            {output && (
              <div className={styles.headerActions}>
                <CopyButton text={output} />
              </div>
            )}
          </div>

          {output ? (
            <div
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                padding: "var(--space-4)",
                fontSize: "var(--text-sm)",
                lineHeight: "var(--leading-relaxed)",
                whiteSpace: "pre-wrap",
                color: "var(--text-primary)",
                maxHeight: "350px",
                overflowY: "auto",
              }}
            >
              {output}
            </div>
          ) : (
            <div className={styles.placeholder}>
              Click generate to create placeholder copy...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
