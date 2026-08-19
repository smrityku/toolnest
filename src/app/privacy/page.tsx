import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { getCanonicalUrl } from "@/lib/config";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — ToolNest",
  description:
    "ToolNest Privacy Policy. Learn how our browser-local architecture protects your privacy with 100% client-side data processing.",
  alternates: {
    canonical: getCanonicalUrl("privacy-policy/"),
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyRedirectPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy", href: "/privacy-policy/" },
          ]}
        />

        <h1 className={styles.title}>Privacy Policy</h1>

        <section className={styles.section}>
          <p>
            Please view our complete and official Privacy Policy at{" "}
            <Link href="/privacy-policy/" style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
              /privacy-policy/
            </Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
