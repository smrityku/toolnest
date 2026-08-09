"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const LIMITS = [
  { name: "Twitter/X", limit: 280 },
  { name: "SMS", limit: 160 },
  { name: "Meta Description", limit: 155 },
  { name: "Instagram Caption", limit: 2200 },
  { name: "YouTube Title", limit: 100 },
  { name: "Facebook Post", limit: 63206 },
];

export default function CharacterCounter() {
  const tool = getToolBySlug("character-counter")!;
  const [text, setText] = useState("");

  const charCount = text.length;
  const charNoSpaces = text.replace(/\s/g, "").length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <ToolLayout tool={tool}>
      <div className={styles.singleColumn}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{charCount}</div>
            <div className={styles.statLabel}>Characters</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{charNoSpaces}</div>
            <div className={styles.statLabel}>Without Spaces</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{wordCount}</div>
            <div className={styles.statLabel}>Words</div>
          </div>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Your Text</label>
            <button className="btn btn-sm" onClick={() => setText("")}>
              🗑️ Clear
            </button>
          </div>
          <textarea
            className="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing to count characters..."
            style={{ minHeight: "250px" }}
            id="char-counter-input"
          />
        </div>

        <div>
          <h3 className={styles.label} style={{ marginBottom: "var(--space-4)" }}>
            Platform Character Limits
          </h3>
          {LIMITS.map((limit) => {
            const percent = Math.min((charCount / limit.limit) * 100, 100);
            const isOver = charCount > limit.limit;
            return (
              <div key={limit.name} className={styles.limitBar}>
                <div className={styles.limitHeader}>
                  <span className={styles.limitLabel}>{limit.name}</span>
                  <span className={styles.limitCount}>
                    {charCount} / {limit.limit.toLocaleString()}
                  </span>
                </div>
                <div className={styles.limitTrack}>
                  <div
                    className={`${styles.limitFill} ${isOver ? styles.limitOver : ""}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ToolLayout>
  );
}
