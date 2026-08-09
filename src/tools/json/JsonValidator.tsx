"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

export default function JsonValidator() {
  const tool = getToolBySlug("json-validator")!;
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{
    valid: boolean;
    message: string;
  } | null>(null);

  const handleValidate = () => {
    if (!input.trim()) {
      setResult({ valid: false, message: "Please enter some JSON to validate." });
      return;
    }
    try {
      JSON.parse(input);
      setResult({ valid: true, message: "✅ Valid JSON! The syntax is correct." });
    } catch (e) {
      const msg = (e as Error).message;
      setResult({ valid: false, message: `❌ Invalid JSON: ${msg}` });
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.singleColumn}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>JSON to Validate</label>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => { setInput(e.target.value); setResult(null); }}
            placeholder="Paste your JSON here to validate..."
            spellCheck={false}
            id="json-validate-input"
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={handleValidate} id="validate-btn">
              ✓ Validate
            </button>
            <button className="btn" onClick={handleClear}>
              🗑️ Clear
            </button>
          </div>
        </div>

        {result && (
          <div className={result.valid ? styles.successBox : styles.errorBox}>
            {result.message}
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
