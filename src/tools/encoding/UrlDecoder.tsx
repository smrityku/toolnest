"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

export default function UrlDecoder() {
  const tool = getToolBySlug("url-decoder")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const decode = useCallback((text: string) => {
    if (!text.trim()) {
      setOutput("");
      setError("");
      return;
    }
    try {
      setOutput(decodeURIComponent(text));
      setError("");
    } catch (e) {
      setError(`Decoding error: ${(e as Error).message}`);
      setOutput("");
    }
  }, []);

  const handleInputChange = (value: string) => {
    setInput(value);
    decode(value);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>URL-Encoded Text</label>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Paste URL-encoded text here to decode...\n\nExample: Hello%20World%21"
            spellCheck={false}
            id="url-decode-input"
          />
          <button className="btn" onClick={() => { setInput(""); setOutput(""); setError(""); }}>
            🗑️ Clear
          </button>
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Decoded Text</label>
            {output && <CopyButton text={output} />}
          </div>
          {error && <div className={styles.errorBox}>{error}</div>}
          {output ? (
            <div className={styles.liveOutput}>{output}</div>
          ) : (
            <div className={styles.placeholder}>
              Decoded text will appear here as you type...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
