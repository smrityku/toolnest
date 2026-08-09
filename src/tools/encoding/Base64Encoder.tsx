"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

export default function Base64Encoder() {
  const tool = getToolBySlug("base64-encoder")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encode = useCallback((text: string) => {
    if (!text) {
      setOutput("");
      setError("");
      return;
    }
    try {
      const encoded = btoa(
        new TextEncoder()
          .encode(text)
          .reduce((data, byte) => data + String.fromCharCode(byte), "")
      );
      setOutput(encoded);
      setError("");
    } catch (e) {
      setError(`Encoding error: ${(e as Error).message}`);
      setOutput("");
    }
  }, []);

  const handleInputChange = (value: string) => {
    setInput(value);
    encode(value);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Text to Encode</label>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Type or paste text here to encode to Base64..."
            id="base64-encode-input"
          />
          <button className="btn" onClick={() => { setInput(""); setOutput(""); setError(""); }}>
            🗑️ Clear
          </button>
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Base64 Output</label>
            {output && <CopyButton text={output} />}
          </div>
          {error && <div className={styles.errorBox}>{error}</div>}
          {output ? (
            <div className={styles.liveOutput}>{output}</div>
          ) : (
            <div className={styles.placeholder}>
              Base64 encoded output will appear here as you type...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
