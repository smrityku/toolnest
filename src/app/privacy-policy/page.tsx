import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — ToolNest",
  description:
    "ToolNest privacy policy. Learn how we handle your data (all tools process 100% locally in your browser).",
  alternates: {
    canonical: "https://toolnest.smrityku.workers.dev/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: August 2026</p>

        <section className={styles.section}>
          <h2>1. Privacy-First Philosophy</h2>
          <p>
            At ToolNest (
            <a href="https://toolnest.smrityku.workers.dev">
              https://toolnest.smrityku.workers.dev
            </a>
            ), we design our tools with user privacy as a non-negotiable core
            principle. All interactive developer utilities (such as JSON formatters,
            Base64 decoders, JWT inspectors, UUID generators, and text counters)
            execute 100% locally within your client browser using Web APIs and
            JavaScript.
          </p>
          <p>
            <strong>
              Your inputs, strings, access tokens, and JSON payloads are never
              uploaded to ToolNest servers or saved to remote databases.
            </strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>We do not collect personal information unless you voluntarily provide it:</p>
          <ul>
            <li>
              <strong>Contact Form Submissions:</strong> When you send a message
              via our contact form, we collect your name, email address, topic,
              and message content solely to respond to your inquiry.
            </li>
            <li>
              <strong>Aggregated Analytics:</strong> We may use Google Analytics 4
              to monitor aggregate website traffic trends (e.g. page visits,
              browser types, country-level geography, and device categories). GA4
              does not log your tool inputs or personal identifiers.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Cookies and Local Storage</h2>
          <p>ToolNest uses minimal storage technologies:</p>
          <ul>
            <li>
              <strong>Theme Preference (localStorage):</strong> We store your
              Dark Mode / Light Mode choice in your browser&apos;s localStorage so
              your visual preference persists across visits.
            </li>
            <li>
              <strong>Analytics &amp; Advertising Cookies:</strong> Third-party
              vendors, including Google, may use cookies to serve relevant ads
              based on prior visits to our site or other websites.
            </li>
          </ul>
          <p>
            You can manage or disable cookies via your browser settings or opt
            out of Google&apos;s personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Third-Party Services</h2>
          <p>We rely on the following reputable infrastructure providers:</p>
          <ul>
            <li>
              <strong>Cloudflare:</strong> CDN, DNS, and edge network hosting (
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cloudflare Privacy Policy
              </a>
              ).
            </li>
            <li>
              <strong>Google Analytics &amp; Google AdSense:</strong> Traffic
              measurement and advertising technologies (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
              ).
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Data Retention &amp; Security</h2>
          <p>
            Because we do not store tool input data on servers, there is no
            server-side tool data to retain or breach. Contact form inquiries are
            retained only as long as necessary to resolve your support request.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at <Link href="/contact/">toolnest contact page</Link> or email{" "}
            <code>smrityku@gmail.com</code>.
          </p>
        </section>
      </div>
    </div>
  );
}
