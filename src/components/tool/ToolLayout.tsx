"use client";

import { ReactNode } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQ from "@/components/seo/FAQ";
import HowToUse from "@/components/seo/HowToUse";
import RelatedTools from "@/components/seo/RelatedTools";
import RelatedGuides from "@/components/seo/RelatedGuides";
import AdSlot from "@/components/ads/AdSlot";
import { getCanonicalUrl, getToolCanonicalUrl } from "@/lib/config";
import type { ToolDefinition } from "@/types/tool";
import styles from "./ToolLayout.module.css";

interface ToolLayoutProps {
  tool: ToolDefinition;
  children: ReactNode;
}

export default function ToolLayout({ tool, children }: ToolLayoutProps) {
  const toolUrl = getToolCanonicalUrl(tool.category, tool.slug);
  const homeUrl = getCanonicalUrl("/");
  const toolsUrl = getCanonicalUrl("/tools/");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: tool.name,
        description: tool.description,
        url: toolUrl,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        browserRequirements: "Requires JavaScript. Runs 100% locally in browser.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: toolsUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: tool.name,
            item: toolUrl,
          },
        ],
      },
      ...(tool.faq && tool.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: tool.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <article className={styles.toolPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools/" },
            { label: tool.name },
          ]}
          skipSchema={true}
        />

        <header className={styles.header}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>{tool.icon}</span>
          </div>
          <div>
            <h1 className={styles.title}>{tool.name}</h1>
            <p className={styles.description}>{tool.description}</p>
          </div>
        </header>

        <section className={styles.toolArea} id="tool-area">
          {children}
        </section>

        <AdSlot position="middle" />

        {/* Informational Explanatory Content */}
        <div className={styles.contentSection}>
          {tool.whatIs && (
            <div className={styles.infoBlock}>
              <h2 className="section-title">What is {tool.name}?</h2>
              <p className={styles.paragraph}>{tool.whatIs}</p>
            </div>
          )}

          {tool.howItWorks && (
            <div className={styles.infoBlock}>
              <h2 className="section-title">How {tool.name} Works</h2>
              <p className={styles.paragraph}>{tool.howItWorks}</p>
            </div>
          )}

          {tool.features && tool.features.length > 0 && (
            <div className={styles.infoBlock}>
              <h2 className="section-title">Key Features</h2>
              <ul className={styles.featureList}>
                {tool.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tool.useCases && tool.useCases.length > 0 && (
            <div className={styles.infoBlock}>
              <h2 className="section-title">Common Use Cases</h2>
              <ul className={styles.useCasesList}>
                {tool.useCases.map((useCase, idx) => (
                  <li key={idx} className={styles.useCaseItem}>
                    <span className={styles.bulletIcon}>•</span>
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tool.examples && tool.examples.length > 0 && (
            <div className={styles.infoBlock}>
              <h2 className="section-title">Examples &amp; Sample Data</h2>
              <div className={styles.exampleGrid}>
                {tool.examples.map((example, idx) => (
                  <div key={idx} className={styles.exampleCard}>
                    <h3 className={styles.exampleTitle}>{example.title}</h3>
                    <div className={styles.exampleIo}>
                      <div className={styles.ioBlock}>
                        <span className={styles.ioLabel}>Input</span>
                        <pre className={styles.examplePre}>
                          <code>{example.input}</code>
                        </pre>
                      </div>
                      <div className={styles.ioBlock}>
                        <span className={styles.ioLabel}>Output</span>
                        <pre className={styles.examplePre}>
                          <code>{example.output}</code>
                        </pre>
                      </div>
                    </div>
                    {example.explanation && (
                      <p className={styles.exampleExp}>{example.explanation}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {tool.securityNotes && (
            <div className={`${styles.noticeBox} ${styles.warningBox}`}>
              <div className={styles.noticeIcon}>⚠️</div>
              <div className={styles.noticeText}>
                <h3>Security &amp; Technical Limitations</h3>
                <p>{tool.securityNotes}</p>
              </div>
            </div>
          )}

          {tool.limitations && !tool.securityNotes && (
            <div className={`${styles.noticeBox} ${styles.warningBox}`}>
              <div className={styles.noticeIcon}>ℹ️</div>
              <div className={styles.noticeText}>
                <h3>Technical Notes &amp; Limitations</h3>
                <p>{tool.limitations}</p>
              </div>
            </div>
          )}

          {/* Privacy Guarantee Notice */}
          <div className={`${styles.noticeBox} ${styles.privacyBox}`}>
            <div className={styles.noticeIcon}>🔒</div>
            <div className={`${styles.noticeText} ${styles.privacyText}`}>
              <h3>100% Client-Side Privacy Guarantee</h3>
              <p>
                {tool.privacyNote ||
                  "Your data is processed 100% locally in your web browser. No inputs, secrets, or file contents are ever uploaded to ToolNest servers or third-party networks."}
              </p>
            </div>
          </div>
        </div>

        {tool.howToUse && tool.howToUse.length > 0 && (
          <HowToUse steps={tool.howToUse} toolName={tool.name} />
        )}

        {tool.faq && tool.faq.length > 0 && <FAQ items={tool.faq} />}

        <AdSlot position="bottom" />

        <RelatedTools
          currentSlug={tool.slug}
          relatedSlugs={tool.relatedTools}
        />

        {tool.relatedGuides && tool.relatedGuides.length > 0 && (
          <RelatedGuides guideSlugs={tool.relatedGuides} />
        )}
      </div>
    </article>
  );
}
