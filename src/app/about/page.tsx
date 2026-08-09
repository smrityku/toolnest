import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "About ToolNest — Free Online Developer Tools",
  description:
    "Learn about ToolNest — a collection of free, privacy-first online developer and utility tools that run entirely in your browser.",
};

export default function AboutPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>About ToolNest</h1>

        <section className={styles.section}>
          <h2>What is ToolNest?</h2>
          <p>
            ToolNest is a collection of free online tools built for developers,
            writers, and anyone who needs quick utility tools without the hassle
            of downloading software or creating accounts.
          </p>
          <p>
            Every tool on ToolNest runs entirely in your browser. Your data
            never leaves your device — we don&apos;t process, store, or transmit
            any of the content you work with.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            We believe that essential developer and utility tools should be
            free, fast, and private. Too many online tools require sign-ups,
            collect unnecessary data, or serve excessive advertisements that
            make them difficult to use.
          </p>
          <p>
            ToolNest aims to be different — providing genuinely useful tools
            with a clean interface, zero data collection, and no barriers to
            use.
          </p>
        </section>

        <section className={styles.section}>
          <h2>How It Works</h2>
          <p>
            All ToolNest tools use client-side JavaScript to process your data
            directly in your web browser. This means:
          </p>
          <ul>
            <li>
              <strong>No server processing</strong> — Your data is never
              uploaded to any server.
            </li>
            <li>
              <strong>Instant results</strong> — No waiting for network
              requests.
            </li>
            <li>
              <strong>Works offline</strong> — Once loaded, many tools work
              without an internet connection.
            </li>
            <li>
              <strong>Maximum privacy</strong> — We literally cannot see your
              data.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p>
            Have a suggestion for a new tool? Found a bug? Want to get in touch?
            Visit our <a href="/contact/">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
