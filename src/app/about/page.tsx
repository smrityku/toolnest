import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { getCanonicalUrl } from "@/lib/config";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "About ToolNest — Free Online Developer Tools & Browser-Local Philosophy",
  description:
    "Learn about ToolNest — an independent suite of fast, free, privacy-first developer and utility tools that execute 100% locally in your web browser with zero server data storage.",
  alternates: {
    canonical: getCanonicalUrl("about/"),
  },
  openGraph: {
    title: "About ToolNest — Free Online Developer Tools & Philosophy",
    description:
      "Learn about ToolNest — an independent suite of fast, free, privacy-first developer and utility tools that execute 100% locally in your web browser.",
    url: getCanonicalUrl("about/"),
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />

        <h1 className={styles.title}>About ToolNest</h1>

        <section className={styles.section}>
          <h2>What is ToolNest?</h2>
          <p>
            ToolNest is an independent online developer utilities platform engineered
            to help software engineers, DevOps specialists, web developers, technical
            writers, and students perform essential data transformations quickly,
            accurately, and securely.
          </p>
          <p>
            Whether you need to format and validate an intricate JSON payload, inspect
            claims in a JWT token, encode strings to Base64, generate cryptographically
            random UUIDs or passwords, beautify SQL queries, or compute cryptographic
            SHA-256 digests, ToolNest provides focused, lightning-fast utilities directly
            inside your browser.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Philosophy: Privacy-First &amp; Client-Side Execution</h2>
          <p>
            Many traditional web utilities quietly upload user inputs, code snippets,
            and authentication tokens to remote servers, log input payloads in backend
            databases, or require mandatory user accounts.
          </p>
          <p>
            ToolNest is built from the ground up on a fundamentally different engineering architecture:
          </p>
          <ul>
            <li>
              <strong>100% Client-Side Processing:</strong> Every tool executes strictly
              within your local browser sandbox via modern Web APIs (including Web Crypto,
              TextEncoder/Decoder, and DOMParser). Your proprietary payloads, credentials,
              and configuration files never touch a ToolNest server or third-party API.
            </li>
            <li>
              <strong>Zero Friction:</strong> No logins, no sign-ups, no tracking cookies,
              and no artificial paywalls or usage quotas.
            </li>
            <li>
              <strong>Zero Network Latency:</strong> Because computations run entirely in
              local CPU memory, results are calculated instantaneously with zero network
              round-trips.
            </li>
            <li>
              <strong>Technical Rigor &amp; Documentation:</strong> Every tool is paired with
              clear usage guides, syntax edge cases, RFC references, and practical developer
              documentation to explain the underlying standards.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Maintenance &amp; Feedback</h2>
          <p>
            ToolNest is continually maintained and expanded to support modern web and
            data standards. If you discover a bug, notice an edge case, or would like to
            suggest an improvement, please contact us via our{" "}
            <Link href="/contact/">contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
