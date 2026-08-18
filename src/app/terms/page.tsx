import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Service — ToolNest",
  description:
    "ToolNest terms of service. Usage terms, intellectual property, disclaimers, and limitations of liability.",
  alternates: {
    canonical: "https://toolnest.smrityku.workers.dev/terms/",
  },
  openGraph: {
    title: "Terms of Service — ToolNest",
    description: "Usage terms and service guidelines for ToolNest utilities.",
    url: "https://toolnest.smrityku.workers.dev/terms/",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last updated: August 2026</p>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using ToolNest (
            <a href="https://toolnest.smrityku.workers.dev">
              https://toolnest.smrityku.workers.dev
            </a>
            ), you agree to comply with and be bound by these Terms of Service.
            If you do not agree with any part of these terms, please discontinue
            use of our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Description of Service</h2>
          <p>
            ToolNest provides free, browser-based online developer tools,
            formatters, encoders, decoders, generators, and educational technical
            guides. All utilities are provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Acceptable Use</h2>
          <p>
            You may use ToolNest for personal, educational, commercial, and
            software development purposes. You agree not to:
          </p>
          <ul>
            <li>
              Use our services to process intentionally harmful or illegal
              material.
            </li>
            <li>
              Attempt to disrupt, overload, or impair the website&apos;s hosting
              infrastructure.
            </li>
            <li>
              Scrape or query the platform in an automated abusive manner that
              degrades site availability for other users.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Intellectual Property &amp; Output Ownership</h2>
          <p>
            The ToolNest name, branding, layout design, and original guide
            articles are the intellectual property of ToolNest. Any output,
            formatted code, converted spreadsheets, or cryptographic hashes
            generated through our tools belong entirely to you.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Disclaimer of Warranties &amp; Limitation of Liability</h2>
          <p>
            ToolNest does not guarantee that tool outputs will be error-free or
            suitable for specific legal, financial, or production deployment
            needs. To the maximum extent permitted by applicable law, ToolNest
            shall not be liable for any direct, indirect, incidental, or
            consequential damages resulting from the use of our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Contact</h2>
          <p>
            For questions regarding these terms, please visit our{" "}
            <Link href="/contact/">contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
