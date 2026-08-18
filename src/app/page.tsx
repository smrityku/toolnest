import Link from "next/link";
import { tools, categories } from "@/registry/tools";
import { guides } from "@/registry/guides";
import FAQ from "@/components/seo/FAQ";
import styles from "./page.module.css";

export default function HomePage() {
  const featuredTools = [
    "json-formatter",
    "json-validator",
    "jwt-decoder",
    "base64-encoder",
    "uuid-generator",
    "sql-formatter",
  ]
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter(Boolean);

  const featuredGuides = guides.slice(0, 4);

  const homeFaq = [
    {
      question: "Are ToolNest tools really 100% private?",
      answer:
        "Yes. ToolNest executes all data processing, formatting, encoding, and calculations directly in your browser using client-side JavaScript and the Web Crypto API. No data or text you paste into our tools is ever uploaded or stored on any server.",
    },
    {
      question: "Is there a limit on file size or daily usage?",
      answer:
        "No. There are no daily usage limits, paywalls, or account requirements. Because tools run locally on your device, processing capability is bounded only by your machine's browser memory.",
    },
    {
      question: "Can I use ToolNest tools offline?",
      answer:
        "Once a tool page is loaded in your browser, all processing algorithms run locally without needing an active server connection.",
    },
    {
      question: "Do I need to create an account or provide an email?",
      answer:
        "Never. ToolNest requires zero sign-up, zero logins, and zero credit card information.",
    },
  ];

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span>⚡</span> {tools.length} Free Online Tools &amp; {guides.length} Technical Guides
          </div>
          <h1 className={styles.heroTitle}>
            Free Online Developer &amp; Utility Tools
            <span className={styles.heroGradient}> That Just Work</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Fast, simple tools for formatting, encoding, validating, converting,
            generating, and working with everyday developer data. Everything runs
            100% locally in your browser.
          </p>
          <div className={styles.heroCtaGroup}>
            <Link href="/tools/" className="btn btn-primary" style={{ padding: "var(--space-3) var(--space-6)" }}>
              🛠️ Browse All Tools
            </Link>
            <Link href="/guides/" className="btn" style={{ padding: "var(--space-3) var(--space-6)" }}>
              📚 Technical Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Featured / Popular Tools */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Popular Developer Tools</h2>
            <Link href="/tools/" className={styles.viewAllLink}>
              View all {tools.length} tools &rarr;
            </Link>
          </div>

          <div className={styles.toolGrid}>
            {featuredTools.map((tool) => (
              <Link
                key={tool!.slug}
                href={`/${tool!.category}/${tool!.slug}/`}
                className={styles.toolCard}
              >
                <div className={styles.toolIcon}>{tool!.icon}</div>
                <div className={styles.toolInfo}>
                  <div className={styles.toolHeaderRow}>
                    <h3 className={styles.toolName}>{tool!.name}</h3>
                    <span className={styles.catLabel}>{tool!.categoryLabel}</span>
                  </div>
                  <p className={styles.toolDesc}>{tool!.description}</p>
                </div>
                <span className={styles.toolArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools by Category */}
      <section className={styles.toolsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Browse by Category</h2>
          </div>

          {categories.map((category) => {
            const categoryTools = tools.filter(
              (t) => t.category === category.slug
            );
            if (categoryTools.length === 0) return null;

            return (
              <div key={category.slug} className={styles.categoryBlock}>
                <div className={styles.categoryHeader}>
                  <h3 className={styles.categoryTitle}>
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    {category.label}
                  </h3>
                  <p className={styles.categoryDesc}>{category.description}</p>
                </div>

                <div className={styles.toolGrid}>
                  {categoryTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/${tool.category}/${tool.slug}/`}
                      className={styles.toolCard}
                    >
                      <div className={styles.toolIcon}>{tool.icon}</div>
                      <div className={styles.toolInfo}>
                        <h4 className={styles.toolName}>{tool.name}</h4>
                        <p className={styles.toolDesc}>{tool.description}</p>
                      </div>
                      <span className={styles.toolArrow}>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Developer Guides Section */}
      <section className={styles.guidesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Latest Technical Guides</h2>
              <p className={styles.sectionSubtitle}>
                In-depth documentation, standards breakdowns, and real-world code examples.
              </p>
            </div>
            <Link href="/guides/" className={styles.viewAllLink}>
              View all {guides.length} guides &rarr;
            </Link>
          </div>

          <div className={styles.guideGrid}>
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}/`}
                className={styles.guideCard}
              >
                <div className={styles.guideMeta}>
                  <span className={styles.guideCat}>{guide.categoryLabel}</span>
                  <span className={styles.guideRead}>⏱️ {guide.readTime}</span>
                </div>
                <h3 className={styles.guideTitle}>{guide.title}</h3>
                <p className={styles.guideDesc}>{guide.description}</p>
                <div className={styles.guideFooter}>
                  <span className={styles.guideCta}>Read article &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why ToolNest */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.featuresTitle}>Why Developers Choose ToolNest</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>100% Client-Side Privacy</h3>
              <p>
                Everything runs directly in your browser via Web APIs. Your JSON,
                secrets, tokens, and payloads never leave your computer.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Zero Latency Execution</h3>
              <p>
                No waiting on backend servers or queuing requests. Tools process
                your input instantly in memory with real-time feedback.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🆓</div>
              <h3>Always Free &amp; Open</h3>
              <p>
                No accounts, no subscriptions, and no paywalls. Every utility is
                available immediately whenever you need it.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Responsive &amp; Accessible</h3>
              <p>
                Designed for speed and keyboard navigation. Clean layouts that
                work on desktops, laptops, tablets, and phones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <FAQ items={homeFaq} />
        </div>
      </section>
    </div>
  );
}
