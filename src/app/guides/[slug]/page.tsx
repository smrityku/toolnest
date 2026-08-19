import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGuideBySlug, getAllGuideSlugs } from "@/registry/guides";
import { getToolBySlug } from "@/registry/tools";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQ from "@/components/seo/FAQ";
import RelatedGuides from "@/components/seo/RelatedGuides";
import { getCanonicalUrl, getGuideCanonicalUrl, SITE_CONFIG } from "@/lib/config";
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

  const canonicalUrl = getGuideCanonicalUrl(guide.slug);

  return {
    title: `${guide.title} | ToolNest Guides`,
    description: guide.description,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: canonicalUrl,
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
    twitter: {
      card: "summary",
      title: guide.title,
      description: guide.description,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const guideUrl = getGuideCanonicalUrl(guide.slug);
  const homeUrl = getCanonicalUrl("/");
  const guidesUrl = getCanonicalUrl("guides/");

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
        url: guideUrl,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": guideUrl,
        },
        author: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: homeUrl,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: homeUrl,
        },
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
            name: "Guides",
            item: guidesUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: guideUrl,
          },
        ],
      },
      ...(guide.faq && guide.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: guide.faq.map((item) => ({
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
          skipSchema={true}
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
