import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Disclaimer — ToolNest",
  description:
    "ToolNest website disclaimer regarding tool accuracy, client-side processing, and limitations of liability.",
  alternates: {
    canonical: "https://toolnest.smrityku.workers.dev/disclaimer/",
  },
};

export default function DisclaimerPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Disclaimer</h1>
        <p className={styles.lastUpdated}>Last updated: August 2026</p>

        <section className={styles.section}>
          <h2>1. General Information &amp; Utility Purpose</h2>
          <p>
            The tools, converters, formatters, calculators, and technical guides
            provided on ToolNest (
            <a href="https://toolnest.smrityku.workers.dev">
              https://toolnest.smrityku.workers.dev
            </a>
            ) are offered for general informational, educational, and
            productivity purposes only.
          </p>
          <p>
            While we make every effort to ensure that our tools implement standard
            specifications (such as RFC 8259 for JSON, RFC 4648 for Base64, and
            RFC 4122 for UUIDs) correctly, ToolNest makes no warranties or
            guarantees regarding the completeness, reliability, or 100% accuracy
            of any output.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Verification of Critical Outputs</h2>
          <p>
            Users are strongly advised to independently verify and validate all
            generated output, cryptographic hashes, formatted SQL queries,
            parsed tokens, and data conversions before deploying them to
            production systems, legal agreements, financial records, or critical
            software environments.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Client-Side Processing and Data Privacy</h2>
          <p>
            ToolNest tools operate using client-side JavaScript within your web
            browser. We do not upload, transmit, or store your input data, JSON
            documents, access tokens, or text strings on our servers. However,
            users remain solely responsible for the security of their own
            devices, browser extensions, and local computing environments.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Limitation of Liability</h2>
          <p>
            In no event shall ToolNest, its maintainers, or its contributors be
            held liable for any direct, indirect, incidental, special, or
            consequential damages (including, but not limited to, loss of data,
            business interruptions, or software bugs) arising from the use or
            inability to use our website or its utilities.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. External Links</h2>
          <p>
            Our website and technical guides may contain links to external
            documentation, standards organizations (such as the IETF or W3C), or
            third-party websites. ToolNest does not endorse or assume
            responsibility for the content or practices of third-party websites.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Contact</h2>
          <p>
            If you have questions or identify any discrepancies in our tools or
            documentation, please reach out via our{" "}
            <Link href="/contact/">contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
