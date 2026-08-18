import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>⚡</span>
            <span className={styles.logoText}>ToolNest</span>
          </Link>
          <p className={styles.tagline}>
            Fast, free, privacy-first developer and utility tools. Everything
            runs locally in your browser with zero data collection and instant
            results.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Developer Tools</h4>
            <Link href="/json-tools/json-formatter/">JSON Formatter</Link>
            <Link href="/json-tools/json-validator/">JSON Validator</Link>
            <Link href="/encoding-tools/base64-encoder/">Base64 Encoder</Link>
            <Link href="/encoding-tools/jwt-decoder/">JWT Decoder</Link>
            <Link href="/generators/uuid-generator/">UUID Generator</Link>
            <Link href="/tools/" style={{ fontWeight: 600, color: "var(--accent-primary)" }}>
              Browse All Tools &rarr;
            </Link>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Guides &amp; Docs</h4>
            <Link href="/guides/what-is-json/">What Is JSON?</Link>
            <Link href="/guides/how-to-validate-json/">JSON Validation</Link>
            <Link href="/guides/what-is-base64/">What Is Base64?</Link>
            <Link href="/guides/what-is-jwt/">JWT Explained</Link>
            <Link href="/guides/uuid-v4-explained/">UUID v4 Collision Odds</Link>
            <Link href="/guides/" style={{ fontWeight: 600, color: "var(--accent-primary)" }}>
              Browse All Guides &rarr;
            </Link>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Company &amp; Legal</h4>
            <Link href="/about/">About Us</Link>
            <Link href="/contact/">Contact Support</Link>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms/">Terms of Service</Link>
            <Link href="/disclaimer/">Disclaimer</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {currentYear} ToolNest. All rights reserved.</p>
        <p className={styles.bottomNote}>
          🔒 100% Browser-Local Processing. No tool data or text is ever uploaded
          to our servers.
        </p>
      </div>
    </footer>
  );
}
