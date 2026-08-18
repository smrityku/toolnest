"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_URL = "https://developer.example.com:8443/v2/api/products/search?category=laptops&sort=price_asc&in_stock=true&tags=portable&tags=usb-c#specifications";

interface ParsedUrlData {
  protocol: string;
  hostname: string;
  port: string;
  pathname: string;
  hash: string;
  origin: string;
  params: { key: string; value: string }[];
}

export default function UrlParser() {
  const tool = getToolBySlug("url-parser")!;
  const [input, setInput] = useState(SAMPLE_URL);
  const [parsed, setParsed] = useState<ParsedUrlData | null>(null);
  const [error, setError] = useState("");

  const handleParse = () => {
    if (!input.trim()) {
      setParsed(null);
      setError("");
      return;
    }

    try {
      let raw = input.trim();
      if (!raw.includes("://")) {
        raw = "https://" + raw;
      }

      const urlObj = new URL(raw);
      const paramsList: { key: string; value: string }[] = [];
      urlObj.searchParams.forEach((value, key) => {
        paramsList.push({ key, value });
      });

      setParsed({
        protocol: urlObj.protocol,
        hostname: urlObj.hostname,
        port: urlObj.port || "(default)",
        pathname: urlObj.pathname,
        hash: urlObj.hash || "(none)",
        origin: urlObj.origin,
        params: paramsList,
      });
      setError("");
    } catch (e) {
      setError(`Invalid URL: ${(e as Error).message}`);
      setParsed(null);
    }
  };

  return (
    <ToolLayout tool={tool}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        {/* Input Bar */}
        <div
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-primary)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-4)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
        >
          <label style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-tertiary)" }}>
            Enter URL to Analyze
          </label>
          <input
            type="text"
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="https://example.com/path?param=value#hash"
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={handleParse}>
              🌐 Parse URL
            </button>
            <button className="btn" onClick={() => setInput(SAMPLE_URL)}>
              📄 Sample
            </button>
            <button className="btn" onClick={() => { setInput(""); setParsed(null); setError(""); }}>
              🗑️ Clear
            </button>
          </div>
        </div>

        {error && <div className={styles.errorBox}>{error}</div>}

        {parsed && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {/* Component Summary Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--space-3)",
              }}
            >
              {[
                { label: "Protocol", val: parsed.protocol },
                { label: "Hostname", val: parsed.hostname },
                { label: "Port", val: parsed.port },
                { label: "Pathname", val: parsed.pathname },
                { label: "Fragment / Hash", val: parsed.hash },
                { label: "Origin", val: parsed.origin },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-primary)",
                    borderRadius: "var(--radius-md)",
                    padding: "var(--space-3) var(--space-4)",
                  }}
                >
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)", fontWeight: 600, display: "block" }}>
                    {item.label}
                  </span>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--text-primary)", wordBreak: "break-all", marginTop: "2px" }}>
                    {item.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Query Parameters Table */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-5)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 600 }}>
                  Query Parameters ({parsed.params.length})
                </h3>
                {parsed.params.length > 0 && (
                  <CopyButton text={JSON.stringify(Object.fromEntries(parsed.params.map(p => [p.key, p.value])), null, 2)} />
                )}
              </div>

              {parsed.params.length > 0 ? (
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "var(--text-xs)", textAlign: "left" }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--border-primary)", color: "var(--text-tertiary)" }}>
                        <th style={{ padding: "8px 12px" }}>Key</th>
                        <th style={{ padding: "8px 12px" }}>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parsed.params.map((p, idx) => (
                        <tr key={idx} style={{ borderBottom: "1px solid var(--border-secondary)" }}>
                          <td style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--accent-primary)" }}>
                            {p.key}
                          </td>
                          <td style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
                            {p.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p style={{ fontSize: "var(--text-xs)", color: "var(--text-tertiary)", margin: 0 }}>
                  No query parameters found in this URL.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
