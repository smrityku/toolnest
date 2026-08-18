"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import CopyButton from "@/components/tool/CopyButton";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

const SAMPLE_XML = `<bookstore><book category="cooking"><title lang="en">Everyday Italian</title><author>Giada De Laurentiis</author><year>2005</year><price>30.00</price></book><book category="web"><title lang="en">Learning XML</title><author>Erik T. Ray</author><year>2003</year><price>39.95</price></book></bookstore>`;

export default function XmlFormatter() {
  const tool = getToolBySlug("xml-formatter")!;
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatXml = () => {
    if (!input.trim()) {
      setError("Please paste XML content to format.");
      setOutput("");
      return;
    }

    try {
      // Basic XML syntax validation with DOMParser
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(input, "text/xml");
      const parseError = xmlDoc.getElementsByTagName("parsererror");

      if (parseError.length > 0) {
        setError(`XML Syntax Error: ${parseError[0].textContent?.slice(0, 150) || "Invalid XML format."}`);
        setOutput("");
        return;
      }

      // Format XML with clean indentation
      let formatted = "";
      let indentLevel = 0;
      const tab = "  ";

      // Regex splits xml tags from text
      const nodes = input.replace(/>\s*</g, "><").match(/(<[^>]+>|[^<]+)/g) || [];

      nodes.forEach((node) => {
        const trimmed = node.trim();
        if (!trimmed) return;

        if (trimmed.startsWith("</")) {
          // Closing tag
          indentLevel = Math.max(0, indentLevel - 1);
          formatted += `${tab.repeat(indentLevel)}${trimmed}\n`;
        } else if (trimmed.startsWith("<") && trimmed.endsWith("/>")) {
          // Self closing tag
          formatted += `${tab.repeat(indentLevel)}${trimmed}\n`;
        } else if (trimmed.startsWith("<?") || trimmed.startsWith("<!")) {
          // XML declaration or doctype
          formatted += `${trimmed}\n`;
        } else if (trimmed.startsWith("<")) {
          // Opening tag
          formatted += `${tab.repeat(indentLevel)}${trimmed}\n`;
          indentLevel++;
        } else {
          // Inner text
          formatted = formatted.trimEnd();
          formatted += `${trimmed}\n`;
        }
      });

      setOutput(formatted.trim());
      setError("");
    } catch (e) {
      setError(`Failed to format XML: ${(e as Error).message}`);
      setOutput("");
    }
  };

  const handleSample = () => {
    setInput(SAMPLE_XML);
    setError("");
    setOutput("");
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.xml";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <ToolLayout tool={tool}>
      <div className={styles.toolGrid}>
        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Input XML / SVG</label>
          </div>
          <textarea
            className="textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste XML or SVG here..."
            spellCheck={false}
          />
          <div className="btn-group">
            <button className="btn btn-primary" onClick={formatXml}>
              ✨ Format XML
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
            <label className={styles.label}>Formatted XML</label>
            {output && (
              <div className={styles.headerActions}>
                <CopyButton text={output} />
                <button className="btn btn-sm" onClick={handleDownload}>
                  💾 Download .xml
                </button>
              </div>
            )}
          </div>
          {error && <div className={styles.errorBox}>{error}</div>}
          {output && (
            <pre className={styles.outputPre}>
              <code>{output}</code>
            </pre>
          )}
          {!output && !error && (
            <div className={styles.placeholder}>
              Formatted XML document will appear here...
            </div>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
