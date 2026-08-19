import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { getCanonicalUrl, getSiteUrl } from "@/lib/config";
import styles from "../legal.module.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Disclaimer — ToolNest",
  description:
    "ToolNest website disclaimer regarding tool output verification, informational purposes, client-side processing, and limitations of liability.",
  alternates: {
    canonical: getCanonicalUrl("disclaimer/"),
  },
  openGraph: {
    title: "Disclaimer — ToolNest",
    description:
      "Website disclaimer regarding tool output verification and client-side processing on ToolNest.",
    url: getCanonicalUrl("disclaimer/"),
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Disclaimer" },
          ]}
        />

        <h1 className={styles.title}>Disclaimer</h1>
        <p className={styles.lastUpdated}>Last updated: August 2026</p>

        <section className={styles.section}>
          <h2>1. Informational &amp; Productivity Purpose</h2>
          <p>
            The utilities, converters, formatters, calculators, encoders, and technical
            guides provided on ToolNest (<a href={siteUrl}>{siteUrl}</a>) are offered for
            general developer productivity, educational, and informational purposes only.
          </p>
          <p>
            While our tools are engineered to adhere strictly to recognized industry
            specifications (such as RFC 8259 for JSON, RFC 4648 for Base64, RFC 7519 for
            JWTs, and RFC 4122 for UUIDs), ToolNest makes no representations or warranties
            of any kind regarding the suitability of generated outputs for specific legal,
            financial, or mission-critical production environments.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Verification of Critical Outputs</h2>
          <p>
            Software engineers and users are advised to independently verify critical
            outputs, formatted SQL scripts, regular expressions, cryptographic hashes, and
            encoded payloads before deploying them in live production environments,
            database migrations, or security architectures.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Security &amp; Cryptography Distinctions</h2>
          <p>
            Please note the following technical distinctions when using our utilities:
          </p>
          <ul>
            <li>
              <strong>JWT Decoding:</strong> Decoding a JSON Web Token merely parses its
              Base64URL-encoded header and payload. Decoding does <em>not</em> verify the
              cryptographic signature of the token against an asymmetric public key or HMAC
              secret.
            </li>
            <li>
              <strong>Hashing vs. Encryption:</strong> Cryptographic hashes (e.g. SHA-256,
              MD5) are irreversible one-way digest algorithms, not two-way encryption.
            </li>
            <li>
              <strong>Password Generation:</strong> While our password generator uses the
              browser&apos;s Web Crypto API (CSPRNG), overall security depends on proper
              entropy settings and secure transmission practices within your application.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Limitation of Liability</h2>
          <p>
            Under no circumstances shall ToolNest or its maintainers be liable for any
            direct, indirect, special, incidental, or consequential damages resulting from
            the use of, or reliance upon, the tools, calculators, or technical
            documentation on this website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Contact &amp; Errata</h2>
          <p>
            If you identify a bug, an RFC discrepancy, or an inaccurate code example,
            please inform us via our <Link href="/contact/">contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
