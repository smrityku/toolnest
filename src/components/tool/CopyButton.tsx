"use client";

import { useState, useCallback } from "react";
import styles from "./CopyButton.module.css";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      className={`btn btn-sm ${styles.copyBtn} ${copied ? styles.copied : ""}`}
      onClick={handleCopy}
      aria-label={copied ? "Copied!" : label}
    >
      {copied ? (
        <>
          <span className={styles.checkmark}>✓</span> Copied!
        </>
      ) : (
        <>
          <span className={styles.icon}>📋</span> {label}
        </>
      )}
    </button>
  );
}
