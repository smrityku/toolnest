"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_SQL = `select u.id, u.username, u.email, count(o.id) as total_orders, sum(o.amount) as total_spent from users u left join orders o on u.id = o.user_id where u.is_active = true and o.created_at >= '2026-01-01' group by u.id, u.username, u.email having count(o.id) > 5 order by total_spent desc limit 50;`;

const SQL_KEYWORDS = [
  "SELECT",
  "FROM",
  "WHERE",
  "AND",
  "OR",
  "GROUP BY",
  "HAVING",
  "ORDER BY",
  "LIMIT",
  "OFFSET",
  "JOIN",
  "LEFT JOIN",
  "RIGHT JOIN",
  "INNER JOIN",
  "FULL JOIN",
  "CROSS JOIN",
  "ON",
  "AS",
  "INSERT INTO",
  "VALUES",
  "UPDATE",
  "SET",
  "DELETE FROM",
  "CREATE TABLE",
  "ALTER TABLE",
  "DROP TABLE",
  "UNION ALL",
  "UNION",
  "CASE",
  "WHEN",
  "THEN",
  "ELSE",
  "END",
  "IN",
  "NOT IN",
  "EXISTS",
  "NOT EXISTS",
  "IS NULL",
  "IS NOT NULL",
  "LIKE",
  "ILIKE",
  "BETWEEN",
  "DISTINCT",
  "COUNT",
  "SUM",
  "AVG",
  "MIN",
  "MAX",
];

export default function SqlFormatter() {
  const tool = getToolBySlug("sql-formatter")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatSql = () => {
    if (!input.trim()) {
      setOutput("");
      return;
    }

    let sql = input.trim();

    // Standardize spacing around commas and parentheses
    sql = sql.replace(/\s+/g, " ");

    // Keyword capitalization and clause line breaks
    const majorClauses = [
      "SELECT",
      "FROM",
      "WHERE",
      "GROUP BY",
      "HAVING",
      "ORDER BY",
      "LIMIT",
      "OFFSET",
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL JOIN",
      "CROSS JOIN",
      "JOIN",
      "INSERT INTO",
      "VALUES",
      "UPDATE",
      "SET",
      "DELETE FROM",
      "UNION ALL",
      "UNION",
    ];

    // Capitalize all known keywords
    SQL_KEYWORDS.forEach((kw) => {
      const regex = new RegExp(`\\b${kw}\\b`, "gi");
      sql = sql.replace(regex, kw);
    });

    // Add newline before major clauses
    majorClauses.forEach((clause) => {
      const regex = new RegExp(`\\s+(${clause})\\b`, "gi");
      sql = sql.replace(regex, `\n$1`);
    });

    // Indent sub-clauses and commas in SELECT/GROUP BY
    const lines = sql.split("\n").map((line) => line.trim());
    const formattedLines: string[] = [];

    lines.forEach((line) => {
      if (line.startsWith("SELECT ") && line.length > 30) {
        const parts = line.replace(/^SELECT\s+/i, "").split(/,(?![^(]*\))/);
        formattedLines.push("SELECT");
        parts.forEach((p, idx) => {
          formattedLines.push(`  ${p.trim()}${idx < parts.length - 1 ? "," : ""}`);
        });
      } else if (
        line.startsWith("WHERE ") ||
        line.startsWith("FROM ") ||
        line.startsWith("ORDER BY ") ||
        line.startsWith("GROUP BY ") ||
        line.startsWith("HAVING ") ||
        line.startsWith("JOIN ") ||
        line.startsWith("LEFT JOIN ") ||
        line.startsWith("RIGHT JOIN ") ||
        line.startsWith("INNER JOIN ") ||
        line.startsWith("SET ") ||
        line.startsWith("LIMIT ")
      ) {
        formattedLines.push(line);
      } else {
        formattedLines.push(line);
      }
    });

    setOutput(formattedLines.join("\n"));
  };

  const handleSample = () => {
    setInput(SAMPLE_SQL);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Input SQL Query</label>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste raw SQL query here..."
            spellCheck={false}
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={formatSql}>
              ✨ Format SQL
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
            <label className={styles.label}>Formatted SQL</label>
            {output && (
              <div className={styles.headerActions}>
                <CopyButton text={output} />
              </div>
            )}
          </div>
          {output ? (
            <pre className={styles.outputPre}>
              <code>{output}</code>
            </pre>
          ) : (
            <div className={styles.placeholder}>
              Formatted SQL query will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
