"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_JWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyXzEyMzQ1Njc4OTAiLCJuYW1lIjoiQWxleCBKb2huc29uIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhbGV4QGV4YW1wbGUuY29tIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE5ODcyMzkwMjJ9.4e9g4yWJm7c8VvW24xYQ3iJ7-4pIe8zR9V1s3yWJm7c`;

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  return decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
}

export default function JwtDecoder() {
  const tool = getToolBySlug("jwt-decoder")!;
  const [input, setInput] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [expDate, setExpDate] = useState<string | null>(null);
  const [isExpired, setIsExpired] = useState<boolean | null>(null);

  const decodeJwt = () => {
    if (!input.trim()) {
      setError("Please paste a JSON Web Token to decode.");
      setHeader("");
      setPayload("");
      setSignature("");
      setExpDate(null);
      return;
    }

    try {
      const token = input.trim().replace(/^Bearer\s+/i, "");
      const parts = token.split(".");

      if (parts.length !== 3) {
        setError("Invalid JWT format: A valid token must contain 3 dot-separated parts (Header.Payload.Signature).");
        setHeader("");
        setPayload("");
        setSignature("");
        setExpDate(null);
        return;
      }

      const decodedHeader = JSON.parse(base64UrlDecode(parts[0]));
      const decodedPayload = JSON.parse(base64UrlDecode(parts[1]));

      setHeader(JSON.stringify(decodedHeader, null, 2));
      setPayload(JSON.stringify(decodedPayload, null, 2));
      setSignature(parts[2]);
      setError("");

      if (decodedPayload.exp && typeof decodedPayload.exp === "number") {
        const expTimeMs = decodedPayload.exp * 1000;
        const dateObj = new Date(expTimeMs);
        setExpDate(dateObj.toUTCString());
        setIsExpired(Date.now() > expTimeMs);
      } else {
        setExpDate(null);
        setIsExpired(null);
      }
    } catch (e) {
      setError(`Failed to decode JWT: ${(e as Error).message}`);
      setHeader("");
      setPayload("");
      setSignature("");
      setExpDate(null);
    }
  };

  const handleSample = () => {
    setInput(SAMPLE_JWT);
    setError("");
  };

  const handleClear = () => {
    setInput("");
    setHeader("");
    setPayload("");
    setSignature("");
    setError("");
    setExpDate(null);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Encoded JWT Token</label>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JWT here (Bearer eyJhbGci...)"
            spellCheck={false}
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={decodeJwt}>
              🪪 Decode JWT
            </button>
            <button className="btn" onClick={handleSample}>
              📄 Sample
            </button>
            <button className="btn" onClick={handleClear}>
              🗑️ Clear
            </button>
          </div>
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Decoded Token Details</label>
          </div>

          {error && <div className={styles.errorBox}>{error}</div>}

          {payload && (
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              <div
                style={{
                  padding: "var(--space-3) var(--space-4)",
                  background: "rgba(59, 130, 246, 0.08)",
                  border: "1px solid rgba(59, 130, 246, 0.25)",
                  borderRadius: "var(--radius-md)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-secondary)",
                  lineHeight: "var(--leading-normal)",
                }}
              >
                🔒 <strong>Browser-Only Decoding:</strong> This tool parses Base64URL claims client-side. Decoding does not verify the cryptographic signature against your secret key or OAuth JWKS endpoint.
              </div>
              {expDate && (
                <div
                  style={{
                    padding: "var(--space-3) var(--space-4)",
                    background: isExpired ? "rgba(239, 68, 68, 0.1)" : "rgba(34, 197, 94, 0.1)",
                    border: `1px solid ${isExpired ? "rgba(239, 68, 68, 0.3)" : "rgba(34, 197, 94, 0.3)"}`,
                    borderRadius: "var(--radius-md)",
                    fontSize: "var(--text-xs)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <strong>Expiration (exp):</strong> {expDate}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: isExpired ? "var(--error, #ef4444)" : "var(--success, #22c55e)",
                    }}
                  >
                    {isExpired ? "🔴 EXPIRED" : "🟢 ACTIVE"}
                  </span>
                </div>
              )}

              <div>
                <div className={styles.sectionHeader}>
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-secondary)" }}>
                    HEADER: Algorithm &amp; Token Type
                  </span>
                  <CopyButton text={header} />
                </div>
                <pre className={styles.outputPre}>
                  <code>{header}</code>
                </pre>
              </div>

              <div>
                <div className={styles.sectionHeader}>
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-secondary)" }}>
                    PAYLOAD: Data Claims
                  </span>
                  <CopyButton text={payload} />
                </div>
                <pre className={styles.outputPre}>
                  <code>{payload}</code>
                </pre>
              </div>

              <div>
                <div className={styles.sectionHeader}>
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-secondary)" }}>
                    SIGNATURE
                  </span>
                  <CopyButton text={signature} />
                </div>
                <pre className={styles.outputPre} style={{ maxHeight: "70px" }}>
                  <code>{signature}</code>
                </pre>
              </div>
            </div>
          )}

          {!payload && !error && (
            <div className={styles.placeholder}>
              Decoded Header and Payload claims will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
