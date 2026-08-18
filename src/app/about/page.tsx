import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "About ToolNest — Free Online Developer Tools & Philosophy",
  description:
    "Learn about ToolNest — a collection of free, privacy-first online developer and utility tools that run entirely in your browser with zero data collection.",
  alternates: {
    canonical: "https://toolnest.smrityku.workers.dev/about/",
  },
  openGraph: {
    title: "About ToolNest — Free Online Developer Tools & Philosophy",
    description:
      "Learn about ToolNest — a collection of free, privacy-first online developer and utility tools that run entirely in your browser.",
    url: "https://toolnest.smrityku.workers.dev/about/",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>About ToolNest</h1>

        <section className={styles.section}>
          <h2>What is ToolNest?</h2>
          <p>
            ToolNest is a dedicated, free online developer utilities platform built
            to help software engineers, web developers, technical writers, and
            students perform everyday data transformations quickly and securely.
          </p>
          <p>
            Whether you need to format and validate a JSON API payload, inspect a
            JWT token, encode text to Base64, generate cryptographically random
            UUIDs, beautify SQL queries, or calculate cryptographic SHA-256
            digests, ToolNest provides focused, reliable tools right inside your
            web browser.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Philosophy: Privacy-First &amp; Client-Side</h2>
          <p>
            Many online tools quietly upload user inputs to remote servers,
            introduce intrusive advertisements that disrupt work, or require
            unnecessary user accounts.
          </p>
          <p>
            ToolNest is built on a different model:
          </p>
          <ul>
            <li>
              <strong>100% Client-Side Processing:</strong> Every tool is powered
              by browser-native JavaScript and Web APIs (such as the Web Crypto
              API and DOMParser). Your sensitive configuration files, tokens,
              and payloads never touch a server.
            </li>
            <li>
              <strong>Zero Friction:</strong> No logins, no sign-ups, and no usage
              quotas.
            </li>
            <li>
              <strong>Fast and Responsive:</strong> Because processing happens
              locally in memory, results are calculated instantly without network
              round-trips.
            </li>
            <li>
              <strong>High-Quality Explanations:</strong> Each tool is paired with
              clear usage instructions, examples, and technical guides to help
              users understand the underlying standards.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Feedback &amp; Suggestions</h2>
          <p>
            ToolNest is actively maintained and continually expanding. If you
            discover a bug or would like to request a new developer tool, please
            reach out via our <Link href="/contact/">contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
