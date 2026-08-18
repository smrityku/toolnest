import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGuideBySlug, getAllGuideSlugs } from "@/registry/guides";
import { getToolBySlug } from "@/registry/tools";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQ from "@/components/seo/FAQ";
import RelatedGuides from "@/components/seo/RelatedGuides";
import styles from "./guide-detail.module.css";

export function generateStaticParams() {
  return getAllGuideSlugs();
}

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide Not Found" };

  return {
    title: `${guide.title} | ToolNest Guides`,
    description: guide.description,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: `https://toolnest.smrityku.workers.dev/guides/${guide.slug}/`,
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
    alternates: {
      canonical: `https://toolnest.smrityku.workers.dev/guides/${guide.slug}/`,
    },
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedTools = guide.relatedTools
    .map((s) => getToolBySlug(s))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        url: `https://toolnest.smrityku.workers.dev/guides/${guide.slug}/`,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://toolnest.smrityku.workers.dev/guides/${guide.slug}/`,
        },
        publisher: {
          "@type": "Organization",
          name: "ToolNest",
          url: "https://toolnest.smrityku.workers.dev",
        },
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
            name: "Guides",
            item: "https://toolnest.smrityku.workers.dev/guides/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: `https://toolnest.smrityku.workers.dev/guides/${guide.slug}/`,
          },
        ],
      },
    ],
  };

  return (
    <article className={styles.articlePage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.container}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides/" },
            { label: guide.title },
          ]}
        />

        <header className={styles.header}>
          <div className={styles.metaRow}>
            <span className={styles.badge}>{guide.categoryLabel}</span>
            <span className={styles.readTime}>⏱️ {guide.readTime}</span>
            <span className={styles.metaDate}>Updated: {guide.updatedAt}</span>
          </div>

          <h1 className={styles.title}>{guide.title}</h1>
          <p className={styles.lead}>{guide.description}</p>
        </header>

        {/* Guide Main Body */}
        <div
          className={styles.contentBody}
          dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
        />

        {/* Related Online Tools */}
        {relatedTools.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 className="section-title">Try Related Tools on ToolNest</h2>
            <div className={styles.toolsGrid}>
              {relatedTools.map((tool) => (
                <Link
                  key={tool!.slug}
                  href={`/${tool!.category}/${tool!.slug}/`}
                  className={styles.toolCard}
                >
                  <span className={styles.toolIcon}>{tool!.icon}</span>
                  <div>
                    <h3 className={styles.toolName}>{tool!.name}</h3>
                    <p className={styles.toolDesc}>{tool!.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Guide FAQs */}
        {guide.faq && guide.faq.length > 0 && (
          <div style={{ marginTop: "var(--space-10)" }}>
            <FAQ items={guide.faq} />
          </div>
        )}

        {/* Related Guides */}
        {guide.relatedGuides && guide.relatedGuides.length > 0 && (
          <RelatedGuides guideSlugs={guide.relatedGuides} />
        )}
      </div>
    </article>
  );
}
