"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

export default function UrlEncoder() {
  const tool = getToolBySlug("url-encoder")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = useCallback((text: string) => {
    if (!text) {
      setOutput("");
      return;
    }
    setOutput(encodeURIComponent(text));
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
            placeholder="Type or paste text here to URL-encode...\n\nExample: Hello World! How are you?"
            id="url-encode-input"
          />
          <button className="btn" onClick={() => { setInput(""); setOutput(""); }}>
            🗑️ Clear
          </button>
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>URL-Encoded Output</label>
            {output && <CopyButton text={output} />}
          </div>
          {output ? (
            <div className={styles.liveOutput}>{output}</div>
          ) : (
            <div className={styles.placeholder}>
              URL-encoded output will appear here as you type...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
