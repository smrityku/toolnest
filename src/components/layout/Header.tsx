"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as "dark" | "light" | null;
      if (saved) {
        document.documentElement.setAttribute("data-theme", saved);
        return saved;
      }
    }
    return "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>ToolNest</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/tools/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
            Tools
          </Link>
          <Link href="/guides/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
            Guides
          </Link>
          <Link href="/about/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
