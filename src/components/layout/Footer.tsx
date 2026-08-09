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
            Free online developer &amp; utility tools. Everything runs in your browser — fast, private, no sign-up.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Tools</h4>
            <Link href="/json-tools/json-formatter/">JSON Formatter</Link>
            <Link href="/encoding-tools/base64-encoder/">Base64 Encoder</Link>
            <Link href="/text-tools/word-counter/">Word Counter</Link>
            <Link href="/generators/uuid-generator/">UUID Generator</Link>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkGroupTitle}>Company</h4>
            <Link href="/about/">About</Link>
            <Link href="/privacy/">Privacy Policy</Link>
            <Link href="/terms/">Terms of Service</Link>
            <Link href="/contact/">Contact</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {currentYear} ToolNest. All rights reserved.</p>
        <p className={styles.bottomNote}>
          All tools run entirely in your browser. No data is ever sent to our servers.
        </p>
      </div>
    </footer>
  );
}
