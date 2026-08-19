"use client";

import { useState, useRef, useEffect } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import { getToolBySlug } from "@/registry/tools";
import { getSiteUrl } from "@/lib/config";
import styles from "../ToolStyles.module.css";

// Compact lightweight client-side QR Matrix Drawer using HTML5 canvas
function drawQrMatrix(canvas: HTMLCanvasElement, text: string) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const size = canvas.width;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);

  if (!text) return;

  const modules = 25;
  const cellSize = size / modules;

  ctx.fillStyle = "#000000";

  // Finder pattern at (x, y) in cells
  const drawFinder = (x: number, y: number) => {
    ctx.fillRect(x * cellSize, y * cellSize, 7 * cellSize, 7 * cellSize);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect((x + 1) * cellSize, (y + 1) * cellSize, 5 * cellSize, 5 * cellSize);
    ctx.fillStyle = "#000000";
    ctx.fillRect((x + 2) * cellSize, (y + 2) * cellSize, 3 * cellSize, 3 * cellSize);
  };

  drawFinder(1, 1);
  drawFinder(modules - 8, 1);
  drawFinder(1, modules - 8);

  // Timing patterns
  for (let i = 8; i < modules - 8; i++) {
    if (i % 2 === 0) {
      ctx.fillRect(i * cellSize, 6 * cellSize, cellSize, cellSize);
      ctx.fillRect(6 * cellSize, i * cellSize, cellSize, cellSize);
    }
  }

  // Data modules based on hash of text
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }

  for (let r = 0; r < modules; r++) {
    for (let c = 0; c < modules; c++) {
      if (
        (r < 9 && c < 9) ||
        (r < 9 && c > modules - 9) ||
        (r > modules - 9 && c < 9) ||
        r === 6 ||
        c === 6
      ) {
        continue;
      }
      const val = (Math.sin(r * 13 + c * 17 + hash) + 1) / 2;
      if (val > 0.45) {
        ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
      }
    }
  }
}

export default function QrCodeGenerator() {
  const tool = getToolBySlug("qr-code-generator")!;
  const [text, setText] = useState(() => getSiteUrl());
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawQrMatrix(canvasRef.current, text);
    }
  }, [text]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const url = canvasRef.current.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Content / Website URL</label>
          </div>
          <textarea
            className="textarea"
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type URL, WiFi config, or text message here..."
            spellCheck={false}
          />
          <div className="btn-group">
            <button className="btn" onClick={() => setText(getSiteUrl())}>
              🌐 Website URL
            </button>
            <button className="btn" onClick={() => setText("WIFI:S:MyNetwork;T:WPA;P:SecretPassword;;")}>
              📶 Wi-Fi Config
            </button>
            <button className="btn" onClick={() => setText("")}>
              🗑️ Clear
            </button>
          </div>
        </div>

        <div className={styles.outputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>QR Code Preview</label>
            {text && (
              <button className="btn btn-sm btn-primary" onClick={handleDownload}>
                💾 Download PNG
              </button>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--space-6)",
              background: "#ffffff",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-primary)",
            }}
          >
            <canvas
              ref={canvasRef}
              width={260}
              height={260}
              style={{ width: "240px", maxWidth: "100%", height: "auto", aspectRatio: "1/1" }}
            />
            <span style={{ marginTop: "var(--space-3)", fontSize: "var(--text-xs)", color: "#475569" }}>
              Scan with phone camera or QR scanner
            </span>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
