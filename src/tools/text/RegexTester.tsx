"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_PATTERN = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";
const SAMPLE_TEXT = `Customer Contacts:
1. Primary Support: support@toolnest.dev
2. Billing Dept: billing.team@payments.example.com
3. Invalid Address: invalid_user@@domain..com
4. Lead Engineer: alex_smith99@engineering.org`;

export default function RegexTester() {
  const tool = getToolBySlug("regex-tester")!;
  const [pattern, setPattern] = useState(SAMPLE_PATTERN);
  const [flags, setFlags] = useState({ g: true, i: true, m: true, s: false });
  const [testText, setTestText] = useState(SAMPLE_TEXT);

  const matches: { match: string; index: number; groups?: string[] }[] = [];
  let error = "";

  try {
    if (pattern) {
      const flagStr =
        (flags.g ? "g" : "") +
        (flags.i ? "i" : "") +
        (flags.m ? "m" : "") +
        (flags.s ? "s" : "");
      const regex = new RegExp(pattern, flagStr);

      if (flags.g) {
        let m;
        let count = 0;
        while ((m = regex.exec(testText)) !== null && count < 500) {
          matches.push({
            match: m[0],
            index: m.index,
            groups: m.slice(1),
          });
          count++;
          if (!regex.global) break;
        }
      } else {
        const m = regex.exec(testText);
        if (m) {
          matches.push({
            match: m[0],
            index: m.index,
            groups: m.slice(1),
          });
        }
      }
    }
  } catch (e) {
    error = (e as Error).message;
  }

  return (
    <ToolLayout tool={tool}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        {/* Pattern & Flags Row */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-2)",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-primary)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-4)",
          }}
        >
          <label style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-tertiary)" }}>
            Regular Expression Pattern
          </label>
          <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-lg)", color: "var(--text-tertiary)" }}>
              /
            </span>
            <input
              type="text"
              className="input"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="e.g. [a-z0-9]+"
              style={{ fontFamily: "var(--font-mono)" }}
            />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-lg)", color: "var(--text-tertiary)" }}>
              /
            </span>
          </div>

          <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-2)", fontSize: "var(--text-xs)" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={flags.g}
                onChange={(e) => setFlags({ ...flags, g: e.target.checked })}
              />
              <strong>g</strong> (global)
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={flags.i}
                onChange={(e) => setFlags({ ...flags, i: e.target.checked })}
              />
              <strong>i</strong> (ignore case)
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={flags.m}
                onChange={(e) => setFlags({ ...flags, m: e.target.checked })}
              />
              <strong>m</strong> (multiline)
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={flags.s}
                onChange={(e) => setFlags({ ...flags, s: e.target.checked })}
              />
              <strong>s</strong> (dotAll)
            </label>
          </div>
        </div>

        {error && <div className={styles.errorBox}>Regex Error: {error}</div>}

        {/* Input & Matches Split */}
        <div className={styles.toolGrid}>
          <div className={styles.inputSection}>
            <div className={styles.sectionHeader}>
              <label className={styles.label}>Test Text</label>
            </div>
            <textarea
              className="textarea"
              rows={8}
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Paste test string to evaluate against regex..."
              spellCheck={false}
            />
          </div>

          <div className={styles.outputSection}>
            <div className={styles.sectionHeader}>
              <label className={styles.label}>
                Match Breakdown ({matches.length} {matches.length === 1 ? "match" : "matches"})
              </label>
            </div>

            {matches.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                {matches.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-primary)",
                      borderRadius: "var(--radius-md)",
                      padding: "var(--space-3)",
                      fontSize: "var(--text-xs)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                      <span style={{ fontWeight: 600, color: "var(--accent-primary)" }}>Match #{idx + 1}</span>
                      <span style={{ color: "var(--text-tertiary)" }}>Index: {m.index}</span>
                    </div>
                    <pre
                      style={{
                        background: "rgba(var(--accent-primary-rgb), 0.1)",
                        color: "var(--text-primary)",
                        padding: "4px 8px",
                        borderRadius: "var(--radius-sm)",
                        fontFamily: "var(--font-mono)",
                        margin: "4px 0 0 0",
                      }}
                    >
                      <code>{m.match}</code>
                    </pre>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.placeholder}>
                {pattern ? "No matches found." : "Enter a regex pattern to see matches."}
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
