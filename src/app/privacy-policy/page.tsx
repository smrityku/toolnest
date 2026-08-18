import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — ToolNest",
  description:
    "ToolNest privacy policy. Learn how we handle your data (all tools run 100% locally in your browser).",
  alternates: {
    canonical: "https://toolnest.smrityku.workers.dev/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy — ToolNest",
    description: "Learn how ToolNest protects user privacy with 100% client-side data processing.",
    url: "https://toolnest.smrityku.workers.dev/privacy-policy/",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: August 2026</p>

        <section className={styles.section}>
          <h2>1. Privacy-First Architecture</h2>
          <p>
            At ToolNest (
            <a href="https://toolnest.smrityku.workers.dev">
              https://toolnest.smrityku.workers.dev
            </a>
            ), user privacy is a foundational engineering principle. All interactive
            utilities (including JSON formatters, Base64 converters, JWT decoders,
            UUID generators, SQL formatters, and text analyzers) run 100% locally in
            your web browser using standard Web APIs and client-side JavaScript.
          </p>
          <p>
            <strong>
              Your tool inputs, files, code snippets, tokens, and payloads are never
              uploaded to ToolNest servers, stored in remote databases, or transmitted
              to third-party APIs.
            </strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information Collection &amp; Use</h2>
          <p>We do not collect personal information through our tools. We collect information only in the following scenarios:</p>
          <ul>
            <li>
              <strong>Contact Inquiries:</strong> If you choose to contact us via
              our contact form, we collect the name, email address, topic, and
              message you provide solely to respond to your support request or feedback.
            </li>
            <li>
              <strong>Aggregate Web Analytics &amp; Server Logs:</strong> Like most web
              services, our hosting infrastructure (Cloudflare) and aggregate web
              measurement tools collect standard technical metrics such as page request
              counts, referring URLs, approximate geography (country/region level),
              and browser user-agent strings for security and site reliability. No tool
              input data is captured or logged.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Cookies and Local Storage</h2>
          <p>ToolNest uses minimal storage technologies:</p>
          <ul>
            <li>
              <strong>Theme Preference (localStorage):</strong> We store your
              Dark/Light theme choice in your browser&apos;s localStorage so your
              viewing preference persists across sessions.
            </li>
            <li>
              <strong>Essential Cookies:</strong> Cloudflare and analytics services
              may set security and aggregate traffic cookies.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Third-Party Infrastructure</h2>
          <p>ToolNest is delivered using reputable infrastructure services:</p>
          <ul>
            <li>
              <strong>Cloudflare:</strong> Content delivery network, security, and
              DNS management (
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare Privacy Policy
              </a>
              ).
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            Because tool data is processed purely in client memory, there is no
            server-side storage of your data. We recommend ensuring your local device
            and browser extensions are secure when handling confidential information.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Contact Information</h2>
          <p>
            If you have questions or concerns regarding this Privacy Policy, please
            contact us via our <Link href="/contact/">contact page</Link> or email{" "}
            <code>smrityku@gmail.com</code>.
          </p>
        </section>
      </div>
    </div>
  );
}
