"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  let cleaned = hex.replace("#", "").trim();
  if (cleaned.length === 3) {
    cleaned = cleaned.split("").map((c) => c + c).join("");
  }
  if (cleaned.length !== 6) return null;
  const num = parseInt(cleaned, 16);
  if (isNaN(num)) return null;
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export default function ColorConverter() {
  const tool = getToolBySlug("color-converter")!;
  const [hex, setHex] = useState("#3b82f6");

  const rgb = hexToRgb(hex) || { r: 59, g: 130, b: 246 };
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  const hexVal = rgbToHex(rgb.r, rgb.g, rgb.b);
  const rgbVal = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const rgbaVal = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`;
  const hslVal = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  const hslaVal = `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 1)`;

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        {/* Color Input and Picker */}
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Pick or Enter Color</label>
          </div>

          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
            <input
              type="color"
              value={hexVal}
              onChange={(e) => setHex(e.target.value)}
              style={{
                width: "60px",
                height: "44px",
                padding: "2px",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                background: "transparent",
              }}
            />
            <input
              type="text"
              className="input"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              placeholder="#3b82f6"
              style={{ fontFamily: "var(--font-mono)", flex: 1 }}
            />
          </div>

          {/* Visual Swatch */}
          <div
            style={{
              height: "120px",
              background: hexVal,
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-primary)",
              marginTop: "var(--space-4)",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
            }}
          />

          <div className="btn-group" style={{ marginTop: "var(--space-4)" }}>
            <button className="btn" onClick={() => setHex("#3b82f6")}>
              🔵 Blue
            </button>
            <button className="btn" onClick={() => setHex("#10b981")}>
              🟢 Emerald
            </button>
            <button className="btn" onClick={() => setHex("#8b5cf6")}>
              🟣 Purple
            </button>
            <button className="btn" onClick={() => setHex("#ef4444")}>
              🔴 Crimson
            </button>
          </div>
        </div>

        {/* Formats Output */}
        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>CSS Color Formats</label>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {[
              { label: "HEX Code", val: hexVal },
              { label: "RGB", val: rgbVal },
              { label: "RGBA", val: rgbaVal },
              { label: "HSL", val: hslVal },
              { label: "HSLA", val: hslaVal },
            ].map((f) => (
              <div
                key={f.label}
                style={{
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-primary)",
                  borderRadius: "var(--radius-md)",
                  padding: "var(--space-3) var(--space-4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-tertiary)" }}>
                    {f.label}
                  </span>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>
                    {f.val}
                  </div>
                </div>
                <CopyButton text={f.val} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
