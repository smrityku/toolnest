import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { getCanonicalUrl, getSiteUrl } from "@/lib/config";
import styles from "../legal.module.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Terms of Service — ToolNest",
  description:
    "ToolNest Terms of Service. Clear terms on acceptable use, output ownership, intellectual property, service availability, and limitations of liability.",
  alternates: {
    canonical: getCanonicalUrl("terms/"),
  },
  openGraph: {
    title: "Terms of Service — ToolNest",
    description: "Terms and conditions governing the use of ToolNest online utilities.",
    url: getCanonicalUrl("terms/"),
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Terms of Service" },
          ]}
        />

        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last updated: August 2026</p>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using ToolNest (<a href={siteUrl}>{siteUrl}</a>), you agree to
            be bound by these Terms of Service. If you disagree with any part of these
            terms, you should discontinue use of the website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Description of Utilities</h2>
          <p>
            ToolNest provides free, browser-based online developer formatters, encoders,
            decoders, generators, validators, and educational technical guides. All
            utilities and documentation are provided on an &quot;as is&quot; and &quot;as
            available&quot; basis without warranties of any kind.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Acceptable Use Policy</h2>
          <p>
            You are granted a non-exclusive license to use ToolNest for personal,
            educational, commercial, and professional software development purposes. You
            agree not to:
          </p>
          <ul>
            <li>
              Use the website to intentionally distribute malicious scripts or harmful
              payloads.
            </li>
            <li>
              Attempt to disrupt, overload, or compromise the stability of our hosting
              infrastructure or edge nodes.
            </li>
            <li>
              Engage in abusive automated scraping that impairs site performance for other
              engineers.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Output Ownership &amp; Intellectual Property</h2>
          <p>
            <strong>Your Data &amp; Output Belong to You:</strong> Any transformed text,
            formatted JSON/SQL, converted CSV, generated hashes, or cryptographic UUIDs
            produced via ToolNest remain 100% your property. ToolNest claims zero
            intellectual property rights over your inputs or generated outputs.
          </p>
          <p>
            The ToolNest name, logo, original code, UI components, and technical guide
            articles are protected by applicable intellectual property and copyright laws.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Limitation of Liability</h2>
          <p>
            While ToolNest strives to provide precise, standard-compliant implementations,
            ToolNest and its maintainers shall not be liable for any direct, indirect,
            incidental, or consequential damages resulting from the use of, or inability to
            use, the utilities or documentation provided on this site.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Inquiries</h2>
          <p>
            For questions regarding these Terms of Service, please contact us via our{" "}
            <Link href="/contact/">contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
