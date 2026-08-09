"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

export default function UuidGenerator() {
  const tool = getToolBySlug("uuid-generator")!;
  const [uuids, setUuids] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [uppercase, setUppercase] = useState(false);
  const [noDashes, setNoDashes] = useState(false);

  const generateUuids = useCallback(() => {
    const newUuids: string[] = [];
    for (let i = 0; i < quantity; i++) {
      let uuid = crypto.randomUUID();
      if (uppercase) uuid = uuid.toUpperCase();
      if (noDashes) uuid = uuid.replace(/-/g, "");
      newUuids.push(uuid);
    }
    setUuids(newUuids);
  }, [quantity, uppercase, noDashes]);

  const allText = uuids.join("\n");

  return (
    <ToolLayout tool={tool}>
      <div className={styles.singleColumn}>
        <div className={styles.sectionHeader}>
          <label className={styles.label}>Options</label>
        </div>
        <div className="btn-group" style={{ alignItems: "center", flexDirection: "row" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
            Quantity:
            <select
              className="select"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[1, 5, 10, 25, 50, 100].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--text-secondary)", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            Uppercase
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--text-secondary)", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={noDashes}
              onChange={(e) => setNoDashes(e.target.checked)}
            />
            No Dashes
          </label>
        </div>

        <div className="btn-group" style={{ flexDirection: "row" }}>
          <button className="btn btn-primary" onClick={generateUuids} id="generate-uuid-btn">
            ⚡ Generate UUID{quantity > 1 ? "s" : ""}
          </button>
          {uuids.length > 0 && <CopyButton text={allText} label="Copy All" />}
        </div>

        {uuids.length > 0 && (
          <div className={styles.outputList}>
            {uuids.map((uuid, i) => (
              <div key={i} className={styles.outputItem}>
                <span>{uuid}</span>
                <CopyButton text={uuid} label="Copy" />
              </div>
            ))}
          </div>
        )}

        {uuids.length === 0 && (
          <div className={styles.placeholder}>
            Click &quot;Generate&quot; to create UUID(s)...
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
