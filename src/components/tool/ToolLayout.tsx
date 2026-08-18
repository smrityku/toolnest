"use client";

import { ReactNode } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQ from "@/components/seo/FAQ";
import HowToUse from "@/components/seo/HowToUse";
import RelatedTools from "@/components/seo/RelatedTools";
import RelatedGuides from "@/components/seo/RelatedGuides";
import AdSlot from "@/components/ads/AdSlot";
import type { ToolDefinition } from "@/types/tool";
import styles from "./ToolLayout.module.css";

interface ToolLayoutProps {
  tool: ToolDefinition;
  children: ReactNode;
}

export default function ToolLayout({ tool, children }: ToolLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: tool.name,
        description: tool.description,
        url: `https://toolnest.smrityku.workers.dev/${tool.category}/${tool.slug}/`,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        browserRequirements: "Requires JavaScript. Runs 100% in browser.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://toolnest.smrityku.workers.dev/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: "https://toolnest.smrityku.workers.dev/tools/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: tool.categoryLabel,
            item: `https://toolnest.smrityku.workers.dev/${tool.category}/${tool.slug}/`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: tool.name,
            item: `https://toolnest.smrityku.workers.dev/${tool.category}/${tool.slug}/`,
          },
        ],
      },
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

          {tool.examples && tool.examples.length > 0 && (
            <div className={styles.infoBlock}>
              <h2 className="section-title">Examples &amp; Usage</h2>
              <div className={styles.exampleGrid}>
                {tool.examples.map((example, idx) => (
                  <div key={idx} className={styles.exampleCard}>
                    <h3 className={styles.exampleTitle}>{example.title}</h3>
                    <div className={styles.exampleIo}>
                      <div className={styles.ioBlock}>
                        <span className={styles.ioLabel}>Input</span>
                        <pre className={styles.examplePre}><code>{example.input}</code></pre>
                      </div>
                      <div className={styles.ioBlock}>
                        <span className={styles.ioLabel}>Output</span>
                        <pre className={styles.examplePre}><code>{example.output}</code></pre>
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

          {/* Privacy Guarantee Notice */}
          <div className={styles.privacyBox}>
            <div className={styles.privacyIcon}>🔒</div>
            <div className={styles.privacyText}>
              <h3>Privacy &amp; Browser-Local Processing</h3>
              <p>
                {tool.privacyNote ||
                  "Your data is processed 100% locally in your web browser. Nothing is ever transmitted to ToolNest servers or third-party networks."}
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

        {tool.relatedGuides && (
          <RelatedGuides guideSlugs={tool.relatedGuides} />
        )}
      </div>
    </article>
  );
}
