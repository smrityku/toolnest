"use client";

import { ReactNode } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQ from "@/components/seo/FAQ";
import HowToUse from "@/components/seo/HowToUse";
import RelatedTools from "@/components/seo/RelatedTools";
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
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    browserRequirements: "Requires JavaScript",
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
            { label: tool.categoryLabel, href: `/${tool.category}/` },
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

        {tool.howToUse.length > 0 && (
          <HowToUse steps={tool.howToUse} toolName={tool.name} />
        )}

        {tool.faq.length > 0 && <FAQ items={tool.faq} />}

        <AdSlot position="bottom" />

        <RelatedTools
          currentSlug={tool.slug}
          relatedSlugs={tool.relatedTools}
        />
      </div>
    </article>
  );
}
