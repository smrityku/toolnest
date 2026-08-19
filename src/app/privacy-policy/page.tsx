import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { getCanonicalUrl, getSiteUrl, SITE_CONFIG } from "@/lib/config";
import styles from "../legal.module.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Privacy Policy — ToolNest",
  description:
    "ToolNest Privacy Policy. Learn how our browser-local architecture protects your privacy with 100% client-side data processing and zero tool payload transmission.",
  alternates: {
    canonical: getCanonicalUrl("privacy-policy/"),
  },
  openGraph: {
    title: "Privacy Policy — ToolNest",
    description:
      "Learn how ToolNest protects your data privacy with 100% client-side browser execution.",
    url: getCanonicalUrl("privacy-policy/"),
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />

        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: August 2026</p>

        <section className={styles.section}>
          <h2>1. Client-Side Processing Architecture</h2>
          <p>
            At ToolNest (<a href={siteUrl}>{siteUrl}</a>), user privacy and data security
            are fundamental core principles. All interactive utilities provided on the
            website (including JSON formatters, Base64 encoders/decoders, JWT decoders,
            UUID generators, SQL formatters, password generators, and cryptographic hash
            generators) execute 100% locally within your web browser using standard Web
            APIs and client-side JavaScript.
          </p>
          <p>
            <strong>
              Tool inputs are processed locally in the browser for supported tools and
              are not intentionally transmitted to ToolNest application servers, stored
              in remote databases, or shared with third-party networks.
            </strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information Collection &amp; Use</h2>
          <p>
            We do not collect personal information through our utilities. We collect
            minimal information only in the following specific contexts:
          </p>
          <ul>
            <li>
              <strong>Direct Inquiries &amp; Support:</strong> If you choose to contact us
              via our contact form, we collect the name, email address, topic, and message
              you submit solely to respond to your technical inquiry or feedback.
            </li>
            <li>
              <strong>Hosting Infrastructure &amp; Security Logs:</strong> Like most web
              services, our content delivery network and hosting provider (Cloudflare)
              automatically logs basic HTTP request metadata (such as IP addresses,
              approximate geographic region, browser user-agent, and requested asset paths)
              to defend against distributed denial-of-service (DDoS) attacks, ensure site
              reliability, and deliver content efficiently. These server logs never contain
              tool input values or processed payloads.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Cookies and Local Storage</h2>
          <p>ToolNest maintains a strict minimal-storage approach:</p>
          <ul>
            <li>
              <strong>Theme Preference (localStorage):</strong> We store your Dark or Light
              theme selection in your browser&apos;s local storage so your visual preference
              is remembered across visits. No personal data is stored.
            </li>
            <li>
              <strong>Essential Security Cookies:</strong> Cloudflare edge nodes may set
              ephemeral security cookies (e.g. for bot management and DDoS protection) in
              strict accordance with their privacy standards.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Third-Party Infrastructure</h2>
          <p>ToolNest is delivered using reputable, industry-standard infrastructure:</p>
          <ul>
            <li>
              <strong>Cloudflare:</strong> Content delivery network, SSL encryption, and
              DDoS mitigation (
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
          <h2>5. Data Security Best Practices</h2>
          <p>
            Because tool data is executed strictly in volatile browser memory, there is no
            server-side storage or retention of your data. We advise users to maintain
            up-to-date operating systems, secure browsers, and trusted browser extensions
            when handling confidential or sensitive production data.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Contact Regarding Privacy</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy,
            please reach out via our <Link href="/contact/">contact page</Link> or email{" "}
            <code>{SITE_CONFIG.contactEmail}</code>.
          </p>
        </section>
      </div>
    </div>
  );
}
