import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ToolNest privacy policy. Learn how we handle your data (spoiler: your data never leaves your browser).",
};

export default function PrivacyPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: August 2026</p>

        <section className={styles.section}>
          <h2>Summary</h2>
          <p>
            ToolNest is designed with privacy as a core principle. All tools run
            entirely in your browser — your data is never sent to our servers.
            We use Google Analytics for aggregate traffic analysis and Google
            AdSense for advertising. We do not collect, store, or sell personal
            data.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Data Processing</h2>
          <p>
            All ToolNest tools process data using client-side JavaScript in your
            web browser. This means:
          </p>
          <ul>
            <li>
              Your input data (text, JSON, files, etc.) is processed locally on
              your device.
            </li>
            <li>
              No input data is transmitted to our servers or any third-party
              service.
            </li>
            <li>
              We have no ability to access, read, or store any content you work
              with using our tools.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Analytics</h2>
          <p>
            We use Google Analytics 4 to understand how visitors use our site.
            This service may collect:
          </p>
          <ul>
            <li>Pages visited and time spent on each page</li>
            <li>Browser type and operating system</li>
            <li>Approximate geographic location (country/city level)</li>
            <li>Referring website</li>
          </ul>
          <p>
            Google Analytics does not collect any personally identifiable
            information through our implementation. You can opt out of Google
            Analytics by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2>Advertising</h2>
          <p>
            We use Google AdSense to display advertisements. Google may use
            cookies to serve ads based on your prior visits to our website or
            other websites. You can opt out of personalized advertising by
            visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Ads Settings
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2>Cookies</h2>
          <p>
            ToolNest uses minimal cookies:
          </p>
          <ul>
            <li>
              <strong>Theme preference</strong> — Stored in localStorage to
              remember your dark/light mode choice.
            </li>
            <li>
              <strong>Google Analytics</strong> — Uses cookies for traffic
              analysis.
            </li>
            <li>
              <strong>Google AdSense</strong> — May use cookies for advertising.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li>
              <strong>Google Analytics</strong> — Traffic analysis (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
            <li>
              <strong>Google AdSense</strong> — Advertising (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
            <li>
              <strong>Cloudflare</strong> — Hosting and CDN (
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              )
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, please{" "}
            <a href="/contact/">contact us</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
