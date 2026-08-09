"use client";

import { useState } from "react";
import ToolLayout from "@/components/tool/ToolLayout";
import { getToolBySlug } from "@/registry/tools";
import styles from "../ToolStyles.module.css";

function countStats(text: string) {
  if (!text.trim()) {
    return {
      words: 0,
      characters: 0,
      charactersNoSpaces: 0,
      sentences: 0,
      paragraphs: 0,
      lines: 0,
      readingTime: "0 sec",
      speakingTime: "0 sec",
    };
  }

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;
  const lines = text.split("\n").length;

  const readingMinutes = words / 200;
  const speakingMinutes = words / 130;

  const formatTime = (minutes: number) => {
    if (minutes < 1) return `${Math.ceil(minutes * 60)} sec`;
    if (minutes < 60) return `${Math.round(minutes)} min`;
    const h = Math.floor(minutes / 60);
    const m = Math.round(minutes % 60);
    return `${h}h ${m}m`;
  };

  return {
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    lines,
    readingTime: formatTime(readingMinutes),
    speakingTime: formatTime(speakingMinutes),
  };
}

export default function WordCounter() {
  const tool = getToolBySlug("word-counter")!;
  const [text, setText] = useState("");

  const stats = countStats(text);

  return (
    <ToolLayout tool={tool}>
      <div className={styles.singleColumn}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.words}</div>
            <div className={styles.statLabel}>Words</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.characters}</div>
            <div className={styles.statLabel}>Characters</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.charactersNoSpaces}</div>
            <div className={styles.statLabel}>No Spaces</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.sentences}</div>
            <div className={styles.statLabel}>Sentences</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.paragraphs}</div>
            <div className={styles.statLabel}>Paragraphs</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.lines}</div>
            <div className={styles.statLabel}>Lines</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.readingTime}</div>
            <div className={styles.statLabel}>Reading Time</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>{stats.speakingTime}</div>
            <div className={styles.statLabel}>Speaking Time</div>
          </div>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.sectionHeader}>
            <label className={styles.label}>Your Text</label>
            <button className="btn btn-sm" onClick={() => setText("")}>
              🗑️ Clear
            </button>
          </div>
          <textarea
            className="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing or paste your text here to count words, characters, sentences, and more..."
            style={{ minHeight: "300px" }}
            id="word-counter-input"
          />
        </div>
      </div>
    </ToolLayout>
  );
}
