"use client";

import { useState, useEffect } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

export default function TimestampConverter() {
  const tool = getToolBySlug("timestamp-converter")!;
  const [currentEpoch, setCurrentEpoch] = useState<number>(0);
  const [inputEpoch, setInputEpoch] = useState<string>("");
  const [epochResult, setEpochResult] = useState<{ utc: string; local: string; iso: string } | null>(null);

  const [dateInput, setDateInput] = useState<string>("");
  const [dateResult, setDateResult] = useState<{ seconds: number; millis: number } | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const nowSec = Math.floor(Date.now() / 1000);
      setCurrentEpoch(nowSec);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const convertEpoch = () => {
    if (!inputEpoch.trim()) {
      setEpochResult(null);
      return;
    }
    const val = Number(inputEpoch.trim());
    if (isNaN(val)) {
      setEpochResult(null);
      return;
    }

    // Auto-detect seconds vs milliseconds (10 vs 13 digits)
    const ms = inputEpoch.trim().length >= 12 ? val : val * 1000;
    const d = new Date(ms);

    if (isNaN(d.getTime())) {
      setEpochResult(null);
      return;
    }

    setEpochResult({
      utc: d.toUTCString(),
      local: d.toString(),
      iso: d.toISOString(),
    });
  };

  const convertDate = () => {
    if (!dateInput.trim()) {
      setDateResult(null);
      return;
    }
    const d = new Date(dateInput.trim());
    if (isNaN(d.getTime())) {
      setDateResult(null);
      return;
    }

    setDateResult({
      seconds: Math.floor(d.getTime() / 1000),
      millis: d.getTime(),
    });
  };

  return (
    <ToolLayout tool={tool}>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        {/* Live Epoch Counter */}
        <div
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-primary)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-4) var(--space-6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-tertiary)" }}>
              CURRENT UNIX TIME (EPOCH)
            </span>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
                color: "var(--accent-primary)",
              }}
            >
              {currentEpoch || "..."}
            </div>
          </div>
          <CopyButton text={String(currentEpoch)} />
        </div>

        {/* Two Converter Panels */}
        <div className={styles.toolGrid}>
          {/* Epoch to Date */}
          <div className={styles.inputSection}>
            <div className={styles.sectionHeader}>
              <label className={styles.label}>Unix Timestamp &rarr; Date</label>
            </div>
            <input
              type="text"
              className="input"
              value={inputEpoch}
              onChange={(e) => setInputEpoch(e.target.value)}
              placeholder="e.g. 1786963200 (seconds or ms)"
              style={{ fontFamily: "var(--font-mono)" }}
            />
            <div className="btn-group">
              <button className="btn btn-primary" onClick={convertEpoch}>
                ⏰ Convert to Date
              </button>
              <button className="btn" onClick={() => setInputEpoch(String(currentEpoch))}>
                Use Current Epoch
              </button>
            </div>

            {epochResult && (
              <div
                style={{
                  marginTop: "var(--space-4)",
                  background: "var(--bg-secondary)",
                  padding: "var(--space-4)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                  fontSize: "var(--text-xs)",
                }}
              >
                <div>
                  <span style={{ color: "var(--text-tertiary)", fontWeight: 600 }}>UTC Time:</span>
                  <div style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
                    {epochResult.utc}
                  </div>
                </div>
                <div>
                  <span style={{ color: "var(--text-tertiary)", fontWeight: 600 }}>ISO 8601:</span>
                  <div style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
                    {epochResult.iso}
                  </div>
                </div>
                <div>
                  <span style={{ color: "var(--text-tertiary)", fontWeight: 600 }}>Local Time:</span>
                  <div style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
                    {epochResult.local}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Date to Epoch */}
          <div className={styles.outputSection}>
            <div className={styles.sectionHeader}>
              <label className={styles.label}>Human Date &rarr; Timestamp</label>
            </div>
            <input
              type="text"
              className="input"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              placeholder="e.g. 2026-08-18T10:00:00 or Aug 18, 2026"
            />
            <div className="btn-group">
              <button className="btn btn-primary" onClick={convertDate}>
                ⚡ Convert to Timestamp
              </button>
              <button className="btn" onClick={() => setDateInput(new Date().toISOString())}>
                Use Current ISO
              </button>
            </div>

            {dateResult && (
              <div
                style={{
                  marginTop: "var(--space-4)",
                  background: "var(--bg-secondary)",
                  padding: "var(--space-4)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                  fontSize: "var(--text-xs)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ color: "var(--text-tertiary)", fontWeight: 600 }}>Epoch (Seconds):</span>
                    <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent-primary)", fontWeight: 700 }}>
                      {dateResult.seconds}
                    </div>
                  </div>
                  <CopyButton text={String(dateResult.seconds)} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ color: "var(--text-tertiary)", fontWeight: 600 }}>Epoch (Milliseconds):</span>
                    <div style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>
                      {dateResult.millis}
                    </div>
                  </div>
                  <CopyButton text={String(dateResult.millis)} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
