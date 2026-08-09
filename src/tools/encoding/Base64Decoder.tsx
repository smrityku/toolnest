"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

export default function Base64Decoder() {
  const tool = getToolBySlug("base64-decoder")!;
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
      const binaryString = atob(text.trim());
      const bytes = Uint8Array.from(binaryString, (c) => c.charCodeAt(0));
      const decoded = new TextDecoder().decode(bytes);
      setOutput(decoded);
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
            <label className={styles.label}>Base64 to Decode</label>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Paste Base64 encoded text here to decode..."
            spellCheck={false}
            id="base64-decode-input"
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
