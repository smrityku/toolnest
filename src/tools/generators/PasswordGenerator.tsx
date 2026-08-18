"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generateRandomPassword(
  length: number,
  useUpper: boolean,
  useLower: boolean,
  useNumbers: boolean,
  useSymbols: boolean,
  avoidAmbiguous: boolean
): { pass: string; bits: number } {
  let charset = "";
  if (useUpper) charset += UPPER;
  if (useLower) charset += LOWER;
  if (useNumbers) charset += NUMBERS;
  if (useSymbols) charset += SYMBOLS;

  if (avoidAmbiguous) {
    charset = charset.replace(/[1lIO0o]/g, "");
  }

  if (!charset) {
    return { pass: "", bits: 0 };
  }

  const randomBuffer = new Uint32Array(length);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(randomBuffer);
  } else {
    for (let i = 0; i < length; i++) randomBuffer[i] = Math.floor(Math.random() * 1000000);
  }

  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset[randomBuffer[i] % charset.length];
  }

  const bits = Math.round(length * Math.log2(charset.length));
  return { pass: result, bits };
}

export default function PasswordGenerator() {
  const tool = getToolBySlug("password-generator")!;
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [avoidAmbiguous, setAvoidAmbiguous] = useState(false);

  const [passwordState, setPasswordState] = useState<{ pass: string; bits: number }>(() =>
    generateRandomPassword(16, true, true, true, true, false)
  );

  const updatePassword = (
    l = length,
    u = useUpper,
    lw = useLower,
    n = useNumbers,
    s = useSymbols,
    a = avoidAmbiguous
  ) => {
    const res = generateRandomPassword(l, u, lw, n, s, a);
    setPasswordState(res);
  };

  const { pass: password, bits: entropy } = passwordState;

  let strengthLabel = "Weak";
  let strengthColor = "var(--error, #ef4444)";
  if (entropy >= 80) {
    strengthLabel = "Very Strong";
    strengthColor = "var(--success, #22c55e)";
  } else if (entropy >= 60) {
    strengthLabel = "Strong";
    strengthColor = "#10b981";
  } else if (entropy >= 40) {
    strengthLabel = "Moderate";
    strengthColor = "#f59e0b";
  }

  return (
    <ToolLayout tool={tool}>
      <div style={{ maxWidth: "680px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        {/* Password Display Box */}
        <div
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-primary)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-5)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xl)",
                fontWeight: 700,
                color: "var(--text-primary)",
                wordBreak: "break-all",
              }}
            >
              {password || "Select at least one character type"}
            </span>
            {password && <CopyButton text={password} />}
          </div>

          {password && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "var(--text-xs)", color: "var(--text-tertiary)" }}>
              <span>
                Entropy: <strong>{entropy} bits</strong>
              </span>
              <span style={{ fontWeight: 700, color: strengthColor }}>
                Strength: {strengthLabel}
              </span>
            </div>
          )}
        </div>

        {/* Options Dashboard */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-primary)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-5)",
          }}
        >
          {/* Length Slider */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-2)" }}>
              <label style={{ fontSize: "var(--text-sm)", fontWeight: 600 }}>
                Password Length
              </label>
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--accent-primary)" }}>
                {length} characters
              </span>
            </div>
            <input
              type="range"
              min={8}
              max={64}
              value={length}
              onChange={(e) => {
                const val = Number(e.target.value);
                setLength(val);
                updatePassword(val, useUpper, useLower, useNumbers, useSymbols, avoidAmbiguous);
              }}
              style={{ width: "100%", accentColor: "var(--accent-primary)" }}
            />
          </div>

          {/* Character Options */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-3)",
              fontSize: "var(--text-sm)",
            }}
          >
            <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={useUpper}
                onChange={(e) => {
                  setUseUpper(e.target.checked);
                  updatePassword(length, e.target.checked, useLower, useNumbers, useSymbols, avoidAmbiguous);
                }}
              />
              Uppercase (A-Z)
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={useLower}
                onChange={(e) => {
                  setUseLower(e.target.checked);
                  updatePassword(length, useUpper, e.target.checked, useNumbers, useSymbols, avoidAmbiguous);
                }}
              />
              Lowercase (a-z)
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={(e) => {
                  setUseNumbers(e.target.checked);
                  updatePassword(length, useUpper, useLower, e.target.checked, useSymbols, avoidAmbiguous);
                }}
              />
              Numbers (0-9)
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={useSymbols}
                onChange={(e) => {
                  setUseSymbols(e.target.checked);
                  updatePassword(length, useUpper, useLower, useNumbers, e.target.checked, avoidAmbiguous);
                }}
              />
              Symbols (!@#$%)
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", cursor: "pointer", gridColumn: "span 2" }}>
              <input
                type="checkbox"
                checked={avoidAmbiguous}
                onChange={(e) => {
                  setAvoidAmbiguous(e.target.checked);
                  updatePassword(length, useUpper, useLower, useNumbers, useSymbols, e.target.checked);
                }}
              />
              Avoid ambiguous characters (l, 1, I, O, 0)
            </label>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => updatePassword()}
            style={{ alignSelf: "flex-start" }}
          >
            ⚡ Generate New Password
          </button>
        </div>
      </div>
    </ToolLayout>
  );
}
